import React from 'react';
import { useReducer } from 'react';

function funcsReducer (funcs, action){
  switch(action.type){
    case 'func1':{
      console.log(action.text);
      return
    }
    case 'func2':{
      console.log(action.text);
      return
    }
  }
}

export function App() {
  const [funcs, dispatch] = useReducer(funcsReducer, [])
  function func1 (){
    dispatch({
      type: 'func1',
      text: "Funktion 1 wurde gedrückt",
    })
  }
  function func2 (){
    dispatch({
      type: 'func2',
      text: "Funktion 2 wurde gedrückt",
    })
  }
  return (
    <div className='App'>
    <button onClick={() => func1()}>Funktion1</button>
    <button onClick={() => func2()}>Funktion1</button>
    </div>
  );
}
