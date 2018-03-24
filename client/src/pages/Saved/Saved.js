import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import DeleteBtn from "../../components/DeleteBtn";
import API from "../../utils/API";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";

class Articles extends Component {
  // Setting our component's initial state
  state = {
    articles: [],
    note: ""
  };

  // When the component mounts, load all articles and save them to this.state.articles
  componentDidMount() {
    this.loadArticles();
  }

  // Loads all articles  and sets them to this.state.articles
  loadArticless = () => {
    API.getArticles()
      .then(res =>
        this.setState({ articless: res.data, title: "", date: "", url: "" })
      )
      .catch(err => console.log(err));
  };

  // Deletes a article from the database with a given id, then reloads articles from the db
  deleteArticle = id => {
    API.deleteArticle(id)
      .then(res => this.loadArticles())
      .catch(err => console.log(err));
  };

  // Handles updating component state when the user types into the input field
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  // When the form is submitted, use the API.savearticle method to save the article data
  // Then reload articles from the database
  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.title) {
      API.saveArticle({
        title: this.state.title,
        date: this.state.date,
        url: this.state.url
      })
        .then(res => this.loadArticles())
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <Container fluid>
          <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>Saved Articles</h1>
            </Jumbotron>
            {this.state.articles.length ? (
              <List>
                {this.state.articles.map(article => {
                  return (
                    <ListItem key={article._id}>
                      <a href={"/articles/" + article._id}>
                        <strong>
                          {article.title} by {article.author}
                        </strong>
                      </a>
                      <DeleteBtn onClick={() => this.deleteArticle(article._id)} />
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
