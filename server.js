import express from 'express';
import dotenv from 'dotenv';

// dotenv config

dotenv.config();

const PORT = process.env.PORT || 9090;

// Express app initialization

const app = express();

// suport 

app.use(express.json());
app.use(express.urlencoded({extended: false}));


// Server listenign 

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})