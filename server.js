const db = require('./config/database').db;
let express = require('express');
let port = 7000;
let app = express();
const path = require('path');
const hbs = require('handlebars');
const { handlebars } = require('hbs');
const {engine} = require('express-handlebars');
const fileUpload = require('express-fileupload');
const index = require('./routes/index');
const cars = require('./routes/cars');
const bikes = require('./routes/bikes');
const fashion=require('./routes/fashion');
const mobile=require('./routes/mobile');
const electronics=require('./routes/electronics');
const payment = require('./routes/payment');
const sellP = require('./routes/sellpage');

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');
app.use(fileUpload());
app.use(express.static(__dirname + "/public"));

app.use("/",index);
app.use("/cars",cars);
app.use("/bikes",bikes);
app.use("/fashion", fashion);
app.use("/mobile",mobile);
app.use("/electronics",electronics);
app.use("/makepayment",payment);
app.use("/additem",sellP);

app.listen(port,(err)=>{
    if(err) 
        throw err
    else
    console.log(`server started on ${port}`);
});