import React from "react";
import { Col, Row } from "../Grid";

export function BookList({ children }) {
    return (
        <ul className="list-group">{children}</ul> 
    );
};

export function BookListItem({
    title,
    authors,
    description,
    thumbnail,
    href
}) {
    return (
        <li className="list-group-item">
            <button className="float-right btn btn-success">Save</button>
            <a className="float-right btn btn-primary ml-2 mr-2" href={href} target="_blank" rel="noopener noreferrer">View</a>
            <h4>{title}</h4>
            <h5>by {authors}</h5>
            <Row>
                <div class="col-auto">
                    <img src={thumbnail} alt={title} />
                </div>
                <Col>
                    <p>{description}</p>
                </Col>
            </Row>
        </li>
    );
};