import mongoose from "mongoose";


export const connectDB = async()=>{

    try {
        const cnn = await mongoose.connect(process.env.MONGO_URI);
        console.log("Server connected to database successfully :",cnn.connection.host);
    } catch (error) {
        console.log("Something went wrong while connecting database :",error);
        process.exit('1');
    }
}