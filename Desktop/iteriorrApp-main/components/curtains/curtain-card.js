import React from 'react';
import {
  Card,
  CardActionArea,
  CardMedia,
  Typography,
  Grid,
  Button,
  Paper,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import classes from '../../styles/Card.module.css';
import { urlForThumbnail } from '../../utils/image';
import Image from 'next/image';
import { useContext,  } from 'react';
import { Store } from '../../utils/Store';
import { useSelector, useDispatch } from 'react-redux';
import * as stateAction from "./../../src/action/app.action";


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


export default function CurtainCard({ product }) {
const appReducer = useSelector(({appReducer})=>appReducer)
const dispatch = useDispatch()

  return (
    <>
    <h3>kuy</h3>

         <Paper elevation={0}>
          <CardMedia
            component="img"
            image={urlForThumbnail(product.defaultProductVariant.images[0])}
            title="curtain1"
            className={product.img}
            width="300px"
            align="top"
          ></CardMedia>

          <Grid container spacing={1}>
          <Grid item xs={9} ml={1}>
            <Typography className={classes.cardh1}>{product.title}</Typography>
            <Typography className={classes.cardtxt}>
            {product.blurb.en}
            </Typography>
            <ContinueButton variant="contained" href='/collection/curtains' onClick={()=>dispatch(stateAction.style(product.title))}>
              <Typography paddingLeft={3} paddingRight={3} >
                select & continue
              </Typography>
            </ContinueButton>
            </Grid>
            <Grid className={classes.cardtxtright} mt={1}>
            <Typography className={classes.cardh3}>Starting at</Typography>
            <Typography className={classes.cardprice}>{product.defaultProductVariant.price} B</Typography>
            <h2 onClick={()=>dispatch(stateAction.style())}>{appReducer.style}</h2>
          </Grid>
            </Grid>
        </Paper>
       
 
   </>
  );
};

