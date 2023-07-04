import React from 'react';

const Banner = () => {
    return (
        <>
            <section className="relative bg-[url(https://i.ibb.co/j5FSYrg/Pavlova-cake-2.jpg)] bg-cover bg-center bg-no-repeat">
                <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent lg:h-screen bg-cover bg-top"></div>

                <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
                    <div className="max-w-xl text-left ltr:sm:text-left rtl:sm:text-right">
                        <h1 className="text-3xl text-blue-400 font-extrabold sm:text-5xl">
                            Let us create
                            <strong className="block font-extrabold text-blue-700">
                                Something new.
                            </strong>
                        </h1>

                        <p className="mt-4 text-white text-left max-w-lg sm:text-xl/relaxed">
                            We provide new recipes with a twist on daily basis.
                            We also post blog posts about fun ideas to do in the kitchen. Ask us anything.
                        </p>

                        <div className="mt-8 flex flex-wrap gap-4 text-center">
                            <a href="#contact" className="contact-color block w-full rounded px-12 py-3 text-sm font-medium text-white shadow focus:outline-none focus:ring sm:w-auto">
                                Contact us
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Banner;