require('dotenv').config()

const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const app = express()

const userRoutes = require('./routes/userRoutes')
const factoryRoutes = require('./routes/factoryRoutes')

// middleware
app.use(express.json())
app.use(cors())

app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})

// routes
app.use('/api/users', userRoutes)
app.use('/api/factory', factoryRoutes)

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

