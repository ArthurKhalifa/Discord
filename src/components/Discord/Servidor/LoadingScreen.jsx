import React, { useState, useEffect } from 'react';

const LoadingScreen = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    if (isLoading) {
        return (
            <div className="loading-screen">
                <h1>Carregando...</h1>
            </div>
        );
    }

    return <h1>Pronto!</h1>;
};

export default LoadingScreen;