var express = require('express');
var server = express();
var routes = require('./routes/routes');  
const cors = require('cors');


var mongoose = require('mongoose');

// mongoose.connect("mongodb://localhost:27017/est",{useNewUrlParser: true,  useUnifiedTopology: true },function checkDB(error)
// {
//     if(error)
//     {
//         console.log("errorr")
//     }
//     else
//     {
//         console.log("DB Connectedddd!!!!!!!!!!!")
//     }
// });
mongoose.connect("mongodb+srv://kaushalratnapagol:Kaushalrr06@cluster0.bfvgwzq.mongodb.net/esp?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("DB connected");
    })
    .catch((error) => {
        console.error("Error connecting to the database:", error);
    });


server.use(cors());
server.use(express.json());
server.use(routes);

server.listen(8000,function check(error)
{
    if(error)
    {
        console.log("errorr")
    }
    else
    {
        console.log("startedddddd")
    }
});