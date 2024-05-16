import React from 'react'

function Contact(){
    return (
        <>
            <div name='contact' className='w-full h-[90vh] bg-slate-800 flex justify-center items-center p-[2%] text-slate-300 font-abc'>
                <form method="POST" action='https://getform.io/f/pamqxxda' className='flex flex-col max-w-[600px] w-[80%] '>
                    <div className='pb-[4%]'>
                        <p className='text-4xl font-bold inline border-b-4 border-pink-600'>Contact me</p>
                    </div>
                    <input className='p-[1%] bg-slate-300 text-slate-900' type="text" placeholder='Name' name='name'/>
                    <input className='my-[2%] p-[1%] bg-slate-300 text-slate-900' type="email" placeholder='Email' name='email'/>
                    <textarea name='message' rows="5" className=' bg-slate-300 p-[1%] text-slate-900' placeholder='Message'></textarea>
                    <button className='text-white b-2 hover:bg-pink-600 hover:border-pink-600 p-[1.5%] my-[4%] mx-auto border-2 ' onClick={() => form.reset()}>Submit</button>
                </form>
            </div>
        </>
    );
}

export default Contact