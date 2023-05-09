const axios = require('axios');
require('dotenv').config();
//https://api.thedogapi.com/v1/breeds?api_key=live_exchGW7DeX09qrN2hzijqlVMgbAaM4jz5MumuVOgQW5ENuWtOZ2VpglFnamHH7Dr

const getDogsById = async (idRaza) => {
  const response = await axios.get(`https://api.thedogapi.com/v1/breeds/${idRaza}`);
  return response.data;
};
    
    module.exports = {
      getDogsById
    };
    const {API_KEY, URL} = process.env;
    
    
    const getRecipesId = async (req, res) => {
    
        try {
            
            const {idRecipe} = req.params;
            const {data} = await axios(`${URL}/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true`)
            // console.log(data.results[0].id)
            const filteredRecipe = data.results.find(diet => diet.id === +idRecipe)
    
            console.log(filteredRecipe)
    
            if(!filteredRecipe){
                throw Error(`No hay recetas con el id: ${idRecipe}`)
            }
    
            const associatedDiet = {
                id: filteredRecipe.id,
                vegetarian: filteredRecipe.vegetarian,
                vegan: filteredRecipe.vegan,
                glutenFree: filteredRecipe.glutenFree,
                dairyFree: filteredRecipe.dairyFree,
                veryHealthy: filteredRecipe.veryHealthy,
                diets: filteredRecipe.diets
            }
    
            return res.status(200).json(associatedDiet)
    
        } catch (error) {
            
            res.status(404).send(error.message)
    
        }
    
    }
    
    
    module.exports = {
        getRecipesId
    }