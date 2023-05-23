import Card from '../Card/Card';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getByBreed } from '../../redux/action';
import style from './Cards.module.css'
import { useLocation } from 'react-router-dom';


function Cards() {
   const dispatch = useDispatch()
   const location = useLocation()
   const dogs = useSelector(state => state.allDogs)
   console.log(dogs);
   useEffect(() => {
       dispatch(getByBreed())
   }, [])
   
   return (


      <div className={style.cardDisplay}>
         { location.pathname === '/dogs/' &&
            dogs.map(({id, name, temperament, life_span, weight, height, image, Temperaments}) => {
               console.log( 'cards',temperament)
               const newsTemperaments = temperament && temperament.includes(',') ? temperament.split(','): temperament
               console.log(newsTemperaments)
               return (
                  <Card
                    key={id}
                    id={id}
                    name={name}
                    temperament={newsTemperaments || Temperaments}                   
                    life_span={life_span}
                    weight={weight? weight: weight.metric}
                    height={height? height: height.metric}
                    image={image.url? image.url: image}
                  />
               )
            })
         }
      </div>
   );
}

export default Cards