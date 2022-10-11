import ProductModel from "../models/product.schema.js";

const ProductService = {
    create: (payload) => {
        return new ProductModel(payload).save
    },
    getAll: (query) => {
        return ProductModel.find(query)
    }
}

export default ProductService