import './Button.css';
import { useState, useEffect } from 'react';

export const Button = (props) => {
    const [button, buttonModifier] = useState(`h-100 music-button-${props.name} w-100 btn btn-secondary`);

    const handleKeyDown = event => {
        if (event.key === props.name) {
            buttonModifier(`h-100 music-button-${props.name} w-100 btn btn-primary`);
        }
    }

    const handleKeyUp = event => {
        if (event.key === props.name) {
            buttonModifier(`h-100 music-button-${props.name} w-100 btn btn-secondary`);
        }
    }
    useEffect(() => {
        document.addEventListener('keydown', handleKeyDown);
        document.addEventListener('keyup', handleKeyUp);
    })

    return (
        <button className = {button} 
        // onKeyDown = {handleKeyDown}
        // onKeyUp = {handleKeyUp}
        onMouseDown = {() => buttonModifier(`h-100 music-button-${props.name} w-100 btn btn-primary`)}
        onMouseUp = {() => buttonModifier(`h-100 music-button-${props.name} w-100 btn btn-secondary`)}
        onMouseLeave = {() => buttonModifier(`h-100 music-button-${props.name} w-100 btn btn-secondary`)} 
        tabIndex = '0'>{props.name}</button>
    )
}