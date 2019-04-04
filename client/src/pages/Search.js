import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";

class Search extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <div className="col rounded text-center bg-info m-4 p-4">
                        <h1>React Google Books Search</h1>
                        <h4>Search For and Save Books of Interest</h4>
                    </div>
                </Row>
                <Row>
                    <div className="col rounded bg-light mb-4 mr-4 ml-4 mt-0 p-4">
                        <h4>Book Search</h4>
                        <form>
                            <div class="form-group">
                                <label for="book-input">Book</label>
                                <input type="text" class="form-control" id="book-input" placeholder="Harry Potter" />
                            </div>
                            <button type="submit" class="btn btn-primary">Search</button>
                            <img className="ml-3" src="https://books.google.com/googlebooks/images/poweredby.png" alt="Powered by Google" />
                        </form>
                    </div>
                </Row>
            </Container>
        )
    }
}

export default Search;