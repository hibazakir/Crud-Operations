const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Product = require('./routes/product.route');

const app = express();

mongoose.connect('mongodb://localhost/productDb', {useNewUrlParser: true, useUnifiedTopology : true})
.then(()=>{
    console.log("Connected to Database");
})
.catch(err => {
    console.log("Could not connect to database", err);
    process.exit(); 
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));

app.use('/product', Product);

app.listen(3000, ()=>{
    console.log("App is running on port 3000....");
});