import React from 'react'
import html from '../assets/html.png'
import css from '../assets/css.png'
import js from '../assets/js.png'
import react from '../assets/react.png'
import tailwind from '../assets/tailwindcss.png'
import bootstrap from '../assets/bootstrap.png'

function Skills(){
    return (
    <>
        <div name='skills' className='bg-slate-700 text-gray-300 h-[90vh]'>
            <div className='mx-auto p-[5%] flex flex-col justify-center w-full h-full'>
                <div>
                    <p className='text-4xl pb -[5%] font-bold underline text-center pb-[5%]'>
                        Skills
                    </p>
                </div>

                <div className='w-full grid grid-cols-2 md:grid-cols-3 gap-4 text-center'>
                    <div className='hover:scale-110 duration-500'>
                        <img src={html} alt='html logo' className='w-[50%] mx-auto'></img>
                        <p>HTML</p>
                    </div>
                    <div className='hover:scale-110 duration-500'>
                        <img src={css} alt='css logo' className='w-[50%] mx-auto'></img>
                        <p>CSS</p>
                    </div>
                    <div className='hover:scale-110 duration-500'>
                        <img src={js} alt='js logo' className='w-[50%] mx-auto'></img>
                        <p>Javascript</p>
                    </div>
                    <div className='hover:scale-110 duration-500'>
                        <img src={tailwind} alt='tailwindcss logo' className='w-[50%] mx-auto'></img>
                        <p>TailwindCSS</p>
                    </div>
                    <div className='hover:scale-110 duration-500'>
                        <img src={bootstrap} alt='Bootstrap logo' className='w-[50%] mx-auto'></img>
                        <p>Bootstrap</p>
                    </div>
                    <div className='hover:scale-110 duration-500'>
                        <img src={react} alt='React logo' className='w-[50%] mx-auto'></img>
                        <p>React</p>
                    </div>
                    
                </div>
            </div>
        </div>
    </>
    )
}

export default Skills