import React from 'react';
import Footer from '../../components/footer';
import Landing1 from './landing1';
import Landing2 from './landing2';
import Landing3 from './landing3';
import Landing4 from './landing4';
import Landing5 from './landing5';
import Landing6 from './landing6';
import Landing7 from './landing7';
import Landing8 from './landing8';
import { ThemeEvent } from '../../contexts/GlobalContext';
import { Flex } from '../../components/common/base';


export const Landing = ({route, setRoute}) => {
    const {darkMode} = ThemeEvent();
    return (
        <Flex style={{display: route == 0 ? 'block': 'none', backgroundColor: darkMode ? "black" : "white"}}>
            <Landing1 darkMode={darkMode} />
            <Landing8 setRoute={setRoute}/>
            <Landing2 />
            <Landing3 />
            <Landing4 />
            <Landing5 />
            <Landing6 />
            <Landing7 />
            <Footer darkMode={darkMode} />
        </Flex>
    )
};

export default Landing;