import React from 'react';
import { IllustratedMessage } from '@ui5/webcomponents-react';
import "@ui5/webcomponents-fiori/dist/illustrations/Tent.js";

import PageHeader from '../pageheader/PageHeader';


const Home = ({ }) => {

  // let token = {User: "Test", Name: "Marcel Gründler", PK: "1099"};
  // localStorage.setItem('token', JSON.stringify(token));

  // console.log(JSON.parse(localStorage.getItem('token')).Name)

  return (
    <>
    <PageHeader title="Hauptseite"/>
      <IllustratedMessage name="Tent" title-text="Home - Hauptseite" subtitleText="Kinda empty here...">
        
      </IllustratedMessage>
    </>

  )
}

export default Home;