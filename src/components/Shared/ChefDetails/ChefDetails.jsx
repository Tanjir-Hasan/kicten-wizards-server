import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { BsFillHeartFill, BsHeart } from 'react-icons/bs';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
            {/* recipe 1 */}
            <div>
                <div className='flex justify-between'>
                    <h4>{recipes[0].recipe_name}</h4>
                    <button disabled={disable1} onClick={handleFavorites}>
                        {
                            disable1 ? <BsFillHeartFill size={15} color="red" /> : <BsHeart size={15} />
                        }
                    </button>
                </div>
                <div><p>{recipes[0].ingredients.map((item, index) => <li key={index}>{item}</li>)}</p></div>
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
            <div>
                <div className='flex justify-between'>
                    <h4>{recipes[1].recipe_name}</h4>
                    <button disabled={disable2} onClick={handleFavorites1}>
                        {
                            disable2 ? <BsFillHeartFill size={15} color="red" /> : <BsHeart size={15} />
                        }
                    </button>
                </div>
                <div><p>{recipes[1].ingredients.map((item, index) => <li key={index}>{item}</li>)}</p></div>
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
            {/* recipe 3 */}
            <div>
                <div className='flex justify-between'>
                    <h4>{recipes[2].recipe_name}</h4>
                    <button disabled={disable3} onClick={handleFavorites2}>
                        {
                            disable3 ? <BsFillHeartFill size={15} color="red" /> : <BsHeart size={15} />
                        }
                    </button>
                </div>
                <div><p>{recipes[2].ingredients.map((item, index) => <li key={index}>{item}</li>)}</p></div>
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