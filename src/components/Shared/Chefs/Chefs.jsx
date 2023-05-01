import React, { useEffect, useState } from 'react';
import DynamicChef from '../DynamicChef/DynamicChef';

const Chefs = () => {
    const [chefs, setChefs] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/data')
            .then(res => res.json())
            .then(chefs => setChefs(chefs))
    }, [])

    return (
        <div>
            <h3 className='text-5xl font-semibold font-mono text-center my-10'>Top Chef's</h3>
            {
                chefs.map(chef => <DynamicChef
                    key={chef.chef_id}
                    chef={chef}
                ></DynamicChef>)
            }
        </div>
    );
};

export default Chefs;