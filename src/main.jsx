import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { CounterWithCustomHook } from "./01-useState/CounterWithCustomHook";
import { SimpleForm } from "./02-useEffect/SimpleForm";
import { FormWithCustomHook } from "./02-useEffect/FormWithCustomHook";
import { MultipleCustomHooks } from "./03-examples/MultipleCustomHooks";
import { FocusScreen } from "./04-useRef/FocusScreen";
import {Padre} from "./07-tarea-memo/07-tarea-memo/Padre";
import {TodoApp} from "./08-useReducer/TodoApp";


ReactDOM.createRoot(document.getElementById("root")).render(
  
    <TodoApp />
  
);
