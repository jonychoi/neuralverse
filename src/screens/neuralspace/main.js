import React from 'react';
import {Flex, Col, Row, Text, Image, Input, Box} from '../../components/common/base';
import {SearchIcon} from '../../icons/utilities';
import {bgStyler} from '../../styles';
import styled from 'styled-components';
import segmentationimg from '../../data/tasks/imgs/segmentation.jpg'

export const Selector = ({darkMode, task, setTask, subTask, setSubTask}) => {
    return (
        <Col>
            <Text className="bold" size="33">{subTask ? subTask.toUpperCase() : task.toUpperCase()}</Text>
            <Row margin="margin: 20px 0px">
                <Text className="bold" size="17">{task}</Text>
                {subTask && 
                <>
                    <Text className="bold" size="17" margin="margin: 0px 10px;">></Text>
                    <Text className="bold" size="17">{subTask}</Text>
                </>}
            </Row>
        </Col>
    )
};

export const TaskIntroduction = ({}) => {
    return (
        <Col flex={3} margin="margin-right: 30px;">
            <Image width="500px" src={segmentationimg} />
            <Text>Semantic segmentation, or image segmentation, is the task of clustering parts of an image together which belong to the same object class. It is a form of pixel-level prediction because each pixel in an image is classified according to a category. Some example benchmarks for this task are Cityscapes, PASCAL VOC and ADE20K. Models are usually evaluated with the Mean Intersection-Over-Union (Mean IoU) and Pixel Accuracy metrics.</Text>
        </Col>
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
            </Row>
            <Row margin="margin-top: 25px;">
                <Model darkMode={darkMode} />
                <Model darkMode={darkMode} />
                <Model darkMode={darkMode} />
            </Row>
        </Col>
    )
}

export const Main = ({categoryBar, darkMode, task, setTask, subTask, setSubTask}) => {
    return (
        <Col width="100%" padding={categoryBar ? "padding: 0% 10%; padding-right: 30%" : "padding: 0% 10%;"}>
            <Col flex={3}>
                <Selector darkMode={darkMode} task={task} setTask={setTask} subTask={subTask} setSubTask={setSubTask} />
                <TaskIntroduction />
            </Col>
            <Models darkMode={darkMode} task={task} subTask={subTask} />
        </Col>
    )
}

export default Main;