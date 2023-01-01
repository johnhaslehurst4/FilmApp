const Film = require('../models/filmModel')
const mongoose = require ('mongoose')


// get all films
const getFilms = async (req, res) => {
    const films = await Film.find({}).sort({createdAt: -1})

    res.status(200).json(films)
}

//get a single film
const getFilm = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'Thats not a film'})
    }

    const film = await Film.findById(id)

    if (!film) {
        return res.status(404).json({error:'No such film'})
    }
    res.status(200).json(film)
}


//create new film
const createFilm = async (req, res) => {
    const {title, genre, length, review} = req.body

    //add doc to db

    try {
        const film = await Film.create({title, genre, length, review})
        res.status(200).json(film)
    } catch (error){
        res.status(400).json({error: error.message})
    }
}

//delete a film
const deleteFilm = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error:'No such film'})
    }
    const film = await Film.findOneAndDelete({ _id: id })
    if (!film) {
        return res.status(404).json({error: 'No such film'})
    }
    res.status(200).json(film)
}


//update a film
const updateFilm = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such film'})
    }

    const film = await Film.findOneAndUpdate({ _id: id }, {
        ...req.body
    })
    
    if (!film) {
        return res.status(400).json({error: 'No such film'})
    }
    res.status(200).json(film)
}



module.exports = {
    getFilms,
    getFilm,
    createFilm,
    deleteFilm,
    updateFilm
}