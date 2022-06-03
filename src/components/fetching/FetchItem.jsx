import React from "react";
import "@ui5/webcomponents/dist/StandardListItem.js";
import "@ui5/webcomponents/dist/CustomListItem.js";
import "@ui5/webcomponents/dist/Icon.js";
import "@ui5/webcomponents/dist/Label.js";
import "@ui5/webcomponents/dist/TextArea";


const FetchItem = ({ items }) => {

  if(items == undefined){
    console.log("FetchItem - items == undefined");
    return;
  }

  return (
    items.map((item) => {

      return (

        <ui5-li key={item.id} icon="nutrition-activity"
          description={item.website}
          additional-text={item.username}
          additional-text-state="Success">
          {item.name}
        </ui5-li>

      );
    })

  );
};

export default FetchItem;
