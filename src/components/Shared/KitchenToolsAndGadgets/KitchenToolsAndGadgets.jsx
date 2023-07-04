import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Card from './Card';

const KitchenToolsAndGadgets = () => {

    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('https://kichen-wizards-server.vercel.app/toolsAndGadgets')
            .then(res => res.json())
            .then(data => setItems(data))
    }, [])

    return (
        <div>
            <h1 className='lg:text-5xl text-2xl lg:mt-28 mt-10 mb-10 font-semibold font-mono text-center text-slate-800'>Tools and Gadgets</h1>

            <div className='lg:w-9/12 mx-auto px-8'>
                {
                    items.map(item => <Card item={item} key={item.name}></Card>)
                }
            </div>
        </div>
    );
};

export default KitchenToolsAndGadgets;