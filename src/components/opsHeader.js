import React from 'react';
import {Flex, Col, Row, Text, Image} from './common/base';

export const OpsHeader = ({route, headerShown}) => {
    return (
        <Row flex={route == 5 ? headerShown ? 0 : 3.8 : 0} style={{opacity: route == 5 ? headerShown ? 0 : 1 : 1, transition: 'all 500ms ease', overflow: 'hidden'}}>

        </Row>
    )
};

export default OpsHeader;