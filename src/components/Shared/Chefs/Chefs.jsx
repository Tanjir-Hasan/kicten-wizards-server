import React, { useEffect, useState } from 'react';
import DynamicChef from '../DynamicChef/DynamicChef';
// import AOS from 'aos';
// import 'aos/dist/aos.css';
// AOS.init();

const Chefs = () => {
    const [chefs, setChefs] = useState([]);

    useEffect(() => {
        fetch('https://kichen-wizards-server-tanjir-hasan.vercel.app/data')
            .then(res => res.json())
            .then(chefs => setChefs(chefs))
    }, [])

    return (
        <div>
            <h3 className='text-5xl font-semibold font-mono text-center text-slate-800 my-10 p-8'>Our Favourite Chef's</h3>
            <div>
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