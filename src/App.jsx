import './index.css'
import Nav from './components/nav'
import Header from './components/header'
import Content from './components/content'
import Build from './components/build'

function App() {

  return (
    <div className=' hero   w-full m-0 h-fit'>
      {/* <Nab/> */}
      <Nav/>
      <Header/>
      <Content/>
      <Build/>
    </div>
      

    
  )
}

export default App
