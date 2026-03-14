import React from 'react';
import {useState, useEffect} from 'react';

const PostCatalog = () => {
    const [articles, setArticles] = useState([])

        useEffect(() => {
            const fetchData = async () => {
                const res = await fetch('https://jsonplaceholder.typicode.com/posts');
                const data = await res.json();
                setArticles(data);
            };

            fetchData();
        }, []);

    const articleListRender = () => {
        return articles.map((article, index) => (
            <li key={article.id} className="posts_single-post" data-post-id={article.id}>
                <h3 className="posts__post-title">{article.title}</h3>
                <p className="posts__post-description">{article.body}</p>
            </li>
        ))
    }


    return (
        <div className="posts">
            <ul className="posts__list">
                {articleListRender()}
            </ul>
        </div>
    );
};

export default PostCatalog;