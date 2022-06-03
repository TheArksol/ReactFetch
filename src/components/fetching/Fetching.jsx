import React, { useState, useEffect, useCallback } from 'react';
import { Outlet, Link } from "react-router-dom"
import { useNavigate } from "react-router-dom";

import "@ui5/webcomponents/dist/Card";
import "@ui5/webcomponents/dist/CardHeader.js"
import "@ui5/webcomponents/dist/Icon.js"
import "@ui5/webcomponents/dist/List.js";

import FetchItem from "./FetchItem"
import Dialog_Update from "./Dialog_Update"



const Fetching = ({ }) => {
  const navigate = useNavigate();

  const [listData, setListData] = useState([])


  const addNewEntry = (newName, newUsername, newWebsite) => {
    
    let newEntryArray = { id: (listData.length + 1), address: {}, company: {}, email: {}, name: newName, phone: "PhonePlaceholder", username: newUsername, website: newWebsite };
    listData.push(newEntryArray);
    setListData(listData => [...listData, newEntryArray]);
 
    // console.log(JSON.stringify(listData))
    fetch('https://jsonplaceholder.typicode.com/users', {
      method: 'POST',
      body: JSON.stringify(listData),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then(json => setListData(json))
      .then(json => console.log(json))
      .catch((err) => { console.log(err) })

  };


  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => setListData(json))
      .catch((err) => { console.log(err) })
  }, [])


  console.log(listData);


  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}>

      <ui5-list id="questionsAnswersList" style={{ width: "50rem", height: "40rem", border: "1px solid #b6b4b1", padding: "0" }}>
        <FetchItem items={listData} />
      </ui5-list>

      <Dialog_Update addNewEntry={addNewEntry} />

    </div>
  )
}

export default Fetching;