import React, {useState, useEffect} from 'react'
import {Flex, Col, Row, Text, CirclePic, Image} from '../../components/common/base';
import residual from '../../imgs/residual.png';
import me from '../../imgs/me.jpeg';
import {bgStyler, btnStyler, hueStyler} from '../../styles';
import FollowButton from '../../components/buttons/folllowButton';
import {Height, Width} from '../../hooks/getWindow';
import {CloseIcon} from '../../icons/utilities';
import styled from 'styled-components'
import ReadEngine from '../../components/read_engine';

const Box = styled(Col)`
    transition: background-color .3,color .3,box-shadow .3;
    box-shadow: 0 0 0.1rem rgb(0 0 0 / 10%), 0 0.15rem 0.9rem rgb(0 0 0 / 10%);
    border: 0;
    ::-webkit-scrollbar {
        display: none;
      }
    /* Hide scrollbar for IE, Edge and Firefox */
    {
        -ms-overflow-style: none;  /* IE and Edge */
        scrollbar-width: none;  /* Firefox */
    }
`;

export const VisualizerModal = ({setExpand, setModelVisual, modelVisual, darkMode}) => {
    return (
        <Col width="100%" style={{height: '100%', position: 'relative'}}>
            <Flex cursorOpaFalse={true} onClick={() => setModelVisual(false)} to="cursor" position="absolute" style={{right: 0, top: 0}}>
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
                <ReadEngine setExpand={setExpand} darkMode={darkMode}/>
            </Col>
        </Col>
    )
}

export const CustomizeModelBtn = ({darkMode}) => {
    return (
        <Flex height="27px;" ato="cursor" margin="margin-bottom: 25px;" cursorOpaFalse={true} width="170px" bg={hueStyler(darkMode)} br="20px;">
            <Text size="12" className="bold" color="white" padding="padding: 5px 15px; padding-top: 6px;" >Customize this Model</Text>
        </Flex>
    )
}

const halfWidth = Width / 2
const height = Height - 80;

export const Visualizer = ({setModelVisual, modelVisual, darkMode}) => {
    const [expand, setExpand] = useState(false);
    
    return (
        <Box className="visualbox" justfiy="flex-start" bg={bgStyler(darkMode)} position="fixed" style={{width: modelVisual ? expand ? '100%' : '40%' : '40%', height: height, overflow: 'hidden', overflowY: 'scroll', opacity: modelVisual ? 1 : 0, right: modelVisual ? 0 : '-40%', transition: 'all 300ms'}}>
            <VisualizerModal setExpand={setExpand} setModelVisual={setModelVisual} modelVisual={modelVisual} darkMode={darkMode} />
        </Box>
    )
}