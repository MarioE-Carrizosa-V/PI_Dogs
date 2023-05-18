import { GET_BREED, GET_ID, GET_NAME, GET_TEMPERAMENTS, POST_DOG } from "./actionTypes";

const initialState = {
    DogsById: {},
    DogsByTemperament: [],
    DogsByName: [],
    allDogs: [],


}


const reducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case GET_BREED:
            return { 
                ...state, allDogs: payload
            };
        case GET_ID:
            return  {
                
                ...state, DogsById: payload
            };
        case GET_NAME:
            return {
                ...state, DogsByName: payload 
            }
        default:{
            return {...state}
        }
    }
}

export default reducer