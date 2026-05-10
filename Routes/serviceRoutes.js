const express = require('express');

const router = express.Router();

const {
    addservice,
    getservices,
    getsingleservice,
    deleteservice,
    updateservice,
    searchservice
} = require('../Controllers/ServiceController');


router.post('/addservice', addservice);

router.get('/getservices', getservices);

router.get('/getsingleservice/:id', getsingleservice);

router.delete('/deleteservice/:id', deleteservice);

router.put('/updateservice/:id', updateservice);

router.get('/searchservice', searchservice);

module.exports = router;