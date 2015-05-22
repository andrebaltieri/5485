var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

var ProductSchema = new Schema({
    id: ObjectId,
    title: { type: String, required: true },
    price: { type: Number, required: true },
    purchaseDate: { type: Date, required: true }
});

var exports = module.exports = mongoose.model('Product', ProductSchema);