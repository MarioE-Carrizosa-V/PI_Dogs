import Card from '../Card/Card';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getByBreed } from '../../redux/action';
import style from './Cards.module.css'


function Cards() {
   const dispatch = useDispatch()
   const dogs = useSelector(state => state.allDogs)
   
   useEffect(() => {
       dispatch(getByBreed())
   }, [])
   
   return (
      <div className={style.cardDisplay}>
         {
            dogs.map(({id, name, temperament, life_span, weight, height, image}) => {
               return (
                  <Card
                    key={id}
                    id={id}
                    name={name}
                    temperament={temperament}                     
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