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
      month: "4 Wochen",
      data: 65
    },
    {
      month: "Aktuell",
      data: 24
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


          <Card style={{ width: "15rem", height: "20rem" }}
            header={<CardHeader titleText="Sperrungen in der Produktion" subtitleText="">
              <Icon slot="avatar" name="product"></Icon>
            </CardHeader>}>

            <ColumnChart dimensions={[{ accessor: "month" }]}
              measures={[{ accessor: "data", label: "Anzahl" }]}
              dataset={dataset}
              style={{ width: "100%", height: "15rem" }}>
            </ColumnChart>

          </Card>

          <Card style={{ width: "40rem", height: "20rem" }}
            header={<CardHeader titleText="Sperrungen in der Produktion" subtitleText="">
              <Icon slot="avatar" name="product"></Icon>
            </CardHeader>}>

            <ColumnChart dimensions={[{ accessor: "month" }]}
              measures={[{ accessor: "data", label: "Anzahl" }]}
              dataset={dataset}
              style={{ width: "100%", height: "15rem" }}>
            </ColumnChart>

          </Card>

          <Card style={{ width: "15rem", height: "20rem" }}
            header={<CardHeader titleText="Sperrungen in der Produktion" subtitleText="">
              <Icon slot="avatar" name="product"></Icon>
            </CardHeader>}>

            <ColumnChart dimensions={[{ accessor: "month" }]}
              measures={[{ accessor: "data", label: "Anzahl" }]}
              dataset={dataset}
              style={{ width: "100%", height: "15rem" }}>
            </ColumnChart>

          </Card>


        </FlexBox>


      </div>
    </div>
  )
}

export default Dashboard;