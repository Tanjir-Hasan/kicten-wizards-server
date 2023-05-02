import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div>
            <div className='w-5/12 mx-auto border-2 border-[#0F1D22] rounded-md mt-6 p-12'>
                <h3 className='text-2xl font-medium mb-6'>Login</h3>
                <div className='flex flex-col'>
                    <input type="email" name="" id="" placeholder='User name or email' className='placeholder-gray-800 border-b border-gray-300 outline-none mb-4 pb-2' />
                    <input type="password" name="" id="" placeholder='Password' className='placeholder-gray-800 border-b border-gray-300 outline-none mb-4 pb-2' />
                    <div className='inline-flex gap-2'>
                        <input type="checkbox" name="" id="" />
                        <p>Remember Me</p>
                    </div>
                    <button className='text-slate-950 bg-[#eebe7a] hover:bg-[#f2d3a8] my-6 py-3'>Login</button>
                    <p className='text-center'>Don't have an account? <Link to="/register" className='text-[#eebe7a] hover:text-[#f2d3a8] underline underline-offset-2'>Create an account</Link></p>
                </div>
            </div>
            <div className="flex items-center w-5/12 mx-auto py-4">
                <div className="flex-grow h-px bg-[#0F1D22]"></div>
                <span className="flex-shrink text-xl px-4 font-bold">Or</span>
                <div className="flex-grow h-px bg-[#0F1D22]"></div>
            </div>
            <div className='flex flex-col gap-2 w-4/12 mx-auto'>
                <button className='flex items-center border border-[#0F1D22] rounded-full p-2'>
                    <img src="https://i.ibb.co/TTGM1hm/google.png
https://i.ibb.co/T8KScYH/github.png" className='h-8 ml-1' alt="" />
                    <span class="text-center flex-1">
                        Continue with Google
                    </span>
                </button>
                <button className='flex items-center border border-[#0F1D22] rounded-full p-2'>
                    <img src="https://i.ibb.co/T8KScYH/github.png" className='h-8 ml-1' alt="" />
                    <span class="text-center flex-1">
                        Continue with Github
                    </span>
                </button>
            </div>
        </div>
    );
};

export default Login;