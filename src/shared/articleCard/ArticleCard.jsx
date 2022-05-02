import React from "react"
import { Link } from 'react-router-dom'
import './ArticleCard.css'

const ArticleCard = ({ id, tags, url, first_publication_date, data }) => {
    const { title, content } = data;

    return (
        <article
            className={`article_container ${id % 2 !== 0 ? "box_container_pad" : ""} `}
            itemScope
            itemType="http://schema.org/Article"
        >
            <Link
                to={url}
                itemProp="url"
                className="article"
            >
                <div className="article_meta">
                    <small className="article_tags">
                        <h1>Coming Soon...</h1>
                    </small>
                    <small className="article_date"> {first_publication_date} </small>
                </div>

                <div className="article_title">
                    <h3>{title.text}</h3>
                    <small className="article_length">
                        <i className="far fa-clock"></i>{" "}
                    </small>
                </div>
            </Link>
        </article>
    );
};

export default ArticleCard