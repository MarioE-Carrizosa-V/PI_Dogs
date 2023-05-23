import { useDispatch, useSelector } from "react-redux";
import { useEffect} from "react";
import { getByName, getByTemperament, orderDogs, filterDogs, filterDogsFrom } from "../../redux/action";
import { useParams, Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import style from '../Nav/Nav.module.css'

 const Nav = () => {

    const dispatch = useDispatch();
    const temperaments = useSelector(state => state.DogsByTemperament)        
    const { name } = useParams();

    const handleOrder = (event) => {
        dispatch(orderDogs(event.target.value))
    }

    const handleFilter = (event) => {
        dispatch(filterDogs(event.target.value))
    }

    const handleFilterFrom = (event) => {
      dispatch(filterDogsFrom(event.target.value))

    }

    useEffect(() => {
        dispatch(getByTemperament())
        if(name)
        dispatch(getByName(name))
        //console.log(name);
    
    }, [])

    const handleSearch = (searchQuery) => {
        dispatch(getByName(searchQuery))
      };
      
    return(

        <nav>

        <select onChange={handleOrder}>
            <option>Order By</option>
            <option value="A">Ascendant</option>
            <option value="D">Falling</option>
        </select>

        <select onChange={handleFilter}>
            <option>Filter By</option>
             {temperaments.map(({temperament, id}) => (
              <option key={id} value={temperament}>{temperament}</option>
            ))}
        </select>

        <select onChange={handleFilterFrom}> 
          <option> Filter From</option>
          <option value="DB">FromDB</option>
          <option value="API">FromAPI</option>

        </select>


         <button className={style.logOut}>
         <Link className={style.color} to={'/'}>HomePage</Link>   
         </button>

        <button className={style.about}>
         <Link to='/about'>About</Link>
        </button>
        
        <button className={style.home}> 
         <Link to='/dogs/'>AllDogs</Link>
        </button>

        <button>
         <Link to='/dogs/saveDog'>Create Your Dog</Link>
        </button>

            <SearchBar onSearch={handleSearch}/>
            <div className={style.cardDisplay}>
      </div>
            

        </nav>
        
    )

}

export default Nav;