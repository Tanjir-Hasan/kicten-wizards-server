import React, { useState } from 'react';
import Card from './Card';
import { useEffect } from 'react';

const SeasonalRecipes = () => {

    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('https://kichen-wizards-server.vercel.app/seasonalRecipe')
            .then(res => res.json())
            .then(data => setItems(data))
    }, [])

    return (
        <div>
            <h1 className='lg:text-5xl text-2xl lg:mt-28 mt-10 mb-10 font-semibold font-mono text-center text-slate-800 w-11/12 mx-auto '>Season's Special</h1>

            <div className='w-11/12 mx-auto px-8'>
                {
                    items.map(item => <Card item={item} key={item.id}></Card>)
                }
            </div>
        </div>
    );
};

export default SeasonalRecipes;