import React from 'react'
import NavBar from '../components/NavBar';
// import Carousel from '../components/Carousel';

function Home() {
  return (

    <div className='bg-gray-950 body-color'>
      {/* <div className="p-2 lg:bg-[#090909] flex justify-between">

        <div className="border border-gray-600 w-[10%] m-x-1">
          <a href="https://www.facebook.com/groupofai/" target="_blank" rel="noopener noreferrer">
            <i class="fa-brands fa-square-facebook"></i>
          </a>
          <a href="https://www.instagram.com/aigroupofai/?hl=en" target="_blank" rel="noopener noreferrer">
            <InstagramIcon sx={{ color: "#b68b03", width: "20%" }} />
          </a>
          <a href="https://www.youtube.com/c/AIGroupofCompanies" target="_blank" rel="noopener noreferrer">
            <YouTubeIcon sx={{ color: "#b68b03", width: "20%" }} />
          </a>
        </div>

        <div className="w-[30%] text-[#b68b03] text-sm text-align:center">
          <span>0311-222647 | 0311-643626 | emailto:xyz@gmail.com</span>
        </div>

      </div> */}
      {/* CONTACT INFO */}
      {/* height: 70, width: "40%", display: "flex", justifyContent: "space-arround", alignItems: "center"  */}





      <div className="max-w-6xl mx-auto">

        {/* NavBar */}
        <NavBar />
        {/* NavBar */}


        {/* Banner */}
        <div className='border w-[100%] h-[620px]'>
          {/* <Carousel /> */}
          <div className='border-yellow-600 border z-10 bottom-5 left-72 absolute w-[30%] h-[400px]'></div>

          <div className='flex justify-end my-8'>

            <div className='border w-[40%] flex flex-col banner-design'>
              <h1 className='border heading'>A & I Group of Companies</h1>
              <p className='border para'>Where dreams takes shape, and marketing meets real estate excellence.</p>
            </div>
          </div>



        </div>
        {/* Banner */}







        {/* Banner */}
        <div className='py-10 flex flex-col md:flex-row items-center justify-center max-w-5xl mx-auto md:px-8'>
          <div className='border border-[#b68b03] bg-[#b68b03] h-[400px] w-[70%] md:w-[50%] md:-mr-44 mr-0 -mb-44 md:mb-0 z-[2] text-white flex flex-col justify-center space-y-6 px-8 rounded-t-2xl md:rounded-none'>
            <h1 className='text-3xl font-bold'>lorem Ippsum</h1>
            <p className='text-lg font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit nobis laboriosam amet maxime assumenda laudantium modi quo saepe quibusdam ullam.</p>
          </div>
          <div className='h-[600px] w-[95%] md:w-[80%] z-[1] bg-cover bg-center rounded-b-3xl md:rounded-none' style={{ backgroundImage: 'url(/images/bg1.jpg)' }}>
          </div>

        </div>
        {/* Banner */}


      </div>



    </div>
  )
}

export default Home