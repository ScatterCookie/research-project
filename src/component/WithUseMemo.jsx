import { useState, useMemo } from 'react';
import './src/App.css';

function App() {
  const [baseColor, setBaseColor] = useState('#FF6B6B');
  


  const getRandomColor = () => {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    return '#' + randomColor.padStart(6, '0');
  };

  const generatePalette = (color) => {
    const hexToRgb = (hex) => {
      const r = parseInt(hex.slice(1, 3), 16);
      const g = parseInt(hex.slice(3, 5), 16);
      const b = parseInt(hex.slice(5, 7), 16);
      return { r, g, b };
    };

    const rgb = hexToRgb(color);
    const palette = [];

    for (let i = 0; i < 5; i++) {
      const factor = (i - 2) * 30;
      const newR = Math.min(255, Math.max(0, rgb.r + factor));
      const newG = Math.min(255, Math.max(0, rgb.g + factor));
      const newB = Math.min(255, Math.max(0, rgb.b + factor));
      const newColor =  useMemo(() => `#${Math.round(newR).toString(16).padStart(2, '0')}${Math.round(newG).toString(16).padStart(2, '0')}${Math.round(newB).toString(16).padStart(2, '0')}`, [baseColor]);
      palette.push(newColor);
    }
    return palette;
  };

  const palette = generatePalette(baseColor);

  return (
    <div className="app">
      <h2>Colour Palette Generator</h2>
      <button onClick={() => setBaseColor(getRandomColor())}>
        Generate New Palette
      </button>

      <div className="palette">
        <div className="color-box">
          <div className="color" style={{ backgroundColor: baseColor }}></div>
          <p>Base: {baseColor}</p>
        </div>

        {palette.map((color, index) => (
          <div key={index} className="color-box">
            <div className="color" style={{ backgroundColor: color }}></div>
            <p>{color}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;