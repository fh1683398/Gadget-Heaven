import React from 'react';
import { Link } from 'react-router';

const Gadget = ({g}) => {
    const {product_title, price, product_image} = g
    return (
        <div className='bg-white p-5 rounded-lg'>
            <div className='mb-5 flex justify-center items-center'>
                <img className='w-auto h-50 object-cover' src={product_image} alt={product_title} />
            </div>
            <div className='text-gray-700'>
                <h3 className='mb-3 font-semibold text-2xl'>{product_title}</h3>
                <p className='mb-4 text-xl text-gray-500'>$ {price}</p>
                <Link to="/"> <button className='px-4 py-2 text-lg font-semibold text-purple-500 bg-transparent border border-purple-500 rounded-full hover:bg-purple-500 hover:text-white'>View Details</button></Link>
            </div>
        </div>
    );
};

export default Gadget;