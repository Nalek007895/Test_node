// import { date, object } from "joi";
import mongoose from "../../../common/database/mongoose.db.js";

const { Schema, model } = mongoose

const AddrssSchema = new Schema({
    house_number: {
        type: String,
        required: true
    },
    sub_district: {
        type: String,
        required: true
    },
    district: {
        type: String,
        required: true
    },
    province: {
        type: String,
        required: true
    }
},
{
    timestamps: false,
    _id: false,
    strict: true
})

const CustomersSchema = new Schema ({
    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    sex: {
        type: String,
        required: true
    },
    date_of_birth: {
        type: Date,
        required: true
    },
    phone_number: {
        type: String,
        required: true
    },
    address: {
        type: AddrssSchema,
        required: true
    },
    email: {
        type: String,
        required: true
    }
},
{
    timestamps: true,
    strict: true
})

const CustomersModel = model('customers', CustomersSchema)

export default CustomersModel