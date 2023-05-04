import React from 'react';
import { Link } from 'react-router-dom';
import LazyLoad from 'react-lazy-load';

const DynamicChef = ({ chef }) => {

    const { chef_id, chef_picture, chef_name, years_of_experience, number_of_recipes, likes } = chef;

    return (
        <>
            <div className="lg:flex bg-base-100 shadow-xl rounded-lg w-9/12 mx-auto mb-6">
                <LazyLoad>
                    <img src={chef_picture} className='lazyload h-64 rounded-ss-2xl' />
                </LazyLoad>
                <div className="card-body lg:flex justify-center">
                    <div className='lg:flex gap-6 justify-around items-center'>
                        <h2 className="card-title text-blue-500">{chef_name}</h2>
                        <div>
                            <p className='text-slate-800 font-thin'>Years of experience: {years_of_experience}</p>
                            <p className='text-slate-800 font-thin'>Numbers of recipes: {number_of_recipes}</p>
                            <span className='inline-flex items-center gap-2 mt-3 mb-3'>
                                <img src="https://i.ibb.co/xqZM3Mm/like.png" alt="" className='h-8' />
                                <p className='font-bold text-[#d90429]'>{likes}</p>
                            </span>
                        </div>
                        <div className='flex justify-center'>
                            <Link to={`/data/${chef_id}`}>
                                <button className="btn bg-[#0077b6] border-none hover:bg-sky-600">View Recipes</button>
                            </Link>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
};

export default DynamicChef;