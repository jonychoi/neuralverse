import React, {useState, useEffect} from 'react';
import Footer from './components/footer';
import Header from './components/header';
import Models from './screens/subs/models';
import Nfts from './screens/subs/nfts';
import Datasets from './screens/subs/datasets';
import Login from './screens/subs/login';
import Profile from './screens/subs/profile';
import MyButton from './components/buttons/myButton';
import SideBar from './components/sidebar';
import Visualizer from './components/visualizer';

import Landing from './screens/landing';
import NeuralSpace from './screens/neuralspace';
import NeuralVerse from './screens/neuralverse';
import NeuralStudio from './screens/neuralstudio';
import NeuralOps from './screens/neuralops';

export const App = ({}) => {
  const [route, setRoute] = useState(0);
  
  return (
      <div style={{overflowX: 'hidden'}}>
        <Header route={route} setRoute={setRoute} />
        <Landing route={route} />
        <Nfts route={route}/>
        <Login route={route} />
        <Profile route={route}/>
        <NeuralSpace route={route}/>
        <NeuralVerse route={route}/>
        <NeuralStudio route={route} />
        <NeuralOps route={route} />
        <SideBar />
        <MyButton />
        <Visualizer />
      </div>
  )
};

export default App;