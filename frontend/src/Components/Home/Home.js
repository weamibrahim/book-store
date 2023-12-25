// Home.js

import React from 'react';
import './Home.css';
import { Carousel } from 'flowbite-react';
function Home() {
    
  return (
    <div>
     <div className="h-64 sm:h-64 xl:h-80 2xl:h-96 ">
      <Carousel>
        <img  src="https://img.freepik.com/free-photo/dad-daughter-together-home_144627-39796.jpg?size=626&ext=jpg&ga=GA1.1.1532466403.1676939380&semt=sph" alt="..." />
        <img src="https://img.freepik.com/free-photo/modern-bookstore-showcasing-rows-vibrant-books_60438-3565.jpg?size=626&ext=jpg&ga=GA1.1.1532466403.1676939380&semt=sph" alt="..." />
        <img src="https://img.freepik.com/free-photo/book-library-with-open-textbook_1150-5916.jpg?size=626&ext=jpg&ga=GA1.1.1532466403.1676939380&semt=sph" alt="..." />
        <img src="https://img.freepik.com/free-photo/books-assortment-with-white-background_23-2148898300.jpg?size=626&ext=jpg&ga=GA1.1.1532466403.1676939380&semt=sph" alt="..." />
        <img src="https://img.freepik.com/free-photo/open-flying-old-books_1232-2096.jpg?size=626&ext=jpg&ga=GA1.1.1532466403.1676939380&semt=sph" alt="..." />
      </Carousel>
    </div>







    <div className='grid  md:grid-cols-2 gap-4 my-5 container mx-auto'>
      <div >
      <img src="https://img.freepik.com/free-photo/international-day-education-cartoon-style_23-2151007415.jpg?size=626&ext=jpg&ga=GA1.1.1532466403.1676939380&semt=sph" alt="..." />
      </div>
      <div className='grid grid-rows-2 gap-2' >
     <div className='h-64' ><img className='h-full w-full' src="https://img.freepik.com/free-photo/front-view-stacked-books-earth-globe-open-book-pencils-education-day_23-2149241018.jpg?size=626&ext=jpg&ga=GA1.1.1532466403.1676939380&semt=sph" alt="..." /></div>
     <div className='h-64'> <img className='h-full w-full' src="https://img.freepik.com/free-photo/front-view-composition-with-different-books_23-2148851048.jpg?size=626&ext=jpg&ga=GA1.1.1532466403.1676939380&semt=sph" alt="..." /></div>
      </div>

    </div>




{/*------------------------------------------------------- product ------------------------------------------*/}

<div className='text-2xl  tracking-tight container mx-auto text-gray-900 dark:text-white'>PART OF PRODUCTS</div>


    <div className='grid  md:grid-cols-4 gap-4 my-5 container mx-auto '>
    

    <div class="max-w-sm bg-white border border-gray-200  shadow dark:bg-gray-800 dark:border-gray-700 max-h-sm ">
        <a href="#">
            <img class="rounded-t-lg h-64 object-cover" src="https://img.freepik.com/free-photo/red-hardcover-book-front-cover_1101-833.jpg?size=626&ext=jpg&ga=GA1.1.1532466403.1676939380&semt=sph" alt="" />
        </a>
        <div class="p-5">
            <a href="#">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
            </a>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
        </div>
        </div>



        <div class="max-w-sm bg-white border border-gray-200  shadow dark:bg-gray-800 dark:border-gray-700 max-h-sm ">
        <a href="#">
            <img class=" h-64 object-cover" src="https://img.freepik.com/premium-photo/3d-textbook-placed-against-green-background_360032-2593.jpg?size=626&ext=jpg&ga=GA1.1.1532466403.1676939380&semt=ais" alt="" />
        </a>
        <div class="p-5">
            <a href="#">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
            </a>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
        </div>
        </div>



        <div class="max-w-sm bg-white border border-gray-200  shadow dark:bg-gray-800 dark:border-gray-700 max-h-sm ">
        <a href="#">
            <img class=" h-64 object-cover" src="https://img.freepik.com/free-photo/open-notebook-grass_1232-75.jpg?size=626&ext=jpg&ga=GA1.1.1532466403.1676939380&semt=ais" alt="" />
        </a>
        <div class="p-5">
            <a href="#">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
            </a>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
        </div>
        </div>


        <div class="max-w-sm bg-white border border-gray-200  shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
            <img class=" h-64 object-cover" src="https://img.freepik.com/free-photo/top-view-books-plants-arrangement_23-2148785101.jpg?size=626&ext=jpg&ga=GA1.1.1532466403.1676939380&semt=ais" alt="" />
        </a>
        <div class="p-5">
            <a href="#">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
            </a>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
        </div>
        </div>


    </div>
    
    </div>
  );
}

export default Home;
