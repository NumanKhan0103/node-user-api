const express = require('express');  
const { param, validationResult } = require('express-validator');  
const router = express.Router();  


const {
    getAllPosts,
    storePost,
    getPostById,
    deletePost,
    updatePost,
} = require('../controllers/postController');



router.route('/')
    .get(getAllPosts)
    .post(storePost);



router.route('/:id')
.get(
    param('id').isMongoId().withMessage('Must be a valid mongo db object id'),
    getPostById
)
.put(
    //validation,
    param('id').isMongoId().withMessage('Must be a valid mongo db object id'),
    (req, res, next) => {
        const errors = validationResult(req);
        if(!errors.isEmpty()) return res.status(400).json({errors: errors.ar0ray()})

        next();
    },
    updatePost,
)
.delete(
    //validation,
    param('id').isMongoId().withMessage('Must be a valid mongo db object id'),
    (req, res, next) => {
        const errors = validationResult(req);
        if(!errors.isEmpty()) return res.status(400).json({errors: errors.ar0ray()})

        next();
    },
    deletePost,
);











module.exports = router;