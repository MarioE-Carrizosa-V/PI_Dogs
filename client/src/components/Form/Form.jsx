import { useState } from "react"
import Validation from "./Validation"
import style from './Form.module.css'
import { postDog } from "../../redux/action"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"


const Form = () => {

    const temperaments = useSelector(state => state.DogsByTemperament)

    const [dogInfo, setDogInfo] = useState({
        name: '',
        image: '',
        height: '',
        weight: '',
        life_span: '',
        temperament: []
    });

    const [errors, setErrors] = useState ({
        name: '',
        image: '',
        height: '',
        weight: '',
        life_span: '',
        temperament: []
    })

    const handleChange = (event) => {
        if(!event.target.name){
            dogInfo.temperament.push(event.target.value)
        };
          setDogInfo({
            ...dogInfo,
            [event.target.name]: event.target.value,

          });
      
        setErrors(Validation({
          ...dogInfo,
          [event.target.name]: event.target.value,
        }));
      };
      
    const handleSubmit = (event) => {
        event.preventDefault()
        postDog(dogInfo)
    }

    return (
    <div> 
        
            <Link to='/dogs/'>
                <button className={style.buttonBack}>All Dogs</button>
            </Link>
        
            <br/> <br/> <br/>
                <form  onSubmit={handleSubmit}>
                    <img src='https://media.tenor.com/Z67_jUyzvicAAAAd/bocchi-the-rock-futari-gotoh.gif' alt='' className={style.image}/>
                        <br/> <br/> <br/> <br/>
                            <label  className={style.form} >Name: </label>
                                <input name='name' type='text' placeholder="Enter a name"  onChange={handleChange} className={style.input}/>
                                    {errors.name && <p className={style.alert}>{errors.name}</p>}
                        <br/> <br/>
                            <label className={style.form}>Image: </label>
                                <input name='image' type='url' placeholder="Enter a URL" value={dogInfo.image} onChange={handleChange} className={style.input}/>
                                    {errors.image && <p className={style.alert}>{errors.image}</p>}
                        <br/> <br/>
                            <label className={style.form}>Height: </label>
                                <input name='height' type='text' placeholder="Enter a height" value={dogInfo.height} onChange={handleChange} className={style.input}/>
                                    {errors.height && <p className={style.alert}>{errors.height}</p>}
                        <br/> <br/>
                            <label className={style.form}>Weight: </label>
                                <input name='weight' type='text' placeholder="Enter a weight" value={dogInfo.weight} onChange={handleChange} className={style.input}/>
                                    {errors.weight && <p className={style.alert}>{errors.weight}</p>}
                        <br/> <br/>
                            <label className={style.form}>Life span: </label>
                                <input name='life_span' type='text' placeholder="Enter a life span" value={dogInfo.life_span} onChange={handleChange} className={style.input}/>
                                    {errors.life_span && <p className={style.alert}>{errors.life_span}</p>}
                        <br/> <br/>
                            <select onChange={handleChange} className={style.select}>
                                <option className={style.select}>Temperaments</option>
                                    {temperaments.map(({temperament, id}) => (
                                <option key={id} value={temperament} className={style.select}>{temperament}</option>
                                    ))}
                            </select>
                        <br/> <br/>
                <button type='submit' className={style.button}> Create Dog </button>
            </form>
        </div>
    )
}

export default Form
