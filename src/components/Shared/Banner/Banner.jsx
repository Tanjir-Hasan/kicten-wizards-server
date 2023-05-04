import React from 'react';

const Banner = () => {
    return (
        <>
            <div className="carousel w-full">
                <div id="item1" className="carousel-item w-full mt-4">
                    <div className='lg:flex gap-5 items-center'>
                        <img src="https://i.ibb.co/89W7wny/chicken-parma-commons.jpg" className="lg:w-1/2" />
                        <div className=' lg:p-16 py-3 px-5'>
                            <h4 className='text-xl text-blue-500 font-bold font-mono mb-2'>Chicken Parma (AKA Chicken Parmigiana)</h4>
                            <p className='text-slate-800 font-thin'>This doesn’t sound particularly Australian, but this is one of the most common foods you’ll find in an Australian pub. A chicken parma is a chicken schnitzel, topped with a tasty tomato sauce with melted cheese on top</p>
                        </div>
                    </div>
                </div>
                <div id="item2" className="carousel-item w-full mt-4">
                    <div className='lg:flex items-center'>
                        <img src="https://i.ibb.co/j5FSYrg/Pavlova-cake-2.jpg" className="lg:w-1/2" />
                        <div className='lg:w-1/2 lg:p-16 py-3 px-5'>
                            <h4 className='text-xl text-blue-500 font-bold font-mono mb-2'>Pavlova</h4>
                            <p className='text-slate-800 font-thin'>Regardless of its origin, the pavlova is absolutely delicious! You are most likely able to find a Pavlova in most cake shops or bakeries. You can also buy them pre-made from most major supermarket chains (look in the bread or frozen dessert section).</p>
                        </div>
                    </div>
                </div>
                <div id="item3" className="carousel-item w-full mt-4">
                    <div className='lg:flex items-center'>
                        <img src="https://i.ibb.co/Rzd8mW8/lamington-cake.jpg" className="lg:w-1/2" />
                        <div className='lg:w-1/2 lg:p-16 py-3 px-5'>
                            <h4 className='text-xl text-blue-500 font-bold font-mono mb-2'>Lamingtons</h4>
                            <p className='text-slate-800 font-thin'>If you like coconut you’ll love this classic Aussie dessert – The Lamington.
                                <br />
                                Made up of a deliciously, delicate soft, sponge cake, and topped with decadent chocolate topping and immersed in coconut flakes, the ole’ Lamington has been a fixture on the dessert table for generations. </p>
                        </div>
                    </div>
                </div>
                <div id="item4" className="carousel-item w-full mt-4">
                    <div className='lg:flex items-center'>
                        <img src="https://i.ibb.co/vxttp5n/fairy-bread-commons.jpg" className="lg:w-1/2" />
                        <div className='lg:w-1/2 lg:p-16 py-3 px-5'>
                            <h4 className='text-xl text-blue-500 font-bold font-mono mb-2'>Fairy Bread</h4>
                            <p className='text-slate-800 font-thin'>Now this one is really strange and you probably won’t come across it unless you happen to find yourself at a kids party. Fairy Bread is simply white bread with butter sprinkled with hundreds and thousands!</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-center pt-4 gap-2">
                <a href="#item1" className="btn btn-xs text-white bg-[#0077b6] border-none hover:bg-sky-600">1</a>
                <a href="#item2" className="btn btn-xs text-white bg-[#0077b6] border-none hover:bg-sky-600">2</a>
                <a href="#item3" className="btn btn-xs text-white bg-[#0077b6] border-none hover:bg-sky-600">3</a>
                <a href="#item4" className="btn btn-xs text-white bg-[#0077b6] border-none hover:bg-sky-600">4</a>
            </div>
        </>
    );
};

export default Banner;