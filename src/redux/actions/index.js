import { ADD_MEDICINE, DELETE_MEDICINE, EDIT_MEDICINE } from '../types'

export const addMedicine = data => {
    const action = {
        type: ADD_MEDICINE,
        payload: data
    }
    
    return action
}

export const deleteMedicine = data => {
    const action = {
        type: DELETE_MEDICINE,
        payload: data
    }

    return action
}

export const editMedicine = data => {
    const action = {
        type: EDIT_MEDICINE,
        payload: data
    }

    return action
}