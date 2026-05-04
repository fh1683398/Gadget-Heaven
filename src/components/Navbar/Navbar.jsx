import { Heart, ShoppingCart, TextAlignJustify, X } from 'lucide-react';
import React, { useState } from 'react';
import { Link } from 'react-router';

const Navbar = () => {
    const [openMenu, setOpenMenu] = useState(false)
    const handleOpenMenu = ()=>{
        setOpenMenu(!openMenu)
    }

    const links = <>
        <Link to="/"><li className='cursor-pointer'>Home</li></Link>
        <Link to="/statics"><li className='cursor-pointer'>Statics</li></Link>
        <Link to="/dashboard"><li className='cursor-pointer'>Dashboard</li></Link>
    </>
    return (
        <nav className='py-6 sticky top-0 z-50 bg-[#F6F6F6]/50 backdrop-blur-lg'>

            <div className='flex justify-between max-w-7xl mx-auto'>

                <div>
                    <button onClick={()=>handleOpenMenu()} className='lg:hidden'>
                        {
                            openMenu ?  <X /> : <TextAlignJustify />
                        }
                    </button>
                    <Link to="/"><h3 className='font-bold text-xl cursor-pointer'>Gadget Heaven</h3></Link>
                </div>

                <ul className='hidden md:flex gap-8'>
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