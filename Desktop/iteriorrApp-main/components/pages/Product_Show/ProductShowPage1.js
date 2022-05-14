import React from 'react';
import { urlForThumbnail, urlForShow } from '../../../utils/image';
import { Grid, Box, CardMedia } from '@mui/material';


const ProductShowPage1 = ({props}) => {
  const variant = props

  return (
    <>
      <Grid container justifyContent={'right'} item xs={6} key={variant._key}
      sx={{  display: { xs: 'none', md: 'flex' },width: '60px', margin: '1' }}
      >

        <Box sx={{  display: { xs: 'none', md: 'flex' },width: '60px', margin: '1' }}>
          <Grid mb={1}>
            <CardMedia
              component="img"
              image={urlForThumbnail(variant[0].asset)}
              title="curtain1"
              height={'72'}
              align="top"
            ></CardMedia>
          </Grid>
          <CardMedia
            component="img"
            image={urlForThumbnail(variant[1].asset)}
            title="curtain1"
            height={'72'}
            align="top"
          ></CardMedia>
        </Box>
        <Box sx={{ display: { xs: 'none', md: 'flex' },width: '482px', marginLeft: '20px' }}>
          <CardMedia
            component="img"
            image={urlForShow(variant[0].asset._ref)}
            title="curtain1"
            height={'581'}
            align="top"
          ></CardMedia>
        </Box>
      </Grid>

      {/* Mobile */}
      <Grid container justifyContent={'center'} key={variant._key} sx={{ display: { md: 'none', sx:'flex' },width: '350px', justifyContent: 'center'}}>
        
        <Box sx={{ display: { md: 'none', sx:'flex' },width: '100%', justifyContent: 'center'}}>
          <CardMedia
            component="img"
            image={urlForShow(variant[0].asset._ref)}
            title="curtain1"
            align="center"
          ></CardMedia>
        </Box>
      </Grid>
         
    </>
  );
};

export default ProductShowPage1;
