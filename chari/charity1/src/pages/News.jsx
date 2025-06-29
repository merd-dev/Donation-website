// src/News.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import "../css/News.css";

const News = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Get your free API key from https://gnews.io/
  const API_KEY = import.meta.env.VITE_NEWS_API_KEY || "YOUR_GNEWS_API_KEY";

  useEffect(() => {
    const fetchNews = async () => {
      try {
        setLoading(true);

        const response = await axios.get(
          `https://gnews.io/api/v4/top-headlines?category=general&max=6&apikey=${API_KEY}`
        );

        setArticles(response.data.articles || []);
      } catch (err) {
        setError("Failed to load news. Try refreshing the page.");
        console.error("News error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, [API_KEY]);

  if (loading) {
    return (
      <div className="loading">
        <div className="spinner"></div>
        <p>Loading news...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="error">
        <p>{error}</p>
        <button onClick={() => window.location.reload()}>Retry</button>
      </div>
    );
  }

  return (
    <div className="news-container">
      <h1>Latest News</h1>
      <div className="news-grid">
        {articles.map((article, index) => (
          <div className="news-card" key={index}>
            <img
              src={article.image || "/default-news.jpg"}
              alt={article.title}
              onError={(e) => (e.target.src = "/default-news.jpg")}
            />
            <div className="content">
              <h3>{article.title}</h3>
              <p>{new Date(article.publishedAt).toLocaleDateString()}</p>
              <p>{article.description}</p>
              <a href={article.url} target="_blank" rel="noreferrer">
                Read More
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default News;
