import products from '//C:/Users/Nalek-PC/OneDrive - kmutnb.ac.th/Desktop/Node_test/src/common/mock-data/product.json' assert { type: "json" };
import ProductService from '../services/product.service.js';


const ProductControllers = {
    getProduct: async (req, res) => {
        const products = await ProductService.getAll()
        res.status(200).json({
            success: true,
            data: products
        })
    },
    createProduct: async (req, res) => {
        const { name, price} = req.body
        const created = await ProductService.create({ name, price })

        res.status(201).json({
            success: true,
            data: created
        })
    },
    uppdatProduct:(req, res) => {
        const { id } = req.params
        const { name, price } = req.body
        const productIndex = products.findIndex((product) => product.id === id)
        const result = products
        result[productIndex] = {...result[productIndex], name, price}
    
        res.status(200).json({
            success: true,
            data: result
        })
    }
}

export default ProductControllers