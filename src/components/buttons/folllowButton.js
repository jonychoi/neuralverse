import React, {useState, useEffect} from 'react';
import {Flex, Col, Row, Text} from '../common/base';
import {ThemeEvent} from '../../contexts/GlobalContext';
import { redLowColor, blueColor, purColor, blueLowColor } from '../../styles';
import styled from 'styled-components';

const T = styled(Text)`
    :hover {
        font-weight: 800;
    };
    transition: all 0.3s;
`;

export const FollowButton = ({scale = 1}) => {
    const {darkMode} = ThemeEvent();
    const [hover, setHover] = useState(false);
    const [follow, setFollow] = useState(false);
    return (
        <Col 
            onClick={() => setFollow(!follow)} to="cursor" 
            cursorOpaFalse={true} 
            onMouseOver={() => setHover(true)} 
            onMouseLeave={() => setHover(false)} 
            style={{transform: `scale(${scale})`, borderColor: follow ? redLowColor : blueLowColor, borderStyle: 'solid', borderWidth: 1.5}} 
            align="center" 
            height="23px" 
            width="70px" 
            justify="center" 
            br="20px">
            <T weight="600" className="light" color={darkMode ? "white" : "black"} padding="padding: 8px 10px 8px 10px" size="9">{follow ? "Unfollow" : "+ Follow"}</T>
        </Col>
    )
}

export default FollowButton;