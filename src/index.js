import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import Homework from "./components/homework/Homework";
import Home from "./components/home/Home";
import EmptyOutlet from "./components/emptyOutlet/EmptyOutlet";
import ToDoList from "./components/todolist/ToDoList";
import Fetching from "./components/fetching/Fetching";
import QuestionsAnswers from "./components/questionsanswers/QuestionsAnswers";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(

    <BrowserRouter>
      <Routes>
   
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />

          <Route path="homework" element={<EmptyOutlet />}>
            <Route index element={<Homework />} />
            <Route path="task1" element={<ToDoList />} />
            <Route path="task2" element={<QuestionsAnswers />} />
            <Route path="task3" element={<Fetching />} />
          </Route>

        </Route>
      </Routes>
    </BrowserRouter>
 
);