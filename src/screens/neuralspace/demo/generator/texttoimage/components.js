import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import {Flex, Col, Row, Text, Image, Box, Input} from '../../../../components/common/base';
import { bgStyler } from '../../../../styles';

export const InputBar = ({run, open, setOpen, darkMode}) => {
    return (
        <Box width="20%" height="100%" padding="padding: 15px;" position="absolute" bg={bgStyler(darkMode)} style={{left: open ? 0 : '-25%', overflow: 'hidden', overflowY: 'scroll'}}>
            <Input />
        </Box>
    )
}