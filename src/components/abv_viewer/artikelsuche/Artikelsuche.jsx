import React from 'react';
import { Outlet, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


import { Card, CardHeader, Dialog, Button, Input, Label, FlexBox, Title, Bar, Icon, StandardListItem, List, GroupHeaderListItem, ObjectPage, ObjectPageSubSection, Form, Text, ObjectPageSection, DynamicPage, FormGroup, FormItem, FlexBoxDirection, } from '@ui5/webcomponents-react';
import { DynamicPageTitle } from '@ui5/webcomponents-react';

const Homework = ({ }) => {
  const navigate = useNavigate();

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
      }}>

   
      <ObjectPage style={{}} headerTitle={<DynamicPageTitle header={<Title>1482-005-000-01</Title>}></DynamicPageTitle>}>
        <ObjectPageSection titleText="Allgemeine Informationen" id="artikelsuche_objectpagesection_allgemeineInformationen" />

        <ObjectPageSection titleText="Info-Texte" id="artikelsuche_objectpagesection_infoTexte" />

        <ObjectPageSection titleText="Lieferanten" id="artikelsuche_objectpagesection_lieferanten" />

        <ObjectPageSection titleText="Datenblätter" id="artikelsuche_objectpagesection_lieferanten" />

      </ObjectPage>;
    
    </div>
  )
}

export default Homework;