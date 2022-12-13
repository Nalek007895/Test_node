import express from 'express'
import CustomersControllers from './controllers/customers.controllers.js';
import { createValidator } from 'express-joi-validation';
import { CreateCustomersDto } from './dto/create-customers.dio.js';
import { DeleteCustomersDto } from './dto/delete-customers.dio.js';
import { UppdatCustomersDto } from './dto/update-customers.dto.js';

const CustomersRouter = express.Router()
const validator = createValidator({})

CustomersRouter.get('/', CustomersControllers.getCustomers)
CustomersRouter.get('/:id', CustomersControllers.getCustomersById)
CustomersRouter.post('/',validator.body(CreateCustomersDto), CustomersControllers.createCustomers)
CustomersRouter.put('/:id',validator.body(UppdatCustomersDto), CustomersControllers.uppdatCustomers)
//CustomersRouter.patch('/:id',validator.body(UppdatCustomersDto), CustomersControllers.uppdatCustomers)
CustomersRouter.delete('/:id',validator.body(DeleteCustomersDto), CustomersControllers.deleteCustomers)

export default CustomersRouter