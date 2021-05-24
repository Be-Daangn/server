import mongoose from "mongoose";
import config from "../config"; 
import News from "../model/News";
import Recommend from "../model/Recommend";

const connectDB = async () => {
  try {
    await mongoose.connect(config.mongoURI, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
    });

    console.log("Mongoose Connected ...");
    News.createCollection().then(function(collection){
      console.log("Friends Collection is created!");
    });
    Recommend.createCollection().then(function(collection){
      console.log("Friends Collection is created!");
    });
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

export default connectDB;
