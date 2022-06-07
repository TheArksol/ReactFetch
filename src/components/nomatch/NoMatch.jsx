import React from 'react';
import PageHeader from '../pageheader/PageHeader';
import { IllustratedMessage } from '@ui5/webcomponents-react';
import "@ui5/webcomponents-fiori/dist/illustrations/PageNotFound";



const NoMatch = ({ }) => {

  return (
    <>
      <PageHeader title="Seite nicht gefunden" />
      <IllustratedMessage style={{ marginTop: "1rem" }} name="PageNotFound" title-text="Diese Seite wurde leider nicht gefunden" subtitleText="Prüfen Sie die verwendete URL." />
    </>

  )
}

export default NoMatch;