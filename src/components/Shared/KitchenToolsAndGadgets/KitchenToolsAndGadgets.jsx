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
            <h1 className='text-5xl font-semibold font-mono text-center text-slate-800 mt-20 mb-10 p-8'>Tools and Gadgets</h1>

            <div className='lg:w-11/12 mx-auto px-8'>
                {
                    items.map(item => <Card item={item} key={item.name}></Card>)
                }
            </div>
        </div>
    );
};

export default KitchenToolsAndGadgets;