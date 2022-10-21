const RawData = require('../models/RawData')

// Create a new RawData
const createRawData = async (req, res) => {
    const {currentDate, fId, rawMaterial, NoOfRaws} = req.body

    if (!mId || !currentDate || !fId || !rawMaterial || !NoOfRaws) {
        return res.status(400).json({ error: 'All fields must be filled.' })
    }

    if (completedProducts < 3) {
        return res.status(400).json({ error: 'Number of Raw Material used cannot be less than 20.' })
    }

    try {
        const RawData = await RawData.create({currentDate, fId, rawMaterial, NoOfRaws})
        res.status(200).json(RawData)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

module.exports = { 
    createRawData,
}