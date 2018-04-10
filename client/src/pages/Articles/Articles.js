import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import Header from "../../components/Header";
import Btn from "../../components/Btn";
import API from "../../utils/API";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, FormBtn } from "../../components/Form";
import Saved from "../Saved";
import Note from "../Note";

class Articles extends Component {
  // Setting our component's initial state
  state = {
    articles: [],
    saved: [],
    notes: {},
    topic: "",
    start: "",
    end: "",
    titleName: "",
    bodyName: "",
    notesToDisplay: []
  };

  // When the component mounts, load all articles and save them to this.state.articles
  componentDidMount() {
    this.loadSavedArticles()
  }

  //Loads all articles  and sets them to this.state.articles
  loadSavedArticles = () => {
    API.getArticles()
      .then(res =>
        this.setState({ saved: res.data})
      )
      .catch(err => console.log(err));
  };

  // Deletes a article from the database with a given id, then reloads articles from the db
  deleteArticle = (id) => {
    API.deleteArticle(id)
      .then(res => this.loadSavedArticles())
      .catch(err => console.log(err));
  };

  // Add note to the Article
  addNoteToArticle = (event, id) => {
    console.log('log id',id);
    event.preventDefault();
    API.addNote(id,{
      titleName: this.state.notes[id].titleName,
      bodyName: this.state.notes[id].bodyName
    
    })
      .then(res => {

        this.loadSavedArticles();
        
      })
      .catch(err => console.log(err));
  };


    // delete note from the Article
  deleteNoteFromArticle = (event, id) => {
    event.preventDefault();
      API.deleteNote(id)
        .then(res => this.loadSavedArticles())
        .catch(err => console.log(err));
    };


  handleSaveArticle = (id) => {
    console.log('inside save article click')
    const itemID = this.state.articles.find((element) => element._id === id);
    const newArticle = {title: itemID.headline.main, date: itemID.pub_date, url: itemID.web_url};
    console.log(itemID);
    console.log(newArticle);
      API.saveArticle(newArticle)
        .then(res => this.loadSavedArticles())
        .catch(err => console.log(err));
  };

  // Handles updating component state when the user types into the input field
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleNoteChange = event => {
    const { name, value } = event.target;
   
    const nameArray = name.split('_');
    const id = nameArray[0];
    const nameField = nameArray[1];
    console.log('value', {
      ...this.state.notes,
      [id]: {
        ...this.state.notes[id],
        [nameField]: value 
      }
    });
    this.setState({
      notes: {
        ...this.state.notes,
        [id]: {
          ...this.state.notes[id],
          [nameField]: value 
        }
      }

    });
  }

  handleFormSubmit = event => {
    const articles = [];
    event.preventDefault();
    if (this.state.topic) {
      API.scrape({
        topic: this.state.topic,
        start: this.state.start,
        end: this.state.end
      })
        .then(res=>{
          console.log(res);
          res.data.response.docs.forEach(article => articles.push(article));
          this.setState({
            articles
          });
        })
        .catch(err => console.log(err));
    }
  };

  renderSaved = () => {
    return this.state.saved.map(save => (
      <Saved
        _id={save._id}
       key={save._id}
       title={save.title}
       date={save.date}
       url={save.url}
       deleteArticle={this.deleteArticle}
       loadSavedArticles={this.loadSavedArticles}
      />
    ));
  }

  renderNote = (id) => {
    
    const notesToDisplay = this.state.notesToDisplay;
    notesToDisplay.push(id);
    const bodyNameContent = (this.state.notes[id]) ? this.state.notes[id].bodyName : '';
    const titleNameContent = (this.state.notes[id]) ? this.state.notes[id].titleName : '';
    this.setState({
      notesToDisplay,
      notes: {
        [id] : {
        bodyName: bodyNameContent,
        titleName: titleNameContent
        }
      }
    });

  }

  displayNotes = (id) => {
    if (this.state.notesToDisplay.includes(id)) {
      const name = `${id}_name`;
      return (
        <div>
          <Note
        _id={id}
       key={id}
       titleInput={(this.state.notes[id]) ? this.state.notes[id].titleName : ''}
       bodyInput={(this.state.notes[id]) ? this.state.notes[id].bodyName : ''}
       handleInputChange={this.handleNoteChange}
       addNoteToArticle ={this.addNoteToArticle}
       deleteNoteFromArticle={this.deleteNoteFromArticle}
      />
        </div>
      )
    }
  }

// -------------------------------------

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>Newyorktimes Article Scrubber</h1>
              <h2>Search for and annotate articles of interest! </h2>
            </Jumbotron>
            <form>
              <Input
                value={this.state.topic}
                onChange={this.handleInputChange}
                name="topic"
                placeholder="Topic (required)"
              />
              <Input
                value={this.state.start}
                onChange={this.handleInputChange}
                name="start"
                placeholder="Start Year (required)"
              />
              <Input
                value={this.state.end}
                onChange={this.handleInputChange}
                name="end"
                placeholder="End Year (required)"
              />
              <FormBtn
                disabled={!(this.state.topic)}
                onClick={this.handleFormSubmit}>
                Search
              </FormBtn>
            </form>
          </Col>
          </Row>
          <Row>
          <Col size="md-12">
            <Header>
              <h2>Results</h2>
            </Header>
            {this.state.articles.length ? (
              <List>
                {this.state.articles.map((article, index) => {
                  return (
                    <ListItem key={index}>
                      <a href={article.web_url} target="_blank">
                        <strong>
                          {article.headline.main} by {article.byline.original}
                        </strong>
                      </a>
                      <Btn type="save" onClick={()=>this.handleSaveArticle(article._id)} />
                    </ListItem>
                  );
                })}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
            </Col>
          </Row>
          <Row>
          <Col size="md-12">
            <Header>
              <h2>Saved Articles</h2>
            </Header>     
            {/* {this.renderSaved()} */}
              {this.state.saved.length ? (
             
              <List>
                {this.state.saved.map(article => {
                  return (
                    // <Row>
                    <ListItem key={article._id}>
                      <a href={"/articles/" + article._id}>
                        <strong>
                          {article.title}
                        </strong>
                      </a>
                      <p>Publish Date & Time: {article.date}</p>
                      <a href={article.url} target="_blank">Link To Article</a><br/>
                      <Btn type="delete" onClick={() => this.deleteArticle(article._id)} />
                      <Btn type="view-note" onClick={() =>this.renderNote(article._id)} />
                      {this.displayNotes(article._id)}
                    </ListItem>
                   
                  );
                })}
              </List>
            ) : (
              <h3>No Saved Articles</h3>
            )} 
            </Col>
          </Row>

      </Container>
    );
  }
}

export default Articles;
