const mongoose = require('mongoose');

const connection = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL);
        return console.log('MongoDB connected...');
    } catch (err) {
        return console.log(err);
    }
}

module.exports = connection