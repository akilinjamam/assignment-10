
import './App.css';
import Header from './Component/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './Component/Home/Home';
import VisitingSpots from './Component/VisitingSpots/VisitingSpots';
import SpotDetail from './Component/SpotDetail/SpotDetail';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <br />
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/spotdetail/:spotdetailId/:nameId' element={<SpotDetail></SpotDetail>}></Route>
        <Route path='/visitingspot' element={<VisitingSpots></VisitingSpots>}></Route>
      </Routes>
    </div >
  );
}

export default App;
