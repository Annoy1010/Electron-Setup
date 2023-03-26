import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Home = ({ successfulLogin }) => {
    const navigate = useNavigate();
    useEffect(() => {
        if (!successfulLogin) {
            navigate('/login');
        }
    });

    return (
        <div>
            <span>Home Screen</span>
        </div>
    );
};

export default Home;
