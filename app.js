const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv/config");
const bodyParser = require('body-parser');
const cors = require('cors');
const PORT = process.env.PORT;
const postRouter = require('./routes/posts')

// middleware
app.use(cors());
app.use(bodyParser.json());


// import Router
app.use('/post', postRouter);
app.get('/',(req,res)=>{
    res.send('We Are On Home Page !!!');
});



// connect To DB
mongoose.connect(
  process.env.DB_CONNECTION,
  { useNewUrlParser: true, useUnifiedTopology: true ,useCreateIndex:true},
  () => {
    console.log(`DB is Created`);
  }
);


// lessing to Server
app.listen(PORT, "localhost", () => {
  console.log(`server is running on port ${PORT}`);
});
