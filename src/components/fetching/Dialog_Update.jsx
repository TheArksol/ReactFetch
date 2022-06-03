import React, { useState, useEffect, useRef } from "react";
import ReactDOM from 'react-dom';
import { Dialog, Button, Input, Label, FlexBox, Title, Bar } from '@ui5/webcomponents-react';



const Dialog_Update = ({ addNewEntry }) => {
  // const [dialogIsOpen, setDialogIsOpen] = useState(false);

  const dialogRef = useRef();
  const handleOpen = (e) => {
    dialogRef.current.show();
  };
  const handleClose = () => {
    dialogRef.current.close();
  };

  const setNewEntry = (e) => {
   
    e.preventDefault();
    let newName = document.getElementById("dialog_update_input_name").value;
    let newUsername = document.getElementById("dialog_update_input_username").value;
    let newWebsite = document.getElementById("dialog_update_input_website").value;

    addNewEntry(newName, newUsername, newWebsite);
    
  };


  return (
    <>
      <Button onClick={handleOpen}>Add New Entry</Button>
      {ReactDOM.createPortal(<Dialog ref={dialogRef}
        header={<Bar><Title>Add New Entry</Title></Bar>}
        footer={<Bar center endContent={<Button onClick={handleClose} icon="decline">Close</Button>}><Button onClick={setNewEntry} icon="add">Add</Button></Bar>}>

        {/* Content */}
        <FlexBox direction="Column" style={{marginLeft: "2.2rem"}}>
          <Label>Name:</Label>
          <Input id="dialog_update_input_name" placeholder="Name..."></Input>

          <Label style={{ marginTop: "1rem" }}>Username:</Label>
          <Input id="dialog_update_input_username" placeholder="Username..."></Input>

          <Label style={{ marginTop: "1rem" }}>Website:</Label>
          <Input id="dialog_update_input_website" placeholder="Website..."></Input>
        </FlexBox>

      </Dialog>, document.body)}
    </>
  );
};

export default Dialog_Update;
