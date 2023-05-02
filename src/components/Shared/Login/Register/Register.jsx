import React, { useContext } from 'react';
import { Form, Link } from 'react-router-dom';
import Lottie from "lottie-react";
import register from "../../../../../public/animation/101191-submit-application-successfully.json";
import { AuthContext } from '../../../providers/AuthProvider';

const Register = () => {

    const { createUser } = useContext(AuthContext);

    const handleRegister = event => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const photo = form.photo.value;
        const password = form.password.value;
        const confirmPassword = form.confirmPassword.value;
        console.log(name, email, photo, password, confirmPassword)

        createUser(email, password)
            .then(result => {
                const createUser = result.user;
                console.log(createUser)
            })
            .catch(error => {
                console.error(error)
            })
    }

    return (
        <div className='flex justify-around items-center w-full mx-auto px-8'>
            <div className='w-1/2 mx-auto border-2 border-[#0F1D22] rounded-md mt-6 p-12'>
                <h3 className='text-2xl font-medium mb-6'>Create an account</h3>
                <Form onSubmit={handleRegister} className='flex flex-col'>
                    <input type="text" name="name" id="" placeholder='Your Name' className='placeholder-gray-800 border-b border-gray-300 outline-none mb-4 pb-2' />
                    <input type="text" name="photo" id="" placeholder='Photo URL' className='placeholder-gray-800 border-b border-gray-300 outline-none mb-4 pb-2' />
                    <input type="email" name="email" id="" placeholder='Enter your email' className='placeholder-gray-800 border-b border-gray-300 outline-none mb-4 pb-2' />
                    <input type="password" name="password" id="" placeholder='Password' className='placeholder-gray-800 border-b border-gray-300 outline-none mb-4 pb-2' />
                    <input type="confirm" name="confirmPassword" id="" placeholder='Confirm Password' className='placeholder-gray-800 border-b border-gray-300 outline-none mb-4 pb-2' />
                    <button className='text-slate-950 bg-[#eebe7a] hover:bg-[#f2d3a8] my-6 py-3'>Register</button>
                    <p className='text-center'>Already have an account? <Link to="/login" className='text-[#eebe7a] hover:text-[#f2d3a8] underline underline-offset-2 '>Login</Link></p>
                </Form>
            </div>
            <Lottie animationData={register} loop={true} className='w-1/2 h-96' />
        </div>
    );
};

export default Register;