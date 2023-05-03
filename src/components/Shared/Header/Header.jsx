import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import ActiveLink from '../ActiveLink/ActiveLink';
import { AuthContext } from '../../providers/AuthProvider';

const Header = () => {

    const { user, logOut } = useContext(AuthContext);

    const [showLogOut, setShowLogOut] = useState(false);

    const handleLogOut = () => {
        logOut()
            .then()
            .catch(error => {
                console.log(error);
            })
    };


    return (
        <div className="navbar p-8 bg-[#0F1D22]">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost text-black lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#f2d3a8]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content text-slate-950 mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link to="/" className=''>Home</Link></li>
                        <li><Link to="/blog" className=''>Blog</Link></li>
                    </ul>
                </div>
                <Link to="/" className="btn btn-ghost normal-case text-2xl font-mono text-[#f18701]">Kitchen Wizards</Link>
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
                                {
                                    user.photoURL.startsWith('http') ? (
                                        <img src={user.photoURL} alt="" className="text-white bg-transparent h-14 rounded-full" />
                                    )
                                        :
                                        (
                                            <button className="btn rounded-full">{user.photoURL}</button>
                                        )
                                }

                            </div>
                            <button onClick={handleLogOut} className="btn text-slate-950 bg-[#e19a3c] hover:bg-[#f2bc71]">Logout</button>
                        </div>
                        :
                        <Link to="/login" className="btn text-slate-950 bg-[#eebe7a] hover:bg-[#f2d3a8]">Login</Link>
                }
            </div>
        </div>
    );
};

export default Header;