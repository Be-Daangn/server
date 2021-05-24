import mongoose from "mongoose";
import { IRecommend } from "../interfaces/IRecommend";

const RecommendSchema = new mongoose.Schema({
    title_idx: {
        type: Number,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    review: {
        type: Number,
        required: true
    },
    customer: {
        type: Number,
        required: true
    },
    place: {
        type: String,
        required: true
    },
    bookmark: {
        type: Boolean,
        required: true
    }
});

export default mongoose.model<IRecommend & mongoose.Document>("Recommend", RecommendSchema);