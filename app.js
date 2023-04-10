const express = require("express");
const bodyParser = require("body-parser");
const app = express()
app.set(bodyParser.urlencoded({extended:true}))
const ejs = require("ejs");
app.set("view engine","ejs");
app.use(express.static(__dirname + "public"))



app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html");
});



app.listen(3000,function(){
    console.log("everything is working fine");
});