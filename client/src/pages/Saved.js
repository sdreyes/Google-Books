import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
import Button from "../components/Button";
import { BookList, BookListItem } from "../components/BookList";

class Saved extends Component {

    componentDidMount() {
        // this.loadSavedBooks();
    }

    render() {
        return (
            <Container>
                <Row>
                    <div className="col rounded text-center bg-success mt-4 p-4">
                        <h1>Saved React Google Books</h1>
                        <h4>Your Favorites</h4>
                    </div>
                </Row>
            </Container>
        )
    }
}

export default Saved;