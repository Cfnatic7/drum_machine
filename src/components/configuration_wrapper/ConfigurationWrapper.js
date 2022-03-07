import './ConfigurationWrapper.css';
import { useEffect } from 'react';

export const ConfigurationWrapper = (props) => {
    useEffect( () => {
        document.getElementById('vol').defaultValue = props.volume;
    }, []);
    return (
        <div className = 'configuration-wrapper container h-100 d-flex flex-column justify-content-around'>
            <div className = 'row justify-items-center'>
                <label htmlFor = 'vol'><h4 className = 'text-center'>Volume: {props.volume}</h4></label>
                <input type = 'range' id = 'vol' name = 'vol' min = '0' max = '1' step = '0.01' className = 'form-control'
                onChange = {(event) => {
                   props.changeVolume(parseFloat(event.target.value));
                }}></input>
            </div>
            <div className = 'row justify-items-center'>
                <h4 className = 'text-center'>Choose set</h4>
                <label className="switch m-auto">
                    <input type="checkbox" onChange = {(event) => {
                        props.setSetNumber(props.setNumber ? 0 : 1);
                    }}/>
                    <span className="slider round"></span>
                </label>
            </div>
            <div className = 'row bg-info rounded'>
                <h4 className = 'text-center text-white'>{props.soundName ? props.soundName : "sound displayer"}</h4>
            </div>
        </div>
    )
}