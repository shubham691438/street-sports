import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const GradientCard = styled(Card)(({ theme }) => ({
  background: 'linear-gradient(to bottom,rgb(13, 92, 132), #000000)',
  color: 'white',
  borderRadius: '8px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  transition: 'transform 0.3s, box-shadow 0.3s',
  '&:hover': {
    background: 'linear-gradient(to bottom,rgb(27, 122, 154), #1c1c1c)',
    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.3)',
    transform: 'scale(1.02)',
  }
}));

const StyledCardHeader = styled(CardHeader)(({ theme }) => ({
  color: 'white',
}));

const StyledCardActions = styled(CardActions)(({ theme }) => ({
  color: 'white',
}));

export default function NewsCard({ currentPosts }) {
  const [expanded, setExpanded] = React.useState(false);
  const [isFavorite, setIsFavorite] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleFavoriteClick = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <GradientCard sx={{ maxWidth: 345, margin: 2 }}>
      <StyledCardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            {currentPosts.source[0].toUpperCase()}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon sx={{ color: 'white' }} />
          </IconButton>
        }
        title={currentPosts.title}
        subheader={<Typography sx={{ color: 'white' }}>{currentPosts.pubDate}</Typography>}
      />
      <CardMedia
        component="img"
        height="194"
        image={currentPosts.image}
        alt="News"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {/* Description is omitted */}
        </Typography>
      </CardContent>
      <StyledCardActions disableSpacing>
        <IconButton
          aria-label="add to favorites"
          onClick={handleFavoriteClick}
        >
          <FavoriteIcon sx={{ color: isFavorite ? red[500] : 'white' }} />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon sx={{ color: 'white' }} />
        </IconButton>
        <a href={currentPosts.link} target="_blank" rel="noopener noreferrer">
          <Typography sx={{ color: 'white', textDecoration: 'underline' }}>Read More</Typography>
        </a>
      </StyledCardActions>
    </GradientCard>
  );
}
