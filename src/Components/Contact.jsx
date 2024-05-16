import React, { useRef } from 'react';

function Contact() {
    const formRef = useRef(null);

    const handleFormSubmit = (event) => {
        event.preventDefault(); // Prevents default form submission behavior
        const form = new FormData(formRef.current);
        // Assuming you have your form submission logic here, for example, using fetch
        fetch('https://getform.io/f/pamqxxda', {
            method: 'POST',
            body: form
        })
        .then(response => {
            if (response.ok) {
                // Form submitted successfully, reset the form fields
                alert('Form Submitted Successfully!');
                formRef.current.reset();
            } else {
                // Handle form submission failure
                console.error('Form submission failed:', response.statusText);
            }
        })
        .catch(error => {
            console.error('Error submitting form:', error);
        });
    };

    return (
        <>
            <div name='contact' className='w-full h-[90vh] bg-slate-800 flex justify-center items-center p-[2%] text-slate-300 font-abc'>
                <form ref={formRef} onSubmit={handleFormSubmit} className='flex flex-col max-w-[600px] w-[80%] '>
                    <div className='pb-[4%]'>
                        <p className='text-4xl font-bold inline border-b-4 border-pink-600'>Contact me</p>
                    </div>
                    <input className='p-[1%] bg-slate-300 text-slate-900' type="text" placeholder='Name' name='name'/>
                    <input className='my-[2%] p-[1%] bg-slate-300 text-slate-900' type="email" placeholder='Email' name='email'/>
                    <textarea name='message' rows="5" className=' bg-slate-300 p-[1%] text-slate-900' placeholder='Message'></textarea>
                    <button className='text-white b-2 hover:bg-pink-600 hover:border-pink-600 p-[1.5%] my-[4%] mx-auto border-2' type="submit">Submit</button>
                </form>
            </div>
        </>
    );
}

export default Contact;