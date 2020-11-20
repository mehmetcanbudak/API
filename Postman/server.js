var express  = require("express");
var bodyParser = require("body-parser");
var _ = require("underscore");

var app = express();
app.use(bodyParser.json());

app.get("/", function(req, res){
    res.send("Node.js is working!");
})

app.post("/something/:id", function(req, res){
    // res.send("Sent POST request.");
    let body = _.pick(req.body, "first_name", "last_name", "number", "title");
    // res.send(body);
    let id = req.params.id;
    res.send(body.first_name + " id = " + id);
})

app.put("/something/:id", function(req, res){
    // res.send("Sent PUT request.");
    let body = _.pick(req.body, "first_name", "last_name", "number", "title");
    let id = req.params.id;
    res.send(body);
}) 

app.delete("/something/:id", function(req, res){
    res.send("Sent DELETE request.");
})

app.listen(3000);