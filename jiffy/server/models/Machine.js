const mongoose = require('mongoose')

const MachineSchema = new mongoose.Schema({
	mId: {
		type: String,
		required: true,
	},
	mName: {
		type: String,
		required: true
	},
	maxRunningHrs: {
		type: Number,
		required: true
	},
  	products: {
		type: String,
		required: false
	},
	mFactory: {
		type: String,
		required: true
	},
	installedDate: {
		type: Date,
        required: false
	}
})

const Machine = mongoose.model('Machine', MachineSchema)

module.exports = Machine
