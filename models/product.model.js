const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let ProductSchema = new Schema({
    name : {type : String, max : 100, required : true},
    price : {type : Number, required : true}
});

module.exports = mongoose.model('Product', ProductSchema);