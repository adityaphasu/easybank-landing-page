import React from "react";
import "./ArticleSection.scss";

const articles = [
  {
    id: 1,
    author: "Claire Robinson",
    title: "Receive money in any currency with no fees",
    content:
      "The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single …",
    image: `url("/src/assets/images/image-currency.jpg")`,
  },
  {
    id: 2,
    author: "Wilson Hutton",
    title: "Treat yourself without worrying about money",
    content:
      "Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you …",
    image: `url("/src/assets/images/image-restaurant.jpg")`,
  },
  {
    id: 3,
    author: "Wilson Hutton",
    title: "Take your Easybank card wherever you go",
    content:
      "  We want you to enjoy your travels. This is why we don’t charge any fees on purchases  while you’re abroad. We’ll even show you …",
    image: `url("/src/assets/images/image-plane.jpg")`,
  },
  {
    id: 4,
    author: "Claire Robinson",
    title: "Our invite-only Beta accounts are now live!",
    content:
      "  After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through the site ...",
    image: `url("/src/assets/images/image-confetti.jpg")`,
  },
];

export default function ArticleSection() {
  return (
    <section className="article-section">
      <h2 className="article-section__heading">Latest Articles</h2>
      <div className="article-section__grid">
        {articles.map((article) => (
          <a href="#" key={article.id}>
            <article className="article-section__article">
              <div className="article-section__img" style={{ backgroundImage: article.image }}></div>
              <div className="article-section__container">
                <p className="article-section__author">By {article.author}</p>
                <h3 className="article-section__title">{article.title}</h3>
                <p className="article-section__text">{article.content}</p>
              </div>
            </article>
          </a>
        ))}
      </div>
    </section>
  );
}
