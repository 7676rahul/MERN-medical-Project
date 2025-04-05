const mongoose = require('mongoose');

// Define the blood schema
const bloodSchema = mongoose.Schema({
    location: String,
    time: String,
    date: String,
    blood: String,
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'user' } // Reference to Usermodel
});

// Create BloodModel
const BloodModel = mongoose.model('blood', bloodSchema);

// Export BloodModel
module.exports = BloodModel;
