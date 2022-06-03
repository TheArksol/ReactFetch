import React from "react";
import "@ui5/webcomponents/dist/StandardListItem.js";
import "@ui5/webcomponents/dist/CustomListItem.js";
import "@ui5/webcomponents/dist/Icon.js";
import "@ui5/webcomponents/dist/Label.js";
import "@ui5/webcomponents/dist/TextArea";


const ListItem = ({ items, detailView }) => {
  return (

    items.map((item) => {

      let status = "Not done";
      let statusState = "Error";

      if (item.complete) {
        status = "Done";
        statusState = "Success"
      }

      return (

        <ui5-li-custom key={item.id}
          style={{
            borderBottom: "1px solid #b6b4b1"
          
          }}
        >
          <div style={{ display: "flex", flexDirection: "column"}}>

            <div style={{ display: "flex", flexDirection: "row" }}>
              <div style={{ marginLeft: "1rem", marginTop: "0.9rem", marginBottom: "1rem" }}>
                <ui5-icon name={item.icon}></ui5-icon>
              </div>

              <div style={{ display: "flex", marginTop: "0.5rem", flexDirection: "column", gap: "0.25rem" }}>
                <ui5-label style={{ fontWeight: "600", marginLeft: "1rem" }}>{item.task}</ui5-label>
                <ui5-label style={{ marginLeft: "1rem" }}>{item.description_short}</ui5-label>
              </div>

              <div style={{display: "flex", alignItems: "center", marginLeft: "34rem"}}>
                <ui5-button design="Transparent" icon="sys-add" onClick={detailView}/>
              </div>
            </div>

            <div style={{display: "none"}}>
              <ui5-label wrapping-type="Normal" readonly style={{ margin: "1rem", width: "47rem"}} >{item.description}</ui5-label>
            </div>
          </div>


        </ui5-li-custom>

      );
    })

  );
};

export default ListItem;
