import React, { useEffect, useState } from 'react'; 
import { Link, useLocation } from 'react-router-dom';
import { getNav } from '../navigation/index';
import { BiLogOutCircle } from "react-icons/bi";

const Sidebar = ({ showSidebar, setShowSidebar }) => {

    const { pathname } = useLocation();
    const [allNav, setAllNav] = useState([]);

    useEffect(() => {
        const navs = getNav('seller')
        setAllNav(navs);
    }, []);

    return (
        <>
            {/* Overlay */}
            <div 
                onClick={() => setShowSidebar(false)} 
                className={`fixed duration-200 ${
                    !showSidebar ? 'invisible' : 'visible'
                } w-screen h-screen bg-[#8cbce780] top-0 left-0 z-10`}
            />

            {/* Sidebar */}
            <div 
                className={`w-[260px] fixed bg-[#e6e7fb] z-50 top-0 h-screen shadow-[0_0_15px_0_rgb(34_41_47_/_5%)] transition-all 
                ${showSidebar ? 'left-0' : '-left-[260px] lg:left-0'}`}
            >
                {/* Logo */}
                <div className='h-[70px] flex justify-center items-center'>
                    <Link to='/' className='w-[180px] h-[50px]'>
                        <img 
                            className='w-full h-full' 
                            src="http://localhost:3000/images/logo.png" 
                            alt="" 
                        />
                    </Link>
                </div>

                {/* Nav */}
                <div className='px-[16px]'>
                    <ul>
                        {
                            allNav.map((n, i) => (
                                <li key={i}>
                                    <Link 
                                        to={n.path} 
                                        className={`${
                                            pathname === n.path 
                                            ? 'bg-blue-600 text-white' 
                                            : 'text-[#030811] font-bold'
                                        } px-[12px] py-[9px] rounded-sm flex items-center gap-[12px] hover:pl-4 transition-all w-full mb-1`}
                                    >
                                        <span>{n.icon}</span>
                                        <span>{n.title}</span>
                                    </Link>
                                </li>
                            ))
                        }

                        {/* Logout */}
                        <li>
                            <button className='text-[#030811] font-bold px-[12px] py-[9px] flex items-center gap-[12px] w-full'>
                                <span><BiLogOutCircle /></span>
                                <span>Logout</span>
                            </button>
                        </li>

                    </ul>
                </div>

            </div>
        </>
    );
};

export default Sidebar;