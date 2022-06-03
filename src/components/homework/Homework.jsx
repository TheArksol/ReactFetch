import React from 'react';

import "@ui5/webcomponents/dist/Card";
import "@ui5/webcomponents/dist/CardHeader.js"
import "@ui5/webcomponents/dist/Icon.js"
import { Outlet, Link } from "react-router-dom"
import { useNavigate } from "react-router-dom";

const Homework = ({ }) => {
  const navigate = useNavigate();

  return (
    <div
    style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "1rem",
      margin: "1rem",
      justifyContent: "space-around"
    }}>

      <ui5-card style={{ width: "30rem" }}>
        <ui5-card-header slot="header" title-text="Homework" subtitle-text="React Course Homework" >
          <ui5-icon name="activity-2" slot="avatar"></ui5-icon>
        </ui5-card-header>

        <ui5-list separators="Inner" class="content-padding">
          <ui5-li onClick={() => navigate("/homework/task1")} icon="legend" icon-start>Task1: ToDo List</ui5-li>
          <ui5-li onClick={() => navigate("/homework/task2")} icon="travel-request" icon-start>Task2: Questions And Answers</ui5-li>
          <ui5-li onClick={() => navigate("/homework/task3")} icon="travel-request" icon-start>Task3: API Fetch</ui5-li>
        </ui5-list>
      </ui5-card>

 
    </div>
  )
}

export default Homework;