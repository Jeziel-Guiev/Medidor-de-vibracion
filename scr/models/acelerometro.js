'use strict'

const mongoose = require('mongoose');
const {Schema} = mongoose;


const userSchema = new Schema({
    axyz:[Number,Number,Number],
    fecha:[String]
});

module.exports = mongoose.model('Aceletrometro', userSchema);