import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import Lottie from "lottie-react";
import login from "../../../../../public/animation/122987-admin-page-koperasi.json";
import { AuthContext } from '../../../providers/AuthProvider';
import { signInWithPopup } from 'firebase/auth';

const Login = () => {

    const { id } = useParams();

    const [error, setError] = useState('');

    const { signUser, googleAuthProvider, auth, gitHubAuthProvider, userUpdate } = useContext(AuthContext);

    const navigate = useNavigate();

    const location = useLocation();

    const from = location.state?.from?.pathname || "/" || `/data/${id}`;

    const handleLogin = event => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        signUser(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                setError('');
                userUpdate(name);
                navigate(from, { replace: true })
            })
            .catch(error => {
                setError(error.message);
            })
    };



    const handleGoogleSign = () => {
        signInWithPopup(auth, googleAuthProvider)
            .then(result => {
                const googleUser = result.user;
                console.log(googleUser);
                navigate(from, { replace: true })
            })
            .catch(error => {
                setError(error);
            })
    };

    const handleGitHubSign = () => {
        signInWithPopup(auth, gitHubAuthProvider)
            .then(result => {
                const gitHubUser = result.user;
                console.log(gitHubUser);
                navigate(from, { replace: true })
            })
            .catch(error => {
                setError(error);
            })
    };

    return (
        <>
            <h3 className='text-4xl font-medium text-center my-6'>Please Login</h3>
            <p className='text-xl font-extrabold text-center text-rose-500'>{error}</p>
            <div className='flex justify-around items-center mx-auto'>
                <Lottie animationData={login} loop={true} className='w-96 h-96' />
                <div>
                    <div style={{backgroundImage: "linear-gradient( 109.6deg,  rgba(223,234,247,1) 11.2%, rgba(244,248,252,1) 91.1% )"}} className='w-full mx-auto border-2 border-[#0F1D22] rounded-md mt-6 p-12'>
                        <form onSubmit={handleLogin} className='flex flex-col'>
                            <input type="email" name="email" id="" placeholder='User name or email' className='placeholder-gray-800 border-b border-[#0F1D22] outline-none rounded-xl px-3 mb-4 py-2' required />

                            <input type="password" name="password" id="" placeholder='Password' className='placeholder-gray-800 border-b border-[#0F1D22] outline-none rounded-xl px-3 mb-4 py-2' required />

                            <div className='inline-flex gap-2'>
                                <input type="checkbox" name="" id="" />
                                <p>Remember Me</p>
                            </div>
                            <button className='text-white bg-[#0077b6] border-none hover:bg-sky-600 my-6 py-3 hover:animate-pulse' >Login</button>
                            <p className='text-center'>Don't have an account? <Link to="/register" className='text-[#124764] hover:text-sky-600 underline underline-offset-2'>Create an account</Link></p>
                        </form>
                    </div>
                    <div className="flex items-center w-full mx-auto py-4">
                        <div className="flex-grow h-px bg-[#0F1D22]"></div>
                        <span className="flex-shrink text-xl px-4 font-bold">Or</span>
                        <div className="flex-grow h-px bg-[#0F1D22]"></div>
                    </div>
                    <div className='flex flex-col gap-2 w-full mx-auto'>
                        <button className='flex items-center border-2 border-r-[#4285F4] border-l-[#DB4437] border-t-[#0F9D58] border-b-[#F4B400] rounded-full p-2'>
                            <img src="https://i.ibb.co/TTGM1hm/google.png
https://i.ibb.co/T8KScYH/github.png" className='h-8 ml-1 animate-spin' alt="" />
                            <span onClick={handleGoogleSign} className="text-center text-slate-950 flex-1 hover:animate-pulse">
                                Continue with Google
                            </span>
                        </button>
                        <button className='flex items-center border-2 border-l-[#000000] border-r-[#000000] border-t-[#2b92d7] border-b-[#3498db] rounded-full p-2'>
                            <img src="https://i.ibb.co/Jq4K5ny/github-1.png" className='h-8 ml-1 animate-spin' alt="" />
                            <span onClick={handleGitHubSign} className="text-center flex-1 text-slate-950 hover:animate-pulse">
                                Continue with Github
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;