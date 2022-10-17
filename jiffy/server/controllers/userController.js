const User = require('../models/User')
const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const validator = require('validator')
var sendEmail = require('../utils/sendEmail')

const createToken = (_id) => {
    return jwt.sign({ _id }, process.env.SECRET, { expiresIn: '2d' })
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
    var isPhoneValid = /^[0-9,.]*$/.test(phone);

    if (!name || !email || !address || !phone || !password) {
        return res.status(400).json({ error: 'All fields must be filled' , errorPosition: '1'})
    }
    if (!validator.isEmail(email)) {
        return res.status(400).json({ error: 'Email is not valid', errorPosition: '2' })
    }
    if(await User.findOne({email})){
        return res.status(400).json({ error: 'Email already in use', errorPosition: '3' })
    }
    if (phone.length != 10 || !isPhoneValid) {
        return res.status(400).json({ error: 'Phone number is not valid', errorPosition: '4' })
    }
    if (!validator.isStrongPassword(password)) {
        return res.status(400).json({ error: 'Password not strong enough. Must contains uppercase, lowercase, numbers and more than eight characters', errorPosition: '5' })
    }

    // add doc to db
    try {
        const user = await User.create({ name, email, address, phone, password })
        sendEmail(email, 'Jiffy Account Created', `Your account has been created successfully. Email: ${email} Password: ${password}`)

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
    sendEmail(user.email, 'Jiffy Account Deleted', 'Your account has been deleted successfully. If you need to use our services you need to re-create an account.')


    res.status(200).json(user)

}

// update a user
const updateUser = async (req, res) => {
    const { id } = req.params
    const { name, email, address, phone} = req.body
    var isPhoneValid = /^[0-9,.]*$/.test(phone);

    if (!name || !email || !address || !phone) {
        return res.status(400).json({ error: 'All fields must be filled' })
    }
    if (!validator.isEmail(req.body.email)) {
        return res.status(400).json({ error: 'Email is not valid' })
    }    
    if (phone.length != 10 || !isPhoneValid) {
        return res.status(400).json({ error: 'Phone number is not valid' })
    }

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'User does not exsist' })
    }

    var user = await User.findOne({email})

    if(user._id != id){
        return res.status(400).json({ error: 'Email already in use' })
    }

    user = await User.findOneAndUpdate({ _id: id }, {
        name: req.body.name,
        email: req.body.email,
        address: req.body.address,
        phone: req.body.phone
    })

    if (!user) {
        return res.status(404).json({ error: 'User does not exsist' })
    }

    sendEmail(email, 'Jiffy Account Updated', 'Your account has been updated successfully. Thanks for using our services')


    res.status(200).json(user)
}

// login
const loginUser = async (req, res) => {
    const { email, password } = req.body

    try {
        const user = await User.login(email, password)

        // create a token
        const token = createToken(user._id)
        const id = user._id

        res.status(200).json({ id, email, token })
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

// signup user
const signupUser = async (req, res) => {
    const { name, email, password, confirmPassword } = req.body

    try {
        const user = await User.signup(name, email, password, confirmPassword)
        const id = user._id
        // create a token
        const token = createToken(user._id)

        res.status(200).json({ id, email, token })
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

// reset password
const resetPassword = async (req, res) => {    
    const { id } = req.params
    const { currentPassword, newPassword, confirmPassword} = req.body

    if (!currentPassword || !newPassword || !confirmPassword) {
        return res.status(400).json({ error: 'All fields must be filled' })
    }
    if (!(newPassword===confirmPassword)){
        return res.status(400).json({ error: 'New password and confirm password mismatch' })
    }    
    if (!validator.isStrongPassword(newPassword)){
        return res.status(400).json({ error: 'Password not strong enough. Must contains uppercase, lowercase, numbers and more than eight characters' })
    }
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'User does not exsist' })
    }

    var user = await User.findOne({ _id: id })

    if(!user){
        return res.status(400).json({ error: 'User does not exsist' })
    }

    const match = await bcrypt.compare(currentPassword, user.password)

    if(!match){
        return res.status(400).json({ error: 'Current password is incorrect' })
    }

    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(newPassword, salt)

    user = await User.findOneAndUpdate({ _id: id }, {
        password: hash,
    })

    if (!user) {
        return res.status(404).json({ error: 'User does not exsist' })
    }

    res.status(200).json(user)
}

module.exports = {
    createUser,
    getUsers,
    getUser,
    deleteUser,
    updateUser,
    loginUser,
    signupUser,
    resetPassword
}