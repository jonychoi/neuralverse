import React, {useState, useEffect, useRef} from 'react';
import styled from 'styled-components';
import {Flex, Col, Row, Text, Image, Box, TextArea} from '../../../../../components/common/base';
import { bgStyler } from '../../../../../styles';
import useInput from '../../../../../hooks/useInput';
import { SendIcon } from '../../../../../icons/utilities';

export const InputBar = ({run, open, setOpen, darkMode}) => {
    const {value, onChange} = useInput("");
    const [height, setHeight] = useState(38);
    const textarea = useRef(null);
    return (
        <Box width="33%" height="100%" padding="padding: 15px;" position="absolute" bg={bgStyler(darkMode)} style={{left: open ? 0 : '-33%', overflow: 'hidden', overflowY: 'scroll'}}>
            <Row align="center">
                <TextArea 
                    ref={textarea} onChange={(e) => {onChange(e); setHeight(value ? textarea.current.scrollHeight : 38)}} 
                    value={value}
                    size="14" placeholder="What do you want to see?" 
                    padding="padding: 10px 15px;" br="10px" bg={darkMode ? "rgb(40, 40, 40)" : "white"} 
                    style={{width: '90%', height: height}} />
                <Flex margin="margin-left: 10px" to="cursor" onClick={() => run(value)}>
                    <SendIcon width={25} height={25} />
                </Flex>
            </Row>
        </Box>
    )
}