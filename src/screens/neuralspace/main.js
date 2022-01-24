import React from 'react';
import {Flex, Col, Row, Text, Image, Input, Box} from '../../components/common/base';
import {bgStyler} from '../../styles';

export const Selector = ({darkMode, task, setTask, subTask, setSubTask}) => {
    return (
        <Col>
            <Text className="bold" size="30">{subTask ? subTask : task}</Text>
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

export const Task = ({task}) => {
    return (
        <Row width="100%" height="50px">
            <Flex width="50px;" height="100%">
                <Image src={task.image} of="cover" />
            </Flex>
            <Col>
                <Text>{task.title}</Text>
                <Text margin="margin-top: 5px;"></Text>
            </Col>
        </Row>
    )
}

export const Categories = ({darkMode, task, setTask, subTask, setSubTask}) => {
    return (
        <Row width="100%" br="20px" height="500px" bg={bgStyler(darkMode)} style={{flexDirection: 'row'}}>
            {/* <Flex>
                <Input bg="rgba(0,0,0,0)" style={{border: 0, borderBottomWidth: 1.5, borderBottomColor: 'rgb(100, 100, 100)', borderBottomStyle: 'solid'}} height="35px;" />
            </Flex> */}
            <Col>
                <Text margin="margin: 15px;" className="bold">Tasks</Text>
                <Col width="18%" style={{overflow: 'hidden', overflowY: 'scroll'}}>
                  
                </Col>
            </Col>
            <Col>
                <Text margin="margin: 15px;" className="bold">Sub Tasks</Text>
                <Col width="18%" style={{overflow: 'hidden', overflowY: 'scroll'}}>
                  
                </Col>
            </Col>
        </Row>
    )
}

export const Main = ({darkMode, task, setTask, subTask, setSubTask}) => {
    return (
        <Col width="100%">
            <Selector darkMode={darkMode} task={task} setTask={setTask} subTask={subTask} setSubTask={setSubTask} />
            <Categories darkMode={darkMode} task={task} setTask={setTask} subTask={subTask} setSubTask={setSubTask} />
        </Col>
    )
}

export default Main;