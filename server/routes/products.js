const { Category } = require('../models/category.js');
const { Product } = require('../models/products.js');
const express = require('express');
const cloudinary = require('cloudinary').v2;  // Assuming you're using Cloudinary SDK
const pLimit = require('p-limit');  // Import p-limit
const router = express.Router();
const multer = require('multer');

var imagesArr =[];
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "uploads");  // Save files to 'uploads' folder
    },
    filename: function (req, file, cb) {
     
        cb(null, `${Date.now()}_${file.originalname}`);
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
// router.post('/create', async (req, res) => {
//     const limit = pLimit(2);  // Set concurrency limit for uploading images

//     try {
//         if (!req.body.images || req.body.images.length === 0) {
//             return res.status(400).json({ error: "No images provided", success: false });
//         }

//         const imagesToUpload = req.body.images.map((image) => {
//             return limit(async () => {
//                 const result = await cloudinary.uploader.upload(image);
//                 return result;
//             });
//         });

//         const uploadStatus = await Promise.all(imagesToUpload);
//         const imgurl = uploadStatus.map((item) => item.secure_url);

//         if (uploadStatus.length === 0) {
//             return res.status(500).json({
//                 error: "Images cannot be uploaded",
//                 success: false
//             });
//         }

//         const category = await Category.findById(req.body.category);  
//         if (!category) {
//             return res.status(404).send("Invalid category");
//         }

//         let product = new Product({
//             name: req.body.name,
//             description: req.body.description,
//             images: imgurl,
//             brand: req.body.brand,
//             price: req.body.price,
//             oldprice: req.body.oldprice,
//             category: req.body.category,
//             countInStock: req.body.countInStock,
//             rating: req.body.rating,
//             isFeatured: req.body.isFeatured,
//         });

//         product = await product.save();

//         if (!product) {
//             return res.status(500).json({
//                 error: "Product could not be created",
//                 success: false
//             });
//         }

//         res.status(201).json(product);
//     } catch (error) {
//         res.status(500).json({
//             success: false,
//             error: error.message
//         });
//     }
// });

  // Configure your multer settings as needed

router.post('/create', upload.array('images'), async (req, res) => {
    const limit = pLimit(2);  // Set concurrency limit for uploading images

    try {
        // Check if images are uploaded
        if (!req.files || req.files.length === 0) {
            return res.status(400).json({ error: "No images provided", success: false });
        }

        const imagesToUpload = req.files.map((file) => {
            return limit(async () => {
                const result = await cloudinary.uploader.upload(file.path);  // Upload the file using Cloudinary
                return result;
            });
        });

        const uploadStatus = await Promise.all(imagesToUpload);
        const imgurl = uploadStatus.map((item) => item.secure_url);

        if (imgurl.length === 0) {
            return res.status(500).json({
                error: "Images cannot be uploaded",
                success: false
            });
        }

        const category = await Category.findById(req.body.category);  
        if (!category) {
            return res.status(404).send("Invalid category");
        }

        let product = new Product({
            name: req.body.name,
            description: req.body.description,
            images: imgurl,
            brand: req.body.brand,
            price: req.body.price,
            oldprice: req.body.oldprice,
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
router.delete('/:id', async (req, res) => {
    try {
        const deleteProduct = await Product.findByIdAndDelete(req.params.id);

        if (!deleteProduct) {
            return res.status(404).json({ message: 'Product not found', success: false });
        }

        res.status(200).json({
            success: true,
            message: 'Product deleted'
        });
    } catch (err) {
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
