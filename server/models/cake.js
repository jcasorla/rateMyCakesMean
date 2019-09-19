const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/cake', {useNewUrlParser: true});

const commentSchema = new mongoose.Schema({
    comment: {
        type: String,
        minlength: [10, "At least 10 characters long"]
    },
    rating: {
        type: Number,
        required: true
    }
  
}, { timestamps: true });


const cakeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: [2, "At least 2 characters long"]
    },
    url: {
        type: String,
        required: true
    },
    comment: [commentSchema],
  
},{ timestamps: true });

const Comment = mongoose.model('Comment', commentSchema);
const Cake = mongoose.model('Cake', cakeSchema);