import React from 'react';
import { Link } from 'react-router-dom';

export default () => {
    return (
        <div>
            Im another page
            <Link to="/">Back to Home</Link>
        </div>
    );
};