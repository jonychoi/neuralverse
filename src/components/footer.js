import React, {useState, useEffect} from 'react';
import {Flex, Row, Col, Text, Image} from '../components/common/base';
import { bgStyler } from '../styles';
import logo from '../imgs/logo.png';
import cvlab from '../imgs/cvlab.png';
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

const textstyle = (darkMode) => {
    return {
        fontSize: 12.8,
        fontWeight: 400,
        opacity: darkMode ? 0.7 : 1,
    }
}


export const Footer = ({darkMode}) => {
    return (
        <Row height="300px;" align="center" justify="space-between" padding="padding: 55px;" bg={bgStyler(darkMode)}>
            <Col align="center">
                <Row align="center">
                    <Image height="25px" src={logo} />
                </Row>
                <Text style={textstyle(darkMode)} className="light" margin="margin-top: 20px;">© 2022 NeuralVerse. All right reserved.</Text>
                <Text style={textstyle(darkMode)} className="light" margin="margin-top: 10px;">Powered By Computer Vision Laboratory</Text>
                <Row margin="margin-top: 30px;">
                    <Text style={textstyle(darkMode)} className="light">Technical Supports:</Text>
                    <Text style={textstyle(darkMode)} className="light" margin="margin-left: 5px;">support@neuralverse.ai</Text>
                </Row>
                <Row margin="margin-top: 10px;">
                    <Text style={textstyle(darkMode)} className="light">Other Supports:</Text>
                    <Text style={textstyle(darkMode)} className="light" margin="margin-left: 5px;">team@neuralverse.ai</Text>
                </Row>
            </Col>            
            <Col align="center">
                <Text className="light">SERVICES</Text>
                <Col align="center">
                    <Text className="light" margin="margin-top: 20px;" style={textstyle(darkMode)}>Neural Verse</Text>
                    <Text className="light" margin="margin-top: 15px;" style={textstyle(darkMode)}>Neural Space</Text>
                    <Text className="light" margin="margin-top: 15px;" style={textstyle(darkMode)}>Neural Studio</Text>
                    <Text className="light" margin="margin-top: 15px;" style={textstyle(darkMode)}>Neural Ops</Text>
                    <Text className="light" margin="margin-top: 15px;" style={textstyle(darkMode)}>Neural Workspace</Text>
                </Col>
            </Col>
            <Col align="center">
                <Text className="light">DEVELOPERS</Text>
                <Col align="center">
                    <Text style={textstyle(darkMode)} margin="margin-top: 20px;" className="light">Overview</Text>
                    <Text style={textstyle(darkMode)} margin="margin-top: 15px" className="light">Neural Blog</Text>
                    <Text style={textstyle(darkMode)} margin="margin-top: 15px;" className="light">API Documentation</Text>
                    <Text style={textstyle(darkMode)} margin="margin-top: 15px;" className="light">API Token</Text>
                    <Text style={textstyle(darkMode)} margin="margin-top: 15px;" className="light">Neural Discuss</Text>
                </Col>
            </Col>
            <Col align="center">
                <Text className="light">NEURALVERSE</Text>
                <Col align="center">
                    <Text style={textstyle(darkMode)} margin="margin-top: 20px;" className="light">About Us</Text>
                    <Text style={textstyle(darkMode)} margin="margin-top: 15px;" className="light">Contact Us</Text>
                    <Text style={textstyle(darkMode)} margin="margin-top: 15px;" className="light">Terms of Service</Text>
                    <Text style={textstyle(darkMode)} margin="margin-top: 15px;" className="light">Privacy Policy</Text>
                    <Text style={textstyle(darkMode)} margin="margin-top: 15px;" className="light">Github</Text>
                </Col>
            </Col>
        </Row>
    )
};

export default Footer;