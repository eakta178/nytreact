import React from "react";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";

const Note = props =>
      <form>
      <Input
        value={this.titleInput}
        onChange={this.handleInputChange}
        name="titleInput"
        placeholder="Note Title"
      />
      <Input
        value={this.bodyInput}
        onChange={this.handleInputChange}
        name="bodyInput"
        placeholder="Add Note here"
      />

      <FormBtn
        onClick={() => this.addNoteToArticle(props._id)}
      >
        Add Note
      </FormBtn>
      <FormBtn
        onClick={() => this.deleteNoteFromArticle(props._id)}
      >
        Delete Note
      </FormBtn>
      
      
      </form>


export default Note;
