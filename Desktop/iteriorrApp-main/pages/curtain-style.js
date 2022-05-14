import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import ProductItems from '../components/productItems';
import CurtainCard from '../components/curtains/curtain-card';
import { useEffect, useState } from 'react';
import client from '../utils/client';
import {
  Container,
  Grid,
  Box,
  Link,
  Typography,
  CircularProgress,
  Alert,
} from '@mui/material';
import classes from '../styles/Card.module.css';
import { useContext } from 'react';
import { Store } from '../utils/Store';
import jsCookie from 'js-cookie';

export default function Home() {

  const [state, setState] = useState({
    products: [],
    error: '',
    loading: true,
  });

  const { loading, error, products } = state;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const products = await client.fetch(`*[_type == "product"]`);
        setState({ products, loading: false });
      } catch (err) {
        setState({ loading: false, error: err.message });
      }
    };
    fetchData();
  }, []);
  return (
    <>
    {loading ? (
        <CircularProgress />
      ) : error ? (
        <Alert variant="danger">{error}</Alert>
      ) : (
        <Box mb={10} padding={3} >
            {products.map((product) => 
      (
      <Grid container  justifyContent="center" key={product.slug} >
        <Grid margin={2}>
          <CurtainCard product ={product}/>
        </Grid>
      </Grid>
      )
      )}
        </Box>
      )}













        {/* <Box mb={10} padding={3}>
          <Grid container  justifyContent="center">
            <Grid margin={2} >
              <ProductItems  />
            </Grid>
            <Grid margin={2}>
              <ProductItems />
            </Grid>
          </Grid>
        </Box> 
       */}
       
    </>
  );
}

// export async function getStaticProps() {
//   const api = await fetchProducts('fabrics')

//   return {
//     props: {api},
//     revalidate:30 // will be passed to the page component as props
//   }
// }