import express from 'express'
import AppRouter from './src/app.route.js'
import AppMiddleware from './src/app.middleware.js'
import AppConfig from './src/app.config.js'
//import products from './product.json' assert { type: "json" };
const app = express()

app.use(AppConfig)
app.use(AppMiddleware)
app.use(AppRouter)

app.get('/', (req, res) => {
    //res.send('This my first routing')
    res.status(200).json({
        success: true,
        data: {
            timestamp: new Date()
        }
    })
})

const PORT = process.env.PORT || 3032
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})