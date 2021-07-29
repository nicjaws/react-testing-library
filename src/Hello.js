import React, {useState} from 'react';

function Hello(){
  const [name, setName] = useState('')
  return (
    <div>
      <h1 data-testid="my-heading">Hello</h1>
      <button onClick={() => console.log("I am clicked")}></button>
      <input type="text" value={name} onChange={ evt => setName(evt.target.value)}></input>
    </div>
  )
}

export default Hello;
