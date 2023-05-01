const express = require("express");
const app = express();
const port = 5000;
const cors = require('cors');


app.use(cors());

app.get("/",(req,res)=>{
    res.send("Cravings & Canvas server")
})

app.listen(port,()=>{
    console.log(`This app listen at port ${port}`);
})