import React from 'react';

const ContactUs = () => {
    return (
        <>
            <h1 className='text-5xl font-semibold font-mono text-center text-slate-800 my-10 p-8'>Contact Us</h1>
            <div style={{ backgroundImage: "linear-gradient( 109.6deg,  rgba(223,234,247,1) 11.2%, rgba(244,248,252,1) 91.1% )" }} className='w-1/2 mx-auto border-2 border-[#0F1D22] rounded-md mt-6 p-12'>
                <form className='flex flex-col'>

                    <input type="text" name="name" id="" placeholder='Your Name' className='placeholder-gray-800 border-b border-[#0F1D22] outline-none rounded-xl px-3 mb-4 py-2' required />

                    <input type="email" name="email" id="" placeholder='Enter your email' className='placeholder-gray-800 border-b border-[#0F1D22] outline-none rounded-xl px-3 mb-4 py-2' required />

                    <textarea name="message" id="" cols="30" rows="5" className='placeholder-gray-800 border-b border-[#0F1D22] outline-none rounded-xl px-3 mb-4 py-2' required placeholder='Write your message'></textarea>

                    <input type="submit" className='text-white bg-[#0077b6] border-none hover:bg-sky-600 my-6 py-3 hover:animate-pulse' value="Send Message" />

                </form>
            </div>
        </>
    );
};

export default ContactUs;