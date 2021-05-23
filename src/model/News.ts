import mongoose from "mongoose";

const NewsSchema = new mongoose.Schema({
    title_idx: {
        type: Number
    },
    title :    {
        type: String
    },
    image: {
        type: String
    },
    event: {
        type: String
    },
    place: {
        type: String
    },
    info : {
        type: String
    }
});

export default mongoose.model<mongoose.Document>("News", NewsSchema);