import React from 'react';
import './App.css';

import Header from './Components/Containers/Header';
import MenuCardBar from './Components/MenuCard/MenuCardBar';
import ImageWithTextBar from './Components/Containers/ImageWithTextBar';
import ImgaeGallery from './Components/ImageGallery/ImageGallery';
import GridLayout from './Components/Grid/GridLayout';
import ParalaxContainer from './Components/ParalaxContainer/ParalaxContainer';


function App() {


    return (
        <div className="App">
            <Header/>
            <MenuCardBar/>
            <ImageWithTextBar/>
            <ImgaeGallery/>
            <GridLayout/>
            <ParalaxContainer/>

        </div>
    );


}

export default App;
