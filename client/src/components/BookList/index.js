import React from "react";

export function BookList({ children }) {
    return <ul className="list-group">{children}</ul>
}

export function BookListItem({
    title,
    authors,
    description,
    thumbnail,
    href
}) {
    return (
        <li className="list-group-item">
            <div>
                <img src={thumbnail} alt={title} className="float-left pr-3 pb-3" />
                <h3>{title}</h3>
                <h5>by {authors}</h5>
            </div>
            <div>
                <p>{description}</p>
                <p className="text-right"><a href={href} target="_blank" rel="noopener noreferrer">More info</a></p>
            </div>
        </li>
    )
}