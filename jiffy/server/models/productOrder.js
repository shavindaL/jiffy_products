const mongoose = require('mongoose')

const productOrderSchema = mongoose.Schema({

	currentDate: {
		type: Date,
        required: true,
		default: Date.now
	},
	product: {
		type: String,
		required: true,
	},
	quantity: {
		type: Number,
		required: true
	},
	status: {
		type: String
	}

})

const productOrder = mongoose.model('productOrder', productOrderSchema)

module.exports = productOrderSchema;