import React from 'react';
import { useState, useEffect } from 'react';
import { NavLink, Route } from 'react-router-dom';
import data from '../Data/products';
import SubNav from './SubNav';
import { NavItem, Text } from '../Styles/Styles';

const NavWrapper = props => {
    
    const navCategory = Object.keys(data);
    const [categories, setCategories] = useState(navCategory);
    console.log('cats', categories);

    return (
        <>
            <NavItem>
                <ul>
                    {
                        navCategory.map(item => {  
                            return <NavLink to={`/${item}`} activeClassName="activeNavButton"><li key={item}><Text>{item}</Text></li></NavLink>
                        })
                    }
                </ul>
            </NavItem>
            <Route path={`/:category/:item`} render={(props) => {
                navCategory.map(item => {
                    return <SubNav {...props} category={props.item} />
                })
            }} />
        </>
    )
}

export default NavWrapper;