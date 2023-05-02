import CurveTop from './components/CurveTop'
import Waves from './components/Waves'


import './App.css'

function App() {


  return (
    <div className='w-screen h-screen m-0'>
<section aria-label="About Air Citi User Experience" className=' bg-off-white  flex align-center justify-center flex-col text-off-white h-full scroll-smooth '>
        
        <div className='bg-light-blue p-5 flex-center relative text-center'>
          <h2 className='text-5xl text-white'>Huh?</h2>
          <span>A Solution</span>
          <CurveTop/>
        </div>
        <div className=''>
          <Waves />
       </div>
        <ul className='bg-dark-blue h-full'>
          <li className='w-52 h-52 sm:w-60 sm:h-60 md:w-80 md:h-80  p-2 shadow-xl text-center rounded-full absolute border-2 border-white border-solid left-0 xs:left-1/4 bottom-2/4 xs:bottom-1/4 opacity-90 hover:opacity-100 fill-light-blue group transition-all duration-300 scale-90 lg:scale-110 translate-x-1 lg:translate-x-5 translate-y-1 bg-off-white hover:transition-all hover:ease-in-out hover:bg-dark-blue hover:text-dark-blue hover:w-80 hover:h-80 md:hover:w-96 md:hover:h-96 hover:z-10 animate-[bounce_1s_ease-in-out_2]'>
            <h3 className='relative group-hover:transition-all top-1/4 text-dark-blue group-hover:top-10 group-hover:duration-500 text-3xl group-hover:text-2xl text-bold group-hover:text-white'>Tea</h3>
            <p className='opacity-0 p-2 relative top-2/4 group-hover:transition-all group-hover:ease-in-out group-hover:duration-500 group-hover:top-1/4 text-off-white group-hover:text-off-white group-hover:opacity-100'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga sequi corporis, incidunt provident quia iste hic. Animi amet veniam neque quaerat!</p>
          </li>
          <li className='w-52 h-52 sm:w-60 sm:h-60 md:w-80 md:h-80 p-2 shadow-xl text-center  rounded-full absolute border-2 border-white border-solid right-0 xs:left-1/2 bottom-2/4 xs:bottom-1/4 opacity-90 hover:opacity-100 fill-light-blue group transition-all duration-300 scale-90 lg:scale-110 translate-x-1 lg:-translate-x-10 translate-y-1 bg-off-white  hover:transition-all hover:ease-in-out hover:bg-dark-blue hover:text-dark-blue hover:w-80 hover:h-80 md:hover:w-96 md:hover:h-96 hover:z-10 animate-[bounce_1.2s_ease_.5s__2]'>
            <h3 className='relative group-hover:transition-all top-1/4 text-dark-blue group-hover:top-10 group-hover:duration-500 text-3xl  group-hover:text-2xl text-bold group-hover:text-white'>Coffee</h3>
            <p className='opacity-0 p-2 relative top-2/4 group-hover:transition-all group-hover:ease-in-out group-hover:duration-500 group-hover:top-1/4 text-off-white group-hover:text-off-white group-hover:opacity-100'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos aperiam nemo, ad distinctio adipisci maiores laboriosam similique!</p>
          </li>
          <li className='w-52 h-52 sm:w-60 sm:h-60 md:w-80 md:h-80 p-2  shadow-xl text-center  rounded-full absolute border-2 border-white border-solid left-1/4 xs:left-1/3 bottom-1/3 xs:bottom-1 opacity-90 hover:opacity-100 fill-light-blue group transition-all duration-300 scale-90 lg:scale-110 translate-x-1 -translate-y-5 bg-off-white  hover:transition-all hover:ease-in-out hover:bg-dark-blue hover:text-dark-blue hover:w-80 hover:h-80 md:hover:w-96 md:hover:h-96 hover:z-10 animate-[bounce_1.5s_ease-out_.2s_2]'>
            <h3 className='relative text-3xl group-hover:transition-all top-1/4 text-dark-blue group-hover:top-10 group-hover:duration-500 group-hover:text-2xl text-bold group-hover:text-white'>Sour Gummies</h3>
            <p className='opacity-0 p-2 relative top-2/4 group-hover:transition-all group-hover:ease-in-out group-hover:duration-500 group-hover:top-1/4 text-off-white group-hover:text-off-white group-hover:opacity-100'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel delectus ipsam ea esse voluptatem dicta sapiente mollitia expedita hic!</p>
          </li>
        </ul>
      </section>
    </div>
      
  )
}

export default App
