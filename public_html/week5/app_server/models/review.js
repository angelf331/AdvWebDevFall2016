var mongoose = require('mongoose');
var reviewSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    department: String,
    startDate: {
        type: Date,
        required: true
    },
    jobTitle: String,
    salary: {
        type: Number,
        required: true
        
    }
});


var Review = mongoose.model('Review', reviewSchema);

module.exports = Review;