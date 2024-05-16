import React, {useState,useEffect} from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
import Photo from '../assets/withoutbg.png'
import { Link } from 'react-scroll'


function Home() {

    const [navHeight, setNavHeight] = useState(0);
    useEffect(() => {
        const navbarHeight = window.innerHeight * 0.1;
        setNavHeight(navbarHeight);
    }, []);


    return (
        <>
            <div name='home' className='font-abc text-gray-300 bg-[url(https://media.tenor.com/YkRzx5p2nmUAAAAM/nothing.gif)] bg-no-repeat bg-cover flex justify-center items-center md:h-screen w-screen'>
            
                <div className='md:flex justify-between items-center font-bcd pt-[20%] md:pt-[0%] md:h-screen w-screen'>
                    <div className='mx-auto md:px-[8%] flex flex-col justify-center h-full w-[60%]'>
                        <h1 className='p-2 text-6xl font-extrabold  text-white'>Asmita Ailawadi</h1>
                        <h1 className='p-2 text-4xl text-gray-400 '>Frontend Developer</h1>
                        <p className='p-2 text-justify text-xl'>I am a Third year student at NITK. My domains of interest are Frontend Development(building and designing) DSA and Competitive Programming</p>
                        <div>
                            <Link to="skills" smooth={true} duration={500} offset={-navHeight}>
                                <button className='flex border-2 p-[2%] my-[2%] hover:bg-blue-950 hover:border-blue-950 group'>View Skills &nbsp;<span className='group-hover:rotate-90 duration-300'><HiArrowNarrowRight className='text-xl'></HiArrowNarrowRight></span></button>
                            </Link>                        
                        </div>
                    </div> 

                    <div className='mx-auto w-auto h-full'>
                        <img className='h-full w-auto mx-auto' src={Photo} alt='My photo' />
                    </div>
                </div>
                
            </div>
        </>
    )
}

export default Home;