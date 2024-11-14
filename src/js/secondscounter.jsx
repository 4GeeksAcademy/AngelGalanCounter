import React from "react";
import ReactDOM from 'react-dom/client';
function SecondsCounter({ seconds }) {
    // Dividimos los segundos en dígitos individuales
    const six = seconds ? Math.floor(seconds / 100000) % 10 : 0;
    const five = seconds ? Math.floor(seconds / 10000) % 10 : 0;
    const four = seconds ? Math.floor(seconds / 1000) % 10 : 0;
    const three = seconds ? Math.floor(seconds / 100) % 10 : 0;
    const two = seconds ? Math.floor(seconds / 10) % 10 : 0;
    const one = seconds ? seconds % 10 : 0;
  
    return (

      <div id="counter" className="counter bg-dark text-white d-flex align-items-center justify-content-center">

        <div className="clock-icon me-2">
          <i className="fas fa-clock"></i>
        </div>
        <div className="digit">{six}</div>
        <div className="digit">{five}</div>
        <div className="digit">{four}</div>
        <div className="digit">{three}</div>
        <div className="digit">{two}</div>
        <div className="digit">{one}</div>
      </div>
    );
  }
  
  // Inicializamos los segundos en cero
  let seconds = 0;
  
  let root
  window.onload = () => {
    const container = document.getElementById('counter');
  
    if (container) {
      root = ReactDOM.createRoot(container);
  
      root.render(<SecondsCounter seconds={seconds} />);
  
      setInterval(() => {
        seconds++;
        root.render(<SecondsCounter seconds={seconds} />);
      }, 1000);
    }
  };
  
  export default SecondsCounter;