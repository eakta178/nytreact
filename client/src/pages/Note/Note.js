import React from "react";

const Note = props =>
  <div>

   <h4>{props.title}</h4>
    <p>Publish Date & Time: {props.date}</p>
    <a href={props.url} target="_blank">Link To Article</a><br/>
    <button onClick={() => props.handleDeleteButton(props._id)}>Delete</button>

  </div>


export default Note;
