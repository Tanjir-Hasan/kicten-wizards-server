import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import ActiveLink from '../ActiveLink/ActiveLink';
import { AuthContext } from '../../providers/AuthProvider';

const Header = () => {

    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then()
            .catch(error => {
                console.log(error);
            })
    };


    return (
        <div id='header' style={{backgroundImage: "linear-gradient( 91.3deg,  rgba(135,174,220,1) 1.5%, rgba(255,255,255,1) 100.3% )"}} className="navbar p-6">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost text-black lg:hidden">
                        <svg xmlns="https://i.ibb.co/vZPvW4f/menu-1.png" className="h-6 w-6 -ml-5  text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content text-slate-950 mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link to="/" className=''>Home</Link></li>
                        <li><Link to="/blog" className=''>Blog</Link></li>
                    </ul>
                </div>
                <Link to="/" className="btn btn-ghost normal-case text-2xl font-extrabold text-slate-900">Kitchen Wizards</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal text-white px-1">
                    <li><ActiveLink to="/" className=''>Home</ActiveLink></li>
                    <li><ActiveLink to="/blog" className=''>Blog</ActiveLink></li>
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ?
                        <div className='flex gap-3'>
                            <div className="tooltip" data-tip={user.displayName}>
                                <img src={user.photoURL} alt="" className="text-white h-14 rounded-full" />
                            </div>
                            <button onClick={handleLogOut} className="btn text-white bg-[#0077b6] border-none hover:bg-sky-600">Logout</button>
                        </div>
                        :
                        <Link to="/login" style={{}} className="btn text-white bg-[#0077b6] border-none hover:bg-sky-600">Login</Link>
                }
            </div>
        </div>
    );
};

export default Header;