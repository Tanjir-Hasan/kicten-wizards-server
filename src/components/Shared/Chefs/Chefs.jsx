import React, { useEffect, useState } from 'react';
import DynamicChef from '../DynamicChef/DynamicChef';

const Chefs = () => {
    const [chefs, setChefs] = useState([]);

    useEffect(() => {
        fetch('https://kichen-wizards-server-tanjir-hasan.vercel.app/data')
            .then(res => res.json())
            .then(chefs => setChefs(chefs))
    }, [])

    return (
        <div>
            <h3 className='lg:text-5xl text-2xl font-semibold font-mono text-center text-slate-800 lg:mt-20 mt-10 mb-10'>Our Favourite Chef's</h3>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-10'>
                {
                    chefs.map(chef => <DynamicChef
                        key={chef.chef_id}
                        chef={chef}
                    ></DynamicChef>)
                }
            </div>
        </div>
    );
};

export default Chefs;