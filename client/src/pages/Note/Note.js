import React from "react";

import { Input, FormBtn } from "../../components/Form";

const Note = props => {
  console.log('props', props);
  const titleName = `${props._id}_titleName`;
  const bodyName = `${props._id}_bodyName`;
      return (
      <form>
      <FormBtn
        onClick={(event) => props.addNoteToArticle(event, props._id)}
      >
        Save Note
      </FormBtn>
      <button
        style={{ float: "right", margin: 7, color: "#2F4F4F" }} className="btn btn-danger" onClick={(event) => props.deleteNoteFromArticle(event, props._id)}
      >
        Delete Note

      </button>
      <Input
        value={props.titleInput}
        onChange={props.handleInputChange}
        name={titleName}
        placeholder="Note Title"
      />
      <Input
        value={props.bodyInput}
        onChange={props.handleInputChange}
        name={bodyName}
        placeholder="Add Note here"
      />


      
      
      </form>
      )
    }


export default Note;
