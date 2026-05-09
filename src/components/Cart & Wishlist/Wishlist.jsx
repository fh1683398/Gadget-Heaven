import { ShoppingCart, X } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { useRouteLoaderData } from 'react-router';
import { getCartItems, getWishlistItems, removeItemFromTheList, setItemInCartList } from '../Utilities/utilities';

const Wishlist = () => {
    const gadgets = useRouteLoaderData("dashboard")
    const [storedWishList, setStoredWishlist] = useState([])
    const [added, setAdded] = useState(getCartItems())

    useEffect(() => {
        const storedList = getWishlistItems()
        setStoredWishlist(storedList)
    }, [])

    const filteredItems = gadgets.filter(gadget => storedWishList.includes(gadget.product_id))

    const handleRemove = (id) => {
        removeItemFromTheList("wishlist", id)

        const updatedList = storedWishList.filter(itemId => itemId !== id)
        setStoredWishlist(updatedList)
    }

    const handleAddToCard = (id)=>{
        setAdded([...added, id])
        setItemInCartList(id)
    } 
    
    return (
        <div className='mt-15 md:mt-25'>
            <div className=''>

                <h3 className='font-semibold text-2xl hidden md:block'>Wishlist</h3>
            </div>

            <div className='flex flex-col gap-6 mt-10 mb-15 md:mb-25'>

                {filteredItems.map(item => (
                    <div className='flex gap-4 p-4 md:p-8 rounded-lg bg-white items-center'>

                        <img className='max-w-20 md:max-w-50 object-cover' src={item.product_image} alt="" />

                        <div className='flex justify-between items-center flex-1'>

                            <div>
                                <h3 className='md:text-xl font-semibold mb-3'>{item.product_title}</h3>

                                <p className='text-gray-500 hidden md:block mb-4'><span className='font-semibold text-gray-600'>Description:</span> {item.description}</p>

                                <p className='mb-4 text-gray-500'><span className='font-bold text-gray-600'>Price:</span> ${item.price}</p>

                                <button
                                    onClick={()=>handleAddToCard(item.product_id)}
                                    className='bg-purple-500 text-white px-5 py-2 rounded-full flex gap-2 hover:bg-purple-400 text-sm'>
                                    {added.includes(item.product_id) ? "added" : "Add to Cart"}
                                    <ShoppingCart size={20} />
                                </button>

                            </div>

                            <button
                                onClick={() => handleRemove(item.product_id)}
                                className='text-purple-500 w-8 h-8 rounded-full border border-purple-500 flex items-center justify-center'><X size={20} /></button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Wishlist;