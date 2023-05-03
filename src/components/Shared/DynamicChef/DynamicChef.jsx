import React from 'react';
import { Link } from 'react-router-dom';
import LazyLoad from 'react-lazy-load';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const DynamicChef = ({ chef }) => {
    const { chef_id, chef_picture, chef_name, years_of_experience, number_of_recipes, likes } = chef;
    return (
        <>
            <div data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000"
                className="lg:flex bg-base-100 shadow-xl rounded-lg w-2/3 mx-auto mb-6">
                <LazyLoad>
                    <img src={chef_picture} className='h-64 rounded-ss-2xl' />
                </LazyLoad>
                <div className="card-body lg:flex lg:flex-row items-center justify-between">
                    <div className='lg:flex gap-12'>
                        <h2 className="card-title text-blue-500">{chef_name}</h2>
                        <div>
                            <p className='text-slate-800 font-thin'>Years of experience: {years_of_experience}</p>
                            <p className='text-slate-800 font-thin'>Numbers of recipes: {number_of_recipes}</p>
                            <span className='inline-flex items-center gap-2 mt-3'>
                                <img src="https://i.ibb.co/xqZM3Mm/like.png" alt="" className='h-8' />
                                <p className='font-bold text-[#d90429]'>{likes}</p>
                            </span>
                        </div>
                    </div>
                    <div>
                        <Link to={`/data/${chef_id}`}>
                            <button className="btn bg-[#0077b6] border-none hover:bg-sky-600">View Recipes</button>
                        </Link>
                    </div>
                </div>

            </div>
        </>
    );
};

export default DynamicChef;