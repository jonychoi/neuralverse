import React, {useState, useEffect} from 'react';
import useInput from '../../../hooks/useInput';
import {Flex, Col, Row, Text, Image, CirclePic, Input, Box} from '../../../components/common/base';
import {ImageIcon, VideoIcon, EventIcon, DocumentIcon} from '../../../icons/createpost';
import {LikeIcon, CommentIcon, ShareIcon} from '../../../icons/utilities';
import {ModelIcon} from '../../../icons/headericons';
import me from '../../../imgs/me.jpeg';
import {hueStyler, bgStyler} from '../../../styles';
import Lefts from '../lefts';
import Rights from '../rights';

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

export const Feed = ({darkMode}) => {
    return (
        <Box bg={bgStyler(darkMode)} padding="padding: 10px 15px;" margin="margin: 15px 30px 15px 30px" br="10px" style={{width: 700, maxHeight: 800, minHeight: 200}}>
            <Row margin="margin-bottom: 10px;">
                <Flex>
                    <Text color={darkMode ? "rgb(200, 200, 200)" : "rgb(30, 30, 30)"} size="12"><Text weight="500" size="12" margin="margin-right: 5px;">Su Hyung Choi</Text>
                    <Text size="12" margin="margin-right: 5px;">and</Text>
                    <Text weight="500" size="12" margin="margin-right: 5px;">Su Hyung Choi 2</Text> 
                    liked this Feed / commented this Feed/ follows A.I Unitas</Text>
                </Flex>
                <Flex>
                    
                </Flex>
            </Row>
            <Row align="center" margin="margin: 5px 0px">
                <Row align="center">
                    <CirclePic image={me} size={40} />
                    <Col margin="margin-left: 10px;">
                        <Text weight="500">Su Hyung Choi</Text>
                        <Text color={darkMode ? "rgb(200, 200, 200)" : "rgb(30, 30, 30)"} size="12">Undergraduate Researcher @ Korea University</Text>
                    </Col>
                </Row>
            </Row>
            <Col margin="margin: 10px 0px;">
                <Text weight="600" margin="margin-bottom: 10px">Attention Is All You Need</Text>
                <Text lh="21" weight="400" size="14">
                    The dominant sequence transduction models are based on complex recurrent or convolutional neural networks in an encoder-decoder configuration. The best performing models also connect the encoder and decoder through an attention mechanism. We propose a new simple network architecture, the Transformer, based solely on attention mechanisms, dispensing with recurrence and convolutions entirely. Experiments on two machine translation tasks show these models to be superior in quality while being more parallelizable and requiring significantly less time to train. Our model achieves 28.4 BLEU on the WMT 2014 English-to-German translation task, improving over the existing best results, including ensembles by over 2 BLEU. On the WMT 2014 English-to-French translation task, our model establishes a new single-model state-of-the-art BLEU score of 41.8 after training for 3.5 days on eight GPUs, a small fraction of the training costs of the best models from the literature. We show that the Transformer generalizes well to other tasks by applying it successfully to English constituency parsing both with large and limited training data.
                </Text>
            </Col>
            <Row align="center" justify="space-between" margin="margin-top: 10px;">
                <Row to="cursor" cursorOpaFalse={true} align="center">
                    <LikeIcon stroke={darkMode ? "white" : "black"} height={20} width={20} />
                    <Text margin="margin-left: 10px; margin-bottom: 3px;" size="14" weight="500">Upvote</Text>
                </Row>
                <Row to="cursor" cursorOpaFalse={true} align="center">
                    <CommentIcon stroke={darkMode ? "white" : "black"} height={20} width={20} />
                    <Text margin="margin-left: 10px; margin-bottom: 3px;" size="14" weight="500">Comment</Text>
                </Row>
                <Row to="cursor" cursorOpaFalse={true} align="center">
                    <ShareIcon stroke={darkMode ? "white" : "black"} height={20} width={20} />
                    <Text margin="margin-left: 10px; margin-bottom: 3px;" size="14" weight="500">Share</Text>
                </Row>
            </Row>
        </Box>
    )
}

export const Main = ({darkMode}) => {
    return (
        <Row>
            <Lefts darkMode={darkMode} />
            <Col>
                <WriteFeed darkMode={darkMode} />
                <Feed darkMode={darkMode} />
                <Feed darkMode={darkMode} />
                <Feed darkMode={darkMode} />
                <Feed darkMode={darkMode} />
                <Feed darkMode={darkMode} />
                <Feed darkMode={darkMode} />
                <Feed darkMode={darkMode} />
                <Feed darkMode={darkMode} />
                <Feed darkMode={darkMode} />
                <Feed darkMode={darkMode} />
            </Col>
            <Rights darkMode={darkMode} />
        </Row>
    )
}

export default Main;