const express = require("express");
const app = express();
const port = 5000;
const cors = require('cors');
const chefs = require("./data/chefData.json");

app.use(cors());

app.get("/",(req,res)=>{
    res.send("Cravings & Canvas server")
})

app.get("/all-chef",(req,res)=>{
    res.send(chefs);
})

app.listen(port,()=>{
    console.log(`This app listen at port ${port}`);
})