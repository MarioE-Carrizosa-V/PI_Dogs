const axios = require('axios');
require('dotenv').config();
const {URL} = process.env;

    const getRaza = async (req, res) => {
    
        try {
            const {data} = await axios(`${URL}`)

            return res.status(200).json(data)
    
        } catch (error) {
            
            res.status(404).send(error.message)
    
        }
    
    }

module.exports = getRaza