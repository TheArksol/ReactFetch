import "./App.css";
import "@ui5/webcomponents-fiori/dist/ShellBar";
import "@ui5/webcomponents-icons/dist/AllIcons.js";
import "@ui5/webcomponents-fiori/dist/SideNavigation.js";
import "@ui5/webcomponents-fiori/dist/SideNavigationItem.js";
import "@ui5/webcomponents-fiori/dist/SideNavigationSubItem.js";

import "@ui5/webcomponents-fiori/dist/Bar.js";
import "@ui5/webcomponents/dist/List.js";
import "@ui5/webcomponents/dist/StandardListItem.js";
import "@ui5/webcomponents/dist/Button";


import { Outlet, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "@ui5/webcomponents/dist/Assets.js";
import "@ui5/webcomponents-fiori/dist/Assets.js";
import { setTheme } from "@ui5/webcomponents-base/dist/config/Theme.js"
import { getNoConflict, setNoConflict } from "@ui5/webcomponents-base/dist/config/NoConflict.js";

function App() {
  const navigate = useNavigate();
  setNoConflict(true);
  console.log(getNoConflict())


  const switchDesign = (e) =>{
    setTheme("sap_fiori_3_dark");
    let token = {User: "Test", Name: "Marcel Gründler", PK: "1099"};
    localStorage.setItem('token', JSON.stringify(token));

    console.log(JSON.parse(localStorage.getItem('token')).Name)
  }



  return (
    <div className="App" style={{backgroundColor: "var(--sapBackgroundColor)", height: "100vh"}}>
      <ui5-shellbar
        id="shellbar"
        primary-title="ReactJS Course"
        secondary-title=""
      ></ui5-shellbar>

      <ui5-bar design="Header">
        <ui5-button
          icon="home"
          tooltip="Go home"
          design="Transparent"
          slot="startContent"
        ></ui5-button>
        <ui5-label>Header Title</ui5-label>
        <ui5-button
        onClick={switchDesign}
          icon="action-settings"
          tooltip="Go to settings"
          slot="endContent"
        ></ui5-button>
      </ui5-bar>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: "1rem",
          margin: "1rem",
        }}
      >
        <ui5-button onClick={() => navigate("/")} icon="home" design="Default">
          Home
        </ui5-button>

        <ui5-button
          onClick={() => navigate("/homework")}
          icon="activity-2"
          design="Default"
        >
          Homework
        </ui5-button>
      </div>

      <Outlet />
    </div>
  );
}

export default App;
