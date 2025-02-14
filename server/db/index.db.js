import mongoose from "mongoose";
const connectDB = async () => {
    try {
        await mongoose.connect(`mongodb+srv://abdullahpeerzada92:Ej0tHKbNMfjRWmnH@cluster0.c3v39.mongodb.net/Job-Creation`)
        console.log("Connected");
    } catch (error) {
        console.error('Db Connection error',error);
    }
}
export default connectDB;