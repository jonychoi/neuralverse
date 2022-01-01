import React from 'react';
import {SideBar} from './components';

export const Index = ({sideBar, setSideBar, darkMode}) => {
    return (
        <SideBar sideBar={sideBar} setSideBar={setSideBar} darkMode={darkMode} />
    )
}

export default SideBar;