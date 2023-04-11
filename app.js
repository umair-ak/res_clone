const express = require("express");
const bodyParser = require("body-parser");
const app = express()
const data = require(__dirname + "/data.js");
app.use(bodyParser.urlencoded({extended:true}))
const ejs = require("ejs");
app.set("view engine","ejs");
app.use(express.static(__dirname + "/public"))
let shouldDisplay = false;

var roll 

app.get("/", function(req, res){

    if(!shouldDisplay){
        res.render("result",{name:""});
    }
    
    res.render("result",{name:data.getName(roll)});

    shouldDisplay = false;
});

app.post("/",function(req,res){

    roll = req.body.rollno;
    shouldDisplay = true;
    res.redirect("/");
    
});


app.listen(3000,function(){
    console.log("everything is working fine");
});