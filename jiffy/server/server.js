require('dotenv').config()

const express = require('express')
const multer = require('multer')

const userRoutes = require('./routes/userRoutes')
const siteFeedbacks = require('./routes/SiteFeedbackRoutes')


const E_billRoutes = require('./routes/E_billRoutes')
const Payments = require('./routes/Payment')
const orderedProductRoutes = require("./routes/orderedProductRoutes")
const orderRoutes = require("./routes/orderRoutes")
const Delivary = require('./routes/DelivaryRoutes')
const incomeHistory = require("./routes/incomeHistoryRoutes.js")
const supplierOrder = require("./routes/supplierOrderRoutes")
const Cart = require('./routes/Cart.js')


const inventoryProductRoutes = require('./routes/inventoryProductRoutes')
const inventoryRawMaterialRoutes = require('./routes/inventoryRawMaterialRoutes')
//inventory related routes for product orders from the inventory
const inventoryProductOrderRoutes = require('./routes/InventoryProductOrderRoutes')


const supplierRoutes = require("./routes/supplierRoutes");
const supplierPaymentRoutes = require("./routes/supplierPaymentRoutes");

const deliveryRoutes = require("./routes/deliveryRoutes");
const feedbackRoutes = require("./routes/feedbackRoutes");


const employeeRoutes = require('./routes/employeeRoutes')
const leaveRoutes = require("./routes/leaveRoutes")


const factoryRoutes = require('./routes/factoryRoutes')
const machineRoutes = require('./routes/machineRoutes')
const machineStatsRoutes = require('./routes/machineStatsRoutes')
const rawDataRoutes = require('./routes/rawDataRoutes')

const mongoose = require('mongoose')
const cors = require('cors')
// express app
const app = express()

// middleware
app.use(express.json())
app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})
app.use(cors())

// routes
app.use('/api/users', userRoutes)
app.use('/api/orders', orderRoutes)
app.use('/api/site-feedbacks', siteFeedbacks)
app.use('/api/v3/payment', Payments)


app.use('/api/v6/orders', orderRoutes)
app.use('/api/v7/orderedProduct', orderedProductRoutes)
app.use('/api/v8/incomeHistory', incomeHistory)
app.use('/api/v9/supplierOrder', supplierOrder)
app.use('/api/v1/eBill',E_billRoutes)
app.use('/api/v3/payment',Payments)
app.use('/api/v4/Delevery',Delivary)
app.use('/api/v5/Cart',Cart)


app.use('/api/suppliers', supplierRoutes);


app.use('/api/inventoryProducts', inventoryProductRoutes)
app.use('/api/inventoryRawMaterials', inventoryRawMaterialRoutes)


app.use('/api/users/feedbacks', feedbackRoutes)



app.use('/api/employees', employeeRoutes)
app.use('/api/leaves', leaveRoutes)



app.use('/api/factory', factoryRoutes)
app.use('/api/machine', machineRoutes)
app.use('/api/machineStats', machineStatsRoutes)
app.use('/api/rawData', rawDataRoutes)

//inventory related routes
app.use('/api/inventoryProducts', inventoryProductRoutes)
app.use('/api/inventoryRawMaterials', inventoryRawMaterialRoutes)
//inventory related routes for product orders from the inventory
app.use('/api/inventoryProductOrder', inventoryProductOrderRoutes)


/***************************For image uploading ***************************************/

const fileStorageEngine = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, '../client/src/components/dashboard/inventoryManagement/uploadedImages')
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname)
  }

})

const upload = multer({storage: fileStorageEngine})

app.post('/single', upload.single("image"), (req, res) => {
  console.log(req.file)
  res.send('Single file upload success')
})
/***************************For image uploading ***************************************/

//sheahn


app.use('/api/v6/orders', orderRoutes)
app.use('/api/v7/orderedProduct', orderedProductRoutes)
app.use('/api/v8/incomeHistory', incomeHistory)
app.use('/api/v9/supplierOrder', supplierOrder)
app.use('/api/v1/eBill',E_billRoutes)
app.use('/api/v3/payment',Payments)
app.use('/api/v4/Delevery',Delivary)
app.use('/api/v5/Cart',Cart)

app.use('/api/suppliers', supplierRoutes);
app.use('/api/inventoryProducts', inventoryProductRoutes)
app.use('/api/inventoryRawMaterials', inventoryRawMaterialRoutes)
app.use('/api/supplier-payment', supplierPaymentRoutes);

app.use('/api/v9/supplierOrder', supplierOrder)
//payment recipt upload


const fileStorageRecipt = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, '../client/src/components/dashboard/transactionManagement/uploadedRecipt')
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname)
  }

})

const uploadRecipt = multer({storage: fileStorageRecipt})

app.post('/singleRecipt', uploadRecipt.single("imageRecipt"), (req, res) => {
  console.log(req.file)
  res.send('Single file upload success')
})



// connect to db
mongoose.connect(process.env.MONGO_URI)
.then(() => {
  // listen for request
  app.listen(process.env.PORT, ()=>{
    console.log('connected to the db and listening on port',process.env.PORT)
  })
})
.catch((error) => {
  console.log(error)
})

