import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
import Button from "../components/Button";
import { BookList, BookListItem } from "../components/BookList";
import API from "../utils/API";

class Search extends Component {

    state = {
        books: [],
        bookSearch: ""
    };

    handleInputChange = event => {
        // Destructure the name and value properties off of event.target
        // Update the appropriate state
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        API.getBooks(this.state.bookSearch)
            .then(res => this.setState({ books: res.data }))
            .catch(err => console.log(err));
        this.setState({
            bookSearch: ""
        });
    };

    render() {
        return (
            <Container>
                <Row>
                    <div className="col rounded text-center bg-info mt-4 p-4">
                        <h1>React Google Books Search</h1>
                        <h4>Search For and Save Books of Interest</h4>
                    </div>
                </Row>
                <Row>
                    <div className="col rounded bg-light mb-4 mt-4 p-4">
                        <h4>Book Search</h4>
                        <form>
                            <div className="form-group">
                                <label htmlFor="bookSearch">Book</label>
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    id="bookSearch" 
                                    name="bookSearch" 
                                    placeholder="Harry Potter" 
                                    value={this.state.bookSearch} 
                                    onChange={this.handleInputChange} />
                            </div>
                            <Button onClick={this.handleFormSubmit}>Search</Button>
                            <img className="ml-3" src="https://books.google.com/googlebooks/images/poweredby.png" alt="Powered by Google" />
                        </form>
                    </div>
                </Row>
                <Row>
                    <Col>
                        {!this.state.books.length ? (
                            <h3>No books to display currently</h3>
                        ) : (
                            <BookList>
                                {this.state.books.map(book => {
                                    return (
                                        <BookListItem
                                            key={book.volumeInfo.title}
                                            title={book.volumeInfo.title}
                                            authors={book.volumeInfo.authors[0]}
                                            description={book.volumeInfo.description}
                                            thumbnail={book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.smallThumbnail : "https://placehold.it/128x197?text=No%20Preview"}
                                            href={book.volumeInfo.infoLink}
                                        />
                                    );
                                })}
                            </BookList>
                        )}
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Search;