import mongoose from "mongoose";
import { INews } from "../interfaces/INews";
const NewsSchema = new mongoose.Schema({
    title_idx: {
        type: Number,
        required: true
    },
    title :    {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    event: {
        type: String,
        required: true
    },
    place: {
        type: String,
        required: true
    },
    info : {
        type: String,
        required: true
    }
});

export default mongoose.model<INews & mongoose.Document>("News", NewsSchema);