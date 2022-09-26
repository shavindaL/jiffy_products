const Machine = require('../models/Machine')

// Create a new Machine
const createMachine = async (req, res) => {
    const {mId, maxRunningHrs, product, mFactory, installedDate} = req.body

    if (!mId || !maxRunningHrs || !product || !mFactory || !installedDate) {
        return res.status(400).json({ error: 'All fields must be filled.' })
    }

    if (await Machine.findOne({ mId })) {
        return res.status(400).json({ error: 'Machine ID already exists.' })
    }

    if (mId.length < 6) {
        return res.status(400).json({ error: 'Machine ID must include atleast 6 characters. Eg: XXX000' })
    }

    if (maxRunningHrs < 50) {
        return res.status(400).json({ error: 'Maximum running hours cannot be less than 50.' })
    }

    try {
        const machine = await Machine.create({mId, maxRunningHrs, product, mFactory, installedDate})
        res.status(200).json(machine)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}


// // Create a new Machine
// const createMachine = async (req, res) => {
//     const machine = new Machine({
//         mId: req.body.mId,
//         mName: req.body.mName,
//         maxRunningHrs: req.body.maxRunningHrs,
//         product: req.body.product,
//         mFactory: req.body.mFactory,
//         installedDate: req.body.installedDate,
//         totalProductions: req.body.totalProductions,
//         totalRunningHrs: req.body.totalRunningHrs
//     });

//     await machine.save();

//     res.send("Machine successfully added to the system.");
// }

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

// // Update a Machine
// const updateMachine = async (req, res) => {
//     const machine = await Machine.findByIdAndUpdate(
//         req.params.id, {
//             mId: req.body.mId,
//             //mName: req.body.mName,
//             maxRunningHrs: req.body.maxRunningHrs,
//             product: req.body.product,
//             mFactory: req.body.mFactory,
//             installedDate: req.body.installedDate,
//             totalProductions: req.body.totalProductions,
//             totalRunningHrs: req.body.totalRunningHrs
//         }, { new: true }
//     );
//     res.send(machine);
// }

// Update a Machine
const updateMachine = async (req, res) => {

    const { id } = req.params
    const { mId, maxRunningHrs, product, mFactory, installedDate } = req.body

    if (!mId || !maxRunningHrs || !product || !mFactory || !installedDate) {
        return res.status(400).json({ error: 'All fields must be filled.' })
    }
    
    if (mId.length < 6) {
        return res.status(400).json({ error: 'Machine ID must include atleast 6 characters. Eg: XXX000' })
    }
    
    if (maxRunningHrs < 50) {
        return res.status(400).json({ error: 'Maximum running hours cannot be less than 50.' })
    }
    
    const machine = await Machine.findByIdAndUpdate({ _id: id }, {
            mId: req.body.mId,
            //mName: req.body.mName,
            maxRunningHrs: req.body.maxRunningHrs,
            product: req.body.product,
            mFactory: req.body.mFactory,
            installedDate: req.body.installedDate,
            totalProductions: req.body.totalProductions,
            totalRunningHrs: req.body.totalRunningHrs
        })
    
    if (!machine) {
        return res.status(404).json({ error: 'Machine does not exsist' })
    }

    res.status(200).json(machine)
}

module.exports = { 
    createMachine,
    getAllMachines,
    getMachine,
    deleteMachine,
    updateMachine
}