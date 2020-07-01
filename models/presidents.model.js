const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const presidentSchema = new Schema({
    president: {
        type: String,
        required: true
    },
    birth_year: {
        type: Date,
        required: true
    },
    death_year: {
        type: Date, 
        required: true
    },
    took_office: {
        type: Date,
        required: true
    },
    left_office: {
        type: Date,
        required: true
    },
    part: {
        type: String,
        required: true
    }

});

const President = mongoose.model('President', presidentSchema);

module.exports = President;
