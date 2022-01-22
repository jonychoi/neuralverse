import React, {useState, useEffect} from 'react';
import useInput from '../../../hooks/useInput';
import {Flex, Col, Row, Text, Image, CirclePic, Input, Box} from '../../../components/common/base';
import {bgStyler} from '../../../styles';


export const Trendings = ({darkMode}) => {
    return (
        <Box width="250px" padding="padding: 15px;" height="600px" bg={bgStyler(darkMode)} style={{overflow: 'hidden'}} br="10px">
            <Text className="bold" size="15" margin="margin-bottom: 5px;">ToDos Trendings</Text>
            <Col>
                <Text>follow btn color change</Text>
                <Text>Hashtag color</Text>
            </Col>
            <Text className="light" margin="margin: 10px 0px;" size="12.8">View all Recommendations</Text>
        </Box>
    )
}

export const Rights = ({darkMode}) => {
    return (
        <Col width="250px">
            <Col position="fixed">
                <Trendings darkMode={darkMode} />
            </Col>
        </Col>
    )
}

export default Rights;