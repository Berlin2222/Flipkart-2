import mongoose from "mongoose";

export const connection = async () => {
  const URL = "mongodb://0.0.0.0:27017/Ecommers";
  try {
    await mongoose.connect(URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log("Database connected succesfully");
  } catch (error) {
    console.log("error while connecting database", error.message);
  }
};

export default connection;
