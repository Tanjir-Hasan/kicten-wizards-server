import React from 'react';

const CookingTipsAndTechniques = () => {
    return (
        <div>
            <h1 className='text-5xl font-semibold font-mono text-center text-slate-800 mt-20 mb-10 p-8'>Tips and Techniques</h1>

            <div>
                {/* 1 */}
                <div className='lg:flex justify-center items-end gap-5 mb-5'>
                    <div style={{ position: 'relative' }}>
                        <img src="https://i.ibb.co/q56rnx2/Knife-Skills.jpg" alt="" className="lg:w-[500px]" />
                        <h1
                            style={{
                                position: 'absolute',
                                bottom: 0,
                                left: 0,
                                backgroundColor: 'rgba(255, 255, 255, 0.8)',
                                padding: '10px'
                            }}
                        >
                            Knife Skills
                        </h1>
                    </div>

                    <div data-aos="fade-down" className='lg:w-1/2'>
                        <ul className='list-inside font-serif'>
                            <li className='list-disc'>Hold the knife: Grip the knife handle firmly with your dominant hand, and place your other hand on the blade's base for stability.</li>
                            <li className='list-disc'>Basic Cutting Techniques: Learn various cutting techniques, including chopping (for larger pieces), dicing (for small cubes), mincing (finely chopping), and slicing (thin, even cuts).</li>
                            <li className='list-disc'>Knife Maintenance: Properly clean and dry knives after use, store them in a knife block or sheath to protect the blades, and regularly sharpen them to maintain sharpness.</li>
                        </ul>
                    </div>

                </div>

                {/* 2 */}
                <div className='lg:flex flex-row-reverse justify-center items-end gap-5 mb-5'>
                    <div style={{ position: 'relative' }}>
                        <img src="https://i.ibb.co/tD3g7TG/Cooking-Methods-1.jpg" alt="" className="lg:w-[500px]" />
                        <h1
                            style={{
                                position: 'absolute',
                                bottom: 0,
                                left: 0,
                                backgroundColor: 'rgba(255, 255, 255, 0.8)',
                                padding: '10px'
                            }}
                        >
                            Cooking Methods
                        </h1>
                    </div>

                    <div data-aos="fade-down" className='lg:w-1/2'>
                        <ul className='list-inside font-serif'>
                            <li className='list-disc'>Sautéing: Cook food quickly over high heat in a small amount of oil, stirring frequently.</li>
                            <li className='list-disc'>
                                Roasting: Cook food in the oven at high heat, which enhances flavors and creates a crispy exterior.</li>
                            <li className='list-disc'>
                                Grilling: Cook food directly over a heat source, such as a barbecue or grill pan, to impart a smoky flavor.</li>
                            <li className='list-disc'>
                                Steaming: Use steam to cook food gently and retain its natural flavors and nutrients.</li>
                            <li className='list-disc'>
                                Braising: Cook food slowly in a liquid (often with a lid) to tenderize tough cuts of meat and infuse flavors.</li>
                        </ul>
                    </div>

                </div>

                {/* 3 */}
                <div className='lg:flex justify-center items-end gap-5 mb-5'>
                    <div style={{ position: 'relative' }}>
                        <img src="https://i.ibb.co/GC4FGGS/Seasoning-and-Flavoring.jpg" alt="" className="lg:w-[500px]" />
                        <h1
                            style={{
                                position: 'absolute',
                                bottom: 0,
                                left: 0,
                                backgroundColor: 'rgba(255, 255, 255, 0.8)',
                                padding: '10px'
                            }}
                        >
                            Seasoning and Flavoring
                        </h1>
                    </div>

                    <div data-aos="fade-down" className='lg:w-1/2'>
                        <ul className='list-inside font-serif'>
                            <li className='list-disc'>Herbs and Spices: Explore a variety of herbs and spices, including basil, thyme, cumin, and paprika, to add depth and complexity to your dishes.</li>
                            <li className='list-disc'>
                                Marinades: Use flavorful liquid mixtures to marinate meats, tofu, or vegetables, enhancing their taste and tenderness.</li>
                            <li className='list-disc'>
                                Sauces: Experiment with different sauces like tomato sauce, pesto, or teriyaki sauce to enhance the flavors of your dishes.</li>
                        </ul>
                    </div>

                </div>

                {/* 4 */}
                <div className='lg:flex flex-row-reverse justify-center items-end gap-5 mb-5'>
                    <div style={{ position: 'relative' }}>
                        <img src="https://i.ibb.co/qDstyN3/Food-Storage1.jpg" alt="" className="lg:w-[500px]" />
                        <h1
                            style={{
                                position: 'absolute',
                                bottom: 0,
                                left: 0,
                                backgroundColor: 'rgba(255, 255, 255, 0.8)',
                                padding: '10px'
                            }}
                        >
                            Food Storage
                        </h1>
                    </div>

                    <div data-aos="fade-down" className='lg:w-1/2'>
                        <ul className='list-inside font-serif'>
                            <li className='list-disc'>Refrigeration: Store perishable foods in the refrigerator at the proper temperature to keep them fresh and safe to consume.</li>
                            <li className='list-disc'>
                                Freezing: Properly package and label foods before freezing them to maintain quality and prevent freezer burn.</li>
                            <li className='list-disc'>
                                Pantry Storage: Keep pantry items in a cool, dry place, away from direct sunlight, to preserve their freshness and extend their shelf life.</li>
                            <li className='list-disc'>
                                Airtight Containers: Use airtight containers to store leftovers, cut fruits, or prepared ingredients to prevent spoilage and maintain flavors.</li>
                        </ul>
                    </div>

                </div>

                {/* 5 */}
                <div className='lg:flex justify-center items-end gap-5 mb-5'>
                    <div style={{ position: 'relative' }}>
                        <img src="https://i.ibb.co/z2Qd7mD/Food-Presentation-1.jpg" alt="" className="lg:w-[500px]" />
                        <h1
                            style={{
                                position: 'absolute',
                                bottom: 0,
                                left: 0,
                                backgroundColor: 'rgba(255, 255, 255, 0.8)',
                                padding: '10px'
                            }}
                        >
                            Food Presentation
                        </h1>
                    </div>

                    <div data-aos="fade-down" className='lg:w-1/2'>
                        <ul className='list-inside font-serif'>
                            <li className='list-disc'>Batch Cooking: Prepare larger quantities of food at once and store leftovers for quick and easy meals later in the week.</li>
                            <li className='list-disc'>
                                One-Pot Meals: Simplify your cooking process by preparing entire meals in a single pot or pan, minimizing cleanup and saving time.</li>
                            <li className='list-disc'>
                                Kitchen Gadgets: Utilize time-saving kitchen gadgets like food processors, slow cookers, or Instant Pots to streamline meal preparation.</li>
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default CookingTipsAndTechniques;