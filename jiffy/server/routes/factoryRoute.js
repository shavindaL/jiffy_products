const express = require('express')
const {
    createFactory,
    getFactory,
    getAllFactories,
    updateFactory,
    deleteFactory    
} = require('../controllers/FactoryController')

const router = express.Router()

// GET a single Factory
router.get('/:id', getFactory)

// GET all Factories
router.get('/', getAllFactories)

// POST a new Factory
router.post('/', createFactory)

// UPDATE a Factory
router.patch('/:id', updateFactory)

// DELETE a Factory
router.delete('/:id', deleteFactory)

module.exports = router