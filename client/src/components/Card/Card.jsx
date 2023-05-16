import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import getByBreed from "../../redux/action"
import { useState, useEffect } from 'react';


const Card = ({id, image, name, heigth, weigth, temperament, lifeSpan, onClose}) => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getByBreed)
    }, [])
 
    return (
        <div>
            <button onClick={() => onClose(id)}>X</button>
            <img src={image} alt='' />
                <Link to={`/detail/${id}`}>
            <h2>{name}</h2>
                </Link>
            <h4>{temperament}</h4>            
        </div>

        )
    }


export default Card