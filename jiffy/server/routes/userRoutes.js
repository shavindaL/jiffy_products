const express = require('express')
const {
    createUser,
    getUsers,
    getUser,
    deleteUser,
    updateUser,
    loginUser,
    signupUser,
    resetPassword
} = require('../controllers/userController')

const router = express.Router()

// GET all users
router.get('/', getUsers)

// GET a single user
router.get('/:id', getUser)

// POST a new user
router.post('/', createUser)

// DELETE a user
router.delete('/:id', deleteUser)

// UPDATE a user
router.patch('/:id', updateUser)

// change password
router.patch('/reset-password/:id', resetPassword)

// login route
router.post('/login', loginUser)

// signup route
router.post('/signup', signupUser)

module.exports = router