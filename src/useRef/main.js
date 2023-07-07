import React,{useRef} from "react";

const UseRefBasics = () => {
    // Create a ref using the useRef hook
  const myRef = useRef(null);

  // Example function that uses the ref
  const handleClick = () => {
    // Access the current value of the ref
    console.log(myRef.current.value);
    
    // Modify the value of the ref
    myRef.current.value = 'New value';
  };

  return (
    <div>
      <input ref={myRef} type="text" />
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}
    

export default UseRefBasics;
