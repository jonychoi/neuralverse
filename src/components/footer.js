import React, {useState, useEffect} from 'react';
import {Flex, Row, Col, Text, Image} from '../components/common/base';
import { bgStyler } from '../styles';
import logo from '../imgs/logo.png';
import styled from 'styled-components';

const T = styled(Text)`
    font-size: 12.8px;
    font-weight: 400;
    cursor: pointer;
    opacity: 0.7;
    :hover {
        opacity: 1;
    }
`;


export const Footer = ({darkMode}) => {
    return (
        <Row height="300px;" justify="space-between" padding="padding: 50px;" bg={bgStyler(darkMode)}>
            <Col>
                <Row align="center">
                    <Image height="25px" src={logo} />
                    <Text className="light" size="18" margin="margin-left: 10px;">NEURALVERSE</Text>
                </Row>
                <T className="light" margin="margin-top: 10px;">© 2022 Neuralverse. All right reserved.</T>
                <T className="light" margin="margin-top: 10px;">Powered By Computer Vision Laboratory</T>
                <Col>
                    <T className="light">Technical Supports</T>
                    <T className="light">support@neuralverse.us</T>
                    <T className="light">Other Supports</T>
                    <T className="light">team@neuralverse.us</T>
                </Col>
            </Col>
            <Col>
                <Text className="light" size="18">DEVELOPERS</Text>
                <Col>
                    <T margin="margin-top: 15px;" className="light">Overview</T>
                    <T margin="margin-top: 15px;" className="light">API Documentation</T>
                    <T margin="margin-top: 15px;" className="light">API Token</T>
                </Col>
            </Col>
            <Col>
                <Text className="light" size="18">NEURALVERSE</Text>
                <Col>
                    <T margin="margin-top: 15px;" className="light">About Us</T>
                    <T margin="margin-top: 15px;" className="light">Contact Us</T>
                    <T margin="margin-top: 15px;" className="light">Terms of Service</T>
                    <T margin="margin-top: 15px;" className="light">Privacy Policy</T>
                </Col>
            </Col>
            <Col>
                <Text size="18" margin="margin-bottom: 5px;" className="light">Computer Vision Laboratory</Text>
                <T lh={18} className='light'>Dept. of Computer Science & Engineering<br></br>Korea University</T>
                <T className="light" margin="margin-top: 20px;">145 Anam-ro, Seongbuk-gu, Seoul, 02841, Korea</T>
            </Col>
        </Row>
    )
};

export default Footer;