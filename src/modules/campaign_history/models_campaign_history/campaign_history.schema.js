import mongoose from "../../../common/database/mongoose.db.js";

const { Schema, model } = mongoose

const CampaignHistorySchema = new Schema ({ 
    campaign_history_model: {
        type: Object,
        required: true
    },
    number_of_sales: {
        type: Number,
        required: true
    },
    profit: {
        type: Number,
        required: true
    }
},
{
    timestamps: false,
    strict: true
})

const CampaignHistoryModel = model('campaignhistory', CampaignHistorySchema)

export default CampaignHistoryModel