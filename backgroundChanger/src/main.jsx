import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import './index.css';
import image from "./assets/bgimage.png";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div style={{ position: 'relative', overflow: 'hidden', height: '100vh' }}>
      {/* Background Image */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundImage: `url(${image})`,
        backgroundRepeat: 'repeat-x',
        // backgroundSize: 'cover',
        zIndex: -1
      }}>
      </div>

      {/* App Component */}
      <div style={{
        position: 'relative', zIndex: 1, margin: '0 auto', width: '100%', maxWidth: '800px',
        paddingTop: '100px'
      }}>
        <App />
      </div>
    </div>
  </React.StrictMode>
);
