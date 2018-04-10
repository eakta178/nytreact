import React from "react";

import { Input, FormBtn } from "../../components/Form";

const Note = props => {
  console.log('props', props);
  const titleName = `${props._id}_titleName`;
  const bodyName = `${props._id}_bodyName`;
      return (
      <form>
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

      <FormBtn
        onClick={(event) => props.addNoteToArticle(event, props._id)}
      >
        Add Note
      </FormBtn>
      <FormBtn
        className="btn-danger" onClick={(event) => props.deleteNoteFromArticle(event, props._id)}
      >
        Delete Note
      </FormBtn>
      
      
      </form>
      )
    }


export default Note;
