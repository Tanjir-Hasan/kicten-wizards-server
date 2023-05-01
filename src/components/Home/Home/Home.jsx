import React from 'react';
import Banner from '../../Shared/Banner/Banner';
import Chefs from '../../Shared/Chefs/Chefs';
import ChefsFavourite from '../../Shared/ChefsFavourite/ChefsFavourite';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Chefs></Chefs>
            <ChefsFavourite></ChefsFavourite>
        </div>
    );
};

export default Home;