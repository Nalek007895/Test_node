import CustomersModel from "../models/customers.schema.js"; 

const CustomersService = {
    create: (payload) => {
        return new CustomersModel(payload).save()
    },
    getAll: (query) => {
        return CustomersModel.find(query)
    },
    getOne: (id) => {
        return CustomersModel.findOne({ _id: id })
    },
    updateOne: (id, payload) =>{
        return CustomersModel.findOneAndUpdate({ _id: id } , { $set: payload } )
    },
    deleteOne: (id, payload) => {
        return CustomersModel.findOneAndDelete({ _id: id })
    }

}

export default CustomersService