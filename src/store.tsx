import { configureStore } from "@reduxjs/toolkit";
import { PageColors, Service } from "./types";

export type AppState = {
    result: Service<PageColors>
    currentPage: number
}

export const fetchData = (dispatch: any, page: number) => {
    fetch(`https://reqres.in/api/products?per_page=5&page=${page}`)
            .then(response => response.json())
            .then(response => {
                dispatch({type: 'UPDATE_RESULT', payload: { status: 'loaded', payload: response }})
            })
            .catch(error => {
                dispatch({type: 'UPDATE_RESULT', payload: { status: 'error', error }})
            })
}

const reducer = (state: any, action: any) => {
    switch(action.type) {
        case 'UPDATE_CURR_PAGE':
            return { currentPage: action.page, result: state.result }
        case 'UPDATE_RESULT':
            return { currentPage: state.currentPage, result: action.payload }
        default:
            return state
    }
}

export const store = configureStore({
    reducer: reducer,
    preloadedState: { result: { status: 'loading' }, currentPage: 1 }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch