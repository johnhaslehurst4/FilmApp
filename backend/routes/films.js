const express = require('express')
const {
    getFilms,
    getFilm,
    createFilm,
    deleteFilm,
    updateFilm
} = require('../controllers/filmController')


const router = express.Router()

//GET all films
router.get('/', getFilms)

//GET a single film
router.get('/:id', getFilm)

//POST a new film
router.post('/', createFilm)

//DELETE a film
router.delete('/:id', deleteFilm)

//UPDATE a film 
router.patch('/:id', updateFilm)


module.exports = router