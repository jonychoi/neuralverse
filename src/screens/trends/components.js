import React, {useState, useEffect} from 'react';
import useInput from '../../hooks/useInput';
import {Flex, Col, Row, Text, Image, CirclePic, Input} from '../../components/common/base';
import {ImageIcon, VideoIcon, EventIcon, DocumentIcon} from '../../icons/createpost';
import {ModelIcon} from '../../icons/headericons';
import me from '../../imgs/me.jpeg';
import bg from '../../imgs/background.jpeg';
import Friend from '../../components/common/friend';
import {hueStyler, bgStyler} from '../../styles';

export const ProfileBox = ({darkMode}) => {
    return (
        <Col width="250px" height="500px" position="relative" bg={bgStyler(darkMode)} style={{overflow: 'hidden'}} br="10px">
            <Col>
                <Flex>
                    <Image width="100%" of="cover" height="100px" src={bg} />
                </Flex>
                <Flex style={{alignSelf: "center", top: 50}} align="center" justify="center" position="absolute">
                    <CirclePic image={me} size={80} />
                </Flex>
            </Col>
            <Col margin="margin-top: 40px;" padding="padding: 10px">
                <Flex>
                    <Text weight="500" margin="margin-bottom: 3px;">Su Hyung Choi</Text>
                </Flex>
                <Flex>
                    <Text size="14">Undergraduate student researching in Artificial Intelligence, Computer Vision</Text>
                </Flex>
            </Col>
            <Row padding="padding: 10px;" align="center" justify="space-between">
                <Col>
                    <Row>
                        <Text size="10.8" className="light" margin="margin-right: 5px">12</Text>
                        <Text size="10.8" className="light">MODELS</Text>
                    </Row>
                </Col>
                <Col>
                    <Row>
                        <Text size="10.8" className="light" margin="margin-right: 5px">12</Text>
                        <Text size="10.8" className="light">BADGES</Text>
                    </Row>
                </Col>
                <Col>
                    <Row>
                        <Text size="10.8" className="light" margin="margin-right: 5px">12</Text>
                        <Text size="10.8" className="light">NFTS</Text>
                    </Row>
                </Col>
            </Row>
        </Col>
    )
}

export const RecommendFriends = ({darkMode}) => {
    return (
        <Col width="250px" height="400px" bg={bgStyler(darkMode)} style={{overflow: 'hidden'}} br="10px">
            <Text className="bold" size="17" margin="margin: 10px">Recommend Friends</Text>
            <Col>
                <Friend />
                <Friend />
                <Friend />
            </Col>
            <Text className="light" margin="margin: 10px;" size="12.8">View all Recommendations</Text>
        </Col>
    )
}

export const Lefts = ({darkMode}) => {
    return (
        <Flex flex={2.3} justify="flex-end">
            <ProfileBox darkMode={darkMode} />
        </Flex>
    )
}

export const Rights = ({darkMode}) => {
    return (
        <Flex flex={2.3} justify="flex-start">
            <RecommendFriends darkMode={darkMode} />
        </Flex>
    )
}

export const Main = ({darkMode}) => {
    return (
        <div>
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

        </div>
    )
}

//model 첨부하기
export const WriteFeed = ({darkMode}) => {
    const {value, onChange} = useInput("")
    const d = new Date();
    let day = String(d).split(" ")[2]
    return (
        <Col justify="space-between" margin="margin: 0px 30px 10px 30px" padding="padding: 15px;" bg={bgStyler(darkMode)} br="10px" width="550px" height="120px">
            <Row>
                <CirclePic image={me} size={50} />
                <Input 
                    margin="margin-left: 10px;"
                    placeholderTextColor="white" 
                    padding="padding-left: 10px;" 
                    color={darkMode ? "white" : "black"} 
                    br="30px" bg="rgba(0,0,0,0)" 
                    style={{borderWidth: 1.5, borderColor: 'rgb(200, 200, 200)', width: '100%'}} 
                    placeholder={"Write a Feed"} 
                    size="14"
                    value={value} onChange={onChange}  />
            </Row>
            <Row align="center" justify="space-between">
                <Row to="cursor" align="center">
                    <ImageIcon stroke={hueStyler(darkMode)} width={18} height={18} />
                    <Text size="14" weight="500" margin="margin-left: 8px; margin-bottom: 2px;">Photo</Text>
                </Row>
                <Row to="cursor" align="center">
                    <VideoIcon stroke={hueStyler(darkMode)} width={18} height={18} />
                    <Text size="14" weight="500" margin="margin-left: 8px; margin-bottom: 2px;">Video</Text>
                </Row>
                <Row to="cursor" align="center">
                    <ModelIcon stroke1={hueStyler(darkMode)} stroke2={hueStyler(darkMode)} width={20} height={20} />
                    <Text size="14" weight="500" margin="margin-left: 8px; margin-bottom: 2px;">Model</Text>
                </Row>
                <Row to="cursor" align="center">
                    <DocumentIcon stroke={hueStyler(darkMode)} width={18} height={18} />
                    <Text size="14" weight="500" margin="margin-left: 8px; margin-bottom: 2px;">Document</Text>
                </Row>
                <Row to="cursor" align="center">
                    <Flex width="18px" height="18px" align="center" justify="center" position="relative">
                        <Text color={hueStyler(darkMode)} size="12" weight="500" position="absolute">{day}</Text>
                        <Flex position="absolute">
                            <EventIcon stroke={hueStyler(darkMode)} width={18} height={18} />
                        </Flex>
                    </Flex>
                    <Text size="14" weight="500" margin="margin-left: 8px; margin-bottom: 2px;">Event</Text>
                </Row>
            </Row>
        </Col>
    )
}

export const Feed = ({darkMode}) => {
    return (
        <Col bg={bgStyler(darkMode)} padding="padding: 10px 15px;" margin="margin: 10px 30px 10px 30px" br="10px" style={{width: 550, maxHeight: 800, minHeight: 200}}>
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
            <Row align="center">
                <Row align="center">
                    <CirclePic image={me} size={40} />
                    <Col margin="margin-left: 10px;">
                        <Text weight="500">Su Hyung Choi</Text>
                        <Text color={darkMode ? "rgb(200, 200, 200)" : "rgb(30, 30, 30)"} size="12">Undergraduate Researcher @ Korea University</Text>
                    </Col>
                </Row>
            </Row>
            <Col margin="margin: 10px 0px;">
                <Text weight="600" margin="margin-bottom: 5px">Attention Is All You Need</Text>
                <Text lh="21" size="14">
                    The dominant sequence transduction models are based on complex recurrent or convolutional neural networks in an encoder-decoder configuration. The best performing models also connect the encoder and decoder through an attention mechanism. We propose a new simple network architecture, the Transformer, based solely on attention mechanisms, dispensing with recurrence and convolutions entirely. Experiments on two machine translation tasks show these models to be superior in quality while being more parallelizable and requiring significantly less time to train. Our model achieves 28.4 BLEU on the WMT 2014 English-to-German translation task, improving over the existing best results, including ensembles by over 2 BLEU. On the WMT 2014 English-to-French translation task, our model establishes a new single-model state-of-the-art BLEU score of 41.8 after training for 3.5 days on eight GPUs, a small fraction of the training costs of the best models from the literature. We show that the Transformer generalizes well to other tasks by applying it successfully to English constituency parsing both with large and limited training data.
                </Text>
            </Col>
        </Col>
    )
}