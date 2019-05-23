const express = require("express");
const path = require("path");

const app = express();
const axios = require("axios");
require("dotenv").config();

app.use(express.static(path.join(`${__dirname}/build`)));

const port = process.env.PORT || 5000;
const server = app.listen(port, () => {
  process.stdout.write(
    `App listening on port ${port}!\n Press CTR C to stop the server`
  );
});
app.get("/api/skyScanner/:org/:dest/:date", async (req, res) => {
  const url = `https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsequotes/v1.0/US/USD/en-US/${
    req.params.org
  }-sky/${req.params.dest}-sky/${req.params.date}?inboundpartialdate=${
    req.params.date
  }`;
  try {
    const { data } = await axios({
      method: "GET",
      url,
      headers: {
        "X-RapidAPI-Host":
          "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com",
        "X-RapidAPI-Key": "5456615b4cmsh40eaeb350692ccep17bbe1jsn2758aaa3f720"
      }
    });
    res.send(data);
  } catch (error) {
    console.log(error);
  }
});
app.get("/api/geoLocate", async (req, res) => {
  try {
    await axios({
      method: "POST",
      url: `https://www.googleapis.com/geolocation/v1/geolocate?key=AIzaSyCtjoNwnlu5EecNRzewqL95uS9hfnUljIU`
    }).then(async (resp) => {
      try {
        await axios({
          method: "GET",
          url: `https://dark-sky.p.rapidapi.com/${resp.data.location.lat},${
            resp.data.location.lng
          }?lang=en&units=auto`,
          headers: {
            "X-RapidAPI-Key":
              "efe599f8f6msh4a33ff28e73ed1ep16d441jsn618888df975b",
            "X-RapidAPI-Host": "dark-sky.p.rapidapi.com",
            accept: "application/json"
          }
        }).then(async (responsee) => {
          try {
            await axios({
              method: "GET",
              url: `https://api.flightstats.com/flex/airports/rest/v1/json/withinRadius/${
                resp.data.location.lng
              }/${
                resp.data.location.lat
              }/50?appId=a7c23de7&appKey=2f302012c2e552475508bee87ebb20bd`
            }).then(async (finres) => {
              try {
                await axios({
                  method: "GET",
                  url:
                    "https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsequotes/v1.0/US/USD/en-US/SFO-sky/JFK-sky/2019-10-01?inboundpartialdate=2019-09-01",
                  headers: {
                    "X-RapidAPI-Host":
                      "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com",
                    "X-RapidAPI-Key":
                      "5456615b4cmsh40eaeb350692ccep17bbe1jsn2758aaa3f720"
                  }
                });
                res.send(finres.data.airports);
              } catch (error) {
                console.log(error);
              }
            });
          } catch (error) {
            console.log(error);
          }
        });
      } catch (error) {
        console.log(error);
      }
    });
  } catch (error) {
    console.log(error);
  }
});
