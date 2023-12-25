import { NavLink } from "react-router-dom"
import "./Header.css"
import { IoBook } from "react-icons/io5";
import { IoPersonOutline } from "react-icons/io5";
import { FaCartShopping } from "react-icons/fa6";

function Header() {
  return (
   <div>
    <div className="text-xl  p-1 bg-yellow-700 text-right">
      welcome to our book store
    </div>
    <nav className="bg-gray-200">
    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between h-16">
        <div className="flex items-center">
          <IoBook className="text-2xl text-yellow-700 mr-2" />
          <span style={{ fontFamily: "cursive" }} className="text-xl">Book Store</span>
        </div>
  
        <div className="hidden sm:flex ml-6 items-center">
          <div className="flex">
            <NavLink className="md:mx-3 text-lg hover:text-yellow-700" to="/home">Home</NavLink>
            <NavLink className="md:mx-3 text-lg hover:text-yellow-700" to="/books">Books</NavLink>
            <NavLink className="md:mx-3 text-lg hover:text-yellow-700" to="/about">About</NavLink>
            <NavLink className="md:mx-3 text-lg hover:text-yellow-700"  to="/contactus">Contact Us</NavLink>
            <NavLink className="md:mx-3 text-lg hover:text-yellow-700" to="/login">Login</NavLink>
            <NavLink className="md:mx-3 text-lg hover:text-yellow-700" to="/signup">Signup</NavLink>

           

            
          </div>
        </div>
      <div class=" inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
       

      
          <NavLink className=" md:mx-3 " to="/profileuser">  <IoPersonOutline  className="text-yellow-700 text-2xl  "/></NavLink>
         <NavLink className="  md:mx-3 " to="/cart">   <FaCartShopping  className="text-yellow-700 text-2xl "/></NavLink>
        

          
       
      </div>
    </div>
  </div>

 
  <div class="sm:hidden" id="mobile-menu">
    <div class="space-y-1 px-2 pb-3 pt-2">
    <NavLink className="md:mx-3 bg-yellow-700 text-white block rounded-md px-3 py-2 text-base font-medium " to="/home">Home</NavLink>
    <NavLink className="md:mx-3 text-yellow-700 block rounded-md px-3 py-2 text-base font-medium " to="/books">Books</NavLink>
    <NavLink className="md:mx-3  text-yellow-700 block rounded-md px-3 py-2 text-base font-medium " to="/about">About</NavLink>
    <NavLink className="md:mx-3  text-yellow-700 block rounded-md px-3 py-2 text-base font-medium " to="/contactus">Contact Us</NavLink>
<NavLink  className="md:mx-3  text-yellow-700 block rounded-md px-3 py-2 text-base font-medium " to="/login">Login</NavLink>
<NavLink  className="md:mx-3  text-yellow-700 block rounded-md px-3 py-2 text-base font-medium " to="/signup">Signup</NavLink>

    </div>
  </div>
</nav>
</div>
  );
}
export default Header;