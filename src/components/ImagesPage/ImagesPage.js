import React from 'react';
import { useState } from 'react';
import axios from 'axios';

const ImagesPage = () => {

    const [photo , setPhoto] = useState("");
    const [clientId , setClientId] = useState("G8_d7W72ijIcxvcxA0uZ2YQmKUfiyAJR6qoV72gFBdw");
    const [result, setResult] = useState([]);
    function handleChange(event) {
        setPhoto(event.target.value);
    }

    function handleSubmit(event) {
        console.log(photo);
        const url = "https://api.unsplash.com/search/photos?page=1&query="+photo+"&client_id="+ clientId;
        axios.get(url)
        .then((response) =>{
            console.log(response);
            setResult(response.data.results);

        })
    }
    return (
        <div>
            <h1>Bismillah ImagesPage </h1>
                <h1>Unsplash Photo Search Here </h1>
                    <input onChange={handleChange} type="text" name="photo" placeholder="Search for photos"/>
                        <button onClick={handleSubmit} type="submit" >Search</button>
                            {
                                result.map((photo) => (<img src={photo.urls.small}/>))
                            }
        </div>
    );
};

export default ImagesPage;