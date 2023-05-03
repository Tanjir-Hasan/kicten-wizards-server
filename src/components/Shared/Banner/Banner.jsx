import React from 'react';

const Banner = () => {
    return (
        <div className="carousel w-11/12 mx-auto">
            <div id="slide1" className="carousel-item relative w-full">
                <div className='lg:flex gap-5 items-center'>
                    <img src="../../../../public/chicken_parma-commons.jpg" className="lg:ml-20 lg:w-1/2" />
                    <div className='lg:w-1/2 lg:p-16'>
                        <h4 className='text-xl font-mono text-[#0ca1d7] mb-2'>Chicken Parma (AKA Chicken Parmigiana)</h4>
                        <p className='text-slate-800'>This doesn’t sound particularly Australian, but this is one of the most common foods you’ll find in an Australian pub. Loads of pubs have a parma night where you can grab a decent priced chicken parma with a beer. A chicken parma is a chicken schnitzel (chicken covered in flour, egg and then breadcrumbed), topped with a tasty tomato sauce with melted cheese on top</p>
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <div className='lg:flex items-center'>
                    <img src="../../../../public/Pavlova_cake_2.jpg" className="lg:ml-20 lg:w-1/2" />
                    <div className='lg:w-1/2 lg:p-16'>
                        <h4 className='text-xl font-mono text-[#0ca1d7] mb-2'>Pavlova</h4>
                        <p className='text-slate-800'>Regardless of its origin, the pavlova is absolutely delicious! You are most likely able to find a Pavlova in most cake shops or bakeries. You can also buy them pre-made from most major supermarket chains (look in the bread or frozen dessert section).</p>
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <div className='lg:flex items-center'>
                    <img src="../../../../public/lamington-cake.jpg" className="lg:ml-20 lg:w-1/2" />
                    <div className='lg:w-1/2 lg:p-16'>
                        <h4 className='text-xl font-mono text-[#0ca1d7] mb-2'>Lamingtons</h4>
                        <p className='text-slate-800'>If you like coconut you’ll love this classic Aussie dessert – The Lamington.
                            <br />
                            Made up of a deliciously, delicate soft, sponge cake, and topped with decadent chocolate topping and immersed in coconut flakes, the ole’ Lamington has been a fixture on the dessert table for generations. </p>
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <div className='lg:flex items-center'>
                    <img src="../../../../public/fairy_bread-commons.jpg" className="lg:ml-20 lg:w-1/2" />
                    <div className='lg:w-1/2 lg:p-16'>
                        <h4 className='text-xl font-mono text-[#0ca1d7] mb-2'>Fairy Bread</h4>
                        <p className='text-slate-800'>Now this one is really strange and you probably won’t come across it unless you happen to find yourself at a kids party. Fairy Bread is simply white bread with butter sprinkled with hundreds and thousands!</p>
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;