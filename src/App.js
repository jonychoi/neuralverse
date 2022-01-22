import React, {useState, useEffect} from 'react';
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
import MyButton from './components/buttons/myButton';
import SideBar from './components/sidebar';
import Visualizer from './components/visualizer';

export const App = ({}) => {
  const [route, setRoute] = useState(0);
  
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
        <Footer />
        <SideBar />
        <MyButton />
        <Visualizer />
      </div>
  )
};

export default App;