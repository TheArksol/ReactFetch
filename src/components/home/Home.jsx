import React from 'react';
import "@ui5/webcomponents-fiori/dist/IllustratedMessage.js";
import "@ui5/webcomponents-fiori/dist/illustrations/Tent.js"


const Home = ({ }) => {

  return (
    <>
      <ui5-illustrated-message name="Tent" title-text="Home - Hauptseite">
        <div slot="subtitle">Kinda empty here...</div>
      </ui5-illustrated-message>
    </>

  )
}

export default Home;