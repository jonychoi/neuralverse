import React, { useEffect, useState } from 'react';
import {Text, Flex} from './base';
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


export const InputAnyImage = ({text}) => (
    <Flex>
        <Text>{text ? text : "Please Input Any Image to Model 😊"}</Text>
    </Flex>
)

export const Timer = ({defaultSec}) => {
    const [time, setTime] = useState(0);
    useEffect(() => {
        setInterval(() => {
            let _time = time;
            _time = _time + 1;
            setTime(_time);
        }, 1000);
    });
    return (
        <Text style={{opacity: 0.7}}>{time}.0 / {defaultSec}.0s</Text>
    )
}