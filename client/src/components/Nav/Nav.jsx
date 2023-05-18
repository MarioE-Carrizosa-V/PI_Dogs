import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getByName } from "../../redux/action";
import { useParams } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";

 const Nav = () => {

    const dispatch = useDispatch();
    const { name } = useParams();

    useEffect(() => {
        if(name)
        dispatch(getByName(name))
    
    }, [])

    const handleSearch = (searchQuery) => {
        dispatch(getByName(searchQuery))
      };

    return(

        <div>

            <SearchBar onSearch={handleSearch}/>

        </div>
        
    )

}

export default Nav;