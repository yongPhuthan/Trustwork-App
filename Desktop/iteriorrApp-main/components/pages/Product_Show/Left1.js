import React from 'react';
import { urlForThumbnail, urlForShow } from '../../../utils/image';
import { Grid, Box, CardMedia } from '@mui/material';

const Left1 = ({ props }) => {
  const state = props;
  return (
    <>
      <Box sx={{ width: '60px', margin: '1' }}>
        <Grid mb={1}>
          <CardMedia
            component="img"
            image={urlForThumbnail(
              state.products[0].defaultFabricVariant[0].images[0].asset
            )}
            title="curtain1"
            height={'72'}
            align="top"
          ></CardMedia>
        </Grid>
        <Grid>
        <CardMedia
          component="img"
          image={urlForThumbnail(
            state.products[0].defaultFabricVariant[0].images[1].asset
          )}
          title="curtain1"
          height={'72'}
          align="top"
        ></CardMedia>
        </Grid>
      </Box>
      <Box sx={{ width: '482px', marginLeft: '20px' }}>
        <CardMedia
          component="img"
          image={urlForShow(
            state.products[0].defaultFabricVariant[0].images[0].asset
          )}
          title="curtain1"
          height={'581'}
          align="top"
        ></CardMedia>
      </Box>
    </>
  );
};

export default Left1;
