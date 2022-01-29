import React, {useState, useEffect} from 'react';
import {bgStyler} from '../../styles';
import {Col, Row, Flex, Image, Text} from '../../components/common/base';

export const Demo = ({darkMode}) => {
    return (
        <Flex height="500px" width="100%" br="20px" margin="margin-bottom: 30px;" bg={bgStyler(darkMode)}>

        </Flex>
    )
};

export default Demo;