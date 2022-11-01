require('dotenv').config()

const express = require('express')

const cors = require('cors')

const mongoose = require('mongoose')

// express app
const app = express()

const userRoutes = require('./routes/userRoutes')
const orderRoutes = require("./routes/orderRoutes")
const factoryRoutes = require('./routes/factoryRoutes')
const machineRoutes = require('./routes/machineRoutes')
const machineStatsRoutes = require('./routes/machineStatsRoutes')
const rawDataRoutes = require('./routes/rawDataRoutes')

// middleware
app.use(express.json())
app.use(cors())

app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})
app.use(cors())

// routes
app.use('/api/users', userRoutes)
app.use('/api/orders', orderRoutes)
app.use('/api/factory', factoryRoutes)
app.use('/api/machine', machineRoutes)
app.use('/api/machineStats', machineStatsRoutes)
app.use('/api/rawData', rawDataRoutes)

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

