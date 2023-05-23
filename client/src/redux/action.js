import {FILTER_DOG, GET_BREED, GET_ID, GET_NAME, GET_TEMPERAMENTS, POST_DOG, ORDER_DOG, FILTER_FROM} from "./actionTypes";
import axios from "axios";
const host = 'http://localhost:3001/dogs'

export const searchById = (id) => {  // <== el nombre de la variable que recibe la function puede ser cualquiera: id, idRaza, numero de perro, etc
    const endpoint = `${host}/` + id;
    return async (dispatch) => {
        const {data} = await axios(endpoint)
          return dispatch({
             type: GET_ID,
             payload: data,
            });
        };
    };

export const getByTemperament = () => {
    const endpoint = `http://localhost:3001/temperament`;
    return async (dispatch) => {
        const {data} = await axios(endpoint)
          return dispatch({
             type: GET_TEMPERAMENTS,
             payload: data,
            });
        };
    };

export const getByName = (name) => {
    const endpoint = `${host}Name?name=` + name;
    return async (dispatch) => {
        const {data} = await axios(endpoint)
          return dispatch({
             type: GET_NAME,
             payload: data,
            });
        };
    };

export const postDog = async ({name, life_span, weight, height, image, temperament}) => {
    const endpoint = `${host}/saveDog`;
    const {data} = await axios.post(endpoint, {name, life_span, weight, height, image, temperament})
    console.log(data);
    console.log(endpoint);
    return (dispatch) => {
        console.log('antes del endpoint');
          return dispatch({
             type: POST_DOG,
             payload: data,
            });
        };
    };

export const getByBreed = () => {
    const endpoint = `${host}`;
    return async (dispatch) => {
        const {data} = await axios(endpoint)
          return dispatch({
             type: GET_BREED,
             payload: data,
            });
        };
    };

export const filterDogs = (temperament) => {
    return {type: FILTER_DOG, payload: temperament}
}

export const filterDogsFrom = (temperament) => {
    return {type: FILTER_FROM, payload: temperament}
}

export const orderDogs = (type) => {
    return {type: ORDER_DOG, payload: type}
}