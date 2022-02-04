import React, { useEffect, useState } from 'react';
import {Text} from './base';
import './style/loading.css';

export const Loading = () => {
    return (
        <div id="load">
            <div>G</div>
            <div>N</div>
            <div>I</div>
            <div>D</div>
            <div>A</div>
            <div>O</div>
            <div>L</div>
        </div>
    )
}

export const Timer = ({defaultSec}) => {
    const [time, setTime] = useState(0);
    useEffect(() => {
        let _time = time + 1;
        setInterval(() => setTime(_time), 1000);
    });
    return (
        <Text>{time}. / {defaultSec} Sec</Text>
    )
}