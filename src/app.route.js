import express from 'express'
import ProductRouter from './modules/product/produck.route.js'

const AppRouter = express()

AppRouter.use('/product', ProductRouter)

export default AppRouter