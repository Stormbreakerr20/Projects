import mongoose from "mongoose"

const MONGO_URI = 'mongodb+srv://B22115:E6LqSIswuLPfiMFV@cluster0.rqjohqw.mongodb.net/?retryWrites=true&w=majority'

export const ConnectToMongo =()=>{
    mongoose.connect(MONGO_URI,{
        dbName:"BackendLogin"
    }).then(()=> console.log("Connected")).catch(e => console.log(e));
}

export const JWT_SECRET="Luvisluv";