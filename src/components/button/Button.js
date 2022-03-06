import './Button.css';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeNameOfTrack } from '../../redux/store';

export const Button = (props) => {
    const dispatch = useDispatch();
    const volume = useSelector(state => state.counter.volume);
    const [button, buttonModifier] = useState(`h-100 music-button-${props.name} w-100 btn btn-secondary`);
    const audio = new Audio(props.path);
    audio.volume = volume;

    const handleKeyDown = event => {
        if (event.key === props.name) {
            buttonModifier(`h-100 music-button-${props.name} w-100 btn btn-primary`);
            dispatch(changeNameOfTrack(props.audioName));
            audio.play();
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
        return () => {
            document.removeEventListener('keyup', handleKeyUp);
            document.removeEventListener('keydown', handleKeyDown);
        }
    })

    return (
        <button className = {button} 
        onMouseDown = {() => {
            buttonModifier(`h-100 music-button-${props.name} w-100 btn btn-primary`);
            dispatch(changeNameOfTrack(props.audioName));
            audio.play();
        }}
        onMouseUp = {() => buttonModifier(`h-100 music-button-${props.name} w-100 btn btn-secondary`)}
        onMouseLeave = {() => buttonModifier(`h-100 music-button-${props.name} w-100 btn btn-secondary`)} 
        tabIndex = '0'>{props.name}</button>
    )
}