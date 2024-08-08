import React, {useState} from 'react';
import ChosenResto from './ChosenResto';

const Going = ({ randomResto, showResto }) => {
    if (randomResto && showResto){
    return (
            <p>
            Will you actually go to {randomResto.name}🥺? <a>Yes!</a>
            </p>
        
    );
} else{
    return
}
}

export default Going;
