import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const ChefsFavourite = () => {
    return (
        <>
            <h1 className='text-5xl font-semibold font-mono text-center text-slate-800 my-10 p-8'>Chef's Favourite</h1>
            <div className='w-11/12 mx-auto px-8'>
                <div
                    className='lg:flex items-center gap-16 border-2 border-[#0F1D22] rounded-lg shadow-xl mb-6 p-4'>
                    <img src="https://i.ibb.co/6n98zq5/f1.webp" alt="" className='h-72' />
                    <h3 className='text-[#193844] font-semibold text-center py-3'>Seafood Paella</h3>
                    <p className='lg:border-l-4 border-[#0F1D22] p-3'>This dish is a Spanish delicacy that is loaded with seafood favorites that include mussels, clams, and shrimp. Infused with a rich saffron scent, this dish is loaded with the flavors of Spanish cuisine that is sure to make your mouth water. To enhance its best flavors, cook it on a grill in a large skillet to distribute the flavors evenly.</p>
                </div>
                <div className='lg:flex items-center gap-16 border-2 border-[#0F1D22] rounded-lg shadow-xl mb-6 p-4'>
                    <p className='lg:text-right lg:border-r-4 border-[#0F1D22] p-3'>Gozleme is a Turkish dish that everyone who has tried it adores. Locally, it is a dish that causes long lines at street vendor stalls due to its addictive nature and mouthwatering food combinations. It is a dish that features a golden flatbread stuffed with fillings that range from meats to vegetables, making for a creamy street food dish that tastes amazing.</p>
                    <h3 className='text-[#193844] font-semibold text-center py-3'>Gozleme</h3>
                    <img src="https://i.ibb.co/fxVtLq0/20230313001433-gozleme.webp" alt="" className='h-72' />
                </div>
                <div data-aos="fade-down-right" className='lg:flex items-center gap-16 border-2 border-[#0F1D22] rounded-lg shadow-xl mb-6 p-4'>
                    <img src="https://i.ibb.co/qjkQG6z/f4-jgp.webp" alt="" className='h-72' />
                    <h3 className='text-[#193844] font-semibold text-center py-3'>Butter Chicken</h3>
                    <p className='lg:border-l-4 border-[#0F1D22] p-3'>When people think of Indian cuisine, the first dish that comes to mind is butter chicken. Known colloquially as murgh or chicken makhani, this is the ultimate Indian dish that will keep your taste buds wanting for more. The dish features grilled seasoned chicken simmered in a spicy and buttery tomato gravy. Often paired with Indian breads like roti or naan, this mouthwatering dish is a great choice for those craving a sweet and spicy delicacy.</p>
                </div>
                <div className='lg:flex items-center gap-16 border-2 border-[#0F1D22] rounded-lg shadow-xl mb-6 p-4'>
                    <p className='lg:text-right lg:border-r-4 border-[#0F1D22] p-3'>Pad Thai is a traditional dish served in Thailand that has quickly become a well-loved dish across the globe. It is a flavor filled fry dish that consists of rice noodles, meat (chicken or pork), dried shrimp, tofu, bean sprouts, and eggs. It is a dish that aces the sweet, sour, and salty combo, making it an addictive dish that is simply hard to pass on.</p>
                    <h3 className='text-[#193844] font-semibold text-center py-3'>Pad Thai</h3>
                    <img src="https://i.ibb.co/ZmtRMG7/f3.webp" alt="" className='h-72' />
                </div>
            </div>
        </>
    );
};

export default ChefsFavourite;