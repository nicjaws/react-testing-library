import React from 'react';

function Hello(){
  return (
    <div>
      <h1 data-testid="my-heading">Hello</h1>
      <button onClick={() => console.log("I am clicked")}></button>
    </div>
  )
}

export default Hello;
