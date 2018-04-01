import React from "react";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";
import Jumbotron from "../../components/Jumbotron";
import Btn from "../../components/Btn";

const Saved = props =>

            {this.state.articles.length ? (
              <List>
                {this.state.articles.map(article => {
                  return (
                    <ListItem key={article._id}>
                      <a href={"/articles/" + article._id}>
                        <strong>
                          {article.title}
                        </strong>
                      </a>
                      <p>Publish Date & Time: {article.date}</p>
                      <a href={article.url} target="_blank">Link To Article</a><br/>
                      <Btn type="delete" onClick={() => this.deleteArticle(article._id)} />
                    </ListItem>
                  );
                })}
              </List>
            ) : (
              <h3>No Saved Articles</h3>
            )}



export default Saved;
