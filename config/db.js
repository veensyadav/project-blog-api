const mongoose = require('mongoose');

module.exports = () => {
    mongoose.connect('mongodb://localhost:27017/blog-api',{
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
};
