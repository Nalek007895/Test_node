import express from 'express'
import cors from 'cors'
import RequestInfo from './middleware/request-info.middleware.js'

const AppMiddleware = express()

AppMiddleware.use(express.urlencoded({ extended: true}))
AppMiddleware.use(express.json())
AppMiddleware.use(cors())
AppMiddleware.use(RequestInfo())


export default AppMiddleware