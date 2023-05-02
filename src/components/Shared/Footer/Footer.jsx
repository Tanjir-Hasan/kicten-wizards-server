import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <>
            <div className='bg-[#0F1D22] p-16 text-white mt-8'>
                <div>
                    <div>
                        <h3>Kitchen Wizards</h3>
                        <p>We provide new recipes with a twist on daily basis. I also post blog posts about fun ideas to do in the kitchen</p>
                    </div>
                    <div>
                        <h3>Need help?</h3>
                        <p>Contact us via phone or email</p>
                        <Link>
                            T: 1-555-555-5555
                        </Link>
                        <Link>
                            E: info@socialchef.com
                        </Link>
                    </div>
                    <div>
                        <h3>Follow us</h3>
                    </div>
                </div>
                <hr />
            </div>
            <div>
                <p>© socialchef.com 2023. All rights reserved.</p>
                <Link>Contact</Link>
                <Link to="/login">Login</Link>
                <Link to="/register">Register</Link>
            </div>
        </>
    );
};

export default Footer;