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
        <ui5-card-header slot="header" title-text="Work Projects" subtitle-text="Component Projects for Avionic Design" >
          <ui5-icon name="activity-2" slot="avatar"></ui5-icon>
        </ui5-card-header>

        <ui5-list separators="Inner" class="content-padding">
          <ui5-li onClick={() => navigate("/work/einkaufDashboard")} icon="legend" icon-start>Dashboard für den Einkauf</ui5-li>
          <ui5-li onClick={() => navigate("/work/artikelsuche")} icon="search" icon-start>Artikelsuche</ui5-li>
          <ui5-li onClick={() => navigate("/work/guideu")} icon="search" icon-start>Dashboard GuideU</ui5-li>
        </ui5-list>
      </ui5-card>

 
    </div>
  )
}

export default Homework;