import React from 'react';
import {Flex, Col, Row, Text, Image, Box} from '../../../components/common/base';
import {PaperIcon, CodeIcon} from '../../../icons/utilities';
import {bgStyler} from '../../../styles';
import {StudioLight} from '../../../icons/headericons';
import { VisualizerEvent } from '../../../contexts/GlobalContext';
import {Bottom, FeedTop} from './common'

export const ModelConfig = ({model, darkMode, setVisualizer, visualizer}) => {
    return (
        <Row justify="space-between" width="230px">
            <Row padding="padding: 3px" to="cursor" cursorOpaFalse={true} align="center">
                <Flex margin="margin-bottom: 2px;">
                    <PaperIcon stroke={darkMode ? "white" : "black"} height={15} width={15} />
                </Flex>
                <Text className="light" margin="margin-left: 10px; margin-bottom: 3px;" size="11" weight="500">
                    <a style={{color: darkMode ? "white" : "black"}} href={model.paper} target="_blank">
                        Paper
                    </a>
                </Text>
            </Row>
            <Row padding="padding: 3px" to="cursor" cursorOpaFalse={true} align="center">
                <CodeIcon stroke={darkMode ? "white" : "black"} height={18} width={18} />
                <Text className="light" margin="margin-left: 10px; margin-bottom: 3px;" size="11" weight="500">
                    <a style={{color: darkMode ? "white" : "black"}} href={model.code} target="_blank">
                        Code
                    </a>
                </Text>
            </Row>
            <Row onClick={() => setVisualizer(!visualizer)} padding="padding: 3px" to="cursor" cursorOpaFalse={true} align="center">
                <StudioLight stroke1={darkMode ? "white" : "black"} stroke2={darkMode ? "white" : "black"} height={18} width={18} />
                <Text className="light" margin="margin-left: 10px; margin-bottom: 3px;" size="11" weight="500">Studio</Text>
            </Row>
        </Row>
    )
}

export const Hashtags = ({darkMode, hashtags}) => {
    return (
        <Row width="500px" margin="margin-bottom: 5px;" style={{overflow: "hidden"}}>
            {hashtags.map(item => <a href={'/hashtags/'+item.toLowerCase().replace(" ", "-")} style={{lineHeight: '18px'}}>
                <Text size="14" style={{whiteSpace: "nowrap"}} key={item} color={"white"} margin="margin-right: 8px;">#{item}</Text>
            </a>)}
        </Row>
    )
}

export const Model = ({content, darkMode}) => {
    const {visualizer, setVisualizer} = VisualizerEvent();
    return (
        <Box margin="margin: 15px 30px 15px 30px" padding="padding: 10px 15px" style={{width: 650}} bg={bgStyler(darkMode)} br="20px;">
            <FeedTop user={content.writer_id} darkMode={darkMode} Components={<ModelConfig model={content} darkMode={darkMode} visualizer={visualizer} setVisualizer={setVisualizer} />} />
            <Row margin="margin: 10px 0px;">
                <Col>
                    <Text weight="600">
                        {content.title}
                    </Text>
                    <Text margin="margin: 10px 0px;" lh={21} size="14" style={{maxHeight: 125, overflow: 'hidden'}}>{/*105 125*/}
                        {content.description}
                    </Text>
                </Col>
            </Row>
            <Flex style={{height: '100%', width: '100%', maxHeight: 619}} align="center" justify="center">
                <Image src={content.thumbnail} style={{height: '100%', width: '100%'}} of="cover" />
            </Flex>
            <Bottom darkMode={darkMode} />
        </Box>
    )
}

export default Model;