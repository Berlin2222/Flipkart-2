import { products } from "./constant/data.js";
import Details from "./model/Product-schema.js";

const DefaultData = async() => {
    try {
      await Details.deleteMany({})
    await Details.insertMany(products);
    console.log("data import succesfully");
  } catch (error) {
    console.log("data not come ", error.message);
  }
};

export default DefaultData;

