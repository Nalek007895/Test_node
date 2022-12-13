import CustomersService from "../services/customers.service.js";

const CustomersControllers = {
    getCustomers: async (req, res) => {
        const Customers = await CustomersService.getAll()
        res.status(200).json({
            success: true,
            data: Customers
        })
    },
    getCustomersById: async (req, res) => {
        const { id } = req.params
        const Customers = await CustomersService.getOne(id)
        res.status(200).json({
            success: true,
            data: Customers
        })
    },
    createCustomers: async (req, res) => {
        const { first_name, last_name, sex, date_of_birth, phone_number, address, email } = req.body
        const created = await CustomersService.create({ first_name, last_name, sex, date_of_birth, phone_number, address, email })

        res.status(201).json({
            success: true,
            data: created
        })
    },
    uppdatCustomers: async (req, res) => {
        const { id } = req.params
        const { first_name, last_name, sex, date_of_birth, phone_number, address, email } = req.body
        const updated = await CustomersService.updateOne(id, { first_name, last_name, sex, date_of_birth, phone_number, address, email })
        
        res.status(200).json({
            success: true,
            data: updated
        })
    },
    deleteCustomers: async (req, res) => {
        const { id } = req.params
        //const deleted = await CustomersService.deleteOne(id, { name, price })
        const deleted = await CustomersService.deleteOne(id)

        res.status(200).json({
            success: true,
            data: deleted
        })  
    }
}

export default CustomersControllers