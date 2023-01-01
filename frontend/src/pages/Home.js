import { useEffect } from "react";
import { useFilmsContext } from "../hooks/useFilmsContext";

//components
import FilmDetails from '../components/FilmDetails'
import FilmForm from '../components/FilmForm'

const Home = () => {
    const {films, dispatch} = useFilmsContext()

useEffect(() => {
    const fetchFilms = async () => {
        const response = await fetch('/api/films')
        const json = await response.json()

        if (response.ok) {
            dispatch({type: 'SET_FILMS', payload: json})
        }
    }

    fetchFilms()
}, [])

    return ( 
        <div className="home">
            <div className="films">
                {films && films.map((film) => (
                    <FilmDetails key={film._id} film={film}/>
                ))}
            </div>
            <FilmForm />
        </div>
     )
}
 
export default Home;