import './index.css'
import Nav from './components/nav'
import Header from './components/header'
import Content from './components/content'
import Build from './components/build'

function App() {

  return (
    <div className='  relative  flex flex-col gap-2  items-center  w-full m-0 h-fit '>
      <div className=" fixed -top-10 -left-10 h-96 w-96  -z-10   bg-blue-500/45  blur-[200px] "/>
      <div className=" absolute top-10 left-32 h-96 w-96 -z-10  bg-pink-500/35   blur-[200px] "/>
      <div className=" fixed top-0 left-0   grid-bg mix-blend-multiply -z-10  "/>
      {/* <Nab/> */}
      
      <Nav/>
      
      <Header/>
      
      <Content/>
     
      <Build/>
      
    </div>
      

    
  )
}

export default App
