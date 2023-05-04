import React from 'react';
import Banner from '../../Shared/Banner/Banner';
import Chefs from '../../Shared/Chefs/Chefs';
import ChefsFavourite from '../../Shared/ChefsFavourite/ChefsFavourite';
import SubmitRecipe from '../../Shared/SubmitRecipe/SubmitRecipe';

const Home = () => {
    return (
        <div className='w-11/12 mx-auto'>
            <Banner></Banner>
            <Chefs></Chefs>
            <ChefsFavourite></ChefsFavourite>
            <SubmitRecipe></SubmitRecipe>
        </div>
    );
};

export default Home;