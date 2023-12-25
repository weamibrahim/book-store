import { IoSearch } from "react-icons/io5";
import "./Book.css"
import { NavLink } from "react-router-dom";
function Books() {
  return (
    <div>
      <div className="flex justify-center  my-4">
        <IoSearch className="text-4xl text-yellow-700 mx-2" />
        <input type="text" className=" w-64 h-75 border-yellow-700 border-4 rounded-md" placeholder="Search" />
      </div>

      <div className="flex flex-col md:flex-row md:justify-evenly my-5">
    <button type="button" className="btn-style md:btn-md  focus:outline-none text-white bg-yellow-700 hover:bg-yellow-900 focus:ring-4 focus:ring-yellow-700 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900 ">Secondary</button>
    <button type="button" className="btn-style md:btn-md focus:outline-none text-white bg-yellow-700 hover:bg-yellow-900 focus:ring-4 focus:ring-yellow-700 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900 ">Secondary</button>
    <button type="button" className="btn-style md:btn-md focus:outline-none text-white bg-yellow-700 hover:bg-yellow-900 focus:ring-4 focus:ring-yellow-700 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900">Secondary</button>
</div>

     
    <div className="container mx-auto">
      <div className="grid md:grid-cols-3  gap-x-4 gap-y-4 my-4 ">



      <a href="#" class="flex flex-col items-center md:h-96  bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
    <img class="object-cover h-full  rounded-t-lg md:w-1/2  md:rounded-none md:rounded-s-lg" src="https://img.freepik.com/free-photo/creative-composition-world-book-day_23-2148883765.jpg?size=626&ext=jpg&ga=GA1.1.1532466403.1676939380&semt=sph" alt=""/>
    <div class="flex flex-col  h-full p-4 leading-normal  md:w-1/2 ">
        <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
       
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions </p>
        <div className="flex justify-center">
        <button type="button" class="text-yellow-700 hover:text-white border border-yellow-700 hover:bg-yellow-700 focus:ring-4 focus:outline-none focus:ring-yellow-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-yellow-700 dark:text-yellow-700 dark:hover:text-white dark:hover:bg-yellow-900 dark:focus:ring-yellow-900">Yellow</button>

        </div>
    </div>
</a>


<a href="#" class="flex flex-col items-center md:h-96  bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
    <img class="object-cover h-full  rounded-t-lg md:w-1/2  md:rounded-none md:rounded-s-lg" src="https://img.freepik.com/free-photo/creative-composition-world-book-day_23-2148883765.jpg?size=626&ext=jpg&ga=GA1.1.1532466403.1676939380&semt=sph" alt=""/>
    <div class="flex flex-col  h-full p-4 leading-normal  md:w-1/2 ">
        <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
       
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions </p>
        <div className="flex justify-center">
        <button type="button" class="text-yellow-700 hover:text-white border border-yellow-700 hover:bg-yellow-700 focus:ring-4 focus:outline-none focus:ring-yellow-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-yellow-700 dark:text-yellow-700 dark:hover:text-white dark:hover:bg-yellow-900 dark:focus:ring-yellow-900">Yellow</button>

        </div>
    </div>
</a>

<a href="#" class="flex flex-col items-center md:h-96  bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
    <img class="object-cover h-full  rounded-t-lg md:w-1/2  md:rounded-none md:rounded-s-lg" src="https://img.freepik.com/free-photo/creative-composition-world-book-day_23-2148883765.jpg?size=626&ext=jpg&ga=GA1.1.1532466403.1676939380&semt=sph" alt=""/>
    <div class="flex flex-col  h-full p-4 leading-normal  md:w-1/2 ">
        <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
       
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions </p>
        <div className="flex justify-center">
        <button type="button" class="text-yellow-700 hover:text-white border border-yellow-700 hover:bg-yellow-700 focus:ring-4 focus:outline-none focus:ring-yellow-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-yellow-700 dark:text-yellow-700 dark:hover:text-white dark:hover:bg-yellow-900 dark:focus:ring-yellow-900">Yellow</button>

        </div>
    </div>
</a>


<a href="#" class="flex flex-col items-center md:h-96  bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
    <img class="object-cover h-full  rounded-t-lg md:w-1/2  md:rounded-none md:rounded-s-lg" src="https://img.freepik.com/free-photo/creative-composition-world-book-day_23-2148883765.jpg?size=626&ext=jpg&ga=GA1.1.1532466403.1676939380&semt=sph" alt=""/>
    <div class="flex flex-col  h-full p-4 leading-normal  md:w-1/2 ">
        <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
       
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions </p>
        <div className="flex justify-center">
        <button type="button" class="text-yellow-700 hover:text-white border border-yellow-700 hover:bg-yellow-700 focus:ring-4 focus:outline-none focus:ring-yellow-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-yellow-700 dark:text-yellow-700 dark:hover:text-white dark:hover:bg-yellow-900 dark:focus:ring-yellow-900">Yellow</button>

        </div>
    </div>
</a>


<a href="#" class="flex flex-col items-center md:h-96  bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
    <img class="object-cover h-full  rounded-t-lg md:w-1/2  md:rounded-none md:rounded-s-lg" src="https://img.freepik.com/free-photo/creative-composition-world-book-day_23-2148883765.jpg?size=626&ext=jpg&ga=GA1.1.1532466403.1676939380&semt=sph" alt=""/>
    <div class="flex flex-col  h-full p-4 leading-normal  md:w-1/2 ">
        <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
       
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions </p>
        <div className="flex justify-center">
        <button type="button" class="text-yellow-700 hover:text-white border border-yellow-700 hover:bg-yellow-700 focus:ring-4 focus:outline-none focus:ring-yellow-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-yellow-700 dark:text-yellow-700 dark:hover:text-white dark:hover:bg-yellow-900 dark:focus:ring-yellow-900">Yellow</button>

        </div>
    </div>
</a>

<a href="#" class="flex flex-col items-center md:h-96  bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
    <img class="object-cover h-full  rounded-t-lg md:w-1/2  md:rounded-none md:rounded-s-lg" src="https://img.freepik.com/free-photo/creative-composition-world-book-day_23-2148883765.jpg?size=626&ext=jpg&ga=GA1.1.1532466403.1676939380&semt=sph" alt=""/>
    <div class="flex flex-col  h-full p-4 leading-normal  md:w-1/2 ">
        <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
       
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions </p>
        <div className="flex justify-center">
        <button type="button" class="text-yellow-700 hover:text-white border border-yellow-700 hover:bg-yellow-700 focus:ring-4 focus:outline-none focus:ring-yellow-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-yellow-700 dark:text-yellow-700 dark:hover:text-white dark:hover:bg-yellow-900 dark:focus:ring-yellow-900">Yellow</button>

        </div>
    </div>
</a>
</div>
</div>
     
    </div>



  );
}
export default Books