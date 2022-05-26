import { Divider } from '@mui/material';
import React from 'react';
import './App.css';
import Banner from './assets/banner.png'
import { Founders } from './components/founders';
import { Header } from './components/header';
import { HowItWorks } from './components/how-it-works';
import { Presentation } from './components/presentation';
import { TokenNomics } from './components/tokenomics';
import { Wellcome } from './components/wellcome';
import Roadmap from './assets/roadmap.png'
import LogoImg from './assets/logo.png'

function App() {
  return (
    <div className="App">
      <Header />
      <Divider />
      <div className='Content'  style={{
        background: `url(${Banner})`
      }}>
      <Wellcome />
      <Presentation />
      <HowItWorks />
      <TokenNomics />
      <Founders />
      <div id="roadmap" className='title'> Our Roadmap</div>
      <img alt='referal' src={Roadmap}/>
      <div className='Presentation'>
        <img src={LogoImg} width='600px' height='600px' alt='referal' />
      </div>
      </div>
    </div>
  );
}

export default App;
