import express from 'express'
import UserController from './controllers/user.controllers.js'

const UserRouter = express.Router()

UserRouter.post('/', UserController.appUser)
UserRouter.get('/', UserController.getAllUsers)

export default UserRouter