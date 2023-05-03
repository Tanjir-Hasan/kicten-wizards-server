import React from 'react';
import { Link } from 'react-router-dom';
import LazyLoad from 'react-lazy-load';

const DynamicChef = ({ chef }) => {
    const { chef_id, chef_picture, chef_name, years_of_experience, number_of_recipes, likes } = chef;
    return (
        <>
            {/* <LazyLoad width={1024} height={762} threshold={0.99}>
        <img src={chef_picture} className='h-64 rounded-ss-2xl' />
        </LazyLoad> */}
            <div className="lg:flex bg-base-100 shadow-xl rounded-lg w-2/3 mx-auto mb-6">
                <LazyLoad>
                    <img src={chef_picture} className='h-64 rounded-ss-2xl' />
                </LazyLoad>
                <div className="card-body lg:flex lg:flex-row items-center justify-between">
                    <div className='lg:flex gap-12'>
                        <h2 className="card-title text-[#d90429]">{chef_name}</h2>
                        <div>
                            <p className='text-slate-800 font-sans'>Years of experience: {years_of_experience}</p>
                            <p className='text-slate-800 font-sans'>Numbers of recipes: {number_of_recipes}</p>
                            <span className='inline-flex items-center gap-2 mt-3'>
                                <img src="https://i.ibb.co/xqZM3Mm/like.png" alt="" className='h-8' />
                                <p className='font-bold text-[#d90429]'>{likes}</p>
                            </span>
                        </div>
                    </div>
                    <div>
                        <Link to={`/data/${chef_id}`}>
                            <button className="btn text-slate-950 bg-[#e19a3c] hover:bg-[#f2bc71] border-none">View Recipes</button>
                        </Link>
                    </div>
                </div>

            </div>
        </>
    );
};

export default DynamicChef;