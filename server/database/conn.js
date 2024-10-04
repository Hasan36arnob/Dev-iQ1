import mongoose from "mongoose";




export default async function connect() {
   await mongoose.connect(process.env.MONGOOSE_URL)
   console.log("db connectennd")
    
}
//erjghw8ntWB2nA3R