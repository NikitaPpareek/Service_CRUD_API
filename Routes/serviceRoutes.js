const express = require('express');

const router = express.Router();

const upload = require('../middleware/multer');

const {
    addservice,
    getservices,
    getsingleservice,
    deleteservice,
    updateservice,
    searchservice
} = require('../Controllers/ServiceController');


// ADD SERVICE
router.post(
    '/addservice',
    upload.single('image'),
    addservice
);


// GET SERVICES
router.get('/getservices', getservices);


// GET SINGLE SERVICE
router.get('/getsingleservice/:id', getsingleservice);


// DELETE SERVICE
router.delete('/deleteservice/:id', deleteservice);


// UPDATE SERVICE
router.put(
    '/updateservice/:id',
    upload.single('image'),
    updateservice
);


// SEARCH SERVICE
router.get('/searchservice', searchservice);

module.exports = router;