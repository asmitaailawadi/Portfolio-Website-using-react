import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes, FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { Link } from 'react-scroll'


function Navbar() {
    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav);

    const [navHeight, setNavHeight] = useState(0);
    useEffect(() => {
        const navbarHeight = window.innerHeight * 0.1;
        setNavHeight(navbarHeight);
    }, []);

    return (
        <>
            <div className='font-abc fixed w-screen h-[10%] flex justify-between items-center bg-[#0a192F] text-gray-300 z-10' >
                <div className='h-[50%] mx-[2%] w-[12%] hover:cursor-pointer'>
                    <Link to="home" smooth={true} duration={500} offset={-navHeight}>
                        <img className='rounded-full h-full w-auto' src='https://static.vecteezy.com/system/resources/previews/004/699/297/non_2x/aa-letter-logo-modern-concept-isolated-on-white-background-vector.jpg' alt='Logo'></img>
                    </Link>
                </div>

                <div className='hidden md:block mx-[5%] w-[40%] h-full py-[2%]'>
                    <ul className='flex justify-between cursor-pointer font-medium h-full'>
                        <li className='hover:underline hover:font-bold h-full'>
                            <Link to="home" smooth={true} duration={500} offset={-navHeight}>Home</Link>
                        </li>

                        <li className='hover:underline hover:font-bold h-full'>
                            <Link to="skills" smooth={true} duration={500} offset={-navHeight}>Skills</Link>
                        </li>

                        <li className='hover:underline hover:font-bold h-full'>
                            <Link to="contact" smooth={true} duration={500} offset={-navHeight}>Contact Me</Link>
                        </li>
                    </ul>
                </div>



                <div onClick={handleClick} className='md:hidden z-10 hover:cursor-pointer'>
                    {!nav ? <FaBars className='text-2xl mx-4' /> : <FaTimes className='text-2xl mx-4' />}
                </div>


                <ul className={!nav ? 'hidden' : 'absolute top-0 l-0 w-full h-screen bg-[#0a192F] flex flex-col justify-center items-center cursor-pointer md:hidden'}>
                    <li className='py-6 text-4xl hover:text-pink-600'>
                        <Link onClick={handleClick} to="home" smooth={true} duration={500} offset={-navHeight}>Home</Link>
                    </li>
                    <li onClick={handleClick} className='py-6 text-4xl hover:text-pink-600'>
                        <Link onClick={handleClick} to="skills" smooth={true} duration={500} offset={-navHeight}>Skills</Link>
                    </li>
                    <li onClick={handleClick} className='py-6 text-4xl hover:text-pink-600'>
                        <Link onClick={handleClick} to="contact" smooth={true} duration={500} offset={-navHeight}>Contact Me</Link>
                     </li>
                </ul>

                <div className='fixed flex-col top-[35%] w-[10%] h-[25%] hidden md:flex'>
                    <ul className='h-full'>
                        <li className='w-[100%] h-[32%] flex justify-between ml-[-65%] hover:ml-[0%] duration-500 bg-blue-400 px-[8.5%]'>
                            <a href='/' className='w-full flex justify-between items-center font-bold'>LinkedIn <FaLinkedin size={30} /></a>
                        </li>

                        <li className='w-[100%] h-[32%] flex justify-between ml-[-65%] hover:ml-[0px] duration-500 bg-[#b82626] px-[8.5%]'>
                            <a href='/' className='w-full flex justify-between items-center font-bold'>Email <HiOutlineMail size={30} /></a>
                        </li>

                        <li className='w-[100%] h-[32%] flex justify-between ml-[-65%] hover:ml-[0px] duration-500 bg-slate-950 px-[8.5%]'>
                            <a href='/' className='w-full flex justify-between items-center font-bold'>Github <FaGithub size={30} /></a>
                        </li>

                        <li className='w-[100%] h-[32%] flex justify-between ml-[-65%] hover:ml-[0px] duration-500 bg-[#d11d53] px-[8.5%]'>
                            <a href='/' className='w-full flex justify-between items-center font-bold'>Instagram <FaInstagram size={30} /></a>
                        </li>

                        <li className='w-[100%] h-[32%] flex justify-between ml-[-65%] hover:ml-[0px] duration-500 bg-[#514b4d] px-[8.5%]'>
                            <a href='/' className='w-full flex justify-between items-center font-bold'>Resume <BsFillPersonLinesFill size={30} /></a>
                        </li>

                    </ul>
                </div>
            </div>
        </>
    )
}

export default Navbar