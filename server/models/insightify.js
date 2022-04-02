import mongoose from "mongoose";
const { Schema } = mongoose;

const insightifySchema = new Schema({
    hotel: {
        type: String
    },
    is_canceled: {
        type: Boolean
    },
    lead_time: {
        type: Number
    },
    arrival_date_year: {
        type: Number
    }, arrival_date_month: {
        type: String
    },
    arrival_date_week_number:{
        type: Number
    },
    arrival_date_day_of_month:{
        type: Number
    },stays_in_weekend_nights:{
        type: Number
    },
    stays_in_week_nights:{
        type: Number
    },
    adults:{
        type: Number
    }
});

const insightify = mongoose.model("insightify", insightifySchema);
export default insightify;

