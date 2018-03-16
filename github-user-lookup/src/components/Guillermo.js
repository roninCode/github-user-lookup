import React from 'react';

const Guillermo = () => {
  return (
    <div className="guillermo">
      <h3>Guillermo, are you trying to break my app?!</h3>
      <video width="400" autoplay="true" loop="true">
          <source src="guillermo-gif.mp4" type="video/mp4" />
      </video>
    </div>
  )
}

export default Guillermo;