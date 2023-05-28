import React, { useState } from 'react'
import './TopBar.css';
import { Link } from 'react-router-dom';
import {FaBars} from 'react-icons/fa';
import { HiOutlineX } from 'react-icons/hi';
const TopBar = () => {
    const [ TopBar, SetTopBar] = useState(false);

    const handleClick = () => {
        SetTopBar(!TopBar)
    }

    const hanldeClose = () => {
        SetTopBar(!TopBar)
    }
    return (
        <>
          <div>
            <h4>Brand</h4>   
            <ul>
                <li>
                    <Link to='/*'>Home</Link>
                </li>
                <li>
                    <Link to='/cart'>Cart</Link>
                </li>
                <li>
                    <Link to='/product'>product</Link>
                </li>
                <li>
                    <Link to='/productlist'>ProductList</Link>
                </li>
                <li>
                    <Link to='/register'>register</Link>
                </li>
                <li>
                    <Link to='/signin'>signUp</Link>
                </li>
                <li>
                    <Link to='/signin'>signIn</Link>
                </li>
                <li>
                    <Link to='/success'>Success</Link>
                </li>
                <li>
                    <Link to='/'>support</Link>
                </li>
                <li>
                    <Link to='/'>Platform</Link>
                </li>
                <li>
                    <Link to='/'>Pricing</Link>
                </li>
            </ul>
          </div>
          <div>
            <button>
                contact
            </button>
            <button>project</button>
          </div>
          <div onClick={handleClick}>
            {!TopBar ? <FaBars style={{width:5}}/> : <HiOutlineX style={{width:5}}/> }
          </div>
            <ul className={!TopBar ? 'hidden' : 'absolute'}>
                <li>
                    <Link to='/*'>Home</Link>
                </li>
                <li>
                    <Link to='/cart'>Cart</Link>
                </li>
                <li>
                    <Link to='/product'>product</Link>
                </li>
                <li>
                    <Link to='/productlist'>ProductList</Link>
                </li>
                <li>
                    <Link to='/register'>register</Link>
                </li>
                <li>
                    <Link to='/signin'>signUp</Link>
                </li>
                <li>
                    <Link to='/signin'>signIn</Link>
                </li>
                <li>
                    <Link to='/success'>Success</Link>
                </li>
                <li>
                    <Link to='/'>support</Link>
                </li>
                <li>
                    <Link to='/'>Platform</Link>
                </li>
                <li>
                    <Link to='/'>Pricing</Link>
                </li>
                <div>
                    <button>Great Products</button>
                    <button>Good products</button>
                </div>
          </ul>
        </>
    )
}

export default TopBar;