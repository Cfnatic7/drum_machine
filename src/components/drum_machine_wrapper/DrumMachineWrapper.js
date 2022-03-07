import './DrumMachineWrapper.css';
import { ButtonWrapper } from '../button_wrapper/ButtonWrapper';
import { ConfigurationWrapper } from '../configuration_wrapper/ConfigurationWrapper';
import { useState } from 'react';

export const DrumMachineWrapper = () => {
    const [setNumber, setSetNumber] = useState(1);
    const [volume, changeVolume] = useState(0.33);
    const [soundName, updateSoundName] = useState('');

    return (
        <div className = 'container shadow rounded machine-wrapper'>
            <div className = 'row'><h3 className = 'text-center'>Drum Machine</h3></div>
            <div className = 'row button-wrapper-row'>
                <div className = 'col-8'>
                    <ButtonWrapper setNumber = {setNumber} updateSoundName = {updateSoundName} volume = {volume}/>
                </div>
                <div className = 'col-4'>
                    <ConfigurationWrapper setSetNumber = {setSetNumber} setNumber = {setNumber} soundName = {soundName} changeVolume = {changeVolume} volume = {volume}/>
                </div>
            </div>
        </div>
    )
}