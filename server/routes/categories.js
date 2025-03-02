const { Category } = require('../models/category');
const express = require('express');
const cloudinary = require('cloudinary').v2;  // Assuming you're using cloudinary SDK
const pLimit = require('p-limit');  // Import p-limit
const router = express.Router();

// Cloudinary configuration
cloudinary.config({
    cloud_name: process.env.cloudinary_Config_Cloud_Name,
    api_key: process.env.cloudinary_Config_api_key,
    api_secret: process.env.cloudinary_Config_api_secret,
});

// GET route to fetch all categories
router.get(`/`, async (req, res) => {
    try {
        const categoryList = await Category.find();
        if (!categoryList || categoryList.length === 0) {
            return res.status(404).json({ success: false, message: 'No categories found' });
        }
        res.status(200).json(categoryList);
    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
});

// DELETE route to delete a category by ID
router.delete('/:id', async (req, res) => {
    try {
        const deletProduct = await Category.findByIdAndDelete(req.params.id);
        if (!deletProduct) {
            return res.status(404).json({ message: 'Category not found', success: false });
        }
        res.status(200).json({
            success: true,
            message: 'Category deleted'
        });
    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
});

// GET route to fetch a single category by ID
router.get('/:id', async (req, res) => {
    try {
        const category = await Category.findById(req.params.id);
        if (!category) {
            return res.status(404).json({ message: 'Category with the given ID was not found' });
        }
        res.status(200).json(category);
    } catch (err) {
        res.status(500).json({ message: 'Error fetching category', error: err.message });
    }
});

// POST route to create a new category with images
router.post('/create', async (req, res) => {
    const limit = pLimit(2);  // Set concurrency limit for uploading images

    try {
        const imagesToUpload = req.body.images.map((image) => {
            return limit(async () => {
                const result = await cloudinary.uploader.upload(image);
                return result;
            });
        });

        const uploadStatus = await Promise.all(imagesToUpload);
        const imgurl = uploadStatus.map((item) => item.secure_url);

        if (uploadStatus.length === 0) {
            return res.status(500).json({
                error: "Images cannot be uploaded",
                success: false
            });
        }

        let category = new Category({
            name: req.body.name,
            images: imgurl,
            color: req.body.color
        });

        category = await category.save();
        res.status(201).json(category);

    } catch (err) {
        res.status(500).json({
            error: err.message,
            success: false
        });
    }
});

// PUT route to update a category by ID
router.put('/:id', async (req, res) => {
    const limit = pLimit(2);  // Set concurrency limit for uploading images

    try {
        const imagesToUpload = req.body.images.map((image) => {
            return limit(async () => {
                const result = await cloudinary.uploader.upload(image);
                return result;
            });
        });

        const uploadStatus = await Promise.all(imagesToUpload);
        const imgurl = uploadStatus.map((item) => item.secure_url);

        if (uploadStatus.length === 0) {
            return res.status(500).json({
                error: "Images cannot be uploaded",
                success: false
            });
        }

        const category = await Category.findByIdAndUpdate(req.params.id, {
            name: req.body.name,
            images: imgurl,
            color: req.body.color
        }, { new: true });

        if (!category) {
            return res.status(404).json({
                message: 'Category not updated',
                success: false
            });
        }

        res.status(200).json(category);

    } catch (err) {
        res.status(500).json({
            error: err.message,
            success: false
        });
    }
});

module.exports = router;
