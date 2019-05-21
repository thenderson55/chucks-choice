const express  = require("express");
const path = require("path");
const app = express();

app.use(express.static(path.join(`${__dirname}/build`)));

const port = process.env.PORT || 3000;

const server = app.listen(port,()=>{
  process.stdout.write(`App listening on port ${port}!\n Press CTR C to stop the server`)
});

app.get("/api", (req,res)=>{
  res.send("helloooo is working")
})
