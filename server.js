import express from 'express';
import dotenv from 'dotenv';
import userRouter from './router/user.js'
import followRouter from './router/follow.js'

// dotenv config

dotenv.config();

const PORT = process.env.PORT || 9090;

// Express app initialization

const app = express();

// suport 

app.use(express.json());
app.use(express.urlencoded({extended: false}));

// router
app.use('/api/v1/user',userRouter);
app.use('/api/v1/follow',followRouter);

// Server listening

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})