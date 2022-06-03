import React, { useState } from 'react';
import { Outlet, Link } from "react-router-dom"
import { useNavigate } from "react-router-dom";

import "@ui5/webcomponents/dist/Card";
import "@ui5/webcomponents/dist/CardHeader.js"
import "@ui5/webcomponents/dist/Icon.js"
import "@ui5/webcomponents/dist/List.js";
import ListItem from "./QuestionsAnswersItems"

import data from "../../data.json"


const QuestionsAnswers = ({ }) => {
  const navigate = useNavigate();

  const [listData, setListData] = useState(data)



  const detailView = (e) =>{
  
   if(e.target.parentNode.parentNode.parentNode.children[1].style.display == "none"){
    e.target.parentNode.parentNode.parentNode.children[1].style.display = "block";
   }else{
    e.target.parentNode.parentNode.parentNode.children[1].style.display = "none";
   }
  
   e.stopPropagation();
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}>

      <ui5-list id="questionsAnswersList" style={{width: "50rem", height: "40rem",border: "1px solid #b6b4b1",  padding: "0"}}>
        <ListItem items={listData} detailView={detailView}/>
      </ui5-list>


    </div>
  )
}

export default QuestionsAnswers;