import React from 'react';
import './../assets/dev/button.scss';

const ButtonClear = props => (
    <div className='button-clr' onClick={props.handleClear}>
        {props.children}
    </div>
);

export default ButtonClear;