const express  = require("express");
const path = require("path");
const app = express();
const axios  = require('axios')

app.use(express.static(path.join(`${__dirname}/build`)));

const port = process.env.PORT || 5000;

const server = app.listen(port,()=>{
  process.stdout.write(`App listening on port ${port}!\n Press CTR C to stop the server`)
});

app.get("/api", async (req,res)=>{
  try {
    const {data}= await axios({
      method:"GET",
      url: "https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsequotes/v1.0/US/USD/en-US/SFO-sky/JFK-sky/2019-10-01?inboundpartialdate=2019-09-01",
      headers:{
        "X-RapidAPI-Host": "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com",
        "X-RapidAPI-Key": "5456615b4cmsh40eaeb350692ccep17bbe1jsn2758aaa3f720"
      }
    })
    res.send(data)
  } catch (error) {
    console.log(error)
  }
  // const myHeadersOne = new Headers();
  //   myHeadersOne.append(
  //     "X-RapidAPI-Host", "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com"
  //   );
  //   myHeadersOne.append(
  //     "X-RapidAPI-Key", "5456615b4cmsh40eaeb350692ccep17bbe1jsn2758aaa3f720"
  //   );

  //   const myInit = { method: "GET", headers: myHeadersOne };

  //   const myRequestOne = new Request(
  //     "https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsequotes/v1.0/US/USD/en-US/SFO-sky/JFK-sky/2019-10-01?inboundpartialdate=2019-09-01",
  //     myInit
  //   );

    // fetch(myRequestOne)
    //   .then(res => res.json())
    //   .then(data =>
    //     res.send(data)
    //     // this.setState({
    //     //   minPrice: data.Quotes[0].MinPrice,
    //     //   departure: data.Places[0].Name,
    //     //   arrival: data.Places[1].Name
    //     // })
    //   );
 
})
