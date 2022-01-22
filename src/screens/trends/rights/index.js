import React, {useState, useEffect} from 'react';
import useInput from '../../../hooks/useInput';
import {Flex, Col, Row, Text, Image, CirclePic, Input, Box} from '../../../components/common/base';
import {bgStyler} from '../../../styles';


export const Trendings = ({darkMode}) => {
    return (
        <Box width="280px" padding="padding: 15px;" margin="margin-bottom: 10px;" height="600px" bg={bgStyler(darkMode)} style={{overflow: 'hidden'}} br="10px">
            <Text className="bold" weigh="500" size="14" margin="margin-bottom: 5px;">Trendings</Text>
            <Text className="light" weigh="500" margin="margin: 10px 0px;" size="12.8">View all trendings</Text>
        </Box>
    )
}

export const Trendingsa = ({darkMode}) => {
    return (
        <Box width="280px" padding="padding: 15px;" height="600px" bg={bgStyler(darkMode)} style={{overflow: 'hidden'}} br="10px">
            <Text className="bold" size="15" margin="margin-bottom: 5px;">ToDos Trendings</Text>
            <Col>
                <Text color="rgb(150, 150, 150)">follow btn color change</Text>
                <Text color="rgb(150, 150, 150)">Hashtag color</Text>
                <Text color="rgb(150, 150, 150)">To Do</Text>
                <Text color="rgb(150, 150, 150)">Done minor things first and do gradually</Text>
                <Text color="rgb(150, 150, 150)">- Premium user have neural logo right name with circle</Text>
                <Text color="rgb(150, 150, 150)">- Trendings (Expand when click bottom)</Text>
                <Text color="rgb(150, 150, 150)">- Model section and dataset section</Text>
                <Text color="rgb(150, 150, 150)">- Paper & Code & Studio</Text>
                <Text color="rgb(150, 150, 150)">- Datasets</Text>
                <Text color="rgb(150, 150, 150)">- get user papers from google scholar (paper click, get specific data)</Text>
                <Text color="rgb(150, 150, 150)">- hashtags inside paragraph</Text>
            </Col>
            <Text className="light" margin="margin: 10px 0px;" size="12.8">View all Recommendations</Text>
        </Box>
    )
}


export const Rights = ({darkMode}) => {
    return (
        <Col width="280px">
            <Col>
                <Trendings darkMode={darkMode} />
                <Trendingsa darkMode={darkMode} />
            </Col>
        </Col>
    )
}

export default Rights;