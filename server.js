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
app.get("/api/flights/:org/:dest/:date", async (req, res) => {
  const url = `https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsequotes/v1.0/US/USD/en-US/${
    req.params.org
  }/${req.params.dest}/${req.params.date}?inboundpartialdate=2019-10-28
  }`
  try {
    const { data } = await axios({
      method: "GET",
      url,
      headers: {
        "X-RapidAPI-Host":
"skyscanner-skyscanner-flight-search-v1.p.rapidapi.com",
        "X-RapidAPI-Key":process.env.REACT_APP_API_RAPID
      }
    });
    res.send(data);
  } catch (error) {
    console.log(error);
    res.end();
  }
});

app.get("/api/location", async (req, res) => {
  try {
    const { data } = await axios({
      method: "POST",
      url: `https://www.googleapis.com/geolocation/v1/geolocate?key=${process.env.REACT_APP_API_GEOLOCATE}`
    });
    res.send(data);
  } catch (error) {
    console.log(error);
    res.end();
  }
});

app.get("/api/weather/:lat/:lng", async (req, res) => {
  try {
    const { data } = await axios({
      method: "GET",
      url: `https://dark-sky.p.rapidapi.com/${req.params.lat},${
        req.params.lng
      }?lang=en&units=si`,
      headers: {
        "X-RapidAPI-Key": process.env.REACT_APP_API_DARKSKY,
        "X-RapidAPI-Host": "dark-sky.p.rapidapi.com",
        accept: "application/json"
      }
    });

    res.send(data);
  } catch (error) {
    console.log(error);
    res.end();
  }
});

app.get("/api/city/:lat/:lng", async (req, res) => {
  try {
    const { data } = await axios({
      method: "GET",
      url: `https://api.flightstats.com/flex/airports/rest/v1/json/withinRadius/${req.params.lng}/${req.params.lat
      }/50?appId=3e66f39b&appKey=${process.env.REACT_APP_API_FLIGHTSTATS}`
    });
    const arr = Array.from(data.airports);
    const item = arr.find((elt) => {
      return elt.classification === 1 || 2 || 3;
    });
    res.send({ city: item.city, cityCode: item.cityCode });
  } catch (error) {
    console.log(error);
    res.end();
  }
});

app.get("/connect", async (req, res) => {
  res.send("Connected");
});
