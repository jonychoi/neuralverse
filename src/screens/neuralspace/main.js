import React from 'react';
import {Flex, Col, Row, Text, Image, Input, Box} from '../../components/common/base';
import {bgStyler} from '../../styles';
import tasks from '../../data/tasks';
import styled from 'styled-components';

export const B = styled(Box)`
    background-color: ${(props) => props.darkMode ? props.task == props.title ? "rgba(35, 35, 35, 1)" : "rgba(35, 35, 35, 0.55)" : "white"};
    :hover {
        background-color: ${(props) => props.darkMode ? "rgba(35, 35, 35, 1)" : "white"};
    }
    cursor: pointer;
`;

export const Selector = ({darkMode, task, setTask, subTask, setSubTask}) => {
    return (
        <Col margin="margin-left: 10px;">
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
    )
};

export const Task = ({darkMode, content, task}) => {
    return (
        <B align="center" task={task} title={content.title} br="10px;" darkMode={darkMode} style={{flexDirection: 'row', overflow: 'hidden'}} width="100%" height="70px" margin="margin: 10px 0px;" padding="padding: 10px;">
            <Flex br="10px" align="center" justify="center" width="70px;" height="80%" style={{overflow: 'hidden'}}>
                <Image width="108%" height="108%" src={content.img} of="cover" />   
            </Flex>
            <Col margin="margin-left: 20px;">
                <Text className="light" margin="margin-bottom: 5px;" size="14" weight="700">{content.title}</Text>
                <Text margin="margin-top: 5px;"></Text>
            </Col>
        </B>
    )
}

export const Categories = ({darkMode, task, setTask, subTask, setSubTask}) => {
    return (
        <Row width="100%" height="480px" margin="margin-bottom: 30px;" style={{flexDirection: 'row'}}>
            {/* <Flex>
                <Input bg="rgba(0,0,0,0)" style={{border: 0, borderBottomWidth: 1.5, borderBottomColor: 'rgb(100, 100, 100)', borderBottomStyle: 'solid'}} height="35px;" />
            </Flex> */}
            <Col width="23%">
                <Col padding="padding: 8px;" br="20px;" scrollbarFalse={true} style={{overflow: 'hidden', overflowY: 'scroll', display: 'block'}}>
                    {tasks.map(item => <div onClick={() => setTask(item.title)}><Task task={task} key={item.title} content={item} darkMode={darkMode} /></div>)}
                </Col>
            </Col>
            <Col width="23%">
                <Col padding="padding: 8px;" br="20px;" scrollbarFalse={true} style={{overflow: 'hidden', overflowY: 'scroll', display: 'block'}}>
                    {tasks.map(item => <div onClick={() => setSubTask(item.title)}><Task subtask={subTask} key={item.title} content={item} darkMode={darkMode} /></div>)}
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