import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Lottie from "lottie-react";
import register from "../../../../../public/animation/101191-submit-application-successfully.json";
import errorImg from "../../../../../public/animation/101962-oh-no.json";
import { AuthContext } from '../../../providers/AuthProvider';

const Register = () => {

    const { createUser, userUpdate } = useContext(AuthContext);

    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const navigate = useNavigate();

    const location = useLocation();

    const from = location.state?.from?.pathname || "/" || `/data/${id}`;

    const handleRegister = event => {
        event.preventDefault();

        setSuccess('');

        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const photo = form.photo.value;
        const password = form.password.value;

        if (password.length < 6) {
            setError('Password must be at least 6 characters');
            return;
        }

        createUser(email, password)
            .then(result => {
                const createUser = result.user;
                userUpdate(name, photo)
                createUser.displayName = name;
                createUser.photoURL = photo;
                setSuccess('Account crated successfully!!!');
                setError('');
                form.reset();
                navigate(from, { replace: true })
            })
            .catch(error => {
                setError(error.message);
            })


    }

    return (
        <div>
            <h3 className='text-4xl font-medium text-center my-6'>Create an account</h3>
            {error && <Lottie animationData={errorImg} loop={true} className='flex justify-center w-64 mx-auto' />}
            <p className='text-xl font-extrabold text-center text-rose-500 w-1/2'>{error}</p>
            <p className='text-xl font-extrabold text-center text-[#0F1D22] w-1/2'>{success}</p>
            <div className='flex justify-around items-center w-full mx-auto px-8'>
                <div style={{ backgroundImage: "linear-gradient( 109.6deg,  rgba(223,234,247,1) 11.2%, rgba(244,248,252,1) 91.1% )" }} className='w-1/2 mx-auto border-2 border-[#0F1D22] rounded-md mt-6 p-12'>
                    <form onSubmit={handleRegister} className='flex flex-col'>

                        <input type="text" name="name" id="" placeholder='Your Name' className='placeholder-gray-800 border-b border-[#0F1D22] outline-none rounded-xl px-3 mb-4 py-2' required />

                        <input type="text" name="photo" id="" placeholder='Photo URL' className='placeholder-gray-800 border-b border-[#0F1D22] outline-none rounded-xl px-3 mb-4 py-2' required />

                        <input type="email" name="email" id="" placeholder='Enter your email' className='placeholder-gray-800 border-b border-[#0F1D22] outline-none rounded-xl px-3 mb-4 py-2' required />

                        <input type="password" name="password" id="" placeholder='Password' className='placeholder-gray-800 border-b border-[#0F1D22] outline-none rounded-xl px-3 mb-4 py-2' required />

                        <button className='text-white bg-[#0077b6] border-none hover:bg-sky-600 my-6 py-3 hover:animate-pulse'>Register</button>
                        <p className='text-center'>Already have an account? <Link to="/login" className='text-[#124764] hover:text-sky-600 underline underline-offset-2 '>Login</Link></p>
                    </form>
                </div>
                <Lottie animationData={register} loop={true} className='w-1/2 h-96' />
            </div>
        </div>
    );
};

export default Register;