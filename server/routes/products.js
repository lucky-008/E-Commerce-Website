const { Category } = require('../models/category.js');
const { Product } = require('../models/products.js');
const express = require('express');
const cloudinary = require('cloudinary').v2;  // Assuming you're using Cloudinary SDK
const pLimit = require('p-limit');  // Import p-limit
const router = express.Router();
const multer = require('multer');
const fs=require("fs");
const path = require('path');

var imagesArr =[];
const storage = multer.diskStorage({
    // destination: function (req, file, cb) {
    //     cb(null, "uploads");  // Save files to 'uploads' folder
    // },
    destination: function (req, file, cb) {
        const uploadsDir = path.join(__dirname, 'uploads'); // Use absolute path for the uploads folder
        if (!fs.existsSync(uploadsDir)) {
            fs.mkdirSync(uploadsDir); // Create uploads folder if it doesn't exist
        }
        cb(null, uploadsDir);
    },
    filename: function (req, file, cb) {
        const sanitizedFileName = file.originalname.replace(/\s+/g, '_');
        cb(null, `${Date.now()}_${sanitizedFileName}`);
    }
});
  const upload = multer({ storage: storage })



router.post('/upload',upload.array('images'),async(req,res)=>{
    imagesArr=[];
    const files = req.files;
    for(let i=0;i<files.length;i++){
        imagesArr.push(files[i].filename);

    }
    console.log(imagesArr);
    res.json(imagesArr);

    

})
router.get(`/`, async (req, res) => {
    try {
        const productList = await Product.find().populate("category");

        if (!productList || productList.length === 0) {
            return res.status(404).json({ success: false, message: 'No products found' });
        }

        res.status(200).json(productList);
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
});

// POST Route to create a product


router.post('/create', upload.array('images'), async (req, res) => {
    try {
        // Check if images are uploaded
        if (!req.files || req.files.length === 0) {
            return res.status(400).json({ error: "No images provided", success: false });
        }

        // Get image paths (filenames)
        const imagePaths = req.files.map(file => file.filename);

        // Find the category for the product
        const category = await Category.findById(req.body.category);
        if (!category) {
            return res.status(404).send("Invalid category");
        }

        // Create the product with image paths saved to database
        let product = new Product({
            name: req.body.name,
            description: req.body.description,
            images: imagePaths,  // Store the filenames (paths) in the database
            brand: req.body.brand,
            price: req.body.price,
            oldPrice: req.body.oldPrice,
            category: req.body.category,
            countInStock: req.body.countInStock,
            rating: req.body.rating,
            isFeatured: req.body.isFeatured,
        });

        product = await product.save();

        if (!product) {
            return res.status(500).json({
                error: "Product could not be created",
                success: false
            });
        }

        res.status(201).json(product);
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message
        });
    }
});


// GET Route to fetch a product by ID
router.get(`/:id`, async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);

        if (!product) {
            return res.status(404).json({ message: 'Product not found', success: false });
        }

        return res.status(200).json(product);
    } catch (error) {
        return res.status(500).json({ message: 'Server error', success: false });
    }
});

// DELETE Route to remove a product by ID
// router.delete('/:id', async (req, res) => {
//     try {
//         const product = await Product.findById(req.params.id);
//         const images= product.images;
//         if(images.length!==0){
//             for(image of images){
//                 fs.unlinkSync(`uploads/${image}`);
//             }
//         }
//         const deleteProduct = await Product.findByIdAndDelete(req.params.id);

//         if (!deleteProduct) {
//             return res.status(404).json({ message: 'Product not found', success: false });
//         }

//         res.status(200).json({
//             success: true,
//             message: 'Product deleted'
//         });
//     } catch (err) {
//         res.status(500).json({ success: false, error: err.message });
//     }
// });

router.delete('/:id', async (req, res) => {
    try {
        // Find the product by its ID
        const product = await Product.findById(req.params.id);
        
        // Check if product exists
        if (!product) {
            return res.status(404).json({ message: 'Product not found', success: false });
        }

        // Get the image filenames from the product
        const images = product.images;

        // Delete images from the 'uploads' folder
        if (images.length !== 0) {
            for (let image of images) {
                const imagePath = path.join(__dirname, 'uploads', image); // Get the full path to the image
                if (fs.existsSync(imagePath)) {
                    fs.unlinkSync(imagePath); // Remove the file from the local 'uploads' folder
                }
            }
        }

        // Delete the product from the database
        const deleteProduct = await Product.findByIdAndDelete(req.params.id);

        // Check if the product was deleted
        if (!deleteProduct) {
            return res.status(404).json({ message: 'Product not found', success: false });
        }

        // Respond with a success message
        res.status(200).json({
            success: true,
            message: 'Product and its images deleted successfully'
        });
    } catch (err) {
        // Handle any errors that occur during the process
        res.status(500).json({ success: false, error: err.message });
    }
});

// PUT Route to update a product by ID
router.put('/:id', async (req, res) => {
    const limit = pLimit(2);  // Set concurrency limit for uploading images

    try {
        let imgurl = [];

        if (req.body.images && req.body.images.length > 0) {
            const imagesToUpload = req.body.images.map((image) => {
                return limit(async () => {
                    const result = await cloudinary.uploader.upload(image);
                    return result;
                });
            });

            const uploadStatus = await Promise.all(imagesToUpload);
            imgurl = uploadStatus.map((item) => item.secure_url);

            if (uploadStatus.length === 0) {
                return res.status(500).json({
                    error: "Images cannot be uploaded",
                    success: false
                });
            }
        }

        const product = await Product.findByIdAndUpdate(req.params.id, {
            name: req.body.name,
            description: req.body.description,
            images: imgurl.length ? imgurl : req.body.images, // Use images only if uploaded
            brand: req.body.brand,
            price: req.body.price,
            category: req.body.category,
            countInStock: req.body.countInStock,
            rating: req.body.rating,
            numReviews: req.body.numReviews,
            isFeatured: req.body.isFeatured,
        }, { new: true });

        if (!product) {
            return res.status(404).json({
                message: 'Product not updated',
                success: false
            });
        }

        res.status(200).json(product);

    } catch (err) {
        res.status(500).json({
            error: err.message,
            success: false
        });
    }
});

module.exports = router;
