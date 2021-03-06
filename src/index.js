import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import Homework from "./components/homework/Homework";
import Home from "./components/home/Home";
import NoMatch from "./components/nomatch/NoMatch";
import EmptyOutlet from "./components/emptyOutlet/EmptyOutlet";
import ToDoList from "./components/todolist/ToDoList";
import Fetching from "./components/fetching/Fetching";
import QuestionsAnswers from "./components/questionsanswers/QuestionsAnswers";

//Work related
import Work from "./components/work/Work";
import EinkaufDashboard from "./components/Einkauf/Dashboard"
import GuideU_Dashboard from "./components/guideu/Dashboard"
import Artikelsuche from "./components/abv_viewer/artikelsuche/Artikelsuche"

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(

    <BrowserRouter>
      <Routes>
    

        <Route path="/" element={<App />}>
        <Route path="*" element={<NoMatch />} />
          <Route index element={<Home />} />

          <Route path="homework" element={<EmptyOutlet />}>
            <Route index element={<Homework />} />
            <Route path="task1" element={<ToDoList />} />
            <Route path="task2" element={<QuestionsAnswers />} />
            <Route path="task3" element={<Fetching />} />
          </Route>

          <Route path="guideu" element={<EmptyOutlet />}>
            <Route index element={<GuideU_Dashboard />} />
            {/* <Route path="guideu" element={<GuideU_Dashboard />} /> */}
          </Route>

          <Route path="einkauf" element={<EmptyOutlet />}>
            <Route index element={<EinkaufDashboard />} />
            {/* <Route path="guideu" element={<GuideU_Dashboard />} /> */}
          </Route>


        </Route>
      </Routes>
    </BrowserRouter>
 
);