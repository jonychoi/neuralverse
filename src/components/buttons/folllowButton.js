import React, {useState, useEffect} from 'react';
import {Flex, Col, Row, Text} from '../common/base';
import {ThemeEvent} from '../../contexts/GlobalContext';
import { redLowColor, blueColor, purColor } from '../../styles';

export const FollowButton = ({following, scale = 1}) => {
    const {darkMode} = ThemeEvent();
    const [hover, setHover] = useState(false);
    return (
        <Flex to="cursor" cursorOpaFalse={true} onMouseOver={() => setHover(true)} onMouseLeave={() => setHover(false)} bg={hover ? redLowColor : purColor} style={{transform: `scale(${scale})`}} align="center" height="20px" justify="center" margin="margin-bottom: 3px;" br="20px">
            <Text color={"white"} padding="padding: 6px 10px 5px 10px" size="10.8" className="bold">{following ? "Unfollow" : "Follow"}</Text>
        </Flex>
    )
}

export default FollowButton;