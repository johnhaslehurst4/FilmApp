import { createContext, useReducer } from 'react'

export const FilmsContext = createContext()

export const filmsReducer = (state, action) => {
    switch (action.type) {
        case 'SET_FILMS':
            return {
                films: action.payload
            }
        case 'CREATE_FILM':
            return {
                films: [action.payload, ...state.films]
            }
        case 'DELETE_FILM' :
            return {
                films: state.films.filter((w) => w._id !== action.payload._id)
            }
        default:
            return state
    }
}

export const FilmsContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(filmsReducer, {
        films: null
    })


    return(
        <FilmsContext.Provider value={{...state, dispatch}}>
            { children }
        </FilmsContext.Provider>
    )

}