const User = require('../models/User')
const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')

const createToken = (_id) => {
    return jwt.sign({_id}, process.env.SECRET, {expiresIn: '2d'})
}

// get all users
const getUsers = async (req, res) => {
    const users = await User.find({}).sort({ lastLogin: -1 })

    res.status(200).json(users)
}

// get a single user
const getUser = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'User does not exsist' })
    }

    const user = await User.findById(id)

    if (!user) {
        return res.status(404).json({ error: 'User does not exsist' })
    }

    res.status(200).json(user)
}

// create new user
const createUser = async (req, res) => {
    const { name, email, address, phone, password } = req.body

    // add doc to db
    try {
        const user = await User.create({ name, email, address, phone, password })
        res.status(200).json(user)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

// delete a user
const deleteUser = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'User does not exsist' })
    }

    const user = await User.findOneAndDelete({ _id: id })

    if (!user) {
        return res.status(404).json({ error: 'User does not exsist' })
    }

    res.status(200).json(user)

}

// update a user
const updateUser = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'User does not exsist' })
    }

    const user = await User.findOneAndUpdate({ _id: id }, {
        name: req.body.name,
        email: req.body.email,
        address: req.body.address,
        phone: req.body.phone
    })

    if (!user) {
        return res.status(404).json({ error: 'User does not exsist' })
    }

    res.status(200).json(user)
}

// login
const loginUser = async (req, res) => {
    const {email, password} =  req.body

    try {
        const user = await User.login(email, password)

        // create a token
        const token = createToken(user._id)
        
        res.status(200).json({email, token})
    }catch (error){
        res.status(400).json({error: error.message})
    }
}

// signup user
const signupUser = async (req, res) => {
    const {name, email, password} = req.body

    try {
        const user = await User.signup(name, email, password)

        // create a token
        const token = createToken(user._id)
        
        res.status(200).json({email, token})
    }catch (error){
        res.status(400).json({error: error.message})
    }
}

module.exports = {
    createUser,
    getUsers,
    getUser,
    deleteUser,
    updateUser,
    loginUser,
    signupUser
}