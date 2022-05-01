import React from "react";
import ArticleCard from "../../shared/articleCard/ArticleCard";
import Button from "../../shared/button/Button";

const Article = () => {
  return (
    <div className="article">
      <div className="article_posts">
        <ArticleCard />
      </div>
      <Button
        previous={{ url: "/project", text: "Projects" }}
        next={{ url: "/resume", text: "Resume" }}
      />
    </div>
  )
}
export default Article