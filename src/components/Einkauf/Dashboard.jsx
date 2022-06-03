import React from 'react';

import "@ui5/webcomponents/dist/Card";
import "@ui5/webcomponents/dist/CardHeader.js"
import "@ui5/webcomponents/dist/Icon.js"

import { Outlet, Link } from "react-router-dom"
import { useNavigate } from "react-router-dom";


//
import { Card,CardHeader, Dialog, Button, Input, Label, FlexBox, Title, Bar, Icon, StandardListItem, List, GroupHeaderListItem} from '@ui5/webcomponents-react';

import { ColumnChart } from '@ui5/webcomponents-react-charts';



const Dashboard = ({ }) => {
  const navigate = useNavigate();

  const dataset = [
    {
      month: "Überfällig",
      data: 65
    },
    {
      month: "Verspätet",
      data: 243
    },
    {
      month: "Offen",
      data: 398
    }
  ];

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        margin: "1rem",
        justifyContent: "space-around"
      }}>

      <div>
        <FlexBox direction="Row" wrap="Wrap" style={{ gap: "1rem" }}>


          <Card style={{ width: "15rem", height: "20rem" }}
            header={<CardHeader titleText="Status Bestellungen" subtitleText="">
              <Icon slot="avatar" name="product"></Icon>
            </CardHeader>}>

            <ColumnChart dimensions={[{ accessor: "month" }]}
              measures={[{ accessor: "data", label: "Anzahl" }]}
              dataset={dataset}
              style={{ width: "100%", height: "15rem" }}>
            </ColumnChart>

          </Card>


          {/* <Card style={{ width: "20rem", height: "10rem" }} header={<CardHeader titleText="Nicht im Zulauf">
            <Icon slot="avatar" name="order-status"></Icon>
          </CardHeader>}>
          <MessageStrip style={{ width: "90%", marginLeft: "5%", marginTop: "1rem"}} design="Negative" hideCloseButton="true">23 Artikel nicht im Zulauf!</MessageStrip>
          </Card> */}


          <Card style={{ width: "20rem" }} header={<CardHeader titleText="Auswertungen" subtitleText="Auswertungen für den Einkauf">
            <Icon slot="avatar" name="list"></Icon>
          </CardHeader>}>

            <List style={{ width: "20rem", height: "24rem" }}>
              <GroupHeaderListItem>Offene Bestellungen</GroupHeaderListItem>
              <StandardListItem icon="product">Überfällige Lieferungen</StandardListItem>
              <StandardListItem icon="product">Verspätete Lieferungen</StandardListItem>
              <GroupHeaderListItem>Probrevia Daten</GroupHeaderListItem>
              <StandardListItem icon="tools-opportunity">Nicht im Zulauf</StandardListItem>
              <StandardListItem icon="tools-opportunity">Disposition</StandardListItem>
              <StandardListItem icon="tools-opportunity">Sonstiges</StandardListItem>
            </List>

          </Card>

          <Card style={{ width: "20rem" }} header={<CardHeader titleText="Informationen" subtitleText="Grundlegende Daten">
            <Icon slot="avatar" name="message-information"></Icon>
          </CardHeader>}>

            <List style={{ width: "20rem", height: "24rem" }}>
              <GroupHeaderListItem>ABV Daten</GroupHeaderListItem>
              <StandardListItem icon="product">Lieferanten</StandardListItem>
              <GroupHeaderListItem>Probrevia Daten</GroupHeaderListItem>
              <StandardListItem icon="tools-opportunity">Disposition</StandardListItem>
              <StandardListItem icon="tools-opportunity">Sonstiges</StandardListItem>
            </List>

          </Card>







        </FlexBox>


      </div>
    </div>
  )
}

export default Dashboard;