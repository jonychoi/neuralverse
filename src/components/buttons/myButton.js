import React, {useState, useEffect} from 'react';
import {Flex, Col, Row, Text, Image} from '../common/base';
import Button from '../../icons/generate.svg'
import { SideBarEvent } from '../../contexts/GlobalContext';

export const MyButton = ({label}) => {
    const [hover, setHover] = useState(false);
    const {setSideBar} = SideBarEvent();
    return (
        <Flex onClick={() => setSideBar(true)} onMouseOver={() => setHover(true)} onMouseLeave={() => setHover(false)} us="none" to="cursor" cursorOpaFalse={true} position="fixed" style={{width: 50, height: 50, padding: 20, right: '1.5%', bottom: '12%', zIndex: 10}}>
            <Flex align="center" padding="padding-left: 20px;" bg="black" style={{width: hover ? 270 : 0, opacity: hover ? 1 : 0, height: 50, right: 0, position: 'absolute', transition: 'all 300ms'}} br="25px">
                <Text style={{width: 250, position: 'absolute'}} color="white" className="light">MY MODELS & DATASETS</Text>
            </Flex>
            <Flex style={{right: 0, position: 'absolute', zIndex: 10}}>
                <Image style={{width: 50, height: 50, transition: "all 300ms", transform: hover ? 'rotate(45deg)' : 'rotate(0deg)'}} src={Button} />
            </Flex>
        </Flex>
    )
};

export default MyButton;