import express from 'express'
import ProductControllers from './controllers/produck.controllers.js';
import { createValidator } from 'express-joi-validation';
import { CreateProductDto } from './dto/create-product.dio.js';
import { UppdatProductDto} from './dto/update-product.dto.js';

const ProductRouter = express.Router()
const validator = createValidator({})

ProductRouter.get('/', ProductControllers.getProduct)
ProductRouter.post('/', validator.body(CreateProductDto), ProductControllers.createProduct)
ProductRouter.patch('/:id',validator.body(UppdatProductDto), ProductControllers.uppdatProduct)

export default ProductRouter