import React, { useContext } from 'react';
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import Lottie from "lottie-react";
import login from "../../../../../public/animation/122987-admin-page-koperasi.json";
import { AuthContext } from '../../../providers/AuthProvider';
import { signInWithPopup } from 'firebase/auth';

const Login = () => {

    const { id } = useParams();

    const { signUser, googleAuthProvider, auth, gitHubAuthProvider } = useContext(AuthContext);

    const navigate = useNavigate();

    const location = useLocation();

    const from = location.state?.from?.pathname || `/data/${id}`;

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
                navigate(from, { replace: true })
            })
            .catch(error => {
                console.log(error);
            })
    };



    const handleGoogleSign = () => {
        signInWithPopup(auth, googleAuthProvider)
            .then(result => {
                const googleUser = result.user;
                console.log(googleUser)
            })
    };

    const handleGitHubSign = () => {
        signInWithPopup(auth, gitHubAuthProvider)
            .then(result => {
                const gitHubUser = result.user;
                console.log(gitHubUser)
            })
            .catch(error => {
                console.log(error);
            })
    };

    return (
        <>
            <h3 className='text-4xl font-medium text-center my-6'>Please Login</h3>
            <div className='flex justify-around items-center mx-auto'>
                <Lottie animationData={login} loop={true} className='w-96 h-96' />
                <div>
                    <div className='w-full mx-auto border-2 border-[#0F1D22] rounded-md mt-6 p-12'>
                        <form onSubmit={handleLogin} className='flex flex-col'>
                            <input type="email" name="email" id="" placeholder='User name or email' className='placeholder-gray-800 border-b border-[#0F1D22] outline-none rounded-xl px-3 mb-4 py-2' required />

                            <input type="password" name="password" id="" placeholder='Password' className='placeholder-gray-800 border-b border-[#0F1D22] outline-none rounded-xl px-3 mb-4 py-2' required />

                            <div className='inline-flex gap-2'>
                                <input type="checkbox" name="" id="" />
                                <p>Remember Me</p>
                            </div>
                            <button className='text-slate-950 bg-[#e19a3c] hover:bg-[#f2bc71] my-6 py-3' >Login</button>
                            <p className='text-center'>Don't have an account? <Link to="/register" className='text-[#eebe7a] hover:text-[#f2d3a8] underline underline-offset-2'>Create an account</Link></p>
                        </form>
                    </div>
                    <div className="flex items-center w-full mx-auto py-4">
                        <div className="flex-grow h-px bg-[#0F1D22]"></div>
                        <span className="flex-shrink text-xl px-4 font-bold">Or</span>
                        <div className="flex-grow h-px bg-[#0F1D22]"></div>
                    </div>
                    <div className='flex flex-col gap-2 w-full mx-auto'>
                        <button className='flex items-center border border-[#0F1D22] rounded-full p-2 bg-[#e19a3c] hover:bg-[#f2bc71]'>
                            <img src="https://i.ibb.co/TTGM1hm/google.png
https://i.ibb.co/T8KScYH/github.png" className='h-12 ml-1 bg-white rounded-full p-2' alt="" />
                            <span onClick={handleGoogleSign} className="text-center text-slate-950 flex-1">
                                Continue with Google
                            </span>
                        </button>
                        <button className='flex items-center border border-[#0F1D22] rounded-full p-2'>
                            <img src="https://i.ibb.co/T8KScYH/github.png" className='h-8 ml-1' alt="" />
                            <span onClick={handleGitHubSign} className="text-center flex-1">
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