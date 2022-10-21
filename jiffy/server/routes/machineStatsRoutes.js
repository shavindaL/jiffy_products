const express = require('express')

const {
    createMachineStats
    
} = require('../controllers/machineStatsController')

const router = express.Router()

// POST a new MachineStat
router.post('/', createMachineStats)

module.exports = router