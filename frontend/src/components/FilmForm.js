import { useState } from 'react'
import { useFilmsContext } from '../hooks/useFilmsContext'

const FilmForm = () => {
    const { dispatch } = useFilmsContext()
    const [title, setTitle] = useState('')
    const [genre, setGenre] = useState('')
    const [length, setLength] = useState('')
    const [review, setReview] = useState('')
    const [error, setError] = useState(null)

    const handleSubmit = async (e) => {
        e.preventDefault()

        const film = {title, genre, length, review}

        const response =await fetch('/api/films', {
            method: 'POST',
            body: JSON.stringify(film),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const json = await response.json()

        if (!response.ok) {
            setError(json.error)
        }
        if (response.ok) {
            setTitle('')
            setGenre('')
            setLength('')
            setReview('')
            setError(null)
            console.log('new film added', json)
            dispatch({type: 'CREATE_FILM', payload: json})
        }
    }

    return(
        <form className="create" onSubmit={handleSubmit}>
            <h3>Add a New Film</h3>

            <label>Film Title</label>
            <input
                type ="text"
                onChange={(e) => setTitle(e.target.value)}
                value={title}
            />

            <label>Genre</label>
            <input
                type ="text"
                onChange={(e) => setGenre(e.target.value)}
                value={genre}
            />

            <label>Run Time (mins)</label>
            <input
                type ="number"
                onChange={(e) => setLength(e.target.value)}
                value={length}
            />

            <label>Review</label>
            <input
                type ="text"
                onChange={(e) => setReview(e.target.value)}
                value={review}
            />

            <button>Add Film</button>
            {error && <div className="error">{error}</div>}
            
        </form>
    )
}

export default FilmForm