import mongoose from "../../../common/database/mongoose.db.js";

const { Schema, model } = mongoose

const OrderHistorySchema = new Schema ({ 
    order_list: {
        type: String,
        required: true
    },
    quantity_total: {
        type: Number,
        required: true
    },
    price_total: {
        type: Number,
        required: true
    },
    date_of_order: {
        type: Date,
        default: Date.now
    },
    customer: {
        type: Object,
        required: true
    }
},
{
    timestamps: false,
    strict: true
})

const OrderHistoryModel = model('history', OrderHistorySchema)

export default OrderHistoryModel