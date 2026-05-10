const express = require('express');

const service = require('../Models/ServiceModel');

const addservice = async (req,res) => {
    try {
        const {title, description, status, type} = req.body;
        const newService = new service({
            title,
            description,
            status,
            type
        });
        await newService.save();
        res.status(201).json(newService);
    } catch (error) {
        res.status(500).json({message: 'Error adding service', error});
    }
};

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
const updateservice = async (req, res) => {

    try {

        const { title, description, status, type } = req.body;

        const updatedService = await service.findByIdAndUpdate(

            req.params.id,

            {
                title,
                description,
                status,
                type
            },

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
}