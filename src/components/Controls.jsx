import { useState } from "react";

const Controls = ({ setSpeed, setScale }) => {
    const [orbitSpeed, setOrbitSpeed] = useState(0.01);
    const [scale, setLocalScale] = useState(1);

    const handleSave = () => {
        setSpeed(orbitSpeed);
        setScale(scale);
    };

    return (
        <div style={{ padding: "10px", color: "white" }}>
            <h3>Solar System Controls</h3>
            <label>Orbit Speed: </label>
            <input type="number" value={orbitSpeed} onChange={(e) => setOrbitSpeed(parseFloat(e.target.value))} step="0.01" />
            <br />
            <label>Scale: </label>
            <input type="number" value={scale} onChange={(e) => setLocalScale(parseFloat(e.target.value))} step="0.1" />
            <br />
            <button onClick={handleSave}>Save</button>
        </div>
    );
};

export default Controls;
