import React from 'react';
import { Link } from 'react-router-dom';

const DynamicChef = ({ chef }) => {
    const { chef_id, chef_picture, chef_name, years_of_experience, number_of_recipes, likes } = chef;
    console.log(chef_name)
    return (
        <>
            <div className="card card-side bg-base-100 shadow-xl w-4/5 mx-auto">
                <figure><img src={chef_picture} alt="Movie" className='w-2/5 h-96' /></figure>
                <div className="card-body">
                    <h2 className="card-title">{chef_name}</h2>
                    <p>Years of experience: {years_of_experience}</p>
                    <p>Numbers of recipes: {number_of_recipes}</p>
                    <p>Likes {likes}</p>
                    <div className="card-actions justify-end">
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