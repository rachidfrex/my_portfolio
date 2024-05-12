import './index.css'
import Nav from './components/nav'
import Header from './components/header'
import Content from './components/content'
import Build from './components/build'

function App() {

  return (
    <div className=' hero    w-full m-0 h-fit'>
      {/* <Nab/> */}
      <div className='   '>
      <Nav/>
      
      <Header/>
      
      <Content/>
     
      <Build/>
      </div>
      
    </div>
      

    
  )
}

export default App
