import { useState } from "react";
import SolarSystem from "./scenes/SolarSystem";
// import Controls from "./components/Controls";
import "./App.css";

const App = () => {
    const [speed, setSpeed] = useState(0.01);
    const [scale, setScale] = useState(1);

    return (
        <div>
            <h1 className="title">3D Solar System</h1>
            {/* <Controls setSpeed={setSpeed} setScale={setScale} /> */}
            <SolarSystem speed={speed} scale={scale} />
        </div>
    );
};

export default App;
