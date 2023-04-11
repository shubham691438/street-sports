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
  useEffect(() => {
    const fetchSportsNews=async()=>{
      const res= await fetch('/api/testing')

      const data= await res.json();
      setNews(data)
    }

    fetchSportsNews();
  }, [])
  return (
    <Box color='white'>
      <Typography variant='h2'>SportsNews</Typography>
      <Stack direction='row' flexWrap='wrap'>
      {
        news.map((newsItem,key) => {
          return(<Newscard newsItem={newsItem} key={key}/>)
        })
      }
      </Stack>
    </Box>

  );



};



export default SportsNews