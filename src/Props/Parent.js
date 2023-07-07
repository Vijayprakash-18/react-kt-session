// ParentComponent.js
import React from 'react';
import ChildComponent from './Child';

const ParentComponent = () => {
  // Define the data to be passed as props to child component
  const message = 'Hello, World!';
  const number = 42;

  // Render the ChildComponent and pass the props
  return (
    <div>
      <ChildComponent message={message} number={number} />
    </div>
  );
};

export default ParentComponent;
