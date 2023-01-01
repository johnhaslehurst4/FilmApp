import { FilmsContext } from "../context/FilmContext";
import { useContext } from 'react'

export const useFilmsContext = () => {
    const context = useContext(FilmsContext)

    if (!context) {
        throw Error('useFilmsContext must be used inside a FilmsContextProvider')
    }

    return context 
}