import './Button.css';
import { useState, useEffect } from 'react';

export const Button = (props) => {
    const [button, buttonModifier] = useState(`h-100 music-button-${props.name} w-100 btn btn-secondary`);
    const uniqueId = `audio${props.name}`;

    const handleKeyDown = event => {
        if (event.key === props.name) {
            buttonModifier(`h-100 music-button-${props.name} w-100 btn btn-primary`);
            props.updateSoundName(props.audioName);
            document.getElementById(uniqueId).currentTime = 0;
            document.getElementById(uniqueId).play();
        }
    }

    const handleKeyUp = event => {
        if (event.key === props.name) {
            buttonModifier(`h-100 music-button-${props.name} w-100 btn btn-secondary`);
        }
    }
    useEffect(() => {
        document.getElementById(uniqueId).volume = props.volume;
        document.addEventListener('keydown', handleKeyDown);
        document.addEventListener('keyup', handleKeyUp);
        return () => {
            document.removeEventListener('keyup', handleKeyUp);
            document.removeEventListener('keydown', handleKeyDown);
        }
    })

    return (
        <button className = {button} 
        onMouseDown = {() => {
            buttonModifier(`h-100 music-button-${props.name} w-100 btn btn-primary`);
            props.updateSoundName(props.audioName);
            document.getElementById(uniqueId).currentTime = 0;
            document.getElementById(uniqueId).play();
        }}
        onMouseUp = {() => buttonModifier(`h-100 music-button-${props.name} w-100 btn btn-secondary`)}
        onMouseLeave = {() => buttonModifier(`h-100 music-button-${props.name} w-100 btn btn-secondary`)} 
        tabIndex = '0'>{props.name}
        <audio src = {props.path} id = {uniqueId} style = {{width: 0, height: 0}}></audio></button>
    )
}