const express = require('express')

const {
    createRawData
} = require('../controllers/rawDataController')

const router = express.Router()

// POST a new RawDataa
router.post('/', createRawData)

module.exports = router