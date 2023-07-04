import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import LazyLoad from 'react-lazy-load';

const DynamicChef = ({ chef }) => {

    const { chef_id, chef_picture, chef_name, years_of_experience, number_of_recipes, likes } = chef;

    const controls = useAnimation();
    const [ref, inView] = useInView();

    useEffect(() => {
        if (inView) {
            controls.start('visible');
        }
    }, [controls, inView]);

    return (
        <>
            <motion.div

                ref={ref}
                initial="hidden"
                animate={controls}
                variants={{
                    visible: { opacity: 1, y: 0 },
                    hidden: { opacity: 0, y: 100 },
                }}
                transition={{ duration: 0.6 }}

                className="lg:flex bg-base-100 shadow-xl rounded-lg w-full mx-auto mb-6">

                <div style={{ position: 'relative' }}>

                    <LazyLoad>
                        <img src={chef_picture} className='lazyload h-64 rounded-ss-2xl' />
                    </LazyLoad>
                    <h1
                        style={{
                            position: 'absolute',
                            bottom: 0,
                            left: 0,
                            backgroundColor: 'rgba(255, 255, 255, 0.8)',
                            padding: '10px'
                        }}
                        className='text-blue-700'
                    >
                        {chef_name}
                    </h1>
                </div>
                <div className="card-body lg:flex justify-center">
                    <div className=''>
                        <div>
                            <p className='text-slate-800 font-thin'>Years of experience: {years_of_experience}</p>
                            <p className='text-slate-800 font-thin'>Numbers of recipes: {number_of_recipes}</p>
                            <span className='inline-flex items-center gap-2 mt-3 mb-3'>
                                <img src="https://i.ibb.co/xqZM3Mm/like.png" alt="" className='h-6' />
                                <p className='font-bold text-[#d90429]'>{likes}</p>
                            </span>
                        </div>
                        <div className='w-full'>
                            <Link to={`/data/${chef_id}`}>
                                <button className="btn bg-[#0077b6] border-none hover:bg-sky-600">View Recipes</button>
                            </Link>
                        </div>
                    </div>
                </div>

            </motion.div>
        </>
    );
};

export default DynamicChef;