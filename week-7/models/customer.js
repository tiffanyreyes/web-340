const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const customerSchema = new Schema({
   customerId: {
    type: String,
    unique: true,
    required: true
   },
   customerFirstName: {
    type: String,
    required: true
   },
   customerLastName: {
    type: String,
    required: true
   },
   email: {
    type: String,
    unique: true,
    required: true
   }
});

module.exports = mongoose.model('Customer', customerSchema);