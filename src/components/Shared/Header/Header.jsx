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
                <Link to="/" className="btn btn-ghost normal-case text-2xl font-mono text-[#f2d3a8]">Kitchen Wizards</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal text-white px-1">
                    <li><ActiveLink to="/" className=''>Home</ActiveLink></li>
                    <li><ActiveLink to="/blog" className=''>Blog</ActiveLink></li>
                </ul>
            </div>
            {/* <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    <li tabIndex={0}>
                        <a>
                            Parent
                            <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                        </a>
                        <ul className="p-2 bg-base-100">
                            <li><a>Submenu 1</a></li>
                            <li><a>Submenu 2</a></li>
                        </ul>
                    </li>
                </ul>
            </div> */}
            <div className="navbar-end">
                {/* {
                    user ? (
                        <div className="flex items-center">
                            <h5 className="text-red-500 cursor-pointer"
                                onMouseEnter={() => setShowLogOut(true)}
                                onMouseLeave={() => setShowLogOut(false)}
                            >
                                {user.displayName || user.email}
                            </h5>
                            {
                                showLogOut && (
                                    <button onClick={handleLogOut} className="btn text-slate-950 bg-[#eebe7a] hover:bg-[#f2d3a8] ml-2">Logout</button>
                                )
                            }
                        </div>

                        // <div className="dropdown dropdown-end">
                        //     <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        //         <div className="w-10 rounded-full">
                        //             <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                        //         </div>
                        //     </label>
                        //     <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                        //         <li>{user && user.displayName}</li>
                        //         <li>
                        //             <button
                        //                 onClick={handleLogOut}
                        //                 className="btn btn-ghost w-full"
                        //             >
                        //                 Logout
                        //             </button>
                        //         </li>
                        //     </ul>
                        // </div>
                    )
                        :
                        <Link to="/login" className="btn text-slate-950 bg-[#eebe7a] hover:bg-[#f2d3a8]">Login</Link>
                } */}
                <Link to="/login" className="btn text-slate-950 bg-[#eebe7a] hover:bg-[#f2d3a8]">Login</Link>
            </div>
        </div>
    );
};

export default Header;