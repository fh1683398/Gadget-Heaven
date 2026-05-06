import React from 'react';
import Header from '../Header/Header';
import { Outlet, useLoaderData } from 'react-router';
import Categories from '../Categories/Categories';



const Home = () => {
    const categories = useLoaderData()

    const scrollIntoSection = (id) => {
        document.getElementById(id).scrollIntoView({
            behavior: "smooth"
        })
    }

    return (
        <div className='max-w-7xl mx-auto'>
            <Header scrollIntoSection={scrollIntoSection}></Header>
            {/* gadget section */}
            <div className='my-10 md:my-25'>

                <h2 className='font-bold text-3xl md:text-4xl text-center mb-8 md:mb-12'>Explore Cutting-Edge Gadgets</h2>

                <div className='grid lg:grid-cols-4 gap-6 items-stretch'>

                    <div className='lg:col-span-1 lg:sticky top-20 self-start'>
                        <div className='flex flex-wrap justify-center items-center lg:flex-col gap-4 p-4 md:p-6 bg-white rounded-xl'>
                            {
                                categories.map(category => <Categories key={category.product_id} category={category}></Categories>)
                            }
                        </div>
                    </div>

                    <div className='lg:col-span-3 h-full'>
                        <Outlet></Outlet>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;