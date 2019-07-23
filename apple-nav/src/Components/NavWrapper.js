import React from 'react';
import { useState, useEffect } from 'react';
import { NavLink, Route } from 'react-router-dom';
import data from '../Data/products';
import SubNav from './SubNav';

const NavWrapper = props => {
    
    const navCategory = Object.keys(data);
    const [categories, setCategories] = useState(navCategory);
    console.log('cats', categories);

    // <div>
    //     {
    //         navCategory.map(item => {
    //             return <SubNav category={item}>
    //         })
    //     }
    // </div>

    return (
        <div>
        {/* <ul>
            {
                navCategory.map(item => {  
                    return (
                        <div>
                            <NavLink to={`/${item}`} activeClassName="activeNavButton"><li key={item}>{item}</li></NavLink>
                            <Route path={`/${item}/:item`} render={(props) => { {...props} category={item}}}/>
                        </div>
                    )
                })
            }
        </ul> */}
        
            <ul>
                {
                    navCategory.map(item => {  
                        return <NavLink to={`/${item}`} activeClassName="activeNavButton"><li key={item}>{item}</li></NavLink>
                    })
                }
            </ul>
            <Route path={`/:category/:item`} render={(props) => {
                navCategory.map(item => {
                    return <SubNav {...props} category={item} />
                })
            }} />
        </div>
    )
}

export default NavWrapper;