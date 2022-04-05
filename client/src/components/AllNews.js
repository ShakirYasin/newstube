import SingleNews from './SingleNews'
import "../css/News.css"
import NewsData from '../data/NewsData'
import { Grid } from '@mui/material'
import { Box, Container, Typography } from "@mui/material";
import Masonry from 'react-masonry-css'



const AllNews = () => {

  const breakpoints = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1
  };

  
  return (
    <Box>
      <Box>
        <Grid container>
          <Grid item >
            
          </Grid>
        </Grid>

      </Box>
        <Container maxWidth="xl">
          <div className="all_news">
            <Masonry
              breakpointCols={breakpoints}
              className="my-masonry-grid"
              columnClassName="my-masonry-grid_column"
            >
              {NewsData.map((news, index) => (
                  <div key={index}>
                    <SingleNews 
                      news={news}  
                      index={index} />
                  </div>
              ))}
            </Masonry>
          </div>
        </Container>
    </Box>
  )
}

export default AllNews