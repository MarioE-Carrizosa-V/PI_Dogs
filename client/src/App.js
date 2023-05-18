import './App.css';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import Card from './components/Card/Card';
import Cards from './components/Cards/Cards';
import Detail from './components/Detail/Detail';
import Nav from './components/Nav/Nav';
import { getByName } from './redux/action';

function App() {
  
  return (
    <div >
      {<Nav/>}
        <Routes>
          <Route path='/dogs' element={<Card/>} />
          <Route path='/dogs/:id' element={<Detail/>}/>
        </Routes>
      <Cards/>
    </div>
  );
}

export default App;
