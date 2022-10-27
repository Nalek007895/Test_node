import express from 'express'
import ProductControllers from './controllers/produck.controllers.js';
import { createValidator } from 'express-joi-validation';
import { CreateProductDto } from './dto/create-product.dio.js';
import { UppdatProductDto} from './dto/update-product.dto.js';
import { DeleteProductDto } from './dto/delete-product.dio.js';
//import { EditProductDto } from './dto/edit-product.dio.js';

const ProductRouter = express.Router()
const validator = createValidator({})

ProductRouter.get('/', ProductControllers.getProduct)
ProductRouter.get('/:id', ProductControllers.getProductById)
ProductRouter.post('/',validator.body(CreateProductDto), ProductControllers.createProduct)

ProductRouter.put('/:id',validator.body(UppdatProductDto), ProductControllers.uppdatProduct)
//ProductRouter.put('/',validator.body(CreateProductDto), ProductControllers.createProduct)
//ProductRouter.put('/:id',validator.body(DeleteProductDto), ProductControllers.deleteProduct)

//ProductRouter.patch('/:id',validator.body(UppdatProductDto), ProductControllers.uppdatProduct)
//ProductRouter.patch('/',validator.body(CreateProductDto), ProductControllers.createProduct)
ProductRouter.patch('/:id',validator.body(UppdatProductDto), ProductControllers.uppdatProduct)

ProductRouter.delete('/:id',validator.body(DeleteProductDto), ProductControllers.deleteProduct)
//ProductRouter.delete('/',validator.body(CreateProductDto), ProductControllers.createProduct)
//ProductRouter.delete('/:id',validator.body(UppdatProductDto), ProductControllers.uppdatProduct)

export default ProductRouter