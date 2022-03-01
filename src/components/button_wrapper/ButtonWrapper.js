import './ButtonWrapper.css';
import {Button} from '../button/Button';

export const ButtonWrapper = () => {
    return (
        <div className = 'container button-wrapper h-100'>
            <div className = 'row'>
                <div className = 'col-4 d-flex justify-content-center align-items-center p-2'>
                    <Button name = 'q'/>
                </div>
                <div className = 'col-4 d-flex justify-content-center align-items-center p-2'>
                    <Button name = 'w'/>
                </div>
                <div className = 'col-4 d-flex justify-content-center align-items-center p-2'>
                    <Button name = 'e'/>
                </div>
            </div>
            <div className = 'row'>
                <div className = 'col-4 d-flex justify-content-center align-items-center p-2'>
                    <Button name = 'a'/>
                </div>
                <div className = 'col-4 d-flex justify-content-center align-items-center p-2'>
                    <Button name = 's'/>
                </div>
                <div className = 'col-4 d-flex justify-content-center align-items-center p-2'>
                    <Button name = 'd'/>
                </div>
            </div>
            <div className = 'row'>
                <div className = 'col-4 d-flex justify-content-center align-items-center p-2'>
                    <Button name = 'z'/>
                </div>
                <div className = 'col-4 d-flex justify-content-center align-items-center p-2'>
                    <Button name = 'x'/>
                </div>
                <div className = 'col-4 d-flex justify-content-center align-items-center p-2'>
                    <Button name = 'c'/>
                </div>
            </div>
        </div>
    )
}