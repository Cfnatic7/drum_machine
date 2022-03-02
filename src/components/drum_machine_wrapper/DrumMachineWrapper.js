import './DrumMachineWrapper.css';
import { ButtonWrapper } from '../button_wrapper/ButtonWrapper';
import { ConfigurationWrapper } from '../configuration_wrapper/ConfigurationWrapper';

export const DrumMachineWrapper = () => {
    return (
        <div className = 'container shadow rounded machine-wrapper'>
            <div className = 'row'><h3 className = 'text-center'>Drum Machine</h3></div>
            <div className = 'row button-wrapper-row'>
                <div className = 'col-8'>
                    <ButtonWrapper/>
                </div>
                <div className = 'col-4'>
                    <ConfigurationWrapper/>
                </div>
            </div>
        </div>
    )
}