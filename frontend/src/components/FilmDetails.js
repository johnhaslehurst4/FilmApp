import { useFilmsContext } from "../hooks/useFilmsContext";

const FilmDetails = ({ film }) => {
    const { dispatch } = useFilmsContext()

    const handleClick = async () => {
        const response = await fetch ('/api/films/' + film._id, {
            method: 'DELETE'
        })
        const json = await response.json()

        if(response.ok) {
            dispatch({type: 'DELETE_FILM', payload: json})
        }
    }

    return ( 
        <div className="film-details">
            <h4>{film.title}</h4>
            <p><strong>Genre: </strong>{film.genre}</p>
            <p><strong>Run Time (mins): </strong>{film.length}</p>
            <p><strong>Review: </strong>{film.review}</p>
            <p>{film.createdAt}</p>
            <span onClick={handleClick}>delete</span>
        </div>
     );
}
 
export default FilmDetails;