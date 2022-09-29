import React from "react";
import Article from "./Article"

function ArticleList(props) {
    // console.log(props)
    return (
        <main>
        {props.posts.map(article => (
            <Article key={article.id} 
                post={article} 
                title ={article.title} 
                preview={article.preview} 
                date={article.date} 
                minutes={article.minutes}
                />
        ))}
        
        {props.posts.map(article => console.log(article.id))}
        </main>
    );
}


export default ArticleList;