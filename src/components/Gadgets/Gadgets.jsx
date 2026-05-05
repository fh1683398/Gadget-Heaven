import React, { useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import Gadget from "./Gadget"
import Nothing from "../../assets/nothing.jpg"

const Gadgets = () => {
    const {category} = useParams()
    const gadgetsData = useLoaderData()

    // const [gadgets, setGadgets] = useState([])
    let filteredData = []

    if(!category){
        filteredData = gadgetsData.slice(0, 6)
    }
    else if(category === "all-products"){
        filteredData = gadgetsData
    }
    else{
        filteredData = gadgetsData.filter(
            gadget => gadget.category.toLowerCase() === category
        )
    }

    return (
        <div className={filteredData.length === 0 ? "flex items-center justify-center h-full bg-white rounded-lg": 'grid md:grid-cols-3 gap-6 h-full' }>
            {
                filteredData.length > 0 ? (
                    filteredData.map(g => <Gadget key={g.product_id} g={g}></Gadget>)
                ): (
                    <div className='p-6 w-full flex flex-col items-center'>
                        <img className='max-h-110 object-cover' src={Nothing} alt="" />
                        <h3 className='text-3xl font-bold text-center mt-4'>No product available</h3>
                    </div>
                )
            }
        </div>
    );
};

export default Gadgets;