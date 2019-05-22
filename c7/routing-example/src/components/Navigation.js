import React from 'react';
import { NavLink } from 'react-router-dom';


function Navigation() {
    return(
        <>
        <ul>
            <li><NavLink exact to="/">Home</NavLink></li>
            <li><NavLink  to="/posts">Posts</NavLink></li>
            <li><NavLink  to="/newpost">New Post</NavLink></li>


        </ul>
        </>
    );
}

export default Navigation;