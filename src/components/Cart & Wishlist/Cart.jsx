import React, { useEffect, useState } from 'react';
import { useRouteLoaderData } from 'react-router';
import { getCartItems, removeItemFromTheList } from '../Utilities/utilities';
import { SlidersVertical, X } from 'lucide-react';

const Cart = () => {
    const gadgets = useRouteLoaderData("dashboard")
    const [cardItems, setCardItems] = useState([])

    useEffect(() => {
        const storedData = getCartItems()
        setCardItems(storedData)
    }, [])

    const handleRemove = (id) => {
        removeItemFromTheList("cart", id)

        const updatedList = cardItems.filter(itemId => itemId !== id)
        setCardItems(updatedList)
    }

    const filteredItems = gadgets.filter(gadget => cardItems.includes(gadget.product_id))
    
    const total = filteredItems.reduce((acc, item)=> acc + item.price, 0).toFixed(1)

    return (
        <div className='mt-15 md:mt-25'>
            <div className='flex flex-col md:flex-row justify-between'>

                <h3 className='font-semibold text-2xl hidden md:block'>Cart</h3>

                <div className='flex flex-col md:flex-row gap-4 items-center'>

                    <h3 className='font-semibold text-2xl'>Total cost: ${total}</h3>

                    <div className='flex gap-4 '>

                        <div className='flex items-center justify-end relative'>

                            <select className="cursor-pointer px-4 py-2 pr-14 border border-purple-500 text-purple-500 rounded-full outline-none bg-transparent font-medium appearance-none" defaultValue="">

                                <option value="" disabled>Sort by</option>
                                <option value="price">Price</option>
                                <option value="name">Name</option>
                            </select>

                            <SlidersVertical
                                className='absolute right-4 text-purple-500 pointer-events-none' size={20}
                            />
                        </div>

                        <button className='px-4 py-2 bg-purple-500 font-medium text-white rounded-full'>Purchase</button>
                    </div>
                </div>
            </div>

            <div className='flex flex-col gap-6 mt-10 mb-15 md:mb-25'>

                {filteredItems.map(item => (
                    <div className='flex gap-4 p-4 md:p-8 rounded-lg bg-white items-center'>

                        <img className='max-w-20 md:max-w-50 max-h-30 object-cover' src={item.product_image} alt="" />

                        <div className='flex justify-between items-center flex-1'>

                            <div>
                                <h3 className='md:text-xl font-semibold'>{item.product_title}</h3>
                                <p className='text-gray-500 hidden md:block'>{item.description}</p>
                            </div>

                            <button
                            onClick={()=>handleRemove(item.product_id)}
                            className='text-purple-500 w-8 h-8 rounded-full border border-purple-500 flex items-center justify-center'><X size={20} /></button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Cart;