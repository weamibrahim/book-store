import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Signup from './Components/Signup/Signup';
import Login from './Components/Login/Login';
import Cart from './Components/Cart/Cart';
import Payment from './Components/Payment/Payment';
import ContactUs from './Components/ContactUs/ContactUs';
import ProfileWriter from './Components/ProfileWriter/ProfileWriter';
import ProfileUser from './Components/ProfileUser/ProfileUser';
import Checkout from './Components/Checkout/Checkout';
import Books from './Components/Books/Books';
import BookDetails from './Components/BookDetails/BookDetails';

import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';

function App() {
  return (

<BrowserRouter>

<Header/>
<Routes>

<Route path="/" element={<Home/>}/>
<Route path="/home" element={<Home/>}/>
<Route part="/about" element={<About/>}/>
<Route path="/signup" element={<Signup/>}/>
<Route path="/login" element={<Login/>}/>
<Route path="/cart" element={<Cart/>}/>
<Route path="/payment" element={<Payment/>}/>
<Route path="/contactus" element={<ContactUs/>}/>
<Route path="/profilewriter" element={<ProfileWriter/>}/>
<Route path="/profileuser" element={<ProfileUser/>}/>
<Route path="/checkout" element={<Checkout/>}/>
<Route path="/books" element={<Books/>}/>
<Route path="/bookdetails/:id" element={<BookDetails/>}/>

</Routes>
<Footer/>

</BrowserRouter>
  

  );
}

export default App;
