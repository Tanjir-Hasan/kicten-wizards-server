import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { BsFillHeartFill, BsHeart } from 'react-icons/bs';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ChefDetails = () => {
    const [show, setShow] = useState(false);

    const [disable, setDisable] = useState(false);

    const details = useLoaderData();

    const { recipes, chef_picture, chef_name, short_bio, years_of_experience, number_of_recipes, likes } = details;

    const handleFavorites = () => {
        setDisable(true);
        toast.success('The recipe is your favorite!', {
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
            <div className='flex items-center'>
                <div>
                    <h2 className='text-3xl font-bold text-[#22434f] mb-2'>{chef_name}</h2>
                    <p className='text-xl font-thin mb-1'><span className='text-[#4b6e7d]'>Bio:</span> {short_bio}</p>
                    <p className='text-xl font-thin mb-1'><span className='text-[#4b6e7d]'>Years of Experience:</span> {years_of_experience}</p>
                    <p className='text-xl font-thin mb-1'><span className='text-[#4b6e7d]'>Number of Recipes:</span> {number_of_recipes}</p>
                    <p className='text-xl font-thin mb-1'><span className='text-[#4b6e7d]'>Likes:</span> {likes}</p>
                </div>
                <img src={chef_picture} alt="" className='h-72' />
            </div>
            <div>
                <div className='flex justify-between'>
                    <h4>{recipes[0].recipe_name}</h4>
                    <button disabled={disable} onClick={handleFavorites}>
                        {
                            disable ? <BsFillHeartFill size={15} color="red" /> : <BsHeart size={15} />
                        }
                    </button>
                </div>
                <div><p>{recipes[0].ingredients.map((item, index) => <li key={index}>{item}</li>)}</p></div>
                {
                    show === true ?
                        <>
                            <p className='text-slate-900'>{recipes[0].cooking_method}</p>
                            <span className='font-semibold text-blue-600 cursor-pointer' onClick={() => setShow(!show)}>Read less</span>
                        </>
                        :
                        <>
                            <p className='text-slate-500'>{recipes[0].cooking_method.substring(0, 100)}.....</p>
                            <span className='font-semibold text-blue-600 cursor-pointer' onClick={() => setShow(!show)}>Read more</span>
                        </>
                }
            </div>
            <div>
                <div><h4>{recipes[1].recipe_name}</h4></div>
                <div><p>{recipes[1].ingredients.map((item, index) => <li key={index}>{item}</li>)}</p></div>
                {
                    show === true ?
                        <>
                            <p className='text-slate-900'>{recipes[1].cooking_method}</p>
                            <span className='font-semibold text-blue-600 cursor-pointer' onClick={() => setShow(!show)}>Read less</span>
                        </>
                        :
                        <>
                            <p className='text-slate-500'>{recipes[1].cooking_method.substring(0, 100)}.....</p>
                            <span className='font-semibold text-blue-600 cursor-pointer' onClick={() => setShow(!show)}>Read more</span>
                        </>
                }
            </div>
            <div>
                <div><h4>{recipes[2].recipe_name}</h4></div>
                <div><p>{recipes[2].ingredients.map((item, index) => <li key={index}>{item}</li>)}</p></div>
                {
                    show === true ?
                        <>
                            <p className='text-slate-900'>{recipes[2].cooking_method}</p>
                            <span className='font-semibold text-blue-600 cursor-pointer' onClick={() => setShow(!show)}>Read less</span>
                        </>
                        :
                        <>
                            <p className='text-slate-500'>{recipes[2].cooking_method.substring(0, 100)}.....</p>
                            <span className='font-semibold text-blue-600 cursor-pointer' onClick={() => setShow(!show)}>Read more</span>
                        </>
                }
            </div>
        </div>
    );
};

export default ChefDetails;