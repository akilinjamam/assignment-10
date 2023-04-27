import { RingLoader } from 'react-spinners';
import { useState } from "react";
import './App.css';

import { QueryClient, QueryClientProvider } from 'react-query';

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
import Dashboard from './Component/Settings/Dashboard';
import AddEventsHome from './Component/Settings/AddEventsHome';
import AddEventsAbroad from './Component/Settings/AddEventsAbroad';
import DashboardHome from './Component/Settings/DashboardHome';
import DashboardHomeBlogs from './Component/Settings/DashboardHomeBlogs';
import UpdateHome from './Component/Settings/updateHome/UpdateHome';
import UpdateGlobal from './Component/Settings/UpdateGlobal/UpdateGlobal';
import AddToCart from './Component/CheckOut/AddToCart';
import UpdateCart from './Component/CheckOut/UpdateCart';
import UserControll from './Component/Settings/Admin/UserControll';
import RequireAdminEditor from './Component/RequireAuth/RequireAdminEditor';
import RequireAdmin from './Component/RequireAuth/RequireAdmin';





function App() {

  const [loading, setLoading] = useState(true);
  const [color] = useState("white");

  const client = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: true,
      }
    }
  })


  useEffect(() => {
    // setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 3000)

  }, []);




  return (
    <>

      <NoteState>
        <div>
          {
            loading ?
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh', width: '100%', backgroundColor: '#000233' }}>
                <div style={{ width: '100%', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <RingLoader color={color} size={150} />
                </div>
              </div>
              :
              <div className="App">

                <QueryClientProvider client={client}>
                  <Header></Header>

                  <Routes>
                    <Route path='/' element={<Home></Home>}></Route>
                    <Route path='/home' element={<Home></Home>}></Route>

                    <Route path='/checkout/:checkoutId' element={
                      <RequireAuth>
                        <CheckOut></CheckOut>
                      </RequireAuth>
                    }></Route>
                    <Route path='/addToCart' element={
                      <RequireAuth>
                        <AddToCart></AddToCart>
                      </RequireAuth>
                    }></Route>
                    <Route path='/updateCart/:updateCart' element={
                      <RequireAuth>
                        <UpdateCart ></UpdateCart>
                      </RequireAuth>
                    }></Route>
                    <Route path='/dashboard' element={<RequireAdminEditor><Dashboard></Dashboard></RequireAdminEditor>}>
                      <Route index element={<DashboardHome></DashboardHome>}></Route>
                      <Route path='addToHome' element={<AddEventsHome></AddEventsHome>}></Route>
                      <Route path='addToAbroad' element={<AddEventsAbroad></AddEventsAbroad>}></Route>
                      <Route path='dashboardHomeBlogs' element={<DashboardHomeBlogs></DashboardHomeBlogs>}></Route>
                      <Route path='userControll' element={<RequireAdmin><UserControll></UserControll></RequireAdmin>}></Route>
                      <Route path='updateHome/:updateHomeId' element={<UpdateHome></UpdateHome>}></Route>
                      <Route path='updateGlobal/:updateGlobalId' element={<UpdateGlobal></UpdateGlobal>}></Route>

                    </Route>

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
                    <Route path='/spotDetail/:spotdetailId' element={<SpotDetail></SpotDetail>}></Route>
                    <Route path='*' element={<NotFound></NotFound>}></Route>
                  </Routes>
                </QueryClientProvider>

              </div >
          }
        </div>
      </NoteState>

    </>

  );
}

export default App;
