import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Album from './Album';

const AlbumsPage = () => {
    const [album, setAlbum] = useState([]);
    useEffect(() =>{
            fetch('https://jsonplaceholder.typicode.com/albums')
            .then(response =>response.json())
            .then(data => setAlbum(data));
        },[]);

    return (
        <div>
            <h1>Albums Page</h1>
                <h2>Total albums: {album.length}</h2>
                    {
                        album.map(album =><Album album={album}></Album>)
                    }
        </div>
    );
};

export default AlbumsPage;