const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    title : {
        type: String,
        required : true,
    },
    description: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = post = mongoose.model('post', postSchema);