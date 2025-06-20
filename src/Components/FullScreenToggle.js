import React, { useState, useEffect } from 'react';
import { Maximize, Minimize } from 'react-feather'; // Import Feather Icons
import screenfull from 'screenfull';

function FullScreenToggle() {
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    // Check if fullscreen is supported by the browser
    if (screenfull.isEnabled) {
      // Add a listener for fullscreen change event
      screenfull.on('change', () => {
        setIsFullscreen(screenfull.isFullscreen);
      });
    }
  }, []);

  const toggleFullScreen = () => {
    if (screenfull.isEnabled) {
      screenfull.toggle(); // Toggle fullscreen mode
    }
  };

  return (
    <div className="dropdown">
      <a className="nav-link icon full-screen-link" onClick={toggleFullScreen}>
        {isFullscreen ? (
          <Minimize className="fullscreen-button header-icons" />
        ) : (
          <Maximize className="fullscreen-button header-icons" />
        )}
      </a>
    </div>
  );
}

export default FullScreenToggle;
