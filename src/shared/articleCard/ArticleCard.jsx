import React from "react"
import './ArticleCard.css'

const ArticleCard = ({ id }) => {
    return (
        <div className={`article_container ${id % 2 !== 0 ? "box_container_pad" : ""} `}>
            <div className="box">
                <div className="article_title">
                    <h3>Coming Soon!</h3>
                </div>
            </div>
        </div>
    )
}

export default ArticleCard