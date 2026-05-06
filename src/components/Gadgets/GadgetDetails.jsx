import { Heart, ShoppingCart, Star } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import { getWishlistItems, removeItemFromTheList, setItemInCartList, setItemInWishlist } from '../Utilities/utilities';

const GadgetDetails = () => {
    const [addToCart, setAddToCart] = useState(false)
    const [addToWishlist, setAddToWishlist] = useState(false)

    const handleAddToCard = () => {
        setAddToCart(!addToCart)

        // set
        if (addToCart) {
            removeItemFromTheList("cart", idNum)
            return
        }
        if (!addToCart) {
            setItemInCartList(idNum)
            return
        }
    }

    const handleAddToWishlist = () => {
        setAddToWishlist(!addToWishlist)

        // remove
        if (addToWishlist) {
            removeItemFromTheList("wishlist", idNum)
            return
        }
        if (!addToWishlist) {
            setItemInWishlist(idNum)
            return
        }
    }

    useEffect(() => {
        const wishList = getWishlistItems()
        setAddToWishlist(wishList.includes(idNum))
    }, [])

    const allData = useLoaderData()
    const id = useParams()
    const idNum = parseInt(id.product_id)

    const appData = allData.find(app => app.product_id === idNum)

    const { availability, description, price, product_image, product_title, rating, specification } = appData

    return (
        <div className=''>

            <div className='py-8 pb-50 bg-purple-500'>
                <div className='max-w-7xl mx-auto'>
                    <h2 className='text-center text-white font-bold text-3xl mb-4'>Product Details</h2>
                    <p className='text-center max-w-199 mx-auto text-white mb-8'>Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
                </div>
            </div>

            <div className='p-4 md:p-6 -mt-50 bg-white flex flex-col md:flex-row items-center justify-center md:justify-start gap-6 max-w-7xl mx-auto mb-25 rounded-lg'>

                <div className='max-w-80 lg:max-w-106'>
                    <img src={product_image} alt="" />
                </div>

                <div className='flex-1'>
                    <h3 className='text-2xl md:text-3xl mb-3 font-bold'>{product_title}</h3>
                    <h4 className='font-semibold text-xl mb-4'>{price}</h4>
                    <span className='bg-green-100 border border-green-200 rounded-full px-3 py-1 mb-4 block w-fit'>{availability ? "in stock" : "out of stock"}</span>

                    <p className='text-gray-500 mb-4'>{description}</p>

                    <p className='font-bold text-lg mb-4'>Specification</p>
                    <ul className='list-disc list-inside text-gray-500 left-3 mb-4'>
                        {
                            specification.map((i, index) => <li key={index}>{i}</li>)
                        }
                    </ul>

                    <span className='flex gap-2 items-center text-gray-700 mb-4'>Ratings <Star size={15} /></span>
                    <span className='block'>{rating}</span>

                    <div className='flex gap-4 mt-4'>

                        <button
                            onClick={handleAddToCard}
                            className='bg-purple-500 text-white px-5 py-2 rounded-full flex gap-2 hover:bg-purple-400'>
                            {addToCart ? "Remove from Cart" : "Add to Cart"}
                            <ShoppingCart size={20} />
                        </button>

                        <button
                            onClick={handleAddToWishlist}>

                            <Heart className={addToWishlist ? "p-2 rounded-full cursor-pointer bg-purple-500 text-white" : "bg-gray-200 p-2 rounded-full cursor-pointer"} size={35} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GadgetDetails;