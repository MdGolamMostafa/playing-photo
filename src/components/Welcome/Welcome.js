import React from 'react';
import { Link } from 'react-router-dom';
import Header from "../Header/Header";

const Wellcome = () => {
    return (
        <div className = 'wrapper'>
        
                <h1 className = "text-primary">Welcome Page</h1>
                    <button>
                        <Link as={Link} className="px-4" to="/home">Go to Home Page</Link>
                    </button>
        </div>
    );
};

export default Wellcome;