import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { BsFillHeartFill, BsHeart } from 'react-icons/bs';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';
import LazyLoad from 'react-lazy-load';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const ChefDetails = () => {
    const [show1, setShow1] = useState(false);
    const [show2, setShow2] = useState(false);
    const [show3, setShow3] = useState(false);

    const [disable1, setDisable1] = useState(false);
    const [disable2, setDisable2] = useState(false);
    const [disable3, setDisable3] = useState(false);

    const details = useLoaderData();

    const { recipes, chef_picture, chef_name, short_bio, years_of_experience, number_of_recipes, likes } = details;

    const handleFavorites = () => {
        setDisable1(true);
        toast.success(`${recipes[0].recipe_name} is your favorite!`, {
            position: 'top-right',
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    };

    const handleFavorites1 = () => {
        setDisable2(true);
        toast.success(`${recipes[1].recipe_name} is your favorite!`, {
            position: 'top-right',
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    };

    const handleFavorites2 = () => {
        setDisable3(true);
        toast.success(`${recipes[2].recipe_name} is your favorite!`, {
            position: 'top-right',
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    };

    return (
        <div>
            <ToastContainer />
            <div style={{backgroundImage: "radial-gradient( circle 1224px at 10.6% 8.8%,  rgba(255,255,255,1) 0%, rgba(153,202,251,1) 100.2% )"}} className='flex justify-around items-center text-slate-800 py-8 px-12'>
                <div className='w-1/2'>
                    <h2 className='text-3xl font-bold mb-3'>{chef_name}</h2>
                    <p className='my-4  pr-5'>{short_bio}</p>
                    <p className='text-xl font-thin mb-2'>Years of Experience: {years_of_experience}</p>
                    <p className='text-xl font-thin mb-2'>Number of Recipes: {number_of_recipes}</p>
                    <span className='inline-flex items-center gap-2 mt-3'>
                        <img src="https://i.ibb.co/xqZM3Mm/like.png" alt="" className='h-8' />
                        <p className='text-xl font-bold text-[#d90429]'>{likes}</p>
                    </span>
                </div>
                <LazyLoad>
                    <img src={chef_picture} alt="" className='lazyload h-72 rounded-xl' />
                </LazyLoad>
            </div>
            <h1 className='text-3xl font-serif text-orange-500 text-center animate-pulse my-10'>Recent Recipes</h1>
            <div className='flex gap-8 mt-8 w-10/12 mx-auto'>
                {/* recipe 1 */}
                <div data-aos="zoom-in" className='border border-slate-200 p-10 w-2/4'>
                    <img src={recipes[0].img1} alt="" className='w-auto h-64 mb-3 mx-auto rounded-lg' />
                    <h4 className='text-xl font-serif text-slate-800 hover:text-cyan-800 mb-3'>{recipes[0].recipe_name}</h4>
                    <h3 className='font-thin underline underline-offset-4 mb-3'>INGREDIENTS</h3>
                    <p className='font-thin list-disc marker:text-cyan-800'>{recipes[0].ingredients.map((item, index) => <li key={index}>{item}</li>)}</p>
                    <div className='flex justify-between px-1 py-2'>
                        <button disabled={disable1} onClick={handleFavorites}>
                            {
                                disable1 ? <BsFillHeartFill size={20} color="red" /> : <BsHeart size={20} />
                            }
                        </button>
                        <div className='flex items-center justify-end gap-2 my-3'>
                            <Rating style={{ maxWidth: 100 }} value={recipes[0].rating} readOnly />
                            <p className='font-bold'>{recipes[0].rating}</p>
                        </div>
                    </div>
                    <p className='font-thin underline underline-offset-4 mb-3'>METHOD</p>
                    {
                        show1 === true ?
                            <>
                                <p className='text-slate-700'>{recipes[0].cooking_method}</p>
                                <span className='font-semibold text-blue-600 cursor-pointer' onClick={() => setShow1(!show1)}>Read less</span>
                            </>
                            :
                            <>
                                <p className='text-slate-500 font-thin'>{recipes[0].cooking_method.substring(0, 100)}.....</p>
                                <span className='font-semibold text-blue-600 cursor-pointer' onClick={() => setShow1(!show1)}>Read more</span>
                            </>
                    }
                </div>
                {/* recipe 2 */}
                <div data-aos="zoom-in-up" className='border border-slate-200 p-10 w-2/4'>
                    <img src={recipes[1].img2} alt="" className='w-auto h-64 mb-3 mx-auto rounded-lg' />
                    <h4 className='text-xl font-serif text-slate-800 hover:text-cyan-800 mb-3'>{recipes[1].recipe_name}</h4>
                    <h3 className='font-thin underline underline-offset-4 mb-3'>INGREDIENTS</h3>
                    <p className='font-thin list-disc marker:text-cyan-800'>{recipes[1].ingredients.map((item, index) => <li key={index}>{item}</li>)}</p>
                    <div className='flex justify-between px-1 py-2'>
                        <button disabled={disable2} onClick={handleFavorites1}>
                            {
                                disable2 ? <BsFillHeartFill size={20} color="red" /> : <BsHeart size={20} />
                            }
                        </button>
                        <div className='flex items-center justify-end gap-2 my-3'>
                            <Rating style={{ maxWidth: 100 }} value={recipes[1].rating} readOnly />
                            <p className='font-bold'>{recipes[1].rating}</p>
                        </div>
                    </div>
                    <p className='font-thin underline underline-offset-4 mb-3'>METHOD</p>
                    {
                        show2 === true ?
                            <>
                                <p className='text-slate-700'>{recipes[1].cooking_method}</p>
                                <span className='font-semibold text-blue-600 cursor-pointer' onClick={() => setShow2(!show2)}>Read less</span>
                            </>
                            :
                            <>
                                <p className='text-slate-500 font-thin'>{recipes[1].cooking_method.substring(0, 100)}.....</p>
                                <span className='font-semibold text-blue-600 cursor-pointer' onClick={() => setShow2(!show2)}>Read more</span>
                            </>
                    }
                </div>
            </div>
            {/* recipe 3 */}
            <div data-aos="zoom-in-down" className='border border-slate-200 p-10 w-2/3 mx-auto mt-6'>
                <img src={recipes[2].img3} alt="" className='w-auto h-72 mb-3 mx-auto rounded-lg' />
                <h4 className='text-xl font-serif text-center text-slate-800 hover:text-cyan-800 my-5'>{recipes[2].recipe_name}</h4>
                <h3 className='font-thin underline underline-offset-4 mb-3'>INGREDIENTS</h3>
                <p className='font-thin list-disc marker:text-cyan-800'>{recipes[2].ingredients.map((item, index) => <li key={index}>{item}</li>)}</p>
                <div className='flex justify-between px-1 py-2'>
                    <button disabled={disable3} onClick={handleFavorites2}>
                        {
                            disable3 ? <BsFillHeartFill size={20} color="red" /> : <BsHeart size={20} />
                        }
                    </button>
                    <div className='flex items-center justify-end gap-2 my-3'>
                        <Rating style={{ maxWidth: 100 }} value={recipes[2].rating} readOnly />
                        <p className='font-bold'>{recipes[2].rating}</p>
                    </div>
                </div>
                <p className='font-thin underline underline-offset-4 mb-3'>METHOD</p>
                {
                    show3 === true ?
                        <>
                            <p className='text-slate-700'>{recipes[2].cooking_method}</p>
                            <span className='font-semibold text-blue-600 cursor-pointer' onClick={() => setShow3(!show3)}>Read less</span>
                        </>
                        :
                        <>
                            <p className='text-slate-500 font-thin'>{recipes[2].cooking_method.substring(0, 100)}.....</p>
                            <span className='font-semibold text-blue-600 cursor-pointer' onClick={() => setShow3(!show3)}>Read more</span>
                        </>
                }
            </div>
        </div>
    );
};

export default ChefDetails;