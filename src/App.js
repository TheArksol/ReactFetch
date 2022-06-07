import "./App.css";

import "@ui5/webcomponents-icons/dist/AllIcons.js";

import { ShellBar, List, StandardListItem } from "@ui5/webcomponents-react";

import { Outlet, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "@ui5/webcomponents/dist/Assets.js";
import "@ui5/webcomponents-fiori/dist/Assets.js";
import {
  setTheme,
  getTheme,
} from "@ui5/webcomponents-base/dist/config/Theme.js";
import {
  getNoConflict,
  setNoConflict,
} from "@ui5/webcomponents-base/dist/config/NoConflict.js";

import ADLogo from "./avionic_design_neg.png"


function App() {
  const navigate = useNavigate();
  //setNoConflict(true);

  //Load Local Storage Data
  if (localStorage.getItem("theme")) {
    setTheme(localStorage.getItem("theme"));
  }

  const changeTheme = (e) => {
    if (getTheme() == "sap_fiori_3") {
      setTheme("sap_fiori_3_dark");
    } else {
      setTheme("sap_fiori_3");
    }

    localStorage.setItem("theme", getTheme());

    let token = { User: "Test", Name: "Marcel Gründler", PK: "1099" };
    localStorage.setItem("token", JSON.stringify(token));

    console.log(JSON.parse(localStorage.getItem("token")).Name);
  };

  return (
    <div
      className="App"
      style={{
        backgroundColor: "var(--sapBackgroundColor)",
        minHeight: "100vh",
      }}
    >
      <ShellBar
        id="Shellbar"
        logo={<img src={ADLogo} />}
        primaryTitle="AD-Center"
        secondaryTitle="Development System"
        onMenuItemClick={(e) => navigate(e.detail.item.dataset.nav)}
        menuItems={
          <>
            <StandardListItem icon="home" data-nav="/">Hauptseite</StandardListItem>
            <StandardListItem icon="company-view" data-nav="/">Arbeitsvorbereitung</StandardListItem>
            <StandardListItem icon="factory" data-nav="/">Produktion</StandardListItem>
            <StandardListItem icon="supplier" data-nav="/einkauf">Einkauf</StandardListItem>
            <StandardListItem icon="heading3" data-nav="/guideu">GuideU</StandardListItem>
          </>
        }
      ></ShellBar>

      {/* <ui5-bar design="Header">
        <ui5-button
          icon="home"
          tooltip="Go home"
          design="Transparent"
          slot="startContent"
        ></ui5-button>
        <ui5-label>Header Title</ui5-label>
        <ui5-button
        onClick={changeTheme}
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

        <ui5-button
          onClick={() => navigate("/work")}
          icon="factory"
          design="Default"
        >
          Work
        </ui5-button>
      </div> */}

      <Outlet />
    </div>
  );
}

export default App;
