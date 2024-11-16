import mongoose from "mongoose";

const connectToDB = async () => {
  try {
    // add database connection string
    await mongoose.connect(
      "mongodb+srv://teteatharv09:a1b2c3d4e500000@cluster0.be9r08b.mongodb.net/Netflix"
    );
    console.log("Database is Connected");
  } catch (error) {
    console.log(error);
  }
};

export default connectToDB;
