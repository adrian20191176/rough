import React, { useState, useEffect } from 'react';
import './style.css';
import Card from '../UI/Card';

import blogPost from '../../data/blog.json';
import { NavLink } from 'react-router-dom';

/**
* @author
* @function Sidebar
**/

const Sidebar = (props) => {

    const [posts, setPosts] = useState([]);


    useEffect(() => {
        const posts = blogPost.data;
        setPosts(posts);
    }, [posts]);



    return (
        <div className="sidebarContainer" style={{
            width: props.width
        }}>
            <Card style={{ marginBottom: '20px', padding: '20px', boxSizing: 'border-box' }}>
                <div className="cardHeader">
                    <span>About Us</span>
                </div>


            </Card>
        </div>

    )

}

export default Sidebar