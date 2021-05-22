import mongoose from "mongoose";

const RecommendSchema = new mongoose.Schema({
    title_idx: {
        type: Number
    },
    title: {
        type: String
    },
    image: {
        type: String
    },
    review: {
        type: Number
    },
    customer: {
        type: Number
    },
    place: {
        type: String
    },
    bookmark: {
        type: Boolean
    }
});

export default mongoose.model<mongoose.Document>("Recommend", RecommendSchema);