import { Link } from "react-router-dom"
import style from './Card.module.css'



const Card = ({id, name, image, temperament}) => {


    console.log(temperament);
    return (
        
    <div className={style.cardDisplay}> {
      name &&
        <div className={style.cards}>
                <Link to={`/dogs/${id}`}>
              <h1 className={style.text}>{name}</h1>
                </Link>
              <img src={image} alt='' className={style.imagen}/>
              {
                temperament && temperament.length ?
                temperament.map(temp => temp.temperament  ?
                  <p>{temp.temperament} </p>: <p>{temp}</p>):
                  <p>{temperament}</p>
                
              }
 
        </div> }
    </div>
  );
};

export default Card