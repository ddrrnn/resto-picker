import React, { useState, useEffect } from 'react';

const ChosenResto = () => {
    const [randomResto, setRandomResto] = useState(null);
    const [showResto, setShowResto] = useState(false);

    const getRandomResto = async () => {
        try {
            const response = await fetch("http://localhost:5000/resto/random");
            const jsonData = await response.json();
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
        setShowResto(true); 
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <button className="btn btn-outline btn-accent absolute top-[40%]" onClick={handleButtonClick}>
                PICK RESTO!
            </button>
            {showResto && (
                <h1 className="absolute top-[20%] text-7xl">
                    {randomResto.name}
                </h1>
            )}
        </div>
    );
};

export default ChosenResto;
