import React, {useState, useEffect} from 'react';
import useInput from '../../../hooks/useInput';
import {Flex, Col, Row, Text, Image, CirclePic, Input, Box} from '../../../components/common/base';
import {ImageIcon, VideoIcon, EventIcon, DocumentIcon} from '../../../icons/createpost';
import {LikeIcon, CommentIcon, ShareIcon, RePostIcon, PaperIcon, CodeIcon} from '../../../icons/utilities';
import {bgStyler, hueStyler, btnStyler, blueColor, redColor, purLowColor, purColor, blueLowColor} from '../../../styles';
import {ModelIcon, DesignIcon, StudioLight} from '../../../icons/headericons';
import me from '../../../imgs/me.jpeg';
import Lefts from '../lefts';
import Rights from '../rights';
import { VisualizerEvent } from '../../../contexts/GlobalContext';

import feeds from '../../../data/feeds';

//model 첨부하기
export const WriteFeed = ({darkMode}) => {
    const {value, onChange} = useInput("")
    const d = new Date();
    let day = String(d).split(" ")[2]
    return (
        <Box justify="space-between" margin="margin: 0px 30px 10px 30px" padding="padding: 15px;" bg={bgStyler(darkMode)} br="10px" width="700px" height="120px">
            <Row>
                <CirclePic image={me} size={50} />
                <Input 
                    margin="margin-left: 10px;"
                    placeholderTextColor={darkMode? "white" : "black"}
                    padding="padding-left: 10px;" 
                    color={darkMode ? "white" : "black"} 
                    bg="rgba(0,0,0,0)" 
                    style={{borderTop: 0, borderLeft: 0, borderRight: 0, borderBottom: "1px solid rgb(100, 100, 100)", width: '100%'}} 
                    placeholder={"Write a Verse"} 
                    size="14"
                    value={value} onChange={onChange}  />
            </Row>
            <Row align="center" justify="space-between">
                <Row to="cursor" align="center">
                    <ImageIcon stroke={hueStyler(darkMode)} width={18} height={18} />
                    <Text size="11" className="light" weight="700" margin="margin-left: 10px;">PHOTO</Text>
                </Row>
                <Row to="cursor" align="center">
                    <VideoIcon stroke={hueStyler(darkMode)} width={18} height={18} />
                    <Text size="11" className="light" weight="700" margin="margin-left: 10px;">VIDEO</Text>
                </Row>
                <Row to="cursor" align="center">
                    <ModelIcon stroke1={hueStyler(darkMode)} stroke2={hueStyler(darkMode)} width={20} height={20} />
                    <Text size="11" className="light" weight="700" margin="margin-left: 10px;">MODEL</Text>
                </Row>
                <Row to="cursor" align="center">
                    <DocumentIcon stroke={hueStyler(darkMode)} width={18} height={18} />
                    <Text size="11" className="light" weight="700" margin="margin-left: 10px;">DOCUMENT</Text>
                </Row>
                <Row to="cursor" align="center">
                    <Flex width="18px" height="18px" align="center" justify="center" position="relative">
                        <Text color={hueStyler(darkMode)} size="11" className="light" weight="700" position="absolute">{day}</Text>
                        <Flex position="absolute">
                            <EventIcon stroke={hueStyler(darkMode)} width={18} height={18} />
                        </Flex>
                    </Flex>
                    <Text size="11" className="light" weight="700" margin="margin-left: 10px;">EVENT</Text>
                </Row>
            </Row>
        </Box>
    )
}

export const Bottom = ({darkMode, Components}) => {
    return (
        <Row align="center" justify="space-between" padding="padding-top: 10px" style={{borderTopWidth: 0.3, borderTopColor: darkMode ? "rgb(50, 50, 50)" : "black", borderTopStyle: "solid"}}>
            <Row to="cursor" cursorOpaFalse={true} align="center">
                <LikeIcon stroke={darkMode ? "rgb(230, 230, 230)" : "black"} height={18} width={18} />
                <Text margin="margin-left: 10px; margin-bottom: 3px;" size="12.8" color="rgb(230, 230, 230)" weight="500">Upvote</Text>
            </Row>
            <Row to="cursor" cursorOpaFalse={true} align="center">
                <CommentIcon stroke={darkMode ? "rgb(230, 230, 230)" : "black"} height={18} width={18} />
                <Text margin="margin-left: 10px; margin-bottom: 3px;" size="12.8" color="rgb(230, 230, 230)" weight="500">Comment</Text>
            </Row>
            <Row to="cursor" cursorOpaFalse={true} align="center">
                <RePostIcon stroke={darkMode ? "rgb(230, 230, 230)" : "black"} height={18} width={18} />
                <Text margin="margin-left: 10px; margin-bottom: 3px;" size="12.8" color="rgb(230, 230, 230)" weight="500">Repost</Text>
            </Row>
            <Row to="cursor" cursorOpaFalse={true} align="center">
                <Flex margin="margin-bottom: 2px;">
                    <ShareIcon stroke={darkMode ? "rgb(230, 230, 230)" : "black"} height={16} width={18} />
                </Flex>
                <Text margin="margin-left: 10px; margin-bottom: 3px;" size="12.8" color="rgb(230, 230, 230)" weight="500">Share</Text>
            </Row>
            {Components}
        </Row>
    )
}

export const FeedTop = ({darkMode, user, Components}) => {
    return (
        <Col>
            <Row padding="padding-bottom: 10px;" margin="margin-bottom: 5px;" style={{borderBottomWidth: 0.3, borderBottomStyle: "solid", borderBottomColor: "rgb(50, 50, 50)"}}>
                <Flex>
                    <Text color={darkMode ? "rgb(200, 200, 200)" : "rgb(30, 30, 30)"} size="12"><Text weight="500" size="12" margin="margin-right: 5px;">Su Hyung Choi</Text>
                    <Text size="12" margin="margin-right: 5px;">and</Text>
                    <Text weight="500" size="12" margin="margin-right: 5px;">Su Hyung Choi 2</Text> 
                    liked this Feed / commented this Feed/ follows A.I Unitas</Text>
                </Flex>
                <Flex>
                    
                </Flex>
            </Row>
            <Row align="center" justify="space-between" margin="margin: 5px 0px">
                <Row align="center">
                    <CirclePic image={user.avatar} size={40} of="cover" />
                    <Col margin="margin-left: 10px;">
                        <Text weight="500">{user.name}</Text>
                        <Text color={darkMode ? "rgb(200, 200, 200)" : "rgb(30, 30, 30)"} size="12">{user.briefIntroduction}</Text>
                    </Col>
                </Row>
                {Components}
            </Row>
        </Col>
    )
}

export const Feed = ({darkMode, content}) => {
    return (
        <Box bg={bgStyler(darkMode)} padding="padding: 10px 15px;" margin="margin: 15px 30px 15px 30px" br="10px" style={{width: 700, maxHeight: 800, minHeight: 200}}>
            <FeedTop darkMode={darkMode} />
            <Col margin="margin: 10px 0px;">
                <Text weight="600" margin="margin-bottom: 10px">Attention Is All You Need</Text>
                <Text lh="21" weight="400" size="14">
                    The dominant sequence transduction models are based on complex recurrent or convolutional neural networks in an encoder-decoder configuration. The best performing models also connect the encoder and decoder through an attention mechanism. We propose a new simple network architecture, the Transformer, based solely on attention mechanisms, dispensing with recurrence and convolutions entirely. Experiments on two machine translation tasks show these models to be superior in quality while being more parallelizable and requiring significantly less time to train. Our model achieves 28.4 BLEU on the WMT 2014 English-to-German translation task, improving over the existing best results, including ensembles by over 2 BLEU. On the WMT 2014 English-to-French translation task, our model establishes a new single-model state-of-the-art BLEU score of 41.8 after training for 3.5 days on eight GPUs, a small fraction of the training costs of the best models from the literature. We show that the Transformer generalizes well to other tasks by applying it successfully to English constituency parsing both with large and limited training data.
                </Text>
            </Col>
            <Bottom darkMode={darkMode} />
        </Box>
    )
}

export const ModelConfig = ({darkMode, setVisualizer, visualizer}) => {
    return (
        <Row justify="space-between" width="280px">
            <Row bg="rgb(40, 40, 40)" br="10px" padding="padding: 3px 10px" to="cursor" cursorOpaFalse={true} align="center">
                <PaperIcon stroke={darkMode ? "white" : "black"} height={16} width={16} />
                <Text className="light" margin="margin-left: 10px; margin-bottom: 3px;" size="11" weight="500">Paper</Text>
            </Row>
            <Row bg="rgb(40, 40, 40)" br="10px" padding="padding: 3px 10px" to="cursor" cursorOpaFalse={true} align="center">
                <CodeIcon stroke={darkMode ? "white" : "black"} height={18} width={18} />
                <Text className="light" margin="margin-left: 10px; margin-bottom: 3px;" size="11" weight="500">Code</Text>
            </Row>
            <Row onClick={() => setVisualizer(!visualizer)} bg="rgb(40, 40, 40)" br="10px" padding="padding: 3px 10px" to="cursor" cursorOpaFalse={true} align="center">
                <StudioLight stroke={darkMode ? "white" : "black"} height={22} width={22} />
                <Text className="light" margin="margin-left: 10px; margin-bottom: 3px;" size="11" weight="500">Studio</Text>
            </Row>
        </Row>
    )
}

export const Hashtags = ({darkMode, hashtags}) => {
    return (
        <Row width="500px" style={{overflow: "hidden"}}>
            {hashtags.map(item => <Text size="14" style={{whiteSpace: "nowrap"}} key={item} color={blueColor} margin="margin-right: 8px;">#{item}</Text>)}
        </Row>
    )
}

export const Model = ({content, darkMode}) => {
    const {visualizer, setVisualizer} = VisualizerEvent();
    return (
        <Box margin="margin: 15px 30px 15px 30px" padding="padding: 10px 15px" style={{width: 700}} bg={bgStyler(darkMode)} br="20px;">
            <FeedTop user={content.writer_id} darkMode={darkMode} Components={<ModelConfig darkMode={darkMode} visualizer={visualizer} setVisualizer={setVisualizer} />} />
            <Row margin="margin: 10px 0px;">
                <Col flex={5}>
                    <Text weight="600">
                        {content.title}
                    </Text>
                    <Text margin="margin: 10px 0px;" lh={21} size="14" style={{height: 105, overflow: 'hidden'}}>
                        {content.description}
                    </Text>
                    {content.tasks && <Hashtags darkMode={darkMode} hashtags={content.tasks} />}
                </Col>
                <Flex margin="margin-left: 15px;" style={{height: 150, width: 150}} align="center" justify="center">
                    <Image src={content.thumbnail} style={{height: '100%', width: '100%'}} of="cover" />
                </Flex>
            </Row>
            <Bottom darkMode={darkMode} />
        </Box>
    )
}

export const Main = ({darkMode}) => {
    return (
        <Row>
            <Lefts darkMode={darkMode} />
            <Col>
                <WriteFeed darkMode={darkMode} />
                {feeds.map(item => <Model key={item.title} content={item} darkMode={darkMode} />)}
            </Col>
            <Rights darkMode={darkMode} />
        </Row>
    )
}

export default Main;