import React from 'react';
import { styled } from '@mui/material/styles';
import {
  Grid,
  Box,
  Typography,
  Divider,
} from '@mui/material';
import { borderColor, margin } from '@mui/system';
import FabricItems from './FabricItems';


const RelatedItems = () => {
  return (
    <>
       <Grid container justifyContent={'center'} marginTop={'300px'}>
        <Grid container justifyContent={'center'}>
          <Typography fontSize={'36px'} fontStyle={'bold'} fontWeight={'500'}>
            Related Items
          </Typography>
        </Grid>
      </Grid>
      <Box mb={10} padding={3}>
        <Grid container justifyContent="center">
          <Divider width="90%" />
          <Grid margin={2}>
            <FabricItems />
          </Grid>
          <Grid margin={2}>
            <FabricItems />
          </Grid>
          <Grid margin={2}>
            <FabricItems />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default RelatedItems;
