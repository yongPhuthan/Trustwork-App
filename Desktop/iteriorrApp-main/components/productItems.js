import React from 'react';
import {
  Box,
  CardMedia,
  Typography,
  Grid,
  Button,
  Paper,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import classes from '../styles/Card.module.css';
import { urlForThumbnail } from '../utils/image';
import * as stateAction from "../src/action/app.action";
import { useContext } from 'react';
import { Store } from '../utils/Store';

 


const ContinueButton = styled(Button)({
  boxShadow: 'none',
  textTransform: 'none',
  padding: '12px',
  backgroundColor: '#ffb5a0',
  marginTop: '20px',
  borderRadius: 0,
  
  fontFamily: [
    '-apple-system',
    'BlinkMacSystemFont',
    '"Segoe UI"',
    'Roboto',
    '"Helvetica Neue"',
    'Arial',
    'sans-serif',
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ].join(','),
});



export default function ProductItems({ product }) {
  
  const changeStyle = (value) =>{
    dispatch(stateAction.contextStyle(value));
  }  
const { state, dispatch } = useContext(Store);
const { style, fabric, colorName, colorId } = state;





  return (
    <>  <Box sx={{flexGrow: 1, sx: 'none', md: 'flex', xl:'none' }}>
         <Grid >
         <Paper elevation={0} >
          <CardMedia 
            component="img"
            image={urlForThumbnail(product.images[0])}

            title="curtain1"
            className={product.img}
            width="500px"
            align="top"
          ></CardMedia>

          <Grid container spacing={1}>
          <Grid item xs={9} ml={1}>
            <Typography mt={1} fontSize='26px'><b>{product.title}</b></Typography>
            <Typography className={classes.cardtxt}>
            {product.body.en[0].children[0].text}
            
            </Typography >
            <ContinueButton variant="contained" onClick={()=>changeStyle(product.title)} href="/collection/curtains">
              <Typography paddingLeft={3} paddingRight={3}  >
                select & continue
              </Typography>
            </ContinueButton>
            </Grid>
            <Grid mt={3}>
            <Typography ><b>Starting at</b></Typography>
            <Typography color={'#F4B7A4'} fontWeight={'600'} fontSize={'36px'}>{product.price} B</Typography>
          </Grid>
            </Grid>
        </Paper>
        </Grid>
        </Box>

        {/* mobile */}
       
        <Paper elevation={0} sx={{flexGrow: 1, xs: 'flex', md: 'none' }}>
          <CardMedia
            component="img"
            image={urlForThumbnail(product.images[0])}

            title="curtain1"
            className={product.img}
            width="300px"
            align="top"
          ></CardMedia>

          <Grid container spacing={1}>
          <Grid item xs={9} ml={1}>
            <Typography mt={1} fontSize='26px'><b>{product.title}</b></Typography>
            <Typography className={classes.cardtxt}>
            {product.body.en[0].children[0].text}
            
            </Typography >
            <ContinueButton variant="contained" onClick={()=>changeStyle(product.title)} href="/collection/curtains">
              <Typography paddingLeft={3} paddingRight={3}  >
                select & continue
              </Typography>
            </ContinueButton>
            </Grid>
            <Grid mt={3}>
            <Typography ><b>Starting at</b></Typography>
            <Typography color={'#F4B7A4'} fontWeight={'600'} fontSize={'36px'}>{product.price} B</Typography>
          </Grid>
            </Grid>
        </Paper>
   </>
  );
};

