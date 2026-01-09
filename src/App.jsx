import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [category, setCategory] = useState("general");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  const [totalPages, setTotalPages] = useState(1);


  const API_KEY = import.meta.env.VITE_NEWS_API_KEY;
  const PAGE_SIZE = 20;

  const fetchNews = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.get(
        `https://newsapi.org/v2/top-headlines?country=us&category=${category}&page=${currentPage}&pageSize=${PAGE_SIZE}&apiKey=${API_KEY}`
      )
      console.log(response);
      const articles = response.data.articles || [];
      setNews(articles);
      setTotalResults(response.data.totalResults || 0);
      setTotalPages(Math.ceil((response.data.totalResults || 0) / PAGE_SIZE));
    } catch (err) {
      setError("Failed to fetch news." + err);
    } finally {
      setLoading(false);
    }

  }

  // useEffect(() => {
  //   fetchNews();
  // }, [category, currentPage]);

  return (
    <div>
      React News App
    </div>
  )
}

export default App;
