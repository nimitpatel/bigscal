import { ADD_MEDICINE, DELETE_MEDICINE, EDIT_MEDICINE } from '../types'

const addMedicine = data => {
    const medicines = {
        name: data.name,
        type: data.type,
        qnt: data.qnt,
        id: Math.random()
    }
    
    return medicines
}

const delMedicine = ( state = [], ids) => {
    for ( let i = ids.length - 1; i >= 0; i-- ) {
        state.splice(ids[i], 1)
    }
    
    return state
}

const medicines = ( state = [], action ) => {
    let medicines = null

    switch (action.type) {
        case ADD_MEDICINE:
            medicines = [...state, addMedicine(action.payload)]
            return medicines
        case DELETE_MEDICINE:
            medicines = delMedicine(state, action.payload)
            return medicines
        case EDIT_MEDICINE:
            // medicines
            return medicines
        default:
            return state
    }
}

export default medicines