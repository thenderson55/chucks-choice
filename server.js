const express  = require("express");
const path = require("path");
const app = express();
const axios  = require('axios')
// const Unsplash = require('unsplash-js').default;
require('dotenv').config()

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(express.static(path.join(`${__dirname}/build`)));

const port = process.env.PORT || 5000;



app.get("/api", async (req,res)=>{
  try {
    const {data}= await axios({
      method:"GET",
      // mode: "no-cors",
      url: "https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsequotes/v1.0/US/USD/en-US/NRT-sky/LHR-sky/2019-10-01?inboundpartialdate=2019-09-01",
      headers:{
        "X-RapidAPI-Host": "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com",
        "X-RapidAPI-Key": "5456615b4cmsh40eaeb350692ccep17bbe1jsn2758aaa3f720"
      }
    })
    res.send(data)
  } catch (error) {
    console.log(error)
  }
  
})

const server = app.listen(port,()=>{
  process.stdout.write(`App listening on port ${port}!\n Press CTR C to stop the server`)
});