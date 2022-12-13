import OrderHistoryService from "../services_history/history.service.js";
import CustomersService from "../../customers/services/customers.service.js";


const OrderHistoryControllers = {
    getOrderHistory: async (req, res) => {
        const OrderHistory = await OrderHistoryService.getAll()
        res.status(200).json({
            success: true,
            data: OrderHistory
        })
    },
    getOrderHistoryById: async (req, res) => {
        const { id } = req.params
        const OrderHistory = await OrderHistoryService.getOne(id)
        res.status(200).json({
            success: true,
            data: OrderHistory
        })
    },
    createOrderHistory: async (req, res) => {
        const { order_list, quantity_total, price_total, date_of_order, customer_id } = req.body
        const customer = await CustomersService.getOne(customer_id)
        // customer.address = undefined การลบข้อมูลออก
        const created = await OrderHistoryService.create({ order_list, quantity_total, price_total, date_of_order, customer })

        res.status(201).json({
            success: true,
            data: created
        })
    },
    uppdatOrderHistory: async (req, res) => {
        const { id } = req.params
        const { order_list, quantity_total, price_total, date_of_order, customer_id } = req.body
        const customer = await CustomersService.getOne(customer_id)
        const updated = await OrderHistoryService.updateOne(id, { order_list, quantity_total, price_total, date_of_order, customer })
        
        res.status(200).json({
            success: true,
            data: updated
        })
    },
    deleteOrderHistory: async (req, res) => {
        const { id } = req.params
        //const deleted = await OrderHistoryService.deleteOne(id, { name, price })
        const deleted = await OrderHistoryService.deleteOne(id)

        res.status(200).json({
            success: true,
            data: deleted
        })  
    }
}

export default OrderHistoryControllers