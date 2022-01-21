import React from 'react';
import {Text, Flex, Row, Col, Image} from '../../components/common/base';
import ReactPlayer from 'react-player'
import earth from '../../imgs/earth_pexel.mp4';
import night from '../../imgs/night.mp4';
import best from '../../imgs/best.mp4';
import earth2 from '../../imgs/earth.mp4';
import space from '../../imgs/space.mp4'
import nebula from '../../imgs/nebula.mp4';
import man from '../../imgs/man.mp4';

export const Index = ({}) => {
    return (
        <Col align="center" justify="center" style={{height: '100vh', overflow: 'hidden'}}>
            <Text zIndex={10} className="bold" color="white" size="40" style={{textShadow: '1.5px 1.5px 1.5px rgba(20, 20, 20, 0.9)'}}>BEYOND THE STATE OF THE ARTS</Text>
            <Text zIndex={10} margin="margin: 10px" className="bold" style={{textShadow: '1.5px 1.5px 1.5px rgba(20, 20, 20, 0.9)'}} color="white" size="30">WE BELIEVE THE HUMAN COLLECTIVE INTELLIGENCE</Text>
            <ReactPlayer muted={true} playing={true} loop={true} width="100%" height="100%" style={{position: 'absolute', objectFit: 'cover', transform: 'rotateY(180deg)'}} url={nebula} />
        </Col>
    )
};
    
export default Index;