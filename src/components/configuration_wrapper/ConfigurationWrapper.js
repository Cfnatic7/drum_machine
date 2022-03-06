import './ConfigurationWrapper.css';
import { changeVolume, changeSet } from '../../redux/store';
import { useSelector, useDispatch } from 'react-redux';

export const ConfigurationWrapper = () => {
    const dispatch = useDispatch();
    const name = useSelector(state => {
        return state.counter.nameOfTrack
        });
    const setNumber = useSelector(state => state.counter.set);
    return (
        <div className = 'configuration-wrapper container h-100 d-flex flex-column justify-content-around'>
            <div className = 'row justify-items-center'>
                <label htmlFor = 'vol'><h4 className = 'text-center'>Volume</h4></label>
                <input type = 'range' id = 'vol' name = 'vol' min = '0' max = '1' step = '0.01' className = 'form-control'
                onChange = {(event) => {
                    dispatch(changeVolume(parseFloat(event.target.value)));
                }}></input>
            </div>
            <div className = 'row justify-items-center'>
                <h4 className = 'text-center'>Choose set</h4>
                <label className="switch m-auto">
                    <input type="checkbox" onChange = {(event) => {
                        dispatch(changeSet(setNumber ? 0 : 1));
                    }}/>
                    <span className="slider round"></span>
                </label>
            </div>
            <div className = 'row bg-info rounded'>
                <h4 className = 'text-center text-white'>{name ? name : "sound displayer"}</h4>
            </div>
        </div>
    )
}