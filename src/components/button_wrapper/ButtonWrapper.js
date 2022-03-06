import './ButtonWrapper.css';
import {Button} from '../button/Button';
import { useSelector } from 'react-redux';
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

export const ButtonWrapper = () => {
    const setNumber = useSelector(state => state.counter.set);
    return (
        <div className = 'container button-wrapper h-100'>
            <div className = 'row'>
                <div className = 'col-4 d-flex justify-content-center align-items-center p-2'>
                    <Button name = 'q' audioName = {setNumber ? 'clap' : 'ghostSDS'}
                    path = {setNumber ? clap : ghostSDS}/>
                </div>
                <div className = 'col-4 d-flex justify-content-center align-items-center p-2'>
                    <Button name = 'w' audioName = {setNumber ? 'big vergy clap' : 'sd909'}
                    path = {setNumber ? bigVerbyClap : sd909}/>
                </div>
                <div className = 'col-4 d-flex justify-content-center align-items-center p-2'>
                    <Button name = 'e' audioName = {setNumber ? 'bright clap' : 'acoustic snare'}
                    path = {setNumber ? brightClap : acousticSnare}/>
                </div>
            </div>
            <div className = 'row'>
                <div className = 'col-4 d-flex justify-content-center align-items-center p-2'>
                    <Button name = 'a' audioName = {setNumber ? 'bright clap 2' : 'almost vox snare'}
                    path = {setNumber ? brightClap2 : almostVoxSnare}/>
                </div>
                <div className = 'col-4 d-flex justify-content-center align-items-center p-2'>
                    <Button name = 's' audioName = {setNumber ? 'c1' : 'ambient snare'}
                    path = {setNumber ? c1 : ambientSnare}/>
                </div>
                <div className = 'col-4 d-flex justify-content-center align-items-center p-2'>
                    <Button name = 'd' audioName = {setNumber ? 'mellow c chord' : 'G minor strings'}
                    path = {setNumber ? electricPianoMellowCChord : gmStrings}/>
                </div>
            </div>
            <div className = 'row'>
                <div className = 'col-4 d-flex justify-content-center align-items-center p-2'>
                    <Button name = 'z' audioName = {setNumber ? 'mellow d chord' : 'A Major'}
                    path = {setNumber ? electricPianoMellowDChord : aMajStrings}/>
                </div>
                <div className = 'col-4 d-flex justify-content-center align-items-center p-2'>
                    <Button name = 'x' audioName = {setNumber ? 'mellow seventh' : 'A minor'}
                    path = {setNumber ? oneMellowPianoSeventh : aMinStrings}/>
                </div>
                <div className = 'col-4 d-flex justify-content-center align-items-center p-2'>
                    <Button name = 'c' audioName = {setNumber ? 'clap2' : 'A minor 7'}
                    path = {setNumber ? vrbClap2 : aMin7Strings}/>
                </div>
            </div>
        </div>
    )
}