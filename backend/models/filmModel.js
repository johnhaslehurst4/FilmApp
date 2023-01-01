const mongoose = require('mongoose')

const Schema = mongoose.Schema

const filmSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    genre: {
        type: String,
        required: true
    },
    length: {
        type: Number,
        required: true
    },
    review: {
        type: String,
        required: true
    }
}, { timestamps: true })

module.exports = mongoose.model('Film', filmSchema)
