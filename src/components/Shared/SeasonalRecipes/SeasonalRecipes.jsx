import React, { useState } from 'react';
import Card from './Card';
import { useEffect } from 'react';

const SeasonalRecipes = () => {

    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/seasonalRecipe')
            .then(res => res.json())
            .then(data => setItems(data))
    }, [])

    return (
        <div>
            <h1 className='text-5xl font-semibold font-mono text-center text-slate-800 my-10 p-8'>Season's Special</h1>

            <div className='w-11/12 mx-auto px-8'>
                {
                    items.map(item => <Card item={item} key={item.id}></Card>)
                }
            </div>
        </div>
    );
};

export default SeasonalRecipes;