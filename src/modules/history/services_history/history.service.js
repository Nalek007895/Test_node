import OrderHistoryModel from "../models_history/history.schema.js";

const OrderHistoryService = {
    create: (payload) => {
        return new OrderHistoryModel(payload).save()
    },
    getAll: (query) => {
        return OrderHistoryModel.find(query)
    },
    getOne: (id) => {
        return OrderHistoryModel.findOne({ _id: id })
    },
    updateOne: (id, payload) =>{
        return OrderHistoryModel.findOneAndUpdate({ _id: id } , { $set: payload } )
    },
    deleteOne: (id, payload) => {
        return OrderHistoryModel.findOneAndDelete({ _id: id })
    }

}

export default OrderHistoryService