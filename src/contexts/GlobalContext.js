import React, {useState, useContext, createContext} from 'react';

const GlobalContext = createContext();

export const GlobalProvider = ({children}) => {
    const [darkMode, setDarkMode] = useState(false);
    return (
        <GlobalContext.Provider
            value={{
                darkMode: darkMode, 
                setDarkMode: setDarkMode
            }}>
            {children}
        </GlobalContext.Provider>
    )
}

export const ThemeEvent = () => {
    const {darkMode, setDarkMode} = useContext(GlobalContext);
    return {darkMode, setDarkMode};
}

export default GlobalProvider;