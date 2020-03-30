import React from 'react';

const Issue = props => {
    return(
        <div>
            <h2>{props.title}</h2>
            <a href={props.url}>Issue Link</a>
            <p>{props.body}</p>
        </div>
    )
};

export default Issue;
