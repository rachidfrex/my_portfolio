import './index.css'
import Nav from './components/nav'
import Header from './components/header'
import Content from './components/content'
import Build from './components/build'

function App() {

  return (
    <div className=' relative w-full '>
      <div className=" fixed -top-10 -left-10 h-[20%] w-[60%] sm:w-[30%] -z-10   bg-blue-500  blur-[200px] "/>
      <div className=" absolute top-10 left-32 h-[20%] w-[60%]  sm:w-[30%] -z-10  bg-pink-500/35   blur-[200px] "/>
      <div className=" fixed top-0 left-0   grid-bg mix-blend-multiply -z-10  "/>
      {/* <Nab/> */}
      
     <div className='  relative w-full flex flex-col gap-2  items-center   m-0 h-fit'>
     <Nav/>
     </div>
     
      
      <Header/>
      
      <Content/>
     
      <Build/>
      
    </div>
      

    
  )
}

export default App
