require('dotenv').config();

const connection = () => {
    const mongoose = require('mongoose');
    mongoose.connect(process.env.MONGODB_URI, {useNewUrlParser: true, useUnifiedTopology: true })
    .then(res => console.log(`Connection Succesful ${res}`))
    .catch(err => console.log(`Error in DB connection ${err}`));
}

module.exports = connection;