import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { BsFillHeartFill, BsHeart } from 'react-icons/bs';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';

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
        <div className='w-11/12 mx-auto my-8'>
            <ToastContainer />
            <div className='flex items-center'>
                <div>
                    <h2 className='text-3xl font-bold text-[#22434f] mb-2'>{chef_name}</h2>
                    <p className='text-xl font-thin mb-1'><span className='text-[#4b6e7d]'>Bio:</span> {short_bio}</p>
                    <p className='text-xl font-thin mb-1'><span className='text-[#4b6e7d]'>Years of Experience:</span> {years_of_experience}</p>
                    <p className='text-xl font-thin mb-1'><span className='text-[#4b6e7d]'>Number of Recipes:</span> {number_of_recipes}</p>
                    <span className='inline-flex items-center gap-2 mt-3'>
                        <img src="https://i.ibb.co/xqZM3Mm/like.png" alt="" className='h-8' />
                        <p className='text-xl font-bold text-[#d90429]'>{likes}</p>
                    </span>
                </div>
                <img src={chef_picture} alt="" className='h-72' />
            </div>
            <div className='flex gap-8 mt-8'>
                {/* recipe 1 */}
                <div className=''>
                    <img src={recipes[0].img1} alt="" className='w-auto h-48 mb-3 mx-auto rounded-lg' />
                    <div className='flex justify-between'>
                        <h4 className='text-xl font-serif text-rose-700 mb-3'>{recipes[0].recipe_name}</h4>
                        <button disabled={disable1} onClick={handleFavorites}>
                            {
                                disable1 ? <BsFillHeartFill size={15} color="red" /> : <BsHeart size={15} />
                            }
                        </button>
                    </div>
                    <div>
                        <p>{recipes[0].ingredients.map((item, index) => <li key={index}>{item}</li>)}</p>
                        <div className='flex items-center justify-end gap-2 my-1'>
                            <Rating style={{ maxWidth: 100 }} value={recipes[0].rating} readOnly />
                            <p>{recipes[0].rating}</p>
                        </div>
                    </div>
                    <p className='font-semibold my-1'>Cooking process</p>
                    {
                        show1 === true ?
                            <>
                                <p className='text-slate-900'>{recipes[0].cooking_method}</p>
                                <span className='font-semibold text-blue-600 cursor-pointer' onClick={() => setShow1(!show1)}>Read less</span>
                            </>
                            :
                            <>
                                <p className='text-slate-500'>{recipes[0].cooking_method.substring(0, 100)}.....</p>
                                <span className='font-semibold text-blue-600 cursor-pointer' onClick={() => setShow1(!show1)}>Read more</span>
                            </>
                    }
                </div>
                {/* recipe 2 */}
                <div className=''>
                    <img src={recipes[1].img2} alt="" className='w-auto h-48 mb-3 mx-auto rounded-lg' />
                    <div className='flex justify-between'>
                        <h4 className='text-xl font-serif text-rose-700 mb-3'>{recipes[1].recipe_name}</h4>
                        <button disabled={disable2} onClick={handleFavorites1}>
                            {
                                disable2 ? <BsFillHeartFill size={15} color="red" /> : <BsHeart size={15} />
                            }
                        </button>
                    </div>
                    <div><p>{recipes[1].ingredients.map((item, index) => <li key={index}>{item}</li>)}</p>
                        <div className='flex items-center justify-end gap-2 my-1'>
                            <Rating style={{ maxWidth: 100 }} value={recipes[1].rating} readOnly />
                            <p>{recipes[1].rating}</p>
                        </div>
                    </div>
                    <p className='font-semibold my-1'>Cooking process</p>
                    {
                        show2 === true ?
                            <>
                                <p className='text-slate-900'>{recipes[1].cooking_method}</p>
                                <span className='font-semibold text-blue-600 cursor-pointer' onClick={() => setShow2(!show2)}>Read less</span>
                            </>
                            :
                            <>
                                <p className='text-slate-500'>{recipes[1].cooking_method.substring(0, 100)}.....</p>
                                <span className='font-semibold text-blue-600 cursor-pointer' onClick={() => setShow2(!show2)}>Read more</span>
                            </>
                    }
                </div>
            </div>
            {/* recipe 3 */}
            <div className='mx-auto mt-6'>
                <img src={recipes[2].img3} alt="" className='w-auto h-48 mb-3 mx-auto rounded-lg' />
                <div className='flex justify-evenly'>
                    <h4 className='text-xl font-serif text-rose-700 mb-3'>{recipes[2].recipe_name}</h4>
                    <button disabled={disable3} onClick={handleFavorites2}>
                        {
                            disable3 ? <BsFillHeartFill size={15} color="red" /> : <BsHeart size={15} />
                        }
                    </button>
                </div>
                <div><p>{recipes[2].ingredients.map((item, index) => <li key={index}>{item}</li>)}</p>
                    <div className='flex items-center justify-end gap-2 my-1'>
                        <Rating style={{ maxWidth: 100 }} value={recipes[2].rating} readOnly />
                        <p>{recipes[2].rating}</p>
                    </div>
                </div>
                <p className='font-semibold my-1'>Cooking process</p>
                {
                    show3 === true ?
                        <>
                            <p className='text-slate-900'>{recipes[2].cooking_method}</p>
                            <span className='font-semibold text-blue-600 cursor-pointer' onClick={() => setShow3(!show3)}>Read less</span>
                        </>
                        :
                        <>
                            <p className='text-slate-500'>{recipes[2].cooking_method.substring(0, 100)}.....</p>
                            <span className='font-semibold text-blue-600 cursor-pointer' onClick={() => setShow3(!show3)}>Read more</span>
                        </>
                }
            </div>
        </div>
    );
};

export default ChefDetails;