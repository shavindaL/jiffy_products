const Factory = require('../models/Factory')

// Create a new Factory
const createFactory = async (req, res) => {
    const factory = new Factory({
        fId: req.body.fId,
        fName: req.body.fName,
        fLocation: req.body.fLocation,
        numOfEmployees: req.body.numOfEmployees,
        numOfMachines: req.body.numOfMachines,
        numOfVehicles: req.body.numOfVehicles,
        createdDate: req.body.createdDate
    });

    await factory.save();

    res.send("Factory successfully added to the system.");
}

// Get all Factories
const getAllFactories = async (req, res) => {
    const factory = await Factory.find();
    res.send(factory);
}

// Get a single Factory
const getFactory = async (req, res) => {
    const factory = await Factory.findById(req.params.id);
    res.send(factory);
}

// Delete a Factory
const deleteFactory = async (req, res) => {
    const factory = await Factory.findByIdAndDelete(req.params.id);
    res.send(factory);
} 

// Update a Factory
const updateFactory = async (req, res) => {
    const factory = await Factory.findByIdAndUpdate(
        req.params.id, {
            fId: req.body.fId,
            fName: req.body.fName,
            fLocation: req.body.fLocation,
            numOfEmployees: req.body.numOfEmployees,
            numOfMachines: req.body.numOfMachines,
            numOfVehicles: req.body.numOfVehicles,
            createdDate: req.body.createdDate
        }, { new: true }
    );
    res.send(factory);
}

module.exports = { 
    createFactory,
    getAllFactories,
    getFactory,
    deleteFactory,
    updateFactory
}