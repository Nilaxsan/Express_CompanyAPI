import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import route from './routes/DepartmentRoutes.js';

const app = express();

app.use(bodyParser.json());

dotenv.config();

const PORT = process.env.PORT || 5000;
const MONGOURL = process.env.MONGO_URL;

//connect with database
 mongoose.connect(MONGOURL).then(() => {
    console.log('Database connected successfully ✅');
    app.listen(PORT, () => {
        console.log(` Server is running on port ${PORT} 🚀`);
    });
    
 }).catch((error) => 
    console.log(error));

app.use('/api/department', route);
