import React from 'react';
import { Link } from 'react-router';
import banner from "../../assets/banner.jpg"

const Header = () => {
    return (
        <header className=''>

            <div className='bg-purple-500 rounded-2xl px-4 md:px-0'>

                <div className='text-center pt-12 pb-52 md:pb-72'>
                    <h1 className='text-4xl md:text-5xl font-bold max-w-5xl mx-auto text-white mb-6'>Upgrade Your Tech Accessorize with Gadget Heaven Accessories</h1>
                    <p className='max-w-175 mx-auto text-gray-200 mb-8'>Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
                    <Link to=""><button className='px-6 py-2 rounded-full bg-white text-purple-500 font-semibold text-lg cursor-pointer'>Shop Now</button></Link>
                </div>

            </div>

            <div className='px-4 md:px-0'>
                
                <div className='-mt-40 md:-mt-60 max-w-5xl mx-auto p-4 md:p-6 rounded-xl border-box bg-white/30 border-2 border-white'>
                    <img className='w-full rounded-lg' src={banner} alt="" />
                </div>
            </div>
        </header>
    );
};

export default Header;