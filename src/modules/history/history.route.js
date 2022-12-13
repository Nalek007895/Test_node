import express from 'express'
import OrderHistoryControllers from './controllers_history/history.controllers.js'
import { createValidator } from 'express-joi-validation';
import { CreateOrderHistoryDto } from './dto_history/create-orderhistory.dio.js';
import { UppdatOrderHistoryDto } from './dto_history/update-orderhistory.dto.js';
import { DeleteOrderHistoryDto } from './dto_history/delete-orderhistory.dio.js';

const OrderHistoryRouter = express.Router()
const validator = createValidator({})

OrderHistoryRouter.get('/', OrderHistoryControllers.getOrderHistory)
OrderHistoryRouter.get('/:id', OrderHistoryControllers.getOrderHistoryById)
OrderHistoryRouter.post('/',validator.body(CreateOrderHistoryDto), OrderHistoryControllers.createOrderHistory)
OrderHistoryRouter.put('/:id',validator.body(UppdatOrderHistoryDto), OrderHistoryControllers.uppdatOrderHistory)
//OrderHistoryRouter.patch('/:id',validator.body(UppdatCustomersDto), OrderHistoryControllers.uppdatCustomers)
OrderHistoryRouter.delete('/:id',validator.body(DeleteOrderHistoryDto), OrderHistoryControllers.deleteOrderHistory)

export default OrderHistoryRouter