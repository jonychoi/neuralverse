import React, {useState} from 'react';
import {Flex, Text} from '../common/base';
import {ThemeEvent} from '../../contexts/GlobalContext';

export const Button = ({text, width, height, textColor= "white", padding, margin, size, color, hoverColor, darkColor = color, darkHoverColor = hoverColor, func, br, arg}) => {
    const {darkMode} = ThemeEvent();
    const [hover, setHover] = useState(false);
    return (
        <Flex 
            to="cursor" cursorOpaFalse={true} onMouseOver={() => setHover(true)} onMouseLeave={() => setHover(false)} 
            bg={darkMode ? hover ? darkHoverColor : darkColor : hover ? hoverColor : color} 
            style={{transition: 'all 300ms'}}
            justify="center" align="center" width={width} height={height} margin={margin} br={br}
            onClick={func ? () => func(arg) : null}>
            <Text color={textColor} padding={padding} size={size} className="bold">{text}</Text>
        </Flex>
    )
}

export default Button;