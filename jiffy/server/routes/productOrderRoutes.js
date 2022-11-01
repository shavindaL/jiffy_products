const express = require('express')
const{
    getAllProductOrders,

} = require('../controllers/productOrderController')

const router = express.Router()

//Get all orders
router.get('/', getAllProductOrders)

// //Post a new order
// router.post('/', createSupplierOrder)

// //Delete an order
// router.delete('/:id', deleteSupplierOrder)

// //Update a new order
// router.patch('/:id', updateSupplierOrder)


module.exports = router