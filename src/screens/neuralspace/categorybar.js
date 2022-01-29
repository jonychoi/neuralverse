import React from 'react';
import {Flex, Row, Col, Text, Image, Box, Input} from '../../components/common/base';
import { SearchIcon, CloseIcon, DemoIcon, PaperswithCodeIcon, BenchMarkIcon } from '../../icons/utilities';
import {Height} from '../../hooks/getWindow';
import tasks from '../../data/tasks';
import styled from 'styled-components';
import { bgStyler, blueColor, purColor } from '../../styles';

const CategoryWrap = styled(Col)`
    height: 100%;
    overflow: hidden;
    overflow-y: scroll;
    display: block;
    padding-bottom: 58px;
`;

const TaskWrap = styled(Box)`
    height: 130px; 
    border-radius: 20px;
    position: relative;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    margin-bottom: 20px;
    cursor: pointer;
    margin: 15px;
`;

export const Task = ({darkMode, content, task}) => {
    return (
        <TaskWrap>
            <Col justify="center" align="flex-start" position="absolute" zIndex={101} 
                style={{left: 0, backdropFilter: 'blur(5px)', bottom: 0}}
                padding="padding: 20px;"
                width="70%" height="100%" bg={bgStyler(darkMode)}>
                <Text className="light" margin="margin: 10px 0px;">{content.title.toUpperCase()}</Text>
                <Col>
                    <Row align="center">
                        <DemoIcon stroke={darkMode ? blueColor : purColor} width={15} height={15} />
                        <Text className="light" weight="400" margin="margin-left: 10px;" size="12">20 Demos</Text>
                    </Row>
                    <Row margin="margin: 5px 0px;" align="center">
                        <BenchMarkIcon stroke={darkMode ? blueColor : purColor} width={15} height={15} />
                        <Text className="light" weight="400" margin="margin-left: 10px;" size="12">{content.benchmarkNum} Benchmarks</Text>
                    </Row>
                    <Row align="center">
                        <PaperswithCodeIcon stroke={darkMode ? blueColor : purColor} width={15} height={15} />
                        <Text className="light" weight="400" margin="margin-left: 10px;" size="12">{content.paperswithcodeNum} Papers with Code</Text>
                    </Row>
                </Col>
            </Col>
            <Image src={content.img} zIndex={100} position="absolute" of="cover" width="105%" height="105%" />
        </TaskWrap>
    )
}

export const CategoryBar = ({task, setTask, subTask, setSubTask, categoryBar, setCategoryBar, darkMode}) => {
    return (
        <Box position="fixed" zIndex={100} width="380px;" 
            height={Height - 80 + 'px'} style={{right: categoryBar ? 0 : -380, top: 80, transition: 'all 300ms'}}>
            <Flex height="35px;" margin="margin: 15px; margin-bottom: 20px;" position="relative">
                <Flex style={{position: 'absolute', left: 0, bottom: 12}}>
                    <SearchIcon width={16} height={16} stroke="rgb(100, 100, 100)" />
                </Flex>
                <Input height="35px;" placeholder="Search" color={darkMode ? "white" : "black"} width="85%" bg="rgba(0,0,0,0)" padding="padding-left: 28px;" style={{border: 0, borderBottomWidth: 1, borderBottomColor: 'rgb(100, 100, 100)', letterSpacing: 0.4, borderBottomStyle: 'solid'}} />
            </Flex>
            <Flex to="cursor" onClick={() => setCategoryBar(!categoryBar)} position="absolute" zIndex={100} style={{right: 15, top: 15}}>
                <CloseIcon width={30} height={30} bg={darkMode ? "rgb(35, 35, 35)" : "rgb(245, 245, 245)"} stroke={darkMode ? "rgb(100, 100, 100)" : "rgb(120, 120, 120)"} />
            </Flex>
            <Text size="20" className='bold' margin="margin: 10px 15px;">TASKS</Text>
            <CategoryWrap scrollbarFalse={true}>
                {tasks.map((item) => <Task darkMode={darkMode} key={item.title} content={item} />)}
            </CategoryWrap>
        </Box>
    )
};

export default CategoryBar;