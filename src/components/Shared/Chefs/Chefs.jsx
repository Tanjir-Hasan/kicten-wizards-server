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