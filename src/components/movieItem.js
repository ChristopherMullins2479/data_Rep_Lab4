import React from "react";
import { Card } from "react-bootstrap";

//header class , exported
export class MovieItem extends React.Component {
    render() {
        return (
            <div>
                <Card>
                    <Card.Header><h4>{this.props.movie.Title}</h4></Card.Header>
                    <Card.Body>
                        <blockquote className="blockquote mb-0">
                            <img src={this.props.movie.Poster} width="200" height="200"></img>
                            <footer className="blockquote-footer">
                                <p>{this.props.movie.Year}</p>
                            </footer>
                        </blockquote>
                    </Card.Body>
                </Card>
            </div>
        );
    }
}