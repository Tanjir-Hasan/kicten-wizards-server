import React from 'react';

const HealthAndNutrition = () => {
    return (
        <div className='w-11/12 mx-auto'>
            <h1 className='lg:text-5xl text-2xl lg:mt-28 mt-10 mb-10 font-semibold font-mono text-center text-slate-800'>Health and Nutrition</h1>

            <div>
                <div className='text-justify '>
                    <p className='text-xl text-[#193844] font-semibold py-3'>Nutritional Tips:</p>
                    <ul className='list-inside font-serif'>
                        <li className='list-disc'>Balanced Meals: Learn about the importance of creating balanced meals that include a mix of carbohydrates, proteins, and fats, along with plenty of fruits and vegetables.</li>
                        <li className='list-disc'>Understanding Macronutrients: Discover the role of macronutrients, such as carbohydrates, proteins, and fats, in a healthy diet, and how to incorporate them in appropriate proportions.</li>
                        <li className='list-disc'>Portion Control: Get tips on portion control to maintain a healthy weight and prevent overeating. Learn about appropriate serving sizes for different food groups.</li>
                        <li className='list-disc'>Fruits and Vegetables: Explore the benefits of incorporating a variety of fruits and vegetables into your diet, and discover creative ways to include them in your meals and snacks.</li>
                    </ul>
                </div>

                <div>
                    <p className='text-xl text-[#193844] font-semibold py-3'>Special Diets:</p>
                    <ul className='list-inside font-serif'>
                        <li className='list-disc'>Vegetarian Diet: Learn about the principles and health benefits of a vegetarian diet, including different types of vegetarianism and how to ensure proper nutrient intake.</li>
                        <li className='list-disc'>Gluten-Free Diet: Discover the basics of a gluten-free diet, including foods to avoid and suitable alternatives. Find gluten-free recipes and tips for dining out.</li>
                        <li className='list-disc'>Paleo Diet: Explore the concept of the paleo diet and its focus on whole, unprocessed foods. Get insights into the potential benefits and considerations for following a paleo lifestyle.</li>
                    </ul>
                </div>

                <div>
                    <p className='text-xl text-[#193844] font-semibold py-3'>Healthy Substitutions:</p>
                    <ul className='list-inside font-serif'>
                        <li className='list-disc'>Whole Grains: Replace refined grains with whole grains like quinoa, brown rice, and whole wheat to increase fiber content and provide more nutrients.</li>
                        <li className='list-disc'>Natural Sweeteners: Swap refined sugars with natural sweeteners such as honey, maple syrup, or dates to reduce added sugars in recipes while maintaining sweetness.</li>
                        <li className='list-disc'>Healthy Fats: Substitute unhealthy fats like saturated or trans fats with healthier options like olive oil, avocado, or nuts to improve the nutritional profile of your meals.</li>
                    </ul>
                </div>

                <div>
                    <p className='text-xl text-[#193844] font-semibold py-3'>Recipe Makeovers:</p>
                    <ul className='list-inside font-serif'>
                        <li className='list-disc'>Lightened-Up Lasagna: Try this revamped lasagna recipe with lean ground turkey, whole wheat pasta, and reduced-fat cheese for a healthier version of this classic comfort food.</li>
                        <li className='list-disc'>Vegetable Stir-Fry: Transform a traditional stir-fry by adding an array of colorful vegetables and using a lighter sauce to reduce sodium and increase nutritional value.</li>
                        <li className='list-disc'>Baked Sweet Potato Fries: Swap traditional deep-fried French fries with baked sweet potato fries for a healthier alternative that offers more fiber and nutrients.</li>
                    </ul>
                </div>

            </div>
        </div>
    );
};

export default HealthAndNutrition;