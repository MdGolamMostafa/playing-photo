import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Picture from './Picture';


const AllAlbumPictures = () => {

    const {id} = useParams();

    const [aPicture,setAlbumPicture] = useState([]);
        useEffect(() =>{
            const url = `https://jsonplaceholder.typicode.com/albums?albumId=${id}`
            fetch(url)
            .then(res =>res.json())
            .then(data => setAlbumPicture(data));
        },[]);


    return (
        <div>
            <h1>Pictures</h1>
            {
                aPicture.map(picture => <Picture picture = {picture}></Picture> )
            }
        </div>
    );
};

export default AllAlbumPictures;