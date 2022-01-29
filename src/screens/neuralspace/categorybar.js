import React from 'react';
import {Flex, Row, Col, Text, Image, Box, Input} from '../../components/common/base';
import { SearchIcon, CloseIcon, DemoIcon, PaperswithCodeIcon, BenchMarkIcon, BackIcon } from '../../icons/utilities';
import {Height} from '../../hooks/getWindow';
import tasks, {getItem} from '../../data/tasks';
import styled from 'styled-components';
import { bgStyler, blueColor, purColor } from '../../styles';

const CategoryWrap = styled(Col)`
    height: 100%;
    overflow: hidden;
    overflow-y: scroll;
    display: block;
    padding-bottom: 100px;
    transition: all 300ms;
`;

const TaskWrap = styled(Box)`
    &:first-child {
      margin-top: 0px;  
    };
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

export const Task = ({darkMode, content, setTask, task, setSubTask, type}) => {
    return (
        <TaskWrap onClick={() => type == "task" ? setTask(getItem(content.title, tasks)) : setSubTask(getItem(content.title, task.subtasks))}>
            <Col justify="center" align="flex-start" position="absolute" zIndex={101} 
                style={{left: 0, backdropFilter: 'blur(5px)', bottom: 0}}
                padding="padding: 20px;"
                width="70%" height="100%" bg={bgStyler(darkMode)}>
                <Text className="light" margin="margin: 10px 0px;">{content.title.toUpperCase()}</Text>
                <Col>
                    <Row align="center">
                        <DemoIcon stroke={darkMode ? "#00B3DA" : blueColor} width={15} height={15} />
                        <Text className="light" weight="400" margin="margin-left: 10px;" size="12">20 Demos</Text>
                    </Row>
                    <Row margin="margin: 5px 0px;" align="center">
                        <BenchMarkIcon stroke={darkMode ? "#00B3DA" : blueColor} width={15} height={15} />
                        <Text className="light" weight="400" margin="margin-left: 10px;" size="12">{content.benchmarkNum} Benchmarks</Text>
                    </Row>
                    <Row align="center">
                        <PaperswithCodeIcon stroke={darkMode ? "#00B3DA" : blueColor} width={15} height={15} />
                        <Text className="light" weight="400" margin="margin-left: 10px;" size="12">{content.paperswithcodeNum} Papers with Code</Text>
                    </Row>
                </Col>
            </Col>
            <Image src={content.img} zIndex={100} style={{marginLeft: 50}} position="absolute" of="cover" width="100%" height="100%" />
        </TaskWrap>
    )
}

export const CategoryBar = ({task, setTask, subTask, setSubTask, categoryBar, setCategoryBar, darkMode}) => {
    const taskselected = task.title !== "All Computer Vision"
    return (
        <Box position="fixed" zIndex={100} width="21%;"
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
            {taskselected && <Flex to="cursor" onClick={() => setTask(getItem('All Computer Vision', tasks))} position="absolute" style={{left: -5, top: 82}}>
                <BackIcon height={20} stroke={darkMode ? "white" : "black"} />
            </Flex>}
            <Text size="20" className='bold' margin={taskselected ? "margin: 10px 45px; margin-bottom: 20px;" : "margin: 10px 15px; margin-bottom: 20px;"} style={{transition: 'all 300ms'}}>{taskselected ? task.title : "TASKS"}</Text>
            <CategoryWrap scrollbarFalse={true}>
                {tasks.map((item) => <Task type="task" setTask={setTask} task={task} darkMode={darkMode} key={item.title} content={item} />)}
            </CategoryWrap>
            <CategoryWrap bg={darkMode ? "rgb(15, 15, 15)" : "white"} position="absolute" zIndex="1000" width="100%" style={{height: '85%', top: 124, right: taskselected ? 0 : '-100%', transition: 'all 300ms'}} scrollbarFalse={true}>
                {task.subtasks.map((item) => <Task type="subtask" setTask={setSubTask} task={task.subtasks} darkMode={darkMode} key={item.title} content={item} />)}
            </CategoryWrap>
        </Box>
    )
};

export default CategoryBar;