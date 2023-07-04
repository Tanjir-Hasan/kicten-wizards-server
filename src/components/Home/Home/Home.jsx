import React from 'react';
import Banner from '../../Shared/Banner/Banner';
import Chefs from '../../Shared/Chefs/Chefs';
import ChefsFavourite from '../../Shared/ChefsFavourite/ChefsFavourite';
import SubmitRecipe from '../../Shared/SubmitRecipe/SubmitRecipe';
import SeasonalRecipes from '../../Shared/SeasonalRecipes/SeasonalRecipes';
import CookingTipsAndTechniques from '../../Shared/CookingTipsAndTechniques/CookingTipsAndTechniques';
import KitchenToolsAndGadgets from '../../Shared/KitchenToolsAndGadgets/KitchenToolsAndGadgets';
import HealthAndNutrition from '../../Shared/HealthAndNutrition/HealthAndNutrition';
import ContactUs from '../../Shared/ContactUs/ContactUs';

const Home = () => {
    return (
        <>
            <Banner></Banner>
            <div className='w-11/12 mx-auto'>
                <Chefs></Chefs>
                <ChefsFavourite></ChefsFavourite>
                <SeasonalRecipes></SeasonalRecipes>
                <HealthAndNutrition></HealthAndNutrition>
                <SubmitRecipe></SubmitRecipe>
                <CookingTipsAndTechniques></CookingTipsAndTechniques>
                <KitchenToolsAndGadgets></KitchenToolsAndGadgets>
                <ContactUs></ContactUs>
            </div>
        </>
    );
};

export default Home;