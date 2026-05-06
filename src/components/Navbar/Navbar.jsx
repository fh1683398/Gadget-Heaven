import { Heart, ShoppingCart, TextAlignJustify, X } from 'lucide-react';
import React, { useState } from 'react';
import { Link, NavLink } from 'react-router';

const Navbar = () => {
    const [openMenu, setOpenMenu] = useState(false)

    const handleOpenMenu = () => {
        setOpenMenu(!openMenu)
    }

    const links = (
        <>
            <NavLink
                to="/"
                className={({ isActive }) =>
                    isActive ? "underline text-purple-500 font-semibold" : ""
                }
            >
                Home
            </NavLink>

            <NavLink
                to="/statics"
                className={({ isActive }) =>
                    isActive ? "underline text-purple-500 font-semibold" : ""
                }
            >
                Statics
            </NavLink>

            <NavLink
                to="/dashboard"
                className={({ isActive }) =>
                    isActive ? "underline text-purple-500 font-semibold" : ""
                }
            >
                Dashboard
            </NavLink>
        </>
    );

    return (
        <nav className='py-6 sticky top-0 z-50 bg-[#F6F6F6]/50 backdrop-blur-lg'>

            {/* mobile Menu */}
            {
                openMenu && (
                    <div
                        className='absolute bg-black/50 h-screen inset-0 z-50'
                        onClick={() => setOpenMenu(!openMenu)}>

                        <div className='bg-white w-2/3 h-screen'>
                            <div className='py-10 px-6 space-y-6'>
                                <button onClick={() => setOpenMenu(!openMenu)}>
                                    <X />
                                </button>
                                <div className='flex flex-col gap-4'>
                                    {links}
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }

            <div className='flex justify-between max-w-7xl mx-auto'>

                <div className='flex gap-2 items-center'>
                    <button onClick={() => handleOpenMenu()} className='lg:hidden'>
                        {
                            openMenu ? <X /> : <TextAlignJustify />
                        }
                    </button>
                    <Link to="/"><h3 className='font-bold text-xl cursor-pointer'>Gadget Heaven</h3></Link>
                </div>

                <ul className='hidden lg:flex gap-8'>
                    {links}
                </ul>

                <div className='flex gap-2'>
                    <ShoppingCart className='bg-gray-200 p-2 rounded-full cursor-pointer' size={35} />
                    <Heart className='bg-gray-200 p-2 rounded-full cursor-pointer' size={35} />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;