import ProductItems from '../components/productItems';
import client from '../utils/client';
import { Grid, Box, CircularProgress, Alert } from '@mui/material';
import { Store } from '../utils/Store';
import { useEffect, useState , useContext} from 'react';


export default function Home() {
  const { state , dispatch, } = useContext(Store);
  const { cart } = state;
  const [stateAPI, setStateAPI] = useState({
    products: [],
    error: '',
    loading: true,
  }); 

  const { loading, error, products } = stateAPI;
  useEffect(() => {
    const fetchData = async () => {
      try {
        const products = await client.fetch(`*[_type == "hangstyle"]`);
        setStateAPI({ products, loading: false });
      } catch (err) {
        setStateAPI({ loading: false, error: err.message });
      }
    };
    fetchData();
  }, []);
  // console.log(products);
  return (
    <>
      {loading ? (
        <CircularProgress />
      ) : error ? (
        <Alert variant="danger">{error}</Alert>
      ) : (
        // 
        <Box mb={10} paddingLeft={1} paddingRight={1} paddingTop={5}>
          {products.map((product) => (
            <Grid container justifyContent="center" key={product.slug}>
              <Box sx={{flexGrow: 0, }}>
              <Grid margin={2} >
                <ProductItems product={product} />
              </Grid>
              </Box>
            
            </Grid>
          ))}
        </Box>
      )}

     
    </>
  );
}
