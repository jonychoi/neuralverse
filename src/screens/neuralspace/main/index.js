import React, {useState, useEffect} from 'react';
import {Flex, Col, Row, Text, Image} from '../../../components/common/base';
import {BackIcon, BenchMarkIcon, ColabIcon, DemoIcon, GithubIcon, PaperIcon, PaperswithCodeIcon, PdfIcon} from '../../../icons/utilities';
import ModelView from '../modelview';
import ModelMain from '../modelmain';
import { bgStyler, blueLowColor, extremehueBlue, hueBlue } from '../../../styles';

export const Title = ({darkMode, setModel, model, task, subTask}) => {
    return (
        <Col width="100%">
            <Flex onClick={() => setModel(null)} to="cursor" position="absolute" style={{left: '9.5%', top: 180, opacity: model ? 1 : 0, transition: 'all 300ms'}}>
                <BackIcon width={20} height={20} stroke={darkMode ? "rgba(255, 255, 255, 0.7" : 'rgba(0, 0, 0, 0.7)'} />
            </Flex>
            <Text className="bold" style={{minHeight: 36.67, marginLeft: model ? 30: 0, marginTop: model ? 3: 0, transition: 'all 300ms'}} size={model ? 27: "30"}>
                {model ? model.paper.name : subTask ? subTask.title.toUpperCase() : task ? task.title.toUpperCase() : "Computer Vision".toUpperCase()}
            </Text>
           
        </Col>
    )
};

export const Directory = ({darkMode, model, subTask, task}) => {
    return (
        <Col>
            <Row margin="margin: 20px 0px" opacity={0.8}>
                <Text className="bold" weight="500" size="16">{task.title}</Text>
                {subTask && task.title != subTask.title && 
                <>
                    <Text className="bold" weight="500" size="16" margin="margin: 0px 10px;">></Text>   
                    <Text className="bold" weight="500" size="16">{subTask.title}</Text>
                </>}
                {model && 
                <>
                    <Text className="bold" weight="500" size="16" margin="margin: 0px 10px;">></Text>
                    <Text className="bold" weight="500" size="16">{model.title}</Text>
                </>}
            </Row>
            {model && 
                <Col>
                    <Text style={{opacity: 0.8}} className="light" margin="margin-bottom: 10px;" weight="500">
                        {model.paper.conference && model.paper.conference.name != null && <>
                            <Text size="14">{model.paper.conference.name}</Text>
                            <Text margin="margin: 0px 5px;" size="14">  ·  </Text>
                        </>}
                        {model.paper.published_date && <>
                            <Text size="14">
                                {model.paper.published_date}
                            </Text>
                            <Text margin="margin: 0px 5px;" size="14">  ·  </Text>
                        </>}
                        {model.paper.authors.map((item, index) => index !==0 ? <Text key={index} size="14">{',  ' + item}</Text> : <Text key={index} size="14">{item}</Text>)}
                    </Text>
                    {model.task.featured && <Text size="15" color={darkMode ? extremehueBlue : blueLowColor} className="bold" margin="margin: 10px 0px; margin-top: 10px;" weight="600">{model.task.featured}</Text>}
                </Col>}
        </Col>
    )
}

export const Buttons = ({model, darkMode, subTask, task}) => {
    return (
        <>
         {model ? 
                <Row margin="margin-top: 30px;">
                    {model.paper.url && <>
                        <a href={`${model.paper.paper.replace('abs', 'pdf')}` + '.pdf'} target="_blank">
                            <Row shadow={true} align="center" margin="margin-right: 18px;" padding="padding: 10px 15px;" br="10px" bg={bgStyler(darkMode)}>
                                <PdfIcon stroke={hueBlue} width={20} height={20} />
                                <Text size="12" className="light" weight="600" margin="margin: 0px 10px;">
                                    Paper
                                </Text>
                            </Row>
                        </a>
                        <a href={model.paper.paper} target="_blank">
                            <Row shadow={true} align="center" margin="margin-right: 18px;" padding="padding: 10px 18px;" br="10px" bg={bgStyler(darkMode)}>
                                <PaperIcon stroke={hueBlue} width={20} height={20} />
                                <Text size="12" className="light" weight="600" margin="margin: 0px 10px;">
                                    Abstract
                                </Text>
                            </Row>
                        </a>
                    </>}
                    {model.paper.conference && <>
                        <a href={model.paper.conference.paper} target="_blank">
                            <Row shadow={true} align="center" margin="margin-right: 18px;" padding="padding: 10px 18px;" br="10px" bg={bgStyler(darkMode)}>
                                <PdfIcon stroke={hueBlue} width={20} height={20} />
                                <Text size="12" className="light" weight="600" margin="margin: 0px 10px;">
                                    {model.paper.conference.name} Paper
                                </Text>
                            </Row>
                        </a>
                        <a href={model.paper.conference.abstract} target="_blank">
                            <Row shadow={true} align="center" margin="margin-right: 18px;" padding="padding: 10px 18px;" br="10px" bg={bgStyler(darkMode)}>
                                <PaperIcon stroke={hueBlue} width={20} height={20} />
                                <Text size="12" className="light" weight="600" margin="margin: 0px 10px;">
                                    {model.paper.conference.name} Abstract
                                </Text>
                            </Row>
                        </a>
                    </>}
                    <a href={model.code.url} target="_blank">
                        <Row shadow={true} align="center" margin="margin-right: 18px;" padding="padding: 10px 18px;" br="10px" bg={bgStyler(darkMode)}>
                            <GithubIcon stroke={hueBlue} width={20} height={20} />
                            <Text size="12" className="light" weight="600" margin="margin: 0px 10px;">
                                Code
                            </Text>
                        </Row>
                    </a>
                    {model.code.colab && 
                        <a href={model.code.colab} target="_blank">
                            <Row shadow={true} align="center" margin="margin-right: 18px;" padding="padding: 10px 18px;" br="10px" bg={bgStyler(darkMode)}>
                                <ColabIcon stroke={hueBlue} width={20} height={20} />
                                <Text size="12" className="light" weight="600" margin="margin: 0px 10px;">
                                    Colab
                                </Text>
                            </Row>
                        </a>}
                </Row>
                : 
                <Row margin="margin-top: 30px;">
                    <Row align="center">
                        <DemoIcon width={20} height={20} />
                        <Text size="12" className="light" weight="600" margin="margin: 0px 10px;">
                            20 Demos
                        </Text>
                    </Row>
                    <Row align="center" margin="margin-left: 10px;">
                        <PaperswithCodeIcon width={20} height={20} />
                        <Text size="12" className="light" weight="600" margin="margin: 0px 10px;">
                            20 Papers with Code
                        </Text>
                    </Row>
                    <Row align="center" margin="margin-left: 10px;">
                        <BenchMarkIcon width={20} height={20} />
                        <Text size="12" className="light" weight="600" margin="margin: 0px 10px;">
                            20 Benchmarks
                        </Text>
                    </Row>
                </Row>}
            </>
    )
}

export const TitleDescription = ({darkMode, setModel, setTask,  model, setSubTask, task, subTask}) => {
    return (
        <Col>
            <Title model={model} setModel={setModel} darkMode={darkMode} task={task} setTask={setTask} subTask={subTask} setSubTask={setSubTask} />
            <Row>
                <Col margin="margin-right: 30px;" flex={1}>
                    <Directory darkMode={darkMode} task={task} subTask={subTask} model={model} />
                    <Text lh={27} className="sans" weight="400">
                        {model ? model.paper.description : subTask ? subTask.description : task.description}
                    </Text>
                    <Buttons subTask={subTask} task={task} darkMode={darkMode} model={model} />
                </Col>
                {!model && <Flex margin="margin-top: 30px;">
                    <Flex br="10px" width="300px;"align="center" justify="center" height="180px;" style={{overflow: 'hidden'}}>
                        <Image width="108%" height="108%" of="cover" src={model ? model.img : subTask ? subTask.img : task.img} />
                    </Flex>
                </Flex>}
            </Row>
        </Col>
    )
}


export const Main = ({model, setModel, categoryBar, darkMode, task, setTask, subTask, setSubTask}) => {
    return (
        <Col width="100%" padding={categoryBar ? "padding: 0% 10%; padding-right: 25%; padding-bottom: 100px;" : "padding: 0% 10%; padding-bottom: 100px;"}>
            <TitleDescription setModel={setModel} model={model} darkMode={darkMode} task={task} subTask={subTask} />
            {/* <Text>----------------접기------------------</Text> */}
            {model ? <ModelMain model={model} setModel={setModel} darkMode={darkMode} model={model} /> : 
            <ModelView setModel={setModel} darkMode={darkMode} task={task} subTask={subTask} />}
        </Col>
    )
}

export default Main;