const express = require("express");
const app = express();
const port = 5000;
const cors = require('cors');
const chefs = require("./data/chefData.json");
const allRecipe = require("./data/allRecipe.json");

app.use(cors());

app.get("/",(req,res)=>{
    res.send("Cravings & Canvas server");
})

app.get("/all-chef",(req,res)=>{
    res.send(chefs);
})

app.get("/all-recipe",(req,res)=>{
    res.send(allRecipe);
})

app.get("/recipe-by-id/:id",(req,res)=>{
    const id = req.params.id;
    const filteredRecipes = allRecipe.filter(recipes => recipes.id == id);
    res.send(filteredRecipes);
})

app.get("/recipe-by-chef-id/:id",(req,res)=>{
    const id = req.params.id;
    const filteredRecipes = allRecipe.filter(recipes => recipes.chefId == id);
    res.send(filteredRecipes);
})

app.listen(port,()=>{
    console.log(`This app listen at port ${port}`);
})