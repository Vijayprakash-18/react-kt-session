// ChildComponent.js
import React from 'react';

const ChildComponent = (props) => {
    /* The term props here is act as an object 
     and get the data that we define earlier 
     in the Parent Component */

  return (
    <div>
      <h1>{props.message}</h1>
      <p>The answer to life, the universe, and everything is: {props.number}</p>
    </div>
  );
};

export default ChildComponent;

//