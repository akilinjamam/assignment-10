import { RingLoader } from 'react-spinners';
import { createContext, useState } from "react";
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
import NotFound from './Component/NotFound/NotFound';
import { useEffect } from 'react';
import Packages from './Component/Packages/Packages';
import Contact from './bannar-img/Contact/Contact';
import VisaGuilde from './Component/VisaGuide/VisaGuilde';
import NoteState from './Context/NoteState';
import PdfForm from './Component/PdfForm/PdfForm';
import PdfFormPay from './Component/PdfForm/PdfFormPay';
import TourHome from './Component/TourArea/TourHome';
import TourAbroad from './Component/TourArea/TourAbroad';




function App() {

  const [loading, setLoading] = useState(true);
  const [color] = useState("white");




  useEffect(() => {
    // setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 3000)

  }, [])

  return (
    <>
      <NoteState>
        <div>
          {
            loading ?
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh', width: '100%', backgroundColor: '#000233' }}>
                <div style={{ width: '100px', height: '200px', display: 'block', margin: 'auto' }}>
                  <RingLoader color={color} size={150} />
                </div>
              </div>
              :
              <div className="App">
                <Header></Header>
                <Routes>
                  <Route path='/' element={<Home></Home>}></Route>
                  <Route path='/home' element={<Home></Home>}></Route>
                  <Route path='/:spotdetailId' element={<SpotDetail></SpotDetail>}></Route>
                  <Route path='/checkout' element={
                    <RequireAuth>
                      <CheckOut></CheckOut>
                    </RequireAuth>
                  }></Route>
                  <Route path='/login' element={<Login></Login>}></Route>
                  <Route path='/register' element={<Register></Register>}></Route>
                  <Route path='/visitingspot' element={<VisitingSpots></VisitingSpots>}></Route>
                  <Route path='/blogs' element={<Blogs></Blogs>}></Route>
                  <Route path='/packages' element={<Packages></Packages>}></Route>
                  <Route path='/contact' element={<Contact></Contact>}></Route>
                  <Route path='/visaGuide' element={<VisaGuilde></VisaGuilde>}></Route>
                  <Route path='/about' element={<About></About>}></Route>
                  <Route path='/globalvisiting' element={<VisitingGlobalSpot></VisitingGlobalSpot>}></Route>
                  <Route path='/pdfForm' element={<PdfForm></PdfForm>}></Route>
                  <Route path='/pdfFormPay' element={<PdfFormPay></PdfFormPay>}></Route>
                  <Route path='/tourHome' element={<TourHome></TourHome>}></Route>
                  <Route path='/tourAbroad' element={<TourAbroad></TourAbroad>}></Route>

                  <Route path='*' element={<NotFound></NotFound>}></Route>
                </Routes>

                <Footer></Footer>
              </div >
          }
        </div>
      </NoteState>
    </>

  );
}

export default App;
