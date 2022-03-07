import './ButtonWrapper.css';
import {Button} from '../button/Button';
import clap from '../../assets/sounds/piano and stuff/707-clap.wav';
import bigVerbyClap from '../../assets/sounds/piano and stuff/big-verby-clap.wav';
import brightClap from '../../assets/sounds/piano and stuff/brightclap.wav';
import brightClap2 from '../../assets/sounds/piano and stuff/brightclap2.wav';
import c1 from '../../assets/sounds/piano and stuff/c1.wav';
import electricPianoMellowCChord from '../../assets/sounds/piano and stuff/electric-piano-mellow-c-chord.wav';
import electricPianoMellowDChord from '../../assets/sounds/piano and stuff/electric-piano-mellow-d-chord.wav';
import oneMellowPianoSeventh from '../../assets/sounds/piano and stuff/one-mellow-piano-seventh.wav';
import vrbClap2 from '../../assets/sounds/piano and stuff/Vrb-clap2.wav';
import ghostSDS from '../../assets/sounds/strings and stuff/2ghostsds.wav';
import sd909 from '../../assets/sounds/strings and stuff/909sd.wav';
import acousticSnare from '../../assets/sounds/strings and stuff/acoustic_snare.wav';
import almostVoxSnare from '../../assets/sounds/strings and stuff/almost_vox_snare.wav';
import ambientSnare from '../../assets/sounds/strings and stuff/ambient_snare.wav';
import gmStrings from '../../assets/sounds/strings and stuff/Gm-strings.wav';
import aMajStrings from '../../assets/sounds/strings and stuff/sad-strings-Amaj.wav';
import aMinStrings from '../../assets/sounds/strings and stuff/sad-strings-Amin.wav';
import aMin7Strings from '../../assets/sounds/strings and stuff/sad-strings-Amin7.wav';

export const ButtonWrapper = (props) => {
    return (
        <div className = 'container button-wrapper h-100'>
            <div className = 'row'>
                <div className = 'col-4 d-flex justify-content-center align-items-center p-2'>
                    <Button name = 'q' audioName = {props.setNumber ? 'clap' : 'ghostSDS'}
                    path = {props.setNumber ? clap : ghostSDS}
                    updateSoundName = {props.updateSoundName}
                    volume = {props.volume}/>
                </div>
                <div className = 'col-4 d-flex justify-content-center align-items-center p-2'>
                    <Button name = 'w' audioName = {props.setNumber ? 'big vergy clap' : 'sd909'}
                    path = {props.setNumber ? bigVerbyClap : sd909}
                    updateSoundName = {props.updateSoundName}
                    volume = {props.volume}/>
                </div>
                <div className = 'col-4 d-flex justify-content-center align-items-center p-2'>
                    <Button name = 'e' audioName = {props.setNumber ? 'bright clap' : 'acoustic snare'}
                    path = {props.setNumber ? brightClap : acousticSnare}
                    updateSoundName = {props.updateSoundName}
                    volume = {props.volume}/>
                </div>
            </div>
            <div className = 'row'>
                <div className = 'col-4 d-flex justify-content-center align-items-center p-2'>
                    <Button name = 'a' audioName = {props.setNumber ? 'bright clap 2' : 'almost vox snare'}
                    path = {props.setNumber ? brightClap2 : almostVoxSnare}
                    updateSoundName = {props.updateSoundName}
                    volume = {props.volume}/>
                </div>
                <div className = 'col-4 d-flex justify-content-center align-items-center p-2'>
                    <Button name = 's' audioName = {props.setNumber ? 'c1' : 'ambient snare'}
                    path = {props.setNumber ? c1 : ambientSnare}
                    updateSoundName = {props.updateSoundName}
                    volume = {props.volume}/>
                </div>
                <div className = 'col-4 d-flex justify-content-center align-items-center p-2'>
                    <Button name = 'd' audioName = {props.setNumber ? 'mellow c chord' : 'G minor strings'}
                    path = {props.setNumber ? electricPianoMellowCChord : gmStrings}
                    updateSoundName = {props.updateSoundName}
                    volume = {props.volume}/>
                </div>
            </div>
            <div className = 'row'>
                <div className = 'col-4 d-flex justify-content-center align-items-center p-2'>
                    <Button name = 'z' audioName = {props.setNumber ? 'mellow d chord' : 'A Major'}
                    path = {props.setNumber ? electricPianoMellowDChord : aMajStrings}
                    updateSoundName = {props.updateSoundName}
                    volume = {props.volume}/>
                </div>
                <div className = 'col-4 d-flex justify-content-center align-items-center p-2'>
                    <Button name = 'x' audioName = {props.setNumber ? 'mellow seventh' : 'A minor'}
                    path = {props.setNumber ? oneMellowPianoSeventh : aMinStrings}
                    updateSoundName = {props.updateSoundName}
                    volume = {props.volume}/>
                </div>
                <div className = 'col-4 d-flex justify-content-center align-items-center p-2'>
                    <Button name = 'c' audioName = {props.setNumber ? 'clap2' : 'A minor 7'}
                    path = {props.setNumber ? vrbClap2 : aMin7Strings}
                    updateSoundName = {props.updateSoundName}
                    volume = {props.volume}/>
                </div>
            </div>
        </div>
    )
}