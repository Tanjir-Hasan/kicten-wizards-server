import React from 'react';
import Lottie from "lottie-react";
import submitRecipe from "../../../../public/animation/47164-cooking-with-auberigne.json";
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const SubmitRecipe = () => {
    return (
        <>
            <h1 className='text-5xl font-semibold font-mono text-center text-slate-800 my-10 p-8'>Share Your Recipes</h1>
            <div data-aos="flip-up" className='lg:flex items-center w-11/12 mx-auto'>
                <Lottie animationData={submitRecipe} loop={true} className='lg:w-2/4 h-96' />
                <div className='lg:w-2/4 px-5'>
                    <p className='text-sm font-thin text-slate-950 lg:text-right'>You can showcase your culinary talent by sharing your favorite recipes with the world. Submit your recipes to our platform, and let others enjoy the delicious creations that you have cooked up in your own kitchen. Whether you're a professional chef or a home cook, this is the perfect place to share your passion for food and inspire others to try new things in the kitchen. Join our community of foodies and start sharing your recipes today!</p>
                    <span className='lg:flex justify-end'>
                        <Link to="/login" className="btn text-white bg-[#0077b6] border-none hover:bg-sky-600 mt-3 px-10">Login</Link>
                    </span>
                </div>
            </div>
        </>
    );
};

export default SubmitRecipe;