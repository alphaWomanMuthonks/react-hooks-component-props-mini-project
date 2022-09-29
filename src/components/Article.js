import React from "react";


function Article(props){
    const time = props.minutes
    const emojis = time < 30 ?  ('☕️'.repeat(Math.ceil(time/5))): ('🍱'.repeat(Math.ceil(time/10)))
    return(
        <article>
            <h3>{props.title}</h3>
            {props.date ? (<small>{props.date} . </small>) : (<small>January 1, 1970 . </small>)}
            <span>{emojis} {time} min read</span>
            <p>{props.preview}</p>
        </article>
    )
    

}

export default Article;