import React, { useState, useEffect } from 'react';
import './style.css';
import Card from '../UI/Card';
import blogPost from '../../data/blog.json';

/**
* @author
* @function BlogPost
**/

const BlogPost = (props) => {

    const [post, setPost] = useState({
        id: "",
        blogCategory: "",
        blogTitle: "",
        postedOn: "",
        author: "",
        blogText: ""
    });
    const [slug, setSlug] = useState('');


    useEffect(() => {
        const slug = props.match.params.slug;
        const post = blogPost.data.find(post => post.slug == slug);
        setPost(post);
        setSlug(slug)
    }, [post, props.match.params.slug]);

    if (post.blogImage == "") return null;

    return (
        <div className="blogPostContainer">
            <Card>



            </Card>
        </div>
    )

}

export default BlogPost