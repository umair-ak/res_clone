const express = require("express");
const bodyParser = require("body-parser");
const app = express()
const data = require(__dirname + "/data.js");
app.use(bodyParser.urlencoded({extended:true}))
const ejs = require("ejs");
app.set("view engine","ejs");
app.use(express.static(__dirname + "/public"))



app.get("/", function(req, res){
    res.render("result");
});

app.post("/",function(req,res){

    var roll = req.body.rollno;
    console.log(roll);
});


app.listen(3000,function(){
    console.log("everything is working fine");
});