// import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
// import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
// import FavoriteIcon from '@mui/icons-material/Favorite';
// import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';



const SingleNews = ({news, index, width}) => {


  return (
    <Card sx={{ maxWidth: 345 }} className="Single_news">
        <CardMedia
            component="img"
            height="194"
            image={news.newsThumbnail}
            alt="newsThumbnail"
        />
        <div className='news_content'>
            <CardContent>
            <Typography variant="h6">{news.title} {index}</Typography>
                <Typography variant="body2" color="text.secondary">
                    {news.description}
                </Typography>
            </CardContent>
            <CardHeader
            avatar={
            <Avatar src={news.channelThumbnail} aria-label="recipe">
            </Avatar>
            }
            action={
                <IconButton aria-label="settings">
                    <MoreVertIcon />
                </IconButton>
            }
            title={news.author}
            subheader={news.date}
        />
      </div>

        {/* <CardActions disableSpacing>
            <Avatar sx={{ bgcolor: red[500] }}
                src={news.channelThumbnail}
                aria-label="channelThumbnail">
            </Avatar>
            <Typography variant="body2" mx={2} mr="auto" p={0} display='block'>
                        <strong>{news.author}</strong>
                        <br />
                        {news.date}
            </Typography>
            <IconButton aria-label="add to favorites">
                <MdFavoriteBorder />
            </IconButton>
            <IconButton aria-label="share">
                <MdShare />
            </IconButton>
            <IconButton aria-label="settings">
                <CgMoreVerticalAlt />
            </IconButton>
        </CardActions> */}

        </Card>
  )
}
export default SingleNews