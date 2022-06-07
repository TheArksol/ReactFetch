import React from 'react';
import { Bar, Button, Label } from '@ui5/webcomponents-react';
import { useNavigate } from "react-router-dom";
import { setTheme, getTheme } from "@ui5/webcomponents-base/dist/config/Theme.js"

const PageHeader = ({ title }) => {

  //Dom Router Navigation 
  const navigate = useNavigate();

  // Fiori Theme Change & Store it in localstorage
  const changeTheme = (e) =>{
    if(getTheme() == "sap_fiori_3"){
      setTheme("sap_fiori_3_dark");
    }else{
      setTheme("sap_fiori_3");
    }
  
    localStorage.setItem('theme', getTheme());
  }

  return (

    <Bar design="Header"
         startContent={<Button icon="home" design="Transparent" onClick={() => navigate("/")}/>}
         endContent={<Button icon="action-settings" design="Transparent" onClick={changeTheme}/>}
    ><Label>{title}</Label>
    </Bar>

  )
}

export default PageHeader;