import { GET_BREED, GET_ID, GET_NAME, GET_TEMPERAMENTS, POST_DOG } from "./actionTypes";

const initialState = {
    DogsById: [],
    DogsByTemperament: [],
    DogsByBreed: [],
    allDogs: [],


}

const reducer = (state = initialState, {type, payload}) => {
    console.log(type, payload);
    switch (type) {
        case GET_BREED:
            return { ...state, allDogs: payload};
            
        default:{
            return {...state}
        }
    }
}

export default reducer