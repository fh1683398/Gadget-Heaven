import React from 'react';
import { NavLink } from 'react-router';

const Categories = ({ category }) => {

    return (
        <NavLink to={`/category/${category.slug}`}
            className="lg:w-full bg-gray-200 rounded-full px-6 py-3 cursor-pointer text-center">
            {category.category}
        </NavLink>
    );
};

export default Categories;