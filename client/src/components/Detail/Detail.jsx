import { useParams } from "react-router-dom"
import { useEffect } from "react"
import style from './Detail.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { searchById } from '../../redux/action';




const Detail = () => {
    const { id } = useParams();
    let dogById = useSelector(state => state.DogsById)
        if(dogById.length) {
        dogById = dogById[0]
    }

    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(searchById(id))
    }, [id]);
    
    return (
    <div className={style.cardDisplay}>
        <div className="Detail">
            <card className={''}>
                <h2>{dogById.name}</h2>
                <img src={dogById.image} alt=''/>
                <h4>Peso: {dogById.weight}</h4>
                <h4>Altura: {dogById.height}</h4>
                <h4>Años de vida: {dogById.life_span}</h4>
                <h4>{dogById.temperament}</h4>
            </card>
        </div>
    </div>
    )
}

export default Detail