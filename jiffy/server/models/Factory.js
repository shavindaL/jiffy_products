const mongoose = require('mongoose')

const FactorySchema = new mongoose.Schema({
	id: {
		type: String,
		required: true,
	},
	name: {
		type: String,
		required: true,
	},
  location: {
		type: String,
		required: true,
	},
	NumOfMachines: {
		type: Number,
		required: true,
	},
	NumOfVehicles: {
		type: Number,
		required: true,
	},
  NumOfEmployees: {
		type: Number,
		required: true,
	},
  createdDate: {
    type: Date,
    default: Date.now,
    required: true,
  },
})

const Factory = mongoose.model('Factory', FactorySchema)

module.exports = Factory;
