import React from 'react';
import { useState } from 'react';
import { NavLink, Route } from 'react-router-dom';
import data from '../Data/products';
import Page from './Page';
import { NavItem, Text } from '../Styles/Styles';

const SubNav = props => {
    const [products, setProduct] = useState([]);
    const category = props.match.params.category;
    // const productList = Object.values(data);
    const productList = data[category];
    console.log('subNavProps', props);
    console.log('data', data);
    console.log('category', category);
    console.log('productList', productList);

    return (
        <>  
            <NavItem>
                <ul>
                    {
                    productList.map(item => {
                            return <NavLink to={`/${category}/${item}`} activeClassName="activeNavButton"><li key={item}><Text>{item}</Text></li></NavLink>
                    })
                    }
                </ul>
            </NavItem>
            <Route path={`/${category}/:item/:page`} render={(props) => {
                productList.map(item => {
                    return <Page {...props} category={props.item} />
                })
            }} />
        </>
    )
}

export default SubNav;