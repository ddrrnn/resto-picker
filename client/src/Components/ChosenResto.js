import React, { useState, useEffect } from 'react';

const ChosenResto = ({ setRandomResto, setShowResto }) => {
    const [randomResto, setLocalResto] = useState(null); 
    const [localShowResto, setLocalShowResto] = useState(false);

    const getRandomResto = async () => {
        try {
            const response = await fetch("http://localhost:5000/resto/random");
            const jsonData = await response.json();
            setLocalResto(jsonData); 
            setRandomResto(jsonData);
        } catch (error) {
            console.error(error.message);
        }
    };

    useEffect(() => {
        getRandomResto(); 
    }, []);

    const handleButtonClick = () => {
        getRandomResto(); 
        setLocalShowResto(true);
        setShowResto(true);
    };

    return (
        <div className="flex flex-col items-center gap-7">
            {localShowResto && randomResto && (
                <h1 className="text-7xl">
                    {randomResto.name}
                </h1>
            )}
            <button 
                className="btn btn-outline btn-accent"
                onClick={handleButtonClick}
            >
                PICK RESTO!
            </button>
        </div>
    );
};

export default ChosenResto;
