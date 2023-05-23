const {Dog, Temperament} = require('../db')
require('dotenv').config();
  
const postDog = async(req, res) =>{
    console.log(req.body);
    try {
        const {name, life_span, weight, height, image, temperament} = req.body;
        if(!name || !life_span || !weight || !height || !image || !temperament) throw Error('Faltan datos')
        if(temperament){
            for (let i = 0; i < temperament.length; i++) {
                await Temperament.findOrCreate({ where:
                    {temperament: temperament[i].toLowerCase().trim()}
                }) 
            }
        }

        const dog = {
            name: name,
            life_span: life_span,
            weight: weight,
            height: height,
            image: image,
        }
        console.log(dog);
        const dogExists = await Dog.findAll({where:     
            dog
        })
        if(!dogExists.length){
            const createDog = await Dog.create(dog)
            console.log('1', createDog);
        let idDog = await Temperament.findAll({where:{temperament: temperament}})
        await createDog.addTemperament(idDog) 
        console.log('2', createDog);

        
        } else throw Error(`El perro con el nombre ${name} ya fue creado`)

        
        
    

        res.status(200).json("Perro Creado")
        
    } catch (error) {
        res.status(400).send({error: error.message})
    }
}
    
    module.exports = postDog
    