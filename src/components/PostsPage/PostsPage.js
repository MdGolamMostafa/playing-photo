import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Post from './Post';


const PostsPage = () => {
    const [post, setPost] = useState([]);
    useEffect(() =>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response =>response.json())
        .then(data => setPost(data));
      },[])

    return (
        <div>
            <h1>Bismillah PostsPage</h1>
            {
                post.map(post =><Post post={post}></Post>)
            }
        </div>
    );
};

export default PostsPage;