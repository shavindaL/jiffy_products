const Machine = require('../models/Machine')

// Create a new Machine
const createMachine = async (req, res) => {
    const machine = new Machine({
        mId: req.body.mId,
        mName: req.body.mName,
        maxRunningHrs: req.body.maxRunningHrs,
        product: req.body.product,
        mFactory: req.body.mFactory,
        installedDate: req.body.installedDate,
        totalProductions: req.body.totalProductions,
        totalRunningHrs: req.body.totalRunningHrs
    });

    await machine.save();

    res.send("Machine successfully added to the system.");
}

// Get all Machine
const getAllMachines = async (req, res) => {
    const machine = await Machine.find();
    res.send(machine);
}

// Get a single Machine
const getMachine = async (req, res) => {
    const machine = await Machine.findById(req.params.id);
    res.send(machine);
}

// Delete a Machine
const deleteMachine = async (req, res) => {
    const machine = await Machine.findByIdAndDelete(req.params.id);
    res.send(machine);
} 

// Update a Machine
const updateMachine = async (req, res) => {
    const machine = await Machine.findByIdAndUpdate(
        req.params.id, {
            mId: req.body.mId,
            mName: req.body.mName,
            maxRunningHrs: req.body.maxRunningHrs,
            product: req.body.product,
            mFactory: req.body.mFactory,
            installedDate: req.body.installedDate,
            totalProductions: req.body.totalProductions,
            totalRunningHrs: req.body.totalRunningHrs
        }, { new: true }
    );
    res.send(machine);
}

module.exports = { 
    createMachine,
    getAllMachines,
    getMachine,
    deleteMachine,
    updateMachine
}