import React, {useState, useEffect} from 'react'
import {Flex, Col, Row, Text, CirclePic, Image} from '../../components/common/base';
import residual from '../../imgs/residual.png';
import me from '../../imgs/me.jpeg';
import {bgStyler, btnStyler, hueStyler} from '../../styles';
import FollowButton from '../../components/buttons/folllowButton';
import {Width} from '../../hooks/getWindow';
import {CloseIcon} from '../../icons/utilities';
import styled from 'styled-components'

const Box = styled(Col)`
    transition: background-color .25s,color .25s,box-shadow .25s;
    box-shadow: 0 0 0.1rem rgb(0 0 0 / 10%), 0 0.15rem 0.9rem rgb(0 0 0 / 10%);
    border: 0;
`;

export const VisualizerModal = ({setModelVisual, modelVisual, darkMode}) => {
    return (
        <Col width="650px" style={{minHeight: 800, overflow: 'hidden', position: 'relative'}}>
            <Flex onClick={() => setModelVisual(false)} to="cursor" position="absolute" style={{right: 0, top: 0}}>
                <CloseIcon width={30} height={30} bg={bgStyler(!darkMode)} stroke={btnStyler(darkMode)} />
            </Flex>
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
            <Row align="center">
                <Col margin="margin: 20px 0px; margin-right: 20px;">
                    <Text className="bold" weight="500" size="22">Residual Network</Text>
                    <Text className="light" size="14" weight="400" margin="margin-top: 5px;">Introduced by He et al. in <a>Deep Residual Learning for Image Recognition</a></Text>
                </Col>
                <CustomizeModelBtn darkMode={darkMode} />
            </Row>
            
            <Col padding="padding: 15px; padding-top: 0px;">
                
                <Image src={residual} />
            </Col>
        </Col>
    )
}

export const CustomizeModelBtn = ({darkMode}) => {
    return (
        <Flex height="27px;" to="cursor" width="200px" bg={hueStyler(darkMode)} br="20px;">
            <Text size="12" className="bold" color={darkMode ? "black" : "white"} padding="padding: 5px 15px; padding-top: 6px;" >Customize this Model</Text>
        </Flex>
    )
}

const halfWidth = Width / 2

export const Visualizer = ({setModelVisual, modelVisual, darkMode}) => {
    return (
        <Box justfiy="flex-start" bg={bgStyler(darkMode)} padding="padding: 25px;" position="fixed" style={{opacity: modelVisual ? 1 : 0, right: modelVisual ? 0 : - halfWidth, transition: 'all 500ms ease'}}>
            <VisualizerModal setModelVisual={setModelVisual} modelVisual={modelVisual} darkMode={darkMode} />
        </Box>
    )
}