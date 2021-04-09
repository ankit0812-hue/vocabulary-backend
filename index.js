const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();
const dotenv = require('dotenv');
const router = require('./routes/Router');

//Configuring environment variables
dotenv.config();

const PORT = process.env.PORT || 3000;

// Connection url for connecting to mongoDB atlas cloud DB
const CONNECTION_URL = process.env.CONNECTION_URL

// Connecting to the MongoDB Database
mongoose.connect(CONNECTION_URL,{useUnifiedTopology: true , useNewUrlParser: true},() =>{
    console.log("Successfully connected to database");
});

// Configuring the app to parse json data into  request body
app.use(express.json());

// Configuring app for cross origin resource sharing
app.use(cors());

// Configuring app to handle api requests at the endpoint
app.use('/backend',router);

// Starting the development server
app.listen(PORT,() =>{
    console.log(`Server started successfully at port ${PORT}`);
})
