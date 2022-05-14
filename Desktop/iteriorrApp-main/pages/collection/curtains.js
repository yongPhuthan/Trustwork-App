import React from 'react';
import {
  Grid,
  Box,
  Typography,
  CircularProgress,
  Alert,
  Paper,
  CardMedia,
  Stack,
  Avatar,
} from '@mui/material';
import { useState, useEffect } from 'react';
import { Store } from '../../utils/Store';
import * as stateAction from './../../src/action/app.action';
import client from '../../utils/client';
import { useContext } from 'react';
import classes from '../../styles/Fabric.module.css';
import Steps from '../../components/shared/Steps';
// import FabricItems from '../../components/FabricItems';
import { urlForThumbnail } from '../../utils/image';
import NextLink from 'next/link';


const CollectionCurtains = () => {
  const { state, dispatch } = useContext(Store);
  const changeStyle = (value) => {
    dispatch(stateAction.fabricStyle(value));
  };

  const [stateAPI, setStateAPI] = useState({
    products: [],
    error: '',
    loading: true,
  });

  const { loading, error, products } = stateAPI;

  // const [style, setStyle] = useState('');
  // const appReducer = useSelector(({ appReducer }) => appReducer.style);
  const { style, fabric } = state;
  const [newStyle, setNewStyle] = useState('');
  const [, setNewFabric] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const products = await client.fetch(`*[_type == "curtain"]`);
        setStateAPI({ products, loading: false });
      } catch (err) {
        setStateAPI({ loading: false, error: err.message });
      }
    };
    fetchData();

    setNewStyle(style);
    setNewFabric(fabric);
  }, [fabric, newStyle, style]);

  return (
    <>
      <Steps props={{ step1: newStyle, active: 1 }} />

      <Grid container justifyContent={'center'} mt={7}>
        <Grid>
          <Typography className={classes.fabricPageTxt}>
            Select a fabric below to continue.
          </Typography>
          <Grid container justifyContent={'center'}>
            <Typography className={classes.fabricPageH1}>
              Sheer Fabric
            </Typography>
          </Grid>
        </Grid>
      </Grid>

      {loading ? (
        <CircularProgress />
      ) : error ? (
        <Alert variant="danger">{error}</Alert>
      ) : (
        <Box mb={10} padding={3}>
          {products.map((product) => (
            <Grid container justifyContent="center" key={product.slug}>
              <divider></divider>
              <Grid margin={2}>
                {/* <FabricItems product ={product} /> */}
                <NextLink href={`/products/${product.slug.current}`} passHref>
                  <Paper elevation={0} href="/">
                    <CardMedia
                      onClick={() => changeStyle(product.title)}
                      component="img"
                      image={urlForThumbnail(
                        product.defaultFabricVariant[0].images[1].asset
                      )}
                      title="curtain1"
                      width="300px"
                      height="190px"
                      align="top"
                    ></CardMedia>

                    <Grid container spacing={1}>
                      <Grid item xs={9} ml={1}>
                        <Typography className={classes.cardh1}>
                          <b>{product.title}</b>
                        </Typography>
                        <Stack direction="row" spacing={1}>
                          <Avatar
                            alt="Remy Sharp"
                            src="/images/fabrics/fabric1.jpg"
                            sx={{ width: 25, height: 25 }}
                          />
                          <Avatar
                            alt="Travis Howard"
                            src="/images/fabrics/fabric2.jpg"
                            sx={{ width: 25, height: 25 }}
                          />
                          <Avatar
                            alt="Agnes Walker"
                            src="/images/fabrics/fabric3.jpg"
                            sx={{ width: 25, height: 25 }}
                          />
                          <Avatar
                            alt="Travis Howard"
                            src="/images/fabrics/fabric2.jpg"
                            sx={{ width: 25, height: 25 }}
                          />
                          <Avatar
                            alt="Agnes Walker"
                            src="/images/fabrics/fabric3.jpg"
                            sx={{ width: 25, height: 25 }}
                          />
                        </Stack>

                        <Typography className={classes.cardtxt}>
                          {product.body.en[0].children[0].text}
                        </Typography>
                      </Grid>

                      <Grid className={classes.cardtxtright} mt={1}>
                        <Typography className={classes.cardh3}>
                          ราคาเริ่มต้น
                        </Typography>
                        <Typography className={classes.cardprice}>
                          {product.defaultFabricVariant.price} B
                        </Typography>
                      </Grid>
                    </Grid>
                  </Paper>
                </NextLink>
              </Grid>
              {/* <div>
                <h3 onClick={() => changeStyle(product.title)}>{fabric}</h3>
              </div> */}
            </Grid>
          ))}
        </Box>
      )}
    </>
  );
};

export default CollectionCurtains;
