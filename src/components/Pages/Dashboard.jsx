import React from 'react';
import { NavLink, Outlet } from 'react-router';

const Dashboard = () => {
    return (
        <div>
            <div className='bg-purple-500'>
                <div className='max-w-7xl mx-auto py-8 flex flex-col items-center'>
                    <h2 className='text-center text-white font-bold text-3xl mb-4'>Dashboard</h2>
                    <p className='text-center max-w-199 mx-auto text-white mb-8'>Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>

                    <div className='flex gap-4'>
                        <NavLink
                            to="cart"
                            className={({ isActive }) =>
                                isActive ? "bg-white text-purple-500 px-6 py-2 rounded-full" : 'px-6 py-2 rounded-full text-white border border-white'}> Cart
                        </NavLink>

                        <NavLink
                            to="wishlist"
                            className={({ isActive }) =>
                                isActive ? "bg-white text-purple-500 px-6 py-2 rounded-full" : 'px-6 py-2 rounded-full text-white border border-white'}>Wishlist</NavLink>
                    </div>
                </div>
            </div>

            <div className='max-w-7xl mx-auto'>
                <Outlet />
            </div>
        </div>
    );
};

export default Dashboard;