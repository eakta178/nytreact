import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";

class Note extends Component {
  state = {
    article: {}
  };
  // When this component mounts, grab the article with the _id of this.props.match.params.id
  componentDidMount() {
    API.getArticle(this.props.match.params.id)
      .then(res => this.setState({ article: res.data }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>
                {this.state.article.title} by {this.state.article.date}
              </h1>
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          <Col size="md-10 md-offset-1">
            <article>
              <h1>Notes</h1>
              <p>
                {this.state.article.note}
              </p>
            </article>
          </Col>
        </Row>
        <Row>
          <Col size="md-2">
            <Link to="/">← Back to Articles</Link>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Note;
