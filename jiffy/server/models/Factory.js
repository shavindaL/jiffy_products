const mongoose = require('mongoose')

const FactorySchema = new mongoose.Schema({
	fId: {
		type: String,
		required: true,
	},
	fName: {
		type: String,
		required: false
	},
 	fLocation: {
		type: String,
		required: true
	},
	numOfMachines: {
		type: Number,
		required: false
	},
	numOfVehicles: {
		type: Number,
		required: false
	},
  	numOfEmployees: {
		type: Number,
		required: false
	},
	createdDate: {
		type: Date,
		required: false,
        default: Date.now
	}
})


// FactorySchema.statics.create = async function (fId, fLocation, numOfMachines, numOfEmployees, numOfVehicles, createdDate) {

// 	// Validate fID and fLocation
// 	if (!fId || !fLocation) {
// 	  throw Error('fId and fLocation fields are empty.')
// 	}

// 	// Validate numOfEmployees
// 	if (numOfEmployees < 0){
// 	  throw Error('Number of employees cannot be less than 0.')
// 	}

// 	// Validate numOfMachines
// 	if (numOfMachines < 0){
// 		throw Error('Number of machines cannot be less than 0.')
// 	}

// 	// Validate numOfVehicles
// 	if (numOfVehicles < 0){
// 		throw Error('Number of vehicles cannot be less than 0.')
// 	}
	
// 	//	Validate createdDate
// 	if (createdDate > Date.now){
// 		throw Error('Date cannot be a future date.')
// 	}
  
// 	//fID duplication validation
// 	const exists = await this.findOne({fId})
  
// 	if(exists){
// 	  throw Error('fId cannot be duplicate.')
// 	}

// 	const factory = await this.create({fId, fName, fLocation, numOfMachines, numOfEmployees, numOfVehicles, createdDate})
  
// 	return factory
//   }


const Factory = mongoose.model('Factory', FactorySchema)

module.exports = Factory
