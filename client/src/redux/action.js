import {GET_BREED, GET_ID, GET_NAME, GET_TEMPERAMENTS, POST_DOG} from "./actionTypes";
import axios from "axios";
const host = 'http://localhost:3001/dogs/'

export const searchById = (id) => {  // <== el nombre de la variable que recibe la function puede ser cualquiera: id, idRaza, numero de perro, etc
    const endpoint = `${host}` + id;
    return async (dispatch) => {
        const {data} = await axios(endpoint)
          return dispatch({
             type: GET_ID,
             payload: data,
            });
        };
    };

export const getByTemperament = () => {
    const endpoint = `${host}/temperaments`;
    return async (dispatch) => {
        const {data} = await axios(endpoint)
          return dispatch({
             type: GET_TEMPERAMENTS,
             payload: data,
            });
        };
    };

export const getByName = (name) => {
    const endpoint = `${host}/?=` + name;
    return async (dispatch) => {
        const {data} = await axios(endpoint)
          return dispatch({
             type: GET_NAME,
             payload: data,
            });
        };
    };

export const postDog = ({name, life_span, weigth, heigth, image, temperamento}) => {
    const endpoint = `${host}/saveDog`;
    return async (dispatch) => {
        const {data} = await axios(endpoint, {name, life_span, weigth, heigth, image, temperamento})
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

