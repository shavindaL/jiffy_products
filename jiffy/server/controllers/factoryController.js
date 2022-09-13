const Factory = require('../models/Factory')
const mongoose = require('mongoose')

// get all Factories
const getAllFactories = async (req, res) => {
    const Factories = await Factory.find({}).sort({lastLogin: -1})

    res.status(200).json(Factories)
}

// get a single Factory
const getFactory = async (req, res) => {
    const {id} = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'Factory does not exsist'})
    }

    const Factory = await Factory.findById(id)

    if(!Factory) {
        return res.status(404).json({error: 'Factory does not exsist'})
    }

    res.status(200).json(Factory)
}

// create new Factory
const createFactory = async (req, res) => {
    const {id, name, location, NumOfMachines, NumOfVehicles, NumOfEmployees, createdDate} = req.body

    // add doc to db
    try{
        const Factory = await Factory.create({id, name, location, NumOfMachines, NumOfVehicles, NumOfEmployees, createdDate})
        res.status(200).json(Factory)
    } catch(error) {
        res.status(400).json({error: error.message})
    }
}

// delete a Factory
const deleteFactory = async (req, res) => {
    const {id} = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'Factory does not exsist'})
    }

    const Factory = await Factory.findOneAndDelete({_id: id})

    if(!Factory) {
        return res.status(404).json({error: 'Factory does not exsist'})
    }

    res.status(200).json(Factory)

} 

// update a Factory
const updateFactory = async (req, res) => {
    const {id} = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'Factory doeas not exsist'})
    }

    const Factory = await Factory.findOneAndUpdate({_id: id}, {
        ...req.body
    })

    if(!Factory) {
        return res.status(404).json({error: 'Factory doeas not exsist'})
    }

    res.status(200).json(Factory)
}

module.exports = { 
    createFactory,
    getAllFactories,
    getFactory,
    deleteFactory,
    updateFactory
}