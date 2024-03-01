import React,{useRef} from 'react'
import './App.css';

function App() {

  const inputElement=useRef();

  const focusElm=()=>{
    //console.log(inputElement.current);
    inputElement.current.style.backgroundColor='cyan';
    inputElement.current.focus();
  }
  return (
   <>
   <input type="text" ref={inputElement} id="user-input" />

   <button onClick={focusElm}>Focus Input</button>
   </>
  );
}

export default App;
