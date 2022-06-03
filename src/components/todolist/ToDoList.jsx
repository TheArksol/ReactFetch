import React from 'react';

import "@ui5/webcomponents/dist/Card";
import "@ui5/webcomponents/dist/CardHeader.js"
import "@ui5/webcomponents/dist/Icon.js"

const ToDoList = ({ }) => {

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: "1rem",
        margin: "1rem",
        justifyContent: "space-around"
      }}>

      <p>ToDoList</p>

    </div>
  )
}

export default ToDoList;