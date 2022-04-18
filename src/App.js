
import './App.css';
import Header from './Component/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './Component/Home/Home';
import VisitingSpots from './Component/VisitingSpots/VisitingSpots';
import SpotDetail from './Component/SpotDetail/SpotDetail';
import CheckOut from './Component/CheckOut/CheckOut';
import Login from './Component/Login/Login';
import Register from './Component/Register/Register';
import RequireAuth from './Component/RequireAuth/RequireAuth';
import Footer from './Component/Footer/Footer';
import VisitingGlobalSpot from './Component/VisitingGlobalSpot/VisitingGlobalSpot';
import Blogs from './Component/Blogs/Blogs';
import About from './Component/About/About';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <br />
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/spotdetail/:spotdetailId/:nameId' element={<SpotDetail></SpotDetail>}></Route>
        <Route path='/checkout' element={
          <RequireAuth>
            <CheckOut></CheckOut>
          </RequireAuth>
        }></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/visitingspot' element={<VisitingSpots></VisitingSpots>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/globalvisiting' element={<VisitingGlobalSpot></VisitingGlobalSpot>}></Route>
      </Routes>
      <br />
      <Footer></Footer>
    </div >

  );
}

export default App;
