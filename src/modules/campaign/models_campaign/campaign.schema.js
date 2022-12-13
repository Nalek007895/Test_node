import mongoose from "../../../common/database/mongoose.db.js";

const { Schema, model } = mongoose

const CampaignSchema = new Schema ({ 
    campaign_model: {
        type: String,
        required: true
    },
    start_date_campaign: {
        type: Date,
        required: true
    },
    end_date_campaign: {
        type: Date,
        required: true
    }
},
{
    timestamps: false,
    strict: true
})

const CampaignModel = model('campaign', CampaignSchema)

export default CampaignModel