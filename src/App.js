import './App.css';
import Header from './Pages/Shared/Header/Header';
import Home from './Pages/Home/Home';
import Login from './Pages/Registration/Login/Login';
import ServiceDetail from './Pages/ServiceDetail/ServiceDetail';
import Checkout from './Pages/Checkout/Checkout';
import Blogs from './Pages/Blogs/Blogs';
import About from './Pages/About/About';
import Footer from './Pages/Shared/Footer/Footer';
import NotFound from './Pages/Shared/NotFound/NotFound'
import { Route, Routes } from 'react-router-dom';
import Register from './Pages/Registration/Register/Register';
import RequireAuth from './Pages/Registration/Login/RequireAuth/RequireAuth';

function App() {
  return (
    <>
      <Header></Header>

      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/serviceDetail' element={<ServiceDetail></ServiceDetail>}></Route>
        <Route path='/checkout' element={
          <RequireAuth>
            <Checkout></Checkout>
          </RequireAuth>
        }></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        {/* <Route path='/' element={ }></Route> */}
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </>
  );
}

export default App;
