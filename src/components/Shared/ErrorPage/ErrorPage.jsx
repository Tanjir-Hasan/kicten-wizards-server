import React from 'react';
import { Link, useRouteError } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';

const ErrorPage = () => {
    const { error, status } = useRouteError();
    console.log(status)
    return (
        <div className='flex flex-col align-middle h-screen justify-center items-center my-auto'>
            <img src="https://i.ibb.co/T1zLHgy/3747371.jpg" alt="" className='h-64' />
            <h3 className='text-5xl font-extrabold text-[#0F1D22] my-4'>Error: {status}</h3>
            <p className='text-xl mb-4 text-center'>{error.message}</p>
            <Link to='/'>
                <button className='flex items-center gap-3 mx-auto text-slate-800 text-xl bg-[#e19a3c] hover:bg-[#f2bc71] p-3 rounded-lg'>
                    Back to Home
                    <FaHome className="h-6 w-6 text-white" />
                </button>
            </Link>
        </div>
    );
};

export default ErrorPage;