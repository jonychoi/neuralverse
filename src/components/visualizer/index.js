import React, {useState, useEffect} from 'react'
import {Flex, Col, Row, Text, CirclePic, Image, Box} from '../common/base';
import me from '../../imgs/me.jpeg';
import {bgStyler, btnStyler, hueStyler} from '../../styles';
import FollowButton from '../buttons/folllowButton';
import {Height, Width} from '../../hooks/getWindow';
import {CloseIcon} from '../../icons/utilities';
import styled from 'styled-components'
import ReadEngine from '../read_engine';

import { ThemeEvent, VisualizerEvent } from '../../contexts/GlobalContext';

export const VisualizerModal = ({setVisualizer, visualizer, darkMode}) => {
    return (
        <Box width="75%" bg={"rgba(15, 15, 15, 0.98)"} br="20px" style={{backdropFilter: 'blur(2px)', height: '100%', alignSelf: 'center', justifySelf: 'flex-end', overflowY: 'scroll', position: 'relative'}}>
            <Flex cursorOpaFalse={true} onClick={() => setVisualizer(false)} to="cursor" position="absolute" style={{right: 0, top: 0}}>
                <CloseIcon width={30} height={30} bg="rgb(47, 47, 47)" stroke="white" />
            </Flex>
            <Col padding="padding: 25px;" style={{overflow: 'hidden'}}>
                <Row align="center">
                    <CirclePic image={me} size={33} />
                    <Col margin="margin-left: 10px;">
                        <Row align="center">
                            <Text size="14" weight="600" margin="margin-right: 8px;">Su Hyung Choi</Text>
                            <Flex margin="margin-top: 4px;">
                                <FollowButton scale={0.9} />
                            </Flex>
                        </Row>
                        <Text size="12">Undergraduate Researcher @ Korea University</Text>
                    </Col>
                </Row>
                <Col margin="margin: 20px 0px; margin-right: 20px;" flex={1}>
                    <Text className="bold" weight="500" size="22">Residual Network</Text>
                    <Text className="light" size="14" weight="400" margin="margin-top: 5px;">Introduced by He et al. in <a>Deep Residual Learning for Image Recognition</a></Text>
                </Col>
                <CustomizeModelBtn darkMode={darkMode} />
                <ReadEngine darkMode={darkMode}/>
            </Col>
        </Box>
    )
}

export const CustomizeModelBtn = ({darkMode}) => {
    return (
        <Flex height="27px;" ato="cursor" margin="margin-bottom: 25px;" cursorOpaFalse={true} width="170px" bg={hueStyler(darkMode)} br="20px;">
            <Text size="12" className="bold" color="white" padding="padding: 5px 15px; padding-top: 6px;" >Customize this Model</Text>
        </Flex>
    )
}

export const Visualizer = () => {
    const {visualizer, setVisualizer} = VisualizerEvent();
    const {darkMode} = ThemeEvent();
    
    return (
        <Col 
            className="visualbox" 
            bg={"rgba(0,0,0,0)"} 
            position="fixed" 
            style={{
                width: '100%',
                height: Height - 150,
                overflow: 'hidden', 
                opacity: visualizer ? 1 : 0, 
                top: visualizer ? 80 : '100%',
                transition: 'all 300ms',
                zIndex: 1000,
            }}>
            <VisualizerModal setVisualizer={setVisualizer} visualizer={visualizer} darkMode={darkMode} />
        </Col>
    )
}

export default Visualizer;