import React, {useState, useEffect} from 'react';
import {ThemeEvent} from './contexts/GlobalContext';
import Footer from './components/footer';
import Header from './components/header';
import Landing from './screens/landing';
import Trend from './screens/trends';
import Models from './screens/models';
import Design from './screens/design';
import NeuralOps from './screens/neuralops';
import Nfts from './screens/nfts';
import Datasets from './screens/datasets';
import Login from './screens/login';
import Profile from './screens/profile';
import GenerateButton from './components/buttons/generateButton';
import MyButton from './components/buttons/myButton';
import SideBar from './components/sidebar';

export const App = ({}) => {
  const [route, setRoute] = useState(0);
  const {darkMode} = ThemeEvent();
  
  useEffect(() => {
    const themechanger = () => {
      const body = document.body;
      if (darkMode) {
        body.style = "background-color: rgb(15, 15, 15); transition: all 500ms ease"
      } else {
        body.style = "background-color: rgb(240, 240, 240); transition: all 500ms ease"
      }
    }
    themechanger();
  }, [darkMode]);
  
  return (
      <div style={{overflowX: 'hidden'}}>
        <Header route={route} setRoute={setRoute} />
        <Landing route={route} />
        <Trend route={route}/>
        <Models route={route}/>
        <Datasets route={route}/>
        <Nfts route={route}/>
        <Design route={route} />
        <NeuralOps route={route} />
        <Login route={route} />
        <Profile route={route}/>
        <Footer darkMode={darkMode} />
        <GenerateButton />
        <SideBar />
        <MyButton />
      </div>
  )
};

export default App;