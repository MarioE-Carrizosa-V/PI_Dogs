import { useNavigate } from 'react-router-dom';


const Homepage = () => {

    const navigate = useNavigate()
    
    const click = () => {
        navigate('/dogs/')
    }


    return (
        <div>
            <button onClick={() => {click()}}>Start</button>
        </div>
    )
}

export default Homepage