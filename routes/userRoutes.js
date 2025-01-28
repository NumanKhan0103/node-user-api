const express = require('express');  
const { param, validationResult } = require('express-validator');  
const router = express.Router();  

// Import user controller   
const {  
    getUsers,  
    getUserById,  
    createUser,  
    updateUser,  
    deleteUser,  
} = require('../controllers/userController');  

// User routes  
router.route('/')  
    .get(getUsers)  
    .post(createUser);  

// router.route('/:id')  
//     .get(param('id').isMongoId().withMessage('Must be a valid MongoDB ObjectID'), getUserById)  
//     .put(param('id').isMongoId().withMessage('Must be a valid MongoDB ObjectID'), updateUser)  
//     .delete(param('id').isMongoId().withMessage('Must be a valid MongoDB ObjectID'), deleteUser);  

router.route('/:id')  
    .get(  
        param('id').isMongoId().withMessage('Must be a valid MongoDB ObjectID'),  
        (req, res, next) => {  
            const errors = validationResult(req);  
            if (!errors.isEmpty()) {  
                return res.status(400).json({ errors: errors.array() });  
            }  
            next();  
        },  
        getUserById)  
    .put(  
        param('id').isMongoId().withMessage('Must be a valid MongoDB ObjectID'),  
        (req, res, next) => {  
            const errors = validationResult(req);  
            if (!errors.isEmpty()) {  
                return res.status(400).json({ errors: errors.array() });  
            }  
            next();  
        },  
        updateUser)  
    .delete(  
        param('id').isMongoId().withMessage('Must be a valid MongoDB ObjectID'),  
        (req, res, next) => {  
            const errors = validationResult(req);  
            if (!errors.isEmpty()) {  
                return res.status(400).json({ errors: errors.array() });  
            }  
            next();  
        },  
        deleteUser); 




// Error handling middleware if needed  
router.use((err, req, res, next) => {  
    console.error(err.message);  
    res.status(500).json({ error: 'Internal Server Error' });  
});  

module.exports = router;