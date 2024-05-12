import './index.css'
import Nav from './components/nav'
import Header from './components/header'
import Content from './components/content'
import Build from './components/build'

function App() {

  return (
    <div className='  relative flex flex-col justify-start items-center gap-2    w-full m-0 h-fit '>
      <div className=" fixed -top-10 -left-10 h-96 w-96    bg-blue-500  blur-[200px] "/>
      <div className=" absolute top-10 left-32 h-96 w-96   bg-pink-500/45   blur-[200px] "/>
      <div className=" fixed top-0 left-0   grid-bg mix-blend-multiply "/>
      {/* <Nab/> */}
      
      <Nav/>
      
      <Header/>
      
      <Content/>
     
      <Build/>
      
    </div>
      

    
  )
}

export default App
