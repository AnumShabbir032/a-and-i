import React from 'react'
import NavBar from '../components/NavBar';

function Home() {
  return (
    <div className='bg-gray-950'>
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


      {/* NavBar */}
      <div className="max-w-6xl mx-auto">
        <NavBar />
        {/* Banner */}
        <div className='h-[630px] flex justify-end items-center'>
          <div className='border border-[#b68b03] h-[400px] w-[30%] absolute z-10 left-80'></div>
          <div className='border w-[50%] h-[500px] relative overflow-hidden' >
            <img src='/images/bg1.jpg' alt="" width="100%" height="400px" />
          </div>
        </div>

        <div className='py-10 flex flex-col md:flex-row items-center justify-center max-w-5xl mx-auto md:px-8'>
          <div className='border border-[#b68b03] bg-[#b68b03] h-[400px] w-[70%] md:w-[50%] md:-mr-44 mr-0 -mb-44 md:mb-0 z-[2] text-white flex flex-col justify-center space-y-6 px-8 rounded-t-2xl md:rounded-none'>
            <h1 className='text-3xl font-bold'>lorem Ippsum</h1>
            <p className='text-lg font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit nobis laboriosam amet maxime assumenda laudantium modi quo saepe quibusdam ullam.</p>
          </div>
          <div className='h-[600px] w-[95%] md:w-[80%] z-[1] bg-cover bg-center rounded-b-3xl md:rounded-none' style={{backgroundImage: 'url(/images/bg1.jpg)'}}>
          </div>

        </div>


        {/* Banner */}
        {/* Banner */}
        {/* <div className='border-4 p-12 h-[630px] flex justify-end items-center'>
          <div className='border-4 w-[50%] h-[540px] absolute z-0 left-80'>
            <img src={Background} alt="" width="100%" height="400px" />
          </div>
          <div className='border-4 border-[#b68b03] h-[400px] w-[30%] relative'></div>
        </div> */}
        {/* Banner */}
        {/* Banner */}
        {/* <div className='border-4 p-12 h-[630px] flex justify-end items-center'>
          <div className='border-4 border-[#b68b03] h-[400px] w-[30%] absolute z-10 left-80'></div>
          <div className='border-4 w-[50%] h-[500px] relative'>
            <img src={Background} alt="" width="100%" height="400px" />
          </div>
        </div> */}
        {/* Banner */}{/* Banner */}
        {/* <div className='border-4 p-12 h-[630px] flex justify-end items-center'>
          <div className='border-4 border-[#b68b03] h-[400px] w-[30%] absolute z-10 left-80'></div>
          <div className='border-4 w-[50%] h-[500px] relative'>
            <img src={Background} alt="" width="100%" height="400px" />
          </div>
        </div> */}
        {/* Banner */}

      </div>
      {/* NavBar */}


    </div>
  )
}

export default Home