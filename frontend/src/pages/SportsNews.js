import { Box, Stack, Typography } from '@mui/material';
import React, { useState, useEffect } from 'react';
import NewsCard from '../components/Newscard';

const SportsNews = () => {
  const [news, setNews] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchSportsNews = async () => {
      const res = await fetch('/api/testing');
      const data = await res.json();
      setNews(data);
    };

    fetchSportsNews();
  }, []);

  const selectPageHandler = (selectedPage) => {
    if (selectedPage >= 1 && selectedPage <= Math.ceil(news.length / 10) && selectedPage !== page) {
      setPage(selectedPage);
    }
  };

  return (
    <Box
      color="white"
      sx={{
        padding: '20px',
        backgroundColor: 'black',
      }}
    >
      <Typography variant="h2" align="center" gutterBottom>
        Sports News
      </Typography>
      <Stack
        direction="row"
        flexWrap="wrap"
        justifyContent="center"
        spacing={4}
         // Adds spacing between cards
      >
        {news.slice(page * 10 - 10, page * 10).map((currentPosts, key) => (
          <NewsCard currentPosts={currentPosts} key={key} />
        ))}
      </Stack>
      {news.length > 0 && (
        <div className="pagination" style={{ textAlign: 'center', marginTop: '20px' }}>
          <span
            onClick={() => selectPageHandler(page - 1)}
            className={page > 1 ? '' : 'pagination__disable'}
          >
            ◀
          </span>
          {[...Array(Math.ceil(news.length / 10))].map((_, i) => (
            <span
              key={i}
              className={page === i + 1 ? 'pagination__selected' : ''}
              onClick={() => selectPageHandler(i + 1)}
            >
              {i + 1}
            </span>
          ))}
          <span
            onClick={() => selectPageHandler(page + 1)}
            className={page < Math.ceil(news.length / 10) ? '' : 'pagination__disable'}
          >
            ▶
          </span>
        </div>
      )}
    </Box>
  );
};

export default SportsNews;
