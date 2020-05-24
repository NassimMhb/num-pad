import {
    SEND_NUMBER, DELETE_ELEMENT, DELETE_ALL, CREER_QUESTION
    /* d'autres constantes d'actions ...*/
} from '../constants/actions'

export const sendNumber = (payload) => {
    return {
        type: SEND_NUMBER, payload
    }
}

export const deleteElement = () => {
    return {
        type: DELETE_ELEMENT
    }
}

export const deleteAll = () => {
    return {
        type: DELETE_ALL
    }
}

export const creerQuestion = () => {
    return {
        type: CREER_QUESTION
    }
}