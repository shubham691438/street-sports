import { Box, Stack, Typography } from '@mui/material'
import React, { useState, useEffect } from 'react';
import Newscard from '../components/Newscard';

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '835f41823emsh526a42b50197d8ep1a4a0djsn32545fc8eedb',
		'X-RapidAPI-Host': 'moka-news.p.rapidapi.com'
	}
};

const SportsNews = () => {
  const [news, setNews] = useState([]);
  const [page, setPage] = useState(1);
  useEffect(() => {
    const fetchSportsNews=async()=>{
      const res= await fetch('/api/testing')

      const data= await res.json();
      setNews(data)
    }

    fetchSportsNews();
  }, []);

  const selectPageHandler = (selectedPage) => {
    if (selectedPage >= 1 && selectedPage <= news.length / 10 && selectedPage !== page) {
      setPage(selectedPage)
    }
  }

  // const lastPostIndex = currentPage * postsPerPage;
  // const firstPostIndex = lastPostIndex - postsPerPage;
  // const currentPosts = news.slice(firstPostIndex, lastPostIndex);
  return (
    <Box color='white'>
      <Typography variant='h2'>SportsNews</Typography>
      <Stack direction='row' flexWrap='wrap'>
      {
        news.slice(page * 10 - 10,page * 10).map((currentPosts,key) => {
          return(<Newscard currentPosts={currentPosts} key={key}/>)
        })
      }
      </Stack>
      {news.length > 0 && <div className="pagination">
        <span onClick={() => selectPageHandler(page - 1)} className={page > 1 ? "" : "pagination__disable"}>◀</span>

        {[...Array(news.length / 10)].map((_, i) => {
          return <span key={i} className={page === i + 1 ? "pagination__selected" : ""} onClick={() => selectPageHandler(i + 1)}>{i + 1}</span>
        })}

        <span onClick={() => selectPageHandler(page + 1)} className={page < news.length / 10 ? "" : "pagination__disable"}>▶</span>
      </div>}
    </Box>


  );

  
   


};



export default SportsNews