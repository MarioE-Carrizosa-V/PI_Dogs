import './App.css';
import { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Card from './components/Card/Card';
import Cards from './components/Cards/Cards';

function App() {
  const [dogs, setDogs] = useState([])

  function onClose (id) {
    const filtered = dogs.filter(dog => dog.id !== id)
       setDogs(filtered)
 }

 useEffect(() => {
  
 })

  return (
    <div >
      <Routes>
        <Route path='/dogs' element={<Card/>} />
      </Routes>
      <Cards dogs={dogs} onClose={onClose}/>
    </div>
  );
}

export default App;
