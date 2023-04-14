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
        res.render("result",{display:shouldDisplay});
    }
    
    res.render("result",{display:shouldDisplay,
         Rollno:roll, gender:data.getGender(roll), Name:data.getName(roll),point:data.getPoints(),grade:data.getGrades()
        });
        data.resetscore();

    shouldDisplay = false;
});

app.post("/",function(req,res){

    roll = req.body.rollno;
    shouldDisplay = true;
    res.redirect("/");
    
});


app.listen(process.env.PORT||3000,function(){
    console.log("everything is working fine");
});