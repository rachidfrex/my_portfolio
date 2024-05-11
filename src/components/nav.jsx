import React from 'react'
import { useState , useEffect } from 'react'

function Nav() {
    const [burger , setBurger] = useState(false)
    const [active, setActive] = useState(false)
    const [activeLink, setActiveLink] = useState('About');
    useEffect(() => {
        const handleResize = () => {
          if (window.innerWidth < 640) {
            setBurger(true);
          } else {
            setBurger(false);
          }
        };
    
        // Call the handleResize function initially to set the state correctly when the component mounts
        handleResize();
    
        // Attach the event listener
        window.addEventListener('resize', handleResize);
    
        // Clean up the event listener when the component unmounts
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);

    

  return (
        <div
        className='flex justify-center items-center py-5'
        >
         <nav className=' mx-2 flex px-5 gap-5 sm:mx-0 text-center p-1.5 w-full  sm:w-[280px]   bg-indigo-100  rounded-full    '>
         {
                    burger ? (
                        <h1 className='text-xl font-poetsen text-indigo-600 ' > Frex </h1>
                    ) : (
                        null
                    )
                }
            <ul className=' pl-4 sm:pl-0 flex font-rubik w-full   text-indigo-600 justify-center items-center space-x-4 '>
                
            
            <li className={`px-3 py-0.5 rounded-full ${activeLink === 'About' ? 'bg-white' : ''}`} onClick={() => setActiveLink('About')}>
            About
            </li>
        <li className={`px-3 py-1 rounded-full ${activeLink === 'Project' ? 'bg-white' : ''}`}onClick={() => setActiveLink('Project')} > 
        Project
        </li>
        <li className={`px-3 py-1 rounded-full ${activeLink === 'Contact' ? 'bg-white' : ''}`} onClick={() => setActiveLink('Contact')}>
          Contact
        </li>
            </ul>
        </nav>
        <div className=' hidden absolute left-[5%] bg-indigo-100 rounded-full w-16 h-16 sm:flex flex-col gap-5 items-center justify-center '>
            <h1
            className='text-xl font-poetsen text-indigo-600'
            >
                Frex
            </h1>
            
        </div>
        <div className='flex  absolute right-[5%] justify-center items-center p-2 gap-2'>
            {active ? (
                <button className='flex justify-center items-center cursor-pointer bg-indigo-100 p-1 rounded-full' 
                onClick={() => setActive(!active)}
                >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000" fill="none">
                    <path d="M5.14286 14C4.41735 12.8082 4 11.4118 4 9.91886C4 5.54539 7.58172 2 12 2C16.4183 2 20 5.54539 20 9.91886C20 11.4118 19.5827 12.8082 18.8571 14" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                    <path d="M7.38287 17.0982C7.291 16.8216 7.24507 16.6833 7.25042 16.5713C7.26174 16.3343 7.41114 16.1262 7.63157 16.0405C7.73579 16 7.88105 16 8.17157 16H15.8284C16.119 16 16.2642 16 16.3684 16.0405C16.5889 16.1262 16.7383 16.3343 16.7496 16.5713C16.7549 16.6833 16.709 16.8216 16.6171 17.0982C16.4473 17.6094 16.3624 17.8651 16.2315 18.072C15.9572 18.5056 15.5272 18.8167 15.0306 18.9408C14.7935 19 14.525 19 13.9881 19H10.0119C9.47495 19 9.2065 19 8.96944 18.9408C8.47283 18.8167 8.04281 18.5056 7.7685 18.072C7.63755 17.8651 7.55266 17.6094 7.38287 17.0982Z" stroke="currentColor" stroke-width="1.5" />
                    <path d="M15 19L14.8707 19.6466C14.7293 20.3537 14.6586 20.7072 14.5001 20.9866C14.2552 21.4185 13.8582 21.7439 13.3866 21.8994C13.0816 22 12.7211 22 12 22C11.2789 22 10.9184 22 10.6134 21.8994C10.1418 21.7439 9.74484 21.4185 9.49987 20.9866C9.34144 20.7072 9.27073 20.3537 9.12932 19.6466L9 19" stroke="currentColor" stroke-width="1.5" />
                    <path d="M12 16V11" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                </button>
            ) : (
                <button className='flex justify-center items-center cursor-pointer bg-indigo-100 p-1 rounded-full'
                onClick={() => setActive(!active)} 
                >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000" fill="none">
                <path d="M21.5 14.0784C20.3003 14.7189 18.9301 15.0821 17.4751 15.0821C12.7491 15.0821 8.91792 11.2509 8.91792 6.52485C8.91792 5.06986 9.28105 3.69968 9.92163 2.5C5.66765 3.49698 2.5 7.31513 2.5 11.8731C2.5 17.1899 6.8101 21.5 12.1269 21.5C16.6849 21.5 20.503 18.3324 21.5 14.0784Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            </button>
            )}
            
            
            
        </div>
       
        </div>
 
  )
}

export default Nav