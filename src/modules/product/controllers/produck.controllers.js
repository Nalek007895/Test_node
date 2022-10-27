import ProductService from '../services/product.service.js';


const ProductControllers = {
    getProduct: async (req, res) => {
        const products = await ProductService.getAll()
        res.status(200).json({
            success: true,
            data: products
        })
    },
    getProductById: async (req, res) => {
        const { id } = req.params
        const product = await ProductService.getOne(id)
        res.status(200).json({
            success: true,
            data: product
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
    uppdatProduct: async (req, res) => {
        const { id } = req.params
        const { name, price } = req.body
        const updated = await ProductService.updateOne(id, { name, price })
        
        res.status(200).json({
            success: true,
            data: updated
        })
    },
    deleteProduct: async (req, res) => {
        const { id } = req.params
        //const deleted = await ProductService.deleteOne(id, { name, price })
        const deleted = await ProductService.deleteOne(id)

        res.status(200).json({
            success: true,
            data: deleted
        })
        
    }
}

export default ProductControllers