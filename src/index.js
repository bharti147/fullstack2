// // APPROACH - 1ST

// import mongoose from "mongoose";
// import { DB_NAME } from "./constants";
// import express from "express";

// const app = express();
// // function connectDB(){

// // }
// // connectDB()

// ; (async () => {
//     try {
//         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//         app.on("error", (error) => {
//             console.log("ERROR: ", error);
//             throw error;
//         })

//         app.listen(process.env.PORT, () => {
//             console.log(`App is listening on port ${process.env.PORT}`)
//         })
//     }
//     catch (error) {
//         console.log("ERROR: ", error)
//         throw error;
//     }
// })()


import connectDB from "./db/index.js";
import dotenv from "dotenv";

dotenv.config({
    path: './env'
})

connectDB()
.then(()=>{
    app.on("error", (error)=>{
     console.log("ERROR : ", error);
     throw error;
    })

    app.listen(process.env.PORT || 8000, ()=>{
       console.log(`Server is running at port : ${process.env.PORT}`);
    })
})
.catch((error)=>{
    console.log("MongoDB connection failed !!!", error);
})