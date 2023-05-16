const {Dog, Temperament} = require('../db')
require('dotenv').config();
  
const postDog = async(req, res) =>{
    try {
        const {name, life_span, weigth, heigth, image, temperamento} = req.body;
        if(!name || !life_span || !weigth || !heigth || !image || !temperamento) throw Error('Faltan datos')



        if(temperamento){
            for (let i = 0; i < temperamento.length; i++) {
                await Temperament.findOrCreate({ where:
                    {temperament: temperamento[i]}
                }) 
            }
        }

        const dog = {
            name: name,
            life_span: life_span,
            weigth: weigth,
            heigth: heigth,
            image: image
        }

        const dogExists = await Dog.findAll({where:     
            dog
        })
        if(!dogExists.length){
            const createDog = await Dog.create(dog)
        let idDog = await Temperament.findAll({where:{temperament: temperamento} })
        await createDog.addTemperament(idDog) 

        
        } else throw Error(`El perro con el nombre ${name} ya fue creado`)
        
    

        res.status(200).json("Perro Creado")
        
    } catch (error) {
        res.status(400).send({error: error.message})
    }
}
    
    module.exports = postDog
    