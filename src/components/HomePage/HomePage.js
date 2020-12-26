import React from 'react';
// import ImagesPage from '../ImagesPage/ImagesPage';
import { Link } from 'react-router-dom';
import './HomePage.css'
// import bg from './nasa-bg.jpg';

const HomePage = () => {
    return (
        <div className="container">
                <h1>Bismillah HomePage</h1>
                    <button>
                        <Link as={Link} className="px-4" to="/image">Go to Images Page</Link>
                    </button>
                    <br/>
                    <br/>
                    <br/>
                    <button>
                        <Link as={Link} className="px-4" to="/postPage">Go to Posts Page</Link>
                    </button>
                    <br/>
                    <br/>
                    <br/>
                    <button>
                        <Link as={Link} className="px-4" to="/albumPage">Go to Albums Page</Link>
                    </button>


                {/* <ImagesPage></ImagesPage> */}
        </div>
    );
};

export default HomePage;