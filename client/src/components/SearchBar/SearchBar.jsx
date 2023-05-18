import { useEffect, useState } from "react"
//import style from './Detail.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { getByName } from '../../redux/action';


export default function SearchBar({onSearch}) {
   console.log(onSearch);
   const [name, setName] = useState("");

   const handleChange = (event) => {
      setName(event.target.value)
   }

   return (

      <div>

         <input type='search' onChange={handleChange} value={name}/>

         <button onClick={() => {onSearch(name); setName("")}}>Buscar</button>

      </div>


   );

}