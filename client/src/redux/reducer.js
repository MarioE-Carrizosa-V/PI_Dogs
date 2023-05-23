import { GET_BREED, GET_ID, GET_NAME, GET_TEMPERAMENTS, ORDER_DOG, POST_DOG, FILTER_DOG, FILTER_FROM } from "./actionTypes";

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
            return {
                ...state, DogsById: payload
            };
        case GET_NAME:
            return {
                ...state, DogsByName: payload,
            }
        case GET_TEMPERAMENTS:
            return {
                ...state, DogsByTemperament: payload
            }
        case FILTER_DOG:
            const dogsFiltered = state.allDogs.filter(dog => dog.temperament && dog.temperament.toLowerCase().trim().includes(payload))
            return {
                ...state, allDogs: dogsFiltered
        }
        case FILTER_FROM:
            const dogsFilterFrom = state.allDogs.filter(dog =>{
                if( payload === "API" && dog.image.url) {
                    return true
                } else if(
                    payload === "DB" && !dog.image.url){
                        return true
                    }
                return false
            })
            return {
                ...state, allDogs: dogsFilterFrom
            }
        case ORDER_DOG:
            const copyState = [...state.allDogs];
            
            let orderDogs;

            if (payload === "A") {
                orderDogs = copyState.sort((a, b) => a.name.localeCompare(b.name));
              } else if (payload === "D") {
                orderDogs = copyState.sort((a, b) => b.name.localeCompare(a.name))
            }
              return {
                ...state,
                allDogs: orderDogs
              };
        case POST_DOG:
            return {

        }
        default:{
            return {...state}
        }
    }
}

export default reducer