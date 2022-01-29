import React from 'react';
import {Flex, Col, Row, Text, Image, Input, Box} from '../../components/common/base';
import {BenchMarkIcon, DemoIcon, PaperswithCodeIcon, SearchIcon} from '../../icons/utilities';
import logo from '../../imgs/logo.png';
import {bgStyler} from '../../styles';
import styled from 'styled-components';

export const Selector = ({darkMode, task, subTask}) => {
    console.log(subTask, task)
    return (
        <Col margin="margin-bottom: 10px">
            <Text className="bold" size="33">{subTask ? subTask.title.toUpperCase() : task.title == "All Computer Vision" ? "Computer Vision".toUpperCase() : task.title.toUpperCase()}</Text>
            <Row margin="margin: 20px 0px">
                <Text className="bold" size="17">{task.title}</Text>
                {subTask && 
                <>
                    <Text className="bold" size="17" margin="margin: 0px 10px;">></Text>
                    <Text className="bold" size="17">{subTask.title}</Text>
                </>}
            </Row>
        </Col>
    )
};

export const TaskIntroduction = ({task, subTask}) => {
    return (
        <Row align="center">
            <Flex>
                <Flex br="20px" width="350px;"align="center" justify="center" height="200px" style={{overflow: 'hidden'}}>
                    <Image width="108%" height="108%" of="cover" src={task.img} />
                </Flex>
            </Flex>
            <Flex margin="margin-left: 30px;">
                <Text lh={25} size="15" className="light" weight="400">
                    {task.description}
                </Text>
            </Flex>
        </Row>
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
            <Row align="center" margin="margin-bottom: 10px;" justify="space-between">
                <Row align="center">
                    <Flex>
                        <Image src={logo} width={43} />
                    </Flex>
                    <Text>sticky</Text>
                    <Text className="bold" size="22" margin="margin: 20px;">TRENDINGS ON {subTask ? subTask.title.toUpperCase() : task.title.toUpperCase()}</Text>
                </Row>
                <Row>
                    <Text margin="margin-right: 15px;">Sort > </Text>
                    <Row to="cursor" align="center">
                        <BenchMarkIcon width={18} height={18} />
                        <Text margin="margin-left: 7px;">Benchmarks</Text>
                    </Row>
                    <Row to="cursor" align="center" margin="margin: 0px 15px;">
                        <PaperswithCodeIcon width={18} height={18} />
                        <Text margin="margin-left: 7px;">Papers with Code</Text>
                    </Row>
                    <Row to="cursor" align="center">
                        <DemoIcon width={18} height={18} />
                        <Text margin="margin-left: 7px;">Demo Availables</Text>
                    </Row>
                </Row>
            </Row>
            <Row margin="margin: 12px 0px;">
                <Model darkMode={darkMode} />
                <Model darkMode={darkMode} />
                <Model darkMode={darkMode} />
            </Row>
            <Row margin="margin: 12px 0px;">
                <Model darkMode={darkMode} />
                <Model darkMode={darkMode} />
                <Model darkMode={darkMode} />
            </Row>
            <Row margin="margin: 12px 0px;">
                <Model darkMode={darkMode} />
                <Model darkMode={darkMode} />
                <Model darkMode={darkMode} />
            </Row>
            <Row margin="margin: 12px 0px;">
                <Model darkMode={darkMode} />
                <Model darkMode={darkMode} />
                <Model darkMode={darkMode} />
            </Row>
        </Col>
    )
}

export const Main = ({categoryBar, darkMode, task, setTask, subTask, setSubTask}) => {
    return (
        <Col width="100%" padding={categoryBar ? "padding: 0% 10%; padding-right: 25%; padding-bottom: 100px;" : "padding: 0% 10%; padding-bottom: 100px;"}>
            <Selector darkMode={darkMode} task={task} setTask={setTask} subTask={subTask} setSubTask={setSubTask} />
            <TaskIntroduction task={task} subTask={subTask} />
            <Models darkMode={darkMode} task={task} subTask={subTask} />
        </Col>
    )
}

export default Main;