import React from 'react';
import {Flex, Col, Row, Text, Image, Input, Box} from '../../components/common/base';
import {SearchIcon} from '../../icons/utilities';
import {bgStyler} from '../../styles';
import tasks from '../../data/tasks';
import styled from 'styled-components';
import segmentationimg from '../../data/tasks/imgs/segmentation.jpg'

export const TaskBox = styled(Col)`
    opacity: ${(props) => props.task == props.title ? 1 : 1};
    :hover {
        opacity: 1;
    }
    cursor: pointer;
`;

export const Selector = ({darkMode, task, setTask, subTask, setSubTask}) => {
    return (
        <Row justify="space-between">
            <Col flex={3}>
                <Text className="bold" size="33">{subTask ? subTask : task}</Text>
                <Row margin="margin: 20px 0px">
                    <Text className="bold" size="17">{task}</Text>
                    {subTask && 
                    <>
                        <Text className="bold" size="17" margin="margin: 0px 10px;">></Text>
                        <Text className="bold" size="17">{subTask}</Text>
                    </>}
                </Row>
            </Col>
            <Flex flex={1} position="relative" height="35px" margin="margin-top: 20px;">
                <Flex position="absolute" style={{left: 0, bottom: 10}}>
                    <SearchIcon width={18} height={18} stroke="rgb(100, 100, 100)" />
                </Flex>
                <Input
                    padding="padding: 10px 0px; padding-left: 30px;" 
                    color={darkMode ? "white" : "black"} bg="rgba(0,0,0,0)" 
                    style={{border: 0, borderBottomWidth: 1.5, borderBottomColor: 'rgb(100, 100, 100)', borderBottomStyle: 'solid'}} 
                    height="35px;" placeholder="Search" width="100%"
                />
            </Flex>
        </Row>
    )
};

export const TaskIntroduction = ({}) => {
    return (
        <Col flex={3}>
            <Image width="500px" src={segmentationimg} />
            <Text>Semantic segmentation, or image segmentation, is the task of clustering parts of an image together which belong to the same object class. It is a form of pixel-level prediction because each pixel in an image is classified according to a category. Some example benchmarks for this task are Cityscapes, PASCAL VOC and ADE20K. Models are usually evaluated with the Mean Intersection-Over-Union (Mean IoU) and Pixel Accuracy metrics.</Text>
        </Col>
    )
}

export const Task = ({darkMode, content, task}) => {
    return (
        <TaskBox align="center" task={task} title={content.title} 
            darkMode={darkMode} justify="space-between" 
            style={{flexDirection: 'row', overflow: 'hidden'}} 
            width="100%" height="70px"
        >
            <Col padding="padding: 30px;">
                <Text className="light" margin="margin-bottom: 5px;" size="14" weight="700">{content.title.toUpperCase()}</Text>
                <Text margin="margin-top: 5px;"></Text>
            </Col>
            <Flex align="center" justify="center" width="100px;" height="100%" style={{overflow: 'hidden'}}>
                <Image width="108%" height="108%" src={content.img} of="cover" />   
            </Flex>
        </TaskBox>
    )
}

export const Categories = ({darkMode, task, setTask, subTask, setSubTask}) => {
    return (
        <Box flex={1} position="relative" height="480px" br="20px" style={{overflow: 'hidden'}}>
            <Flex flex={1} position="relative" height="35px" margin="margin-top: 20px;">
                <Flex position="absolute" style={{left: 0, bottom: 10}}>
                    <SearchIcon width={18} height={18} stroke="rgb(100, 100, 100)" />
                </Flex>
                <Input
                    padding="padding: 10px 0px; padding-left: 30px;" 
                    color={darkMode ? "white" : "black"} bg="rgba(0,0,0,0)" 
                    style={{border: 0, borderBottomWidth: 1.5, borderBottomColor: 'rgb(100, 100, 100)', borderBottomStyle: 'solid'}} 
                    height="35px;" placeholder="Search" width="100%"
                />
            </Flex>
            <Col width="100%" height="480px" bg={bgStyler(darkMode)} 
                position="absolute" scrollbarFalse={true} 
                margin="margin-top: 80px;"
                style={{overflow: 'hidden', overflowY: 'scroll', display: 'block'}}>
                {tasks.map((item) => 
                <div onClick={() => setTask(item.title)}><Task task={task} key={item.title} content={item} darkMode={darkMode} /></div>)}
            </Col>
            <Col width="100%" height="480px" bg={bgStyler(darkMode)} 
                position="absolute" scrollbarFalse={true} 
                margin="margin-top: 80px;"
                style={{overflow: 'hidden', overflowY: 'scroll', display: 'block', right: '-100%', transition: 'all 300ms'}}>
                {tasks.map((item) => 
                <div onClick={() => setTask(item.title)}><Task task={task} key={item.title} content={item} darkMode={darkMode} /></div>)}
            </Col>
        </Box>
    )
}

export const ModelBox = styled(Box)`
    margin-right: 25px;
    &:last-child {
        margin-right: 0px;
    }
`;

export const Model = ({darkMode}) => {
    return (
        <ModelBox width="33%" height="190px;" bg={bgStyler(darkMode)} br="20px" style={{overflow: 'hidden'}}>
            
        </ModelBox>
    )
}

export const Models = ({darkMode, task, subTask}) => {
    return (
        <Col flex={3} margin="margin-top: 50px;">
            <Row>
                <Text>Icon</Text>
                <Text className="bold" size="25" margin="margin: 30px 0px;">Trendings on {subTask ? subTask : task ? task : "All Computer Vision"}</Text>
            </Row>
            <Row>
                <Model darkMode={darkMode} />
                <Model darkMode={darkMode} />
                <Model darkMode={darkMode} />
                <Model darkMode={darkMode} />
            </Row>
            <Row margin="margin-top: 25px;">
                <Model darkMode={darkMode} />
                <Model darkMode={darkMode} />
                <Model darkMode={darkMode} />
                <Model darkMode={darkMode} />
            </Row>
        </Col>
    )
}

export const Main = ({darkMode, task, setTask, subTask, setSubTask}) => {
    return (
        <Col width="100%">
            <Selector darkMode={darkMode} task={task} setTask={setTask} subTask={subTask} setSubTask={setSubTask} />
            <Row margin="margin-top: 10px;">
                <TaskIntroduction />
                <Categories darkMode={darkMode} task={task} setTask={setTask} subTask={subTask} setSubTask={setSubTask} />
            </Row>
            <Models darkMode={darkMode} task={task} subTask={subTask} />
        </Col>
    )
}

export default Main;