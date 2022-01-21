import React, {useState, useContext, createContext} from 'react';

const GlobalContext = createContext();

export const GlobalProvider = ({children}) => {
    const [darkMode, setDarkMode] = useState(true);
    const [sideBar, setSideBar] = useState(false);
    const [visualizer, setVisualizer] = useState(false);
    return (
        <GlobalContext.Provider
            value={{
                darkMode: darkMode, 
                setDarkMode: setDarkMode,
                sideBar: sideBar, 
                setSideBar: setSideBar,
                visualizer: visualizer,
                setVisualizer: setVisualizer,
            }}>
            {children}
        </GlobalContext.Provider>
    )
}

export const ThemeEvent = () => {
    const {darkMode, setDarkMode} = useContext(GlobalContext);
    return {darkMode, setDarkMode};
}

export const SideBarEvent = () => {
    const {sideBar, setSideBar} = useContext(GlobalContext);
    return {sideBar, setSideBar};
}

export const VisualizerEvent = () => {
    const {visualizer, setVisualizer} = useContext(GlobalContext);
    return {visualizer, setVisualizer};
}

export default GlobalProvider;