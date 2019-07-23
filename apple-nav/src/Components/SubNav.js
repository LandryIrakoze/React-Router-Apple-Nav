import React from 'react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import data from '../Data/products';

const SubNav = props => {
    const [products, setProduct] = useState([]);
    console.log('subNavProps', props);
    const category = props.match.params.category;
    console.log('data', data);
    console.log('category', category);
    //add links dynamically here

    return (
        <div>
        
        </div>
    )
}

export default SubNav;