import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div>
            <div className='w-5/12 mx-auto border-2 border-[#0F1D22] rounded-md mt-6 p-12'>
                <h3 className='text-2xl font-medium mb-6'>Create an account</h3>
                <div className='flex flex-col'>
                    <input type="text" name="" id="" placeholder='Your Name' className='placeholder-gray-800 border-b border-gray-300 outline-none mb-4 pb-2' />
                    <input type="text" name="" id="" placeholder='Photo URL' className='placeholder-gray-800 border-b border-gray-300 outline-none mb-4 pb-2' />
                    <input type="email" name="" id="" placeholder='Enter your email' className='placeholder-gray-800 border-b border-gray-300 outline-none mb-4 pb-2' />
                    <input type="password" name="" id="" placeholder='Password' className='placeholder-gray-800 border-b border-gray-300 outline-none mb-4 pb-2' />
                    <button className='text-slate-950 bg-[#eebe7a] hover:bg-[#f2d3a8] my-6 py-3'>Register</button>
                    <p className='text-center'>Already have an account? <Link to="/login" className='text-[#eebe7a] hover:text-[#f2d3a8] underline underline-offset-2 '>Login</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Register;