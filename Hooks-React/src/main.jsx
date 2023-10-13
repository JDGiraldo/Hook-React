import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router-dom';

// import { SimpleForm } from './02-useEffect/SimpleForm'
// import { CounterWithCustomHoks } from './01-useState/CounterWithCustomHoks'
// import { CounterApp } from './01-useState/CounterApp'
// import { HooksApp } from './HooksApp'
// import { FormWithCustomHook } from './02-useEffect/FormWithCustomHook'
// import { MultilpleCustomHooks } from './03-examples/MultilpleCustomHooks'
// import { FocusScreen } from './04-useRef/FocusScreen'
// import { Layout } from './05-useLayoutEfect}/Layout'
// import { Memorize } from './06-memos/Memorize'
// import { MemoHook } from './06-memos/MemoHook'
// import { CallbackHook } from './06-memos/CallbackHook'
// import { Padre } from './07-tarea-memo/Padre'
// import './08-useReducer/intro-reducer';
// import { TodoApp } from './08-useReducer/TodoApp';
import { MainApp } from './09-useContext/MainApp';


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  {/* // <React.StrictMode> */}
  <MainApp/>
  {/* // </React.StrictMode> */}
  </BrowserRouter>
)

