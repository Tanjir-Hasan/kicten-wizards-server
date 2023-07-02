import React from 'react';

const Card = ({ item }) => {

    const { image, description, name, season } = item;

    return (
        <div className='lg:flex justify-between items-center mb-8 border-2 border-[#0F1D22] rounded-lg shadow-xl  p-5 scale-90 hover:scale-100 duration-700'>

            <div style={{ position: 'relative' }}>
                <img src={image} alt="" className="lg:w-[500px]" />
                <h1
                    style={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        backgroundColor: 'rgba(255, 255, 255, 0.8)',
                        padding: '10px'
                    }}
                >
                    {season}
                </h1>
            </div>
            <div className='lg:w-1/2 text-right'>
                <h2 className='text-[#193844] font-semibold py-3'>{name}</h2>
                <p className='font-light'>{description}</p>
            </div>
        </div>
    );
};

export default Card;