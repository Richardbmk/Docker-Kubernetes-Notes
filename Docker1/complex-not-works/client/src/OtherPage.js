import React from 'react';
import { Link } from 'react-router-dom';

export default () => {
    return (
        <div>
            Im some ther simple page in react!
            <Link to="/">Go back home</Link>
        </div>
    );
};
