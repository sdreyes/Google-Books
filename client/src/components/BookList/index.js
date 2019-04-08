import React from "react";

export function BookList({ children }) {
    return <ul className="list-group">{children}</ul>
}

export function BookListItem({
    title,
    authors,
    description,
    thumbnail = "",
    href
}) {
    return (
        <li className="list-group-item">
            <img src={thumbnail} alt={title} />
            <h3>{title}</h3>
            <h5>by {authors}</h5>
            <p>{description}</p>
            <p><a href={href}>More info</a></p>
        </li>
    )
}