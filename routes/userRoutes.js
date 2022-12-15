const express = require("express")
const {signin,signup,read,readByid,update,destroy} = require("../controllers/userControllers")
const {authenticateToken} = require("../middleware/auth")

const userRoute = express.Router()

userRoute.post('/user/signin', signin)
userRoute.post('/user/signup', signup)


userRoute.get('/user',authenticateToken, read)
userRoute.get('/user/:id',authenticateToken ,readByid)
userRoute.put('/user/:id',authenticateToken, update)
userRoute.delete('/user/:id',authenticateToken, destroy)



module.exports = userRoute