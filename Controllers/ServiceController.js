const express = require('express');

const service = require('../Models/ServiceModel');


// ADD SERVICE
const addservice = async (req, res) => {

    try {

        const { title, description, status, type } = req.body;

        const newService = new service({

            title,
            description,
            status,
            type,

            image: req.file
                ? req.file.path
                : null
        });

        await newService.save();

        res.status(201).json(newService);

    } catch (error) {

        res.status(500).json({
            message: 'Error adding service',
            error: error.message
        });
    }
};


// GET ALL SERVICES
const getservices = async (req, res) => {

    try {

        const services = await service.find();

        res.status(200).json(services);

    } catch (error) {

        res.status(500).json({
            message: "Error fetching services",
            error: error.message
        });

    }
};


// GET SINGLE SERVICE
const getsingleservice = async (req, res) => {

    try {

        const singleService = await service.findById(req.params.id);

        res.status(200).json(singleService);

    } catch (error) {

        res.status(500).json({
            message: "Error fetching service",
            error: error.message
        });

    }
};


// DELETE SERVICE
const deleteservice = async (req, res) => {

    try {

        await service.findByIdAndDelete(req.params.id);

        res.status(200).json({
            message: "Service Deleted Successfully"
        });

    } catch (error) {

        res.status(500).json({
            message: "Error deleting service",
            error: error.message
        });

    }
};


// UPDATE SERVICE
const updateservice = async (req, res) => {

    try {

        const { title, description, status, type } = req.body;

        const updateData = {

            title,
            description,
            status,
            type
        };

        // UPDATE IMAGE ONLY IF NEW IMAGE IS UPLOADED
        if (req.file) {

            updateData.image = req.file.path;
        }

        const updatedService = await service.findByIdAndUpdate(

            req.params.id,

            updateData,

            { new: true }

        );

        res.status(200).json(updatedService);

    } catch (error) {

        res.status(500).json({
            message: "Error updating service",
            error: error.message
        });

    }
};


// SEARCH SERVICE
const searchservice = async (req, res) => {

    try {

        const keyword = req.query.keyword;

        const services = await service.find({

            title: {
                $regex: keyword,
                $options: 'i'
            }

        });

        res.status(200).json(services);

    } catch (error) {

        res.status(500).json({
            message: "Error searching service",
            error: error.message
        });

    }
};


module.exports = {
    addservice,
    getservices,
    getsingleservice,
    deleteservice,
    updateservice,
    searchservice
};