import React from 'react';
import { IChildren } from '../../models';
import './Background.scss'


const Background = ({children} : IChildren) => {
    return (
        <div className='todo'>
            {children}
        </div>
    );
};

export default Background;