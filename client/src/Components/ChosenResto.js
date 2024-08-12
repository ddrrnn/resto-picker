import React, { useState, useEffect } from 'react';

const ChosenResto = ({ setRandomResto, setShowResto }) => {
    const [randomResto, setLocalResto] = useState(null); 
    const [localShowResto, setLocalShowResto] = useState(false);
    const [loading, setLoading] = useState(true);

    const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

    const getRandomResto = async () => {
        try {
            await delay(2000); 
            const response = await fetch("http://localhost:5000/resto/random");
            const jsonData = await response.json();
            setLocalResto(jsonData); 
            setRandomResto(jsonData);
        } catch (error) {
            console.error(error.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getRandomResto(); 
    }, []);

    const handleButtonClick = () => {
        setLoading(true); 
        getRandomResto(); 
        setLocalShowResto(true);
        setShowResto(true);
    };

    return (
        <div className="flex flex-col items-center gap-7">
            {loading ? (
                <span className="loading loading-ring loading-lg"></span>
            ) : (
                localShowResto && randomResto && (
                    <h1 className="text-7xl">
                        {randomResto.name}
                    </h1>
                )
            )}
            
            <button 
                className="btn btn-outline btn-primary"
                onClick={handleButtonClick}
            >
                PICK RESTO!
            </button>
        </div>
    );
};

export default ChosenResto;
