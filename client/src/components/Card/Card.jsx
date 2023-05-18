import { Link } from "react-router-dom"
import style from './Card.module.css'


const Card = ({id, name, image, temperament, life_span}) => {


    return (
        
    <div className={style.cardDisplay}>
        <card className={style.cards}>
            <div key={id} >
                <Link to={`/dogs/${id}`}>
              <h1 className={style.text}>{name}</h1>
                </Link>
              <img src={image} alt='' className={style.imagen}/>
              <h2>{temperament}</h2>
            </div>
        </card>
    </div>
  );
};

export default Card