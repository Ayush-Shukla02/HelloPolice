import React from 'react';
// import logo from "./logo.svg";
import "./App.css";
import "./Pages/Flowchart_Editor/Flowchart.css";
// import Flowchart from './src/Pages/Flowchart_Editor/Flowchart';
import Flowchart from "./Pages/Flowchart_Editor/Flowchart";
import ParticleBackground from "./ParticleBackground";

function App() {
    return (
        <div className = "App">
            <ParticleBackground />
            <Flowchart />
        </div>
    )
}

export default App;
