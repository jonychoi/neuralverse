import React, { useState } from 'react';
import {Col} from '../../components/common/base';
import Main from './main';
import CategoryBar from './categorybar';
import { GlobalBgStyler } from '../../styles';
import { ThemeEvent } from '../../contexts/GlobalContext';
import tasks from '../../data/tasks';

export const NeuralSpace = ({route}) => {
    const {darkMode} = ThemeEvent();
    const [task, setTask] = useState(tasks[0]);
    const [subTask, setSubTask] = useState(null);
    const [model, setModel] = useState(null);
    const [categoryBar, setCategoryBar] = useState(true);
    return (
        <Col align="center" bg={GlobalBgStyler(darkMode)} style={{display: route == 3 ? 'flex': 'none', paddingTop: 170}}>
            <Main model={model} setModel={setModel} categoryBar={categoryBar} setCategoryBar={setCategoryBar} task={task} setTask={setTask} setSubTask={setSubTask} subTask={subTask} darkMode={darkMode} />
            <CategoryBar task={task} setTask={setTask} setSubTask={setSubTask} subTask={subTask} setModel={setModel} darkMode={darkMode} categoryBar={categoryBar} setCategoryBar={setCategoryBar} />
        </Col>
    )
};

export default NeuralSpace;