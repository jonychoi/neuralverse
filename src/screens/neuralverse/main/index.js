import React, {useState, useEffect} from 'react';
import useInput from '../../../hooks/useInput';
import {Flex, Col, Row, Text, Image, CirclePic, Input, Box} from '../../../components/common/base';
import {ImageIcon, VideoIcon, EventIcon, DocumentIcon} from '../../../icons/createpost';
import {bgStyler, hueStyler} from '../../../styles';
import {ModelIcon} from '../../../icons/headericons';
import me from '../../../imgs/me.jpeg';
import Model from './modelFeed';
import Feed from './feed';
import Lefts from '../lefts';
import Rights from '../rights';
import feeds from '../../../data/feeds';

//model 첨부하기
export const WriteFeed = ({darkMode}) => {
    const {value, onChange} = useInput("")
    const d = new Date();
    let day = String(d).split(" ")[2]
    return (
        <Box justify="space-between" margin="margin: 0px 30px 10px 30px" padding="padding: 15px;" bg={bgStyler(darkMode)} br="10px" width="650px" height="120px">
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
                    <ImageIcon stroke={darkMode ? "rgb(200, 200, 200)" : "rgb(100, 100, 100)"} width={18} height={18} />
                    <Text size="11" className="light" weight="700" margin="margin-left: 10px;">PHOTO</Text>
                </Row>
                <Row to="cursor" align="center">
                    <VideoIcon stroke={darkMode ? "rgb(200, 200, 200)" : "rgb(100, 100, 100)"} width={18} height={18} />
                    <Text size="11" className="light" weight="700" margin="margin-left: 10px;">VIDEO</Text>
                </Row>
                <Row to="cursor" align="center">    
                    <ModelIcon stroke1={darkMode ? "rgb(200, 200, 200)" : "rgb(100, 100, 100)"} stroke2={darkMode ? "rgb(200, 200, 200)" : "rgb(100, 100, 100)"} width={20} height={20} />
                    <Text size="11" className="light" weight="700" margin="margin-left: 10px;">MODEL</Text>
                </Row>
                <Row to="cursor" align="center">
                    <DocumentIcon stroke={darkMode ? "rgb(200, 200, 200)" : "rgb(100, 100, 100)"} width={18} height={18} />
                    <Text size="11" className="light" weight="700" margin="margin-left: 10px;">DOCUMENT</Text>
                </Row>
                <Row to="cursor" align="center">
                    <Flex width="18px" height="18px" align="center" justify="center" position="relative">
                        <Text color={darkMode ? "rgb(200, 200, 200)" : "rgb(100, 100, 100)"} size="11" className="light" weight="700" position="absolute">{day}</Text>
                        <Flex position="absolute">
                            <EventIcon stroke={darkMode ? "rgb(200, 200, 200)" : "rgb(100, 100, 100)"} width={18} height={18} />
                        </Flex>
                    </Flex>
                    <Text size="11" className="light" weight="700" margin="margin-left: 10px;">EVENT</Text>
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
                {feeds.map(item => <Model key={item.title} content={item} darkMode={darkMode} />)}
            </Col>
            <Rights darkMode={darkMode} />
        </Row>
    )
}

export default Main;