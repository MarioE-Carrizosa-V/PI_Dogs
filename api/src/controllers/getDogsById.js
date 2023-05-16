const axios = require('axios');
const {Dog} = require('../db')
require('dotenv').config();
const {URL} = process.env;

const getDogsById = async (req, res) => {
    
    try {
        const {idRaza} = req.params;
        const {data} = await axios(`${URL}`)
        let filterDogDB = []
        let filteredDog;

        if(idRaza.includes('-')){
            filterDogDB = await Dog.findAll({
            where: {id: idRaza.trim()}
        })
        if(filterDogDB.length !== 0){
        return res.status(200).json(filterDogDB)
        }
    }
    else {
        filteredDog = data.find(dog => dog.id === +idRaza.trim())
    }
    if(!filteredDog && filterDogDB.length === 0) {
            throw Error(`No hay razas con el id: ${idRaza.trim()}`)
        }

        return res.status(200).json(filteredDog)
    

    } catch (error) {
        
        res.status(404).send(error.message)

    }

}

module.exports = getDogsById