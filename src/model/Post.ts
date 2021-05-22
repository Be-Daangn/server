import mongoose from "mongoose";

const PostSchema = new mongoose.Schema({
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
    },
    review: {
        type: Number
    },
    customer: { 
        type: Number
    },
    bookmark: {
        type: Boolean
    }
});

export default mongoose.model<mongoose.Document>("Post", PostSchema);