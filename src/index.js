// require('dotenv').config({path: './env'})
import dotenv from 'dotenv';
import connectDB from './db/index.js';

import mongoose from 'mongoose';
import { DB_NAME } from "./constants.js";

dotenv.config({
    path: './env'
})

connectDB()

/*
import express from 'express';
const app = express();
( async () =>  {
    try{
        await mongoose.connect('${process.env.MONGODB_URI}/${DB_NAMEE}' )
        console.log('Connected to database');
        app.on("error", (error) => {
            console.log("error", error)
            throw error
        })
        app.listen(process.env.PORT, () => {
            console.log('app is listening of port $(process.env.PORT}')
        })
    }
    catch(erro){
        console.log('Error: ', erro);
        throw err
    }
})()
*/