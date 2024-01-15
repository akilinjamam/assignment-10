import { RiseLoader } from 'react-spinners';
import { useState } from "react";
import './App.css';

import { QueryClient, QueryClientProvider, useQuery } from 'react-query';

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
import FeedbackDash from './Component/Settings/feedbackDash/feedbackDash';
import Payment from './Component/payment/Payment';
import PaidDoc from './Component/CheckOut/PaidDoc';
import AddBlog from './Component/Settings/Admin/blog/AddBlog';
import UpdateBlog from './Component/Settings/Admin/blog/UpdateBlog';
import Transection from './Component/transection/Transection';
import BlogDetail from './Component/Blogs/BlogDetail';
import fetchBannerData from './fetchData/fetchBannerData';
import Testmail from './Component/testmail/Testmail';

function App() {

  const [color] = useState("orange");

  const { data: bannerHome, isLoading } = useQuery("bannerHome", () => fetchBannerData());

  if (isLoading) {
    return <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh', width: '100%', backgroundColor: '#000233' }}>
      <div style={{ width: '100%', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <RiseLoader color={color} size={20} />
      </div>
    </div>
  }

  return (
    <>
      <NoteState>
        <div>
          <div className="App">
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
              <Route path='/addToCart/paidDoc/:cartId' element={
                <RequireAuth>
                  <PaidDoc></PaidDoc>
                </RequireAuth>
              }></Route>
              <Route path='/updateCart/:updateCart' element={
                <RequireAuth>
                  <UpdateCart ></UpdateCart>
                </RequireAuth>
              }></Route>
              <Route path='/dashboard' element={
                <RequireAdminEditor>
                  <Dashboard></Dashboard>
                </RequireAdminEditor>}>
                <Route index element={<DashboardHome></DashboardHome>}></Route>
                <Route path='addToHome' element={<AddEventsHome></AddEventsHome>}></Route>
                <Route path='feedbackDash' element={<FeedbackDash></FeedbackDash>}></Route>
                <Route path='addToAbroad' element={<AddEventsAbroad></AddEventsAbroad>}></Route>
                <Route path='addToBlog' element={<AddBlog></AddBlog>}></Route>
                <Route path='dashboardHomeBlogs' element={<DashboardHomeBlogs></DashboardHomeBlogs>}></Route>
                <Route path='userControll' element={<RequireAdmin><UserControll></UserControll></RequireAdmin>}></Route>
                <Route path='updateHome/:updateHomeId' element={<UpdateHome></UpdateHome>}></Route>
                <Route path='updateGlobal/:updateGlobalId' element={<UpdateGlobal></UpdateGlobal>}>
                </Route>
                <Route path='updateBlog/:updateBlogId' element={<UpdateBlog></UpdateBlog>}>
                </Route>
                <Route path='transection' element={<Transection></Transection>}>
                </Route>
              </Route>

              <Route path='/login' element={<Login></Login>}></Route>
              <Route path='/register' element={<Register></Register>}></Route>
              <Route path='/visitingspot' element={<VisitingSpots></VisitingSpots>}></Route>
              <Route path='/blogs' element={<Blogs></Blogs>}></Route>
              <Route path='/blogsDetail/:blogId' element={<BlogDetail />}></Route>
              <Route path='/packages' element={<Packages></Packages>}></Route>
              <Route path='/contact' element={<Contact></Contact>}></Route>
              <Route path='/visaGuide' element={<VisaGuilde></VisaGuilde>}></Route>
              <Route path='/about' element={<About></About>}></Route>
              <Route path='/globalvisiting' element={<VisitingGlobalSpot></VisitingGlobalSpot>}></Route>
              <Route path='/pdfForm' element={<PdfForm></PdfForm>}></Route>
              <Route path='/pdfFormPay' element={<PdfFormPay></PdfFormPay>}></Route>
              <Route path='/payment/success' element={<Payment></Payment>}></Route>
              <Route path='/tourHome' element={<TourHome></TourHome>}></Route>
              <Route path='/tourAbroad' element={<TourAbroad></TourAbroad>}></Route>
              <Route path='/spotDetail/:spotdetailId' element={<SpotDetail></SpotDetail>}></Route>
              <Route path='/testmail' element={<Testmail></Testmail>}></Route>
              <Route path='*' element={<NotFound></NotFound>}></Route>
            </Routes>
          </div >

        </div>
      </NoteState>

    </>

  );
}

export default App;
