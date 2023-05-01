import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ChefDetails = () => {
    const details = useLoaderData();
    console.log(details)

    const { chef_id} = details;

    return (
        <div>
            this is details
            <h2>{chef_id}</h2>
        </div>
    );
};

export default ChefDetails;