import React from 'react';
import Steps from '../../components/shared/Steps';
import { useContext, useState, useEffect, useRef } from 'react';
import CalculateIcon from '@mui/icons-material/Calculate';
import { Store } from '../../utils/Store';
import * as stateAction from '../../src/action/app.action';
import { useRouter } from 'next/router';
import {
  Grid,
  RadioGroup,
  InputAdornment,
  Radio,
  OutlinedInput,
  TextField,
  ListItem,
  Box,
  Slide,
  Slider,
  FormControl,
  Typography,
  Paper,
  CardMedia,
  Button,
  Divider,
  Stack,
  Avatar,
  Container,

  FormControlLabel,

  MenuItem,
  Select,
  CircularProgress,
  Alert,
  IconButton,
  Icon,
} from '@mui/material';
import Image from 'next/image';
import client from '../../utils/client';
import { urlForThumbnail, urlForShow } from '../../utils/image';
import { useForm, Controller, useWatch } from 'react-hook-form';
import Link from 'next/link';
import { styled } from '@mui/material/styles';
import Left1 from '../../components/pages/Product_Show/Left1';
import ProductShowPage1 from '../../components/pages/Product_Show/ProductShowPage1';
import { useSnackbar } from 'notistack';
import axios from 'axios';



const ContinueButton = styled(Button)({
  textTransform: 'none',
  padding: '12px',
  backgroundColor: '#ffb5a0',
  marginTop: '20px',
  borderRadius: 0,
  '&:hover': {
    backgroundColor: '#fff',
    color: '#ffb5a0',
  },
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
const ContinueButton2 = styled(Button)({
  boxShadow: 'none',
  textTransform: 'none',
  padding: '12px',
  backgroundColor: '#ffff',
  color: '#ffb5a0',
  border: '1px solid #ffb5a0',
  fontColor: '#ffb5a0',
  marginTop: '20px',
  borderRadius: 0,

  '&:hover': {
    backgroundColor: '#ffb5a0',
    color: '#fff',
  },
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
const CalculateButton = styled(Button)({
  //   boxShadow: 'none',
  textTransform: 'none',
  padding: '12px',
  backgroundColor: '#596365',
  marginTop: '20px',
  borderRadius: 0,
  '&:hover': {
    backgroundColor: '#596365',
    color: '#fff',
  },
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
export default function CalculateScreen(props) {
  const router = useRouter();
  const { slug } = props;
  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors },
  } = useForm();

  const lName = useRef();
  const [variants, setVariants] = useState([]);
  const [image, setImage] = useState('');
  const [fabric2, setFabric2] = useState('');
  const [colorId2, setColorId2] = useState('');
  const [colorName2, setColorName2] = useState('');
  const [style2, setStyle2] = useState('');
  const [value, setValue] = useState(1);
  const [price2, setPrice2] = useState('');
  const [width2, setWidth] = useState('');
  const [fullNest, setFullnest] = useState(1);
  const [widthR, setWidthR] = useState(2);
  const [widthMargin2, setWidthMargin2] = useState(3);
  const [touchFloor, setTouchFloor] = useState(9);
  const [windowLenght2, setWindowLenght2] = useState('');
  const [lenghtMargin2, setLenghtMargin2] = useState('');




  const [lenght2, setLenght] = useState('');
  const [window, setWindow] = useState({
    windowWidth: 1,
    widthMargin: '',
    windowLenght: 3,
    lenghtMargin: 0,
  });
  const [roomName, setRoomName] = useState('');
  const containerRef = React.useRef(null);
  // page function
  const [content, setContent] = useState(true);
  const [checked, setChecked] = React.useState(false);
  const [pageWidth, setPageWidth] = useState('');
  const [fullShow, setFullshow] = useState('page1');
  const [mobile, setMobile] = useState(true);

  const linearData = (redirect) => {
    dispatch(stateAction.linearName(watch('linearName')));

    watch('linearName') == 'Unlined'
      ? dispatch(stateAction.linearValue(50))
      : dispatch(stateAction.linearValue(2));
    redirect;
  };
  const changeColor = ({ ...color }) => {
    dispatch(stateAction.colorStyle(color.key));
    dispatch(stateAction.colorName(color.name));
    dispatch(stateAction.price(color.price));
    dispatch(stateAction.image(color.imageUrl));
  };
  const chooseCalculatePage = (page1) => {
    setFullshow(false);
    setPageWidth(page1);
    const page = page1;
    // console.log('page is -->' + fullShow + page);
  };

  const SelectedItem = styled(Button)({
    //   boxShadow: 'none',
    textTransform: 'none',
    padding: '12px',
    backgroundColor: '#fff',
    color: 'black',
    marginTop: '20px',

    border: '1px solid',
    borderColor: 'black',
    borderRadius: 0,
    '&:hover': {
      backgroundColor: '#fff',
      color: '#ffb5a0',
    },
    ':focus': {
      backgroundColor: '#ffb5a0',
      color: '#fff',
    },

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

  const {
    state: {
      imageUrl,
      style,
      fabric,
      colorName,
      colorId,
      price,
      width,
      lenght,
      panels,
      windowWidth,
      widthMargin,
      windowLenght,
      lenghtMargin,
      linearName,
      linearValue,
      room,
      cart,
    },
    dispatch,
  } = useContext(Store);
  const { enqueueSnackbar } = useSnackbar();

  const widthWatch = useWatch({
    control,
    name: 'width',
  });

  const [state, setState] = useState({
    product: null,
    products: [],
    loading: true,
    error: '',
  });

  const { product, loading, error } = state;
  useEffect(() => {
    const fetchData = async () => {
      try {
        const product = await client.fetch(
          `
              *[_type == "curtain" && slug.current == $slug][0]`,
          { slug }
        );
        const products = await client.fetch(`*[_type == "curtain"]`);
        let variants = await client.fetch(
          `*[_type == 'curtain' && slug.current == $slug][0]{
              defaultFabricVariant[]
            }`,
          { slug }
        );
        setState({ ...state, product, loading: false, products });
        setVariants(variants.defaultFabricVariant);
      } catch (err) {
        setState({ ...state, error: err.message, loading: false });
      }
    };

    fetchData();
    setStyle2(style);
    setColorId2
    setFabric2(fabric);
    setPrice2(price);
    setColorId2(colorId);
    setRoomName(room);
    setColorName2(colorName);
    setImage(imageUrl);
    console.log('color is '+ colorId);
    console.log('Img is '+ imageUrl);
    console.log('color Name '+ colorName);
    console.log('price is '+ price);


  }, [
    fabric,
    colorId,
    colorName,
    room,
    style,
    price,
    slug,
    imageUrl,
    width2,
    watch,
    widthR,
    touchFloor,
    lenghtMargin2,
    windowLenght2,
    lenght2,
    image,
    
  ]);

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const changeStyle = () => {
    dispatch(stateAction.contextStyle('NEW ITEM IS REDUCER !!'));
  };
  const sizeCalculate = (redirect) => {
    
    dispatch(stateAction.width(watch('width')));
    // dispatch(stateAction.colorName(watch("colorName")));
    dispatch(stateAction.fullNest(watch('fullNest')));
    dispatch(stateAction.lenght(watch('lenght')));
    dispatch(stateAction.windowWidth(watch('windowWidth')));
    dispatch(stateAction.widthMargin(watch('widthMargin')));
    dispatch(stateAction.windowLenght(watch('windowLenght')));
    dispatch(stateAction.lenghtMargin(watch('lenghtMargin')));
    // dispatch(stateAction.linearName(watch("linearName")));
    dispatch(stateAction.linearName(lName));
    dispatch(stateAction.linearValue(watch('linearValue')));
    dispatch(stateAction.room(watch('room')));
    setMobile(false);
    console.log(mobile);
    redirect;
  };
  const changeToLenghtPage = (page1) => {
    setFullshow(page1);
    setPageWidth(page1);
    const page = page1;
    console.log(page);
  };
  const handleSlide = (value) => {
    (colorId === '' ? ( changeColor({
      key: variants[0]._key,
      name: variants[0].color,
      price: variants[0].price,
      imageUrl: variants[0].images[0].asset,
    })): ( 
      dispatch(stateAction.colorStyle(colorId)),
      dispatch(stateAction.colorName(colorName)),
      dispatch(stateAction.price(price)),
      dispatch(stateAction.image(variants[0].images[0].asset))
    
    ))
    setChecked((prev) => !prev);
    setContent(value);
    setMobile(true);
   
  };


  const handleSliderChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleInputChange = (event) => {
    setValue(event.target.value === '' ? '' : Number(event.target.value));
  };

  const handleBlur = () => {
    if (value < 0) {
      setValue(0);
    } else if (value > 1) {
      setValue(1);
    }
  };

  const addToCartHandler = async (id) => {
    const existItem = cart.cartItems.find((x) => x._id === product._id);
    const quantity = existItem ? existItem.quantity + 1 : 1;
    const { data } = await axios.get(`/api/products/${product._id}`);
    if (data.countInStock < quantity) {
      enqueueSnackbar('Sorry. Product is out of stock', { variant: 'error' });
      return;
    }
    dispatch({
      type: 'CART_ADD_ITEM',
      payload: {
        _key: colorId,
        name: fabric,
        color: colorName,
        countInStock: product.countInStock,
        slug: product.slug.current,
        price: price,
        image: urlForThumbnail(imageUrl),
        quantity,
      },
    });

    enqueueSnackbar(`${fabric} added to the cart`, {
      variant: 'success',
    });
    console.log('productis ==>');
    console.log(data);
    
    router.push('/cart');
  };

  const widthPage = (
    <Box>
      {/* Desktop */}
      <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
        <Grid>
          <Typography width="100%">Measurements: Width</Typography>
          <Divider width="100%" />
          <Typography fontStyle={'bold'} marginTop="10px">
            You have two options to determine your curtain width:
          </Typography>
          <Grid container spacing={0.5}>
            <Grid container item xs={5}>
              <Box
                sx={{
                  width: '300px',
                  marginTop: '30px',
                  border: '2px solid',
                  borderColor: ' #ffb5a0',
                  borderRadius: '5px',
                }}
              >
                <CardMedia
                  onClick={() => chooseCalculatePage('two')}
                  component="img"
                  image="/images/fabrics/calculate2.webp"
                  title="curtain1"
                  height={'352px'}
                  align="top"
                ></CardMedia>
              </Box>

              {/* <Grid item xs={6}>
                  <ContinueButton
                    marginTop={'20px'}
                    variant="contained"
                    width="200px"
                  >
                    <Typography paddingLeft={2} paddingRight={2}>
                      continue
                    </Typography>
                  </ContinueButton>
                </Grid> */}
            </Grid>
            <Grid
              container
              justifyContent={'center'}
              item
              xs={2}
              marginTop="200px"
            >
              <Typography
                fontSize={'26px'}
                fontStyle={'bold'}
                fontWeight={'500'}
                marginBottom={'20px'}
              >
                OR
              </Typography>
            </Grid>

            <Grid item xs={5}>
              <Box
                sx={{
                  width: '225px',
                  marginTop: '30px',
                  border: '2px solid',
                  borderColor: ' #ffb5a0',
                  borderRadius: '5px',
                }}
              >
                <CardMedia
                  component="img"
                  onClick={() => chooseCalculatePage('three')}
                  image="/images/fabrics/calculate1.webp"
                  title="curtain1"
                  height={'352px'}
                  align="top"
                ></CardMedia>
              </Box>
            </Grid>
          </Grid>
          <Grid container marginTop={8}>
            <Grid item xs={12}>
              <ContinueButton2
                marginTop={'20px'}
                variant="contained"
                width="200px"
                onClick={() => handleSlide(true)}
              >
                <Typography paddingLeft={5} paddingRight={5}>
                  ย้อนกลับ
                </Typography>
              </ContinueButton2>
            </Grid>
          </Grid>
        </Grid>
      </Box>
      {/* Mobile */}

      <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
        <Grid container justifyContent={'center'}>
          <Grid align={'center'}>
            <Typography>Measurements: Width</Typography>
            <Divider width="90%" />
            <Typography fontStyle={'bold'} marginTop="10px" width={'90%'}>
              You have two options to determine your curtain width:
            </Typography>
          </Grid>

          <Grid align={'center'}>
            <Box
              sx={{
                width: 'auto',
                height: 'auto',
                marginTop: '20px',
                border: '2px solid',
                borderColor: ' #ffb5a0',
                borderRadius: '5px',
                alignSelf: 'center',
              }}
            >
              <CardMedia
                onClick={() => chooseCalculatePage('two')}
                component="img"
                image="/images/fabrics/calculate2.webp"
                title="curtain1"
                height={'250px'}
              ></CardMedia>
            </Box>
            <Typography
              fontSize={'26px'}
              fontStyle={'bold'}
              fontWeight={'500'}
              mt={'10px'}
            >
              หรือ
            </Typography>
            <Box
              sx={{
                width: 'auto',

                marginTop: '10px',
                border: '2px solid',
                borderColor: ' #ffb5a0',
                borderRadius: '5px',
              }}
            >
              <CardMedia
                component="img"
                onClick={() => chooseCalculatePage('three')}
                image="/images/fabrics/calculate1.webp"
                title="curtain1"
                height={'250px'}
                align="top"
              ></CardMedia>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
        <Grid width="100%" mt={'20px'}>
          <Grid item xs={12}>
            <ContinueButton2
              marginTop={'20px'}
              variant="contained"
              sx={{ width: '100%' }}
              onClick={() => handleSlide(true)}
            >
              <Typography paddingLeft={2} paddingRight={2}>
                ย้อนกลับ
              </Typography>
            </ContinueButton2>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
  return (
    <Box>
      <Steps
        props={{ step1: style2, step2: fabric2, step3: colorName2, active: 2 }}
      />
      {loading ? (
        <CircularProgress />
      ) : error ? (
        <Alert variant="error">{error}</Alert>
      ) : (
        <>
          {(fullShow == 'page1' && (
            <Box>
              {/* Desktop */}
              <Paper elevation={0} sx={{ display: { xs: 'none', md: 'flex' } }}>
                <Grid
                  container
                  spacing={3}
                  mb={5}
                  sx={{ display: { xs: 'none', md: 'flex' } }}
                >
                  {!colorId ? (

                    <Grid container justifyContent={'right'} item xs={6}>
                      <Grid>
                        <Left1 props={state} />{' '}
                        <Container>
                          <Grid
                            container
                            mb={5}
                            sx={{ display: { md: 'none', xs: 'flex' } }}
                          >
                            {mobile ? (
                              <Box
                                sx={{ display: { md: 'none', xs: { mobile } } }}
                              >
                                <Grid align={'center'} item xs={12} mb={1}>
                                  <Typography
                                    fontSize={'40px'}
                                    fontStyle={'bold'}
                                    fontWeight={'500'}
                                  >
                                    {state.product.title}
                                  </Typography>
                                </Grid>
                              </Box>
                            ) : null}

                            {!colorId ? (
                              <Grid
                                container
                                justifyContent={'right'}
                                item
                                xs={12}
                              >
                                <Grid>
                                  <Left1 props={state} />
                                </Grid>
                              </Grid>
                            ) : (
                              variants.map((variant) =>
                                colorId == variant._key ? (
                                  mobile ? (
                                    <Box
                                      sx={{
                                        display: { md: 'none', xs: 'flex' },
                                      }}
                                    >
                                      <Grid container justifyContent={'center'}>
                                        <ProductShowPage1
                                          props={variant.images}
                                          key={variant._key}
                                        />
                                      </Grid>
                                    </Box>
                                  ) : null
                                ) : null
                              )
                            )}
                            {content ? (
                              <Container>
                                {/* avatar Items */}
                                <Grid container justifyContent={'center'}>
                                  <Grid>
                                    <Stack mt={2} direction="row" spacing={1}>
                                      {variants.map((variant) => (
                                        <Link
                                          key={variant._key}
                                          href={`/products/${state.product.slug.current}?variant=${variant._key}`}
                                          passHref
                                        >
                                          <Avatar
                                            variant="square"
                                            onClick={() =>
                                              changeColor({
                                                key: variant._key,
                                                name: variant.color,
                                                price: variant.price,
                                                imageUrl:
                                                  variant.images[0].asset,
                                              })
                                            }
                                            alt="Remy Sharp"
                                            src={urlForThumbnail(
                                              variant.images[1].asset._ref
                                            )}
                                            sx={{ width: 40, height: 40 }}
                                          />
                                        </Link>
                                      ))}
                                    </Stack>
                                  </Grid>
                                </Grid>

                                {/* end Avatar items */}
                                <Grid item xs={12} align={'center'} mt={3}>
                                  <Divider width="90%" />

                                  {variants.map((variant) =>
                                    variant._key == colorId ? (
                                      <Grid key={variant._key}>
                                        <Typography
                                          fontSize={'18px'}
                                          fontStyle={'bold'}
                                          fontWeight={'500'}
                                          margintop="10px"
                                          key={variant._key}
                                        >
                                          <b>Color :</b> {variant.color}{' '}
                                        </Typography>
                                        <Typography
                                          {...register('price')}
                                          fontSize={'18px'}
                                          fontStyle={'bold'}
                                          fontWeight={'500'}
                                          marginTop="10px"
                                          value={variant.price}
                                        >
                                          <b>
                                            ราคาเริ่มต้น : {variant.price} บาท{' '}
                                          </b>
                                        </Typography>
                                      </Grid>
                                    ) : null
                                  )}

                                  <Typography
                                    fontStyle={'bold'}
                                    marginTop="10px"
                                  >
                                    {state.product.body.en[0].children[0].text}
                                  </Typography>
                                  <Typography
                                    fontSize={'18px'}
                                    fontStyle={'bold'}
                                    fontWeight={'500'}
                                    marginTop="10px"
                                  >
                                    <b>
                                      {
                                        state.product.body.en[1].children[1]
                                          .text
                                      }
                                    </b>
                                  </Typography>
                                  <Typography width="90%">
                                    {state.product.body.en[1].children[2].text}
                                  </Typography>
                                  <Typography
                                    fontSize={'18px'}
                                    fontStyle={'bold'}
                                    fontWeight={'500'}
                                    marginTop="10px"
                                  >
                                    <b>
                                      {' '}
                                      {
                                        state.product.body.en[2].children[0]
                                          .text
                                      }
                                    </b>
                                  </Typography>
                                  <Typography width="90%">
                                    {state.product.body.en[2].children[1].text}
                                  </Typography>

                                  <Typography margintop="10px">
                                    Select a color to continue designing your
                                    curtain or order up to 5 free swatches.
                                  </Typography>

                                  <ContinueButton
                                    margintop={'20px'}
                                    variant="contained"
                                    sx={{ width: '100%' }}
                                    onClick={handleSubmit(() =>
                                      sizeCalculate(handleSlide(false))
                                    )}
                                  >
                                    <Typography>select & continue</Typography>
                                  </ContinueButton>
                                </Grid>
                              </Container>
                            ) : (
                              <Grid
                                container
                                justifyContent={'left'}
                                item
                                xs={12}
                              >
                                <Slide
                                  direction="up"
                                  in={checked}
                                  container={containerRef.current}
                                >
                                  {widthPage}
                                </Slide>
                              </Grid>
                            )}
                          </Grid>
                        </Container>
                      </Grid>
                    </Grid>
                  ) : (
                    variants.map((variant) =>
                      colorId == variant._key ? (
                        <ProductShowPage1
                          props={variant.images}
                          key={variant._key}
                        />
                      ) : null
                    )
                  )}
                  {content ? (
                    <Grid container justifyContent={'left'} item xs={6}>
                      <Grid>
                        <Typography
                          fontSize={'40px'}
                          fontStyle={'bold'}
                          fontWeight={'500'}
                          marginbottom={'20px'}
                        >
                          {state.product.title}
                        </Typography>
                        <Divider width="100%" />

                        {variants.map((variant) =>
                          variant._key == colorId ? (
                            <Grid key={variant._key}>
                              <Typography
                                fontSize={'18px'}
                                fontStyle={'bold'}
                                fontWeight={'500'}
                                margintop="10px"
                                key={variant._key}
                              >
                                <b>Color :</b> {variant.color}{' '}
                              </Typography>
                              <Typography
                                {...register('price')}
                                fontSize={'18px'}
                                fontStyle={'bold'}
                                fontWeight={'500'}
                                marginTop="10px"
                                value={variant.price}
                              >
                                ราคาเริ่มต้น : {variant.price} บาท{' '}
                              </Typography>
                            </Grid>
                          ) : null
                        )}

                        <Typography fontStyle={'bold'} marginTop="10px">
                          {state.product.body.en[0].children[0].text}
                        </Typography>
                        <Typography
                          fontSize={'18px'}
                          fontStyle={'bold'}
                          fontWeight={'500'}
                          marginTop="10px"
                        >
                          {state.product.body.en[1].children[1].text}
                        </Typography>
                        <Typography width="90%">
                          {state.product.body.en[1].children[2].text}
                        </Typography>
                        <Typography
                          fontSize={'18px'}
                          fontStyle={'bold'}
                          fontWeight={'500'}
                          marginTop="10px"
                        >
                          {state.product.body.en[2].children[0].text}
                        </Typography>
                        <Typography width="90%">
                          {state.product.body.en[2].children[1].text}
                        </Typography>

                        <Typography margintop="10px">
                          Select a color to continue designing your curtain or
                          order up to 5 free swatches.
                        </Typography>
                        {/* avatar Items */}
                        <Stack mt={2} direction="row" spacing={1}>
                          {variants.map((variant) => (
                            <Link
                              key={variant._key}
                              href={`/products/${state.product.slug.current}?variant=${variant._key}`}
                              passHref
                            >
                              <Avatar
                                onClick={() =>
                                  changeColor({
                                    key: variant._key,
                                    name: variant.color,
                                    price: variant.price,
                                    imageUrl: variant.images[0].asset,
                                  })
                                }
                                alt="Remy Sharp"
                                src={urlForThumbnail(
                                  variant.images[1].asset._ref
                                )}
                                sx={{ width: 25, height: 25 }}
                              />
                            </Link>
                          ))}
                        </Stack>
                        {/* end Avatar items */}

                        <ContinueButton
                          margintop={'20px'}
                          variant="contained"
                       
                          onClick={handleSubmit(() =>
                            sizeCalculate(handleSlide(false))
                          )}
                        >
                          <Typography paddingLeft={3} paddingight={3}>
                            select & continue
                          </Typography>
                        </ContinueButton>
                      </Grid>
                    </Grid>
                  ) : (
                    <Grid container justifyContent={'left'} item xs={6}>
                      <Slide
                        direction="up"
                        in={checked}
                        container={containerRef.current}
                      >
                        {widthPage}
                      </Slide>
                    </Grid>
                  )}
                </Grid>

                {/* // MoBILE  */}
              </Paper>
              <Container sx={{ display: { md: 'none', xs: 'flex' } }}>
                <Grid
                  container
                  mb={5}
                  sx={{ display: { md: 'none', xs: 'flex' } }}
                >
                  {mobile ? (
                    <Box sx={{ display: { md: 'none', xs: { mobile } } }}>
                      <Grid align={'center'} item xs={12} mb={1}>
                        <Typography
                          fontSize={'40px'}
                          fontStyle={'bold'}
                          fontWeight={'500'}
                        >
                          {state.product.title} lll
                        </Typography>
                      </Grid>
                    </Box>
                  ) : null}

                  {!colorId ? (
                    <Grid container justifyContent={'right'} item xs={12}>
                      <Grid>
                        <Left1 props={state} />
                      </Grid>
                    </Grid>
                  ) : (
                    variants.map((variant) =>
                      colorId == variant._key ? (
                        mobile ? (
                          <Box sx={{ display: { md: 'none', xs: 'flex' } }}>
                            <Grid container justifyContent={'center'}>
                              <ProductShowPage1
                                props={variant.images}
                                key={variant._key}
                              />
                            </Grid>
                          </Box>
                        ) : null
                      ) : null
                    )
                  )}
                  {content ? (
                    <Container>
                      {/* avatar Items */}
                      <Grid container justifyContent={'center'}>
                        <Grid>
                          <Stack mt={2} direction="row" spacing={1}>
                            {variants.map((variant) => (
                              <Link
                                key={variant._key}
                                href={`/products/${state.product.slug.current}?variant=${variant._key}`}
                                passHref
                              >
                                <Avatar
                                  variant="square"
                                  onClick={() =>
                                    changeColor({
                                      key: variant._key,
                                      name: variant.color,
                                      price: variant.price,
                                      imageUrl: variant.images[0].asset,
                                    })
                                  }
                                  alt="Remy Sharp"
                                  src={urlForThumbnail(
                                    variant.images[1].asset._ref
                                  )}
                                  sx={{ width: 40, height: 40 }}
                                />
                              </Link>
                            ))}
                          </Stack>
                        </Grid>
                      </Grid>

                      {/* end Avatar items */}
                      <Grid item xs={12} align={'center'} mt={3}>
                        <Divider width="90%" />

                        {variants.map((variant) =>
                          variant._key == colorId ? (
                            <Grid key={variant._key}>
                              <Typography
                                fontSize={'18px'}
                                fontStyle={'bold'}
                                fontWeight={'500'}
                                margintop="10px"
                                key={variant._key}
                              >
                                <b>Color :</b> {variant.color}{' '}
                              </Typography>
                              <Typography
                                {...register('price')}
                                fontSize={'18px'}
                                fontStyle={'bold'}
                                fontWeight={'500'}
                                marginTop="10px"
                                value={variant.price}
                              >
                                <b>ราคาเริ่มต้น : {variant.price} บาท </b>
                              </Typography>
                            </Grid>
                          ) : null
                        )}

                        <Typography fontStyle={'bold'} marginTop="10px">
                          {state.product.body.en[0].children[0].text}
                        </Typography>
                        <Typography
                          fontSize={'18px'}
                          fontStyle={'bold'}
                          fontWeight={'500'}
                          marginTop="10px"
                        >
                          <b>{state.product.body.en[1].children[1].text}</b>
                        </Typography>
                        <Typography width="90%">
                          {state.product.body.en[1].children[2].text}
                        </Typography>
                        <Typography
                          fontSize={'18px'}
                          fontStyle={'bold'}
                          fontWeight={'500'}
                          marginTop="10px"
                        >
                          <b> {state.product.body.en[2].children[0].text}</b>
                        </Typography>
                        <Typography width="90%">
                          {state.product.body.en[2].children[1].text}
                        </Typography>

                        <Typography margintop="10px">
                          Select a color to continue designing your curtain or
                          order up to 5 free swatches.
                        </Typography>

                        <ContinueButton
                          margintop={'20px'}
                          variant="contained"
                          sx={{ width: '100%' }}
                          onClick={handleSubmit(() =>
                            sizeCalculate(handleSlide(false))
                          )}
                        >
                          <Typography>select & continue</Typography>
                        </ContinueButton>
                      </Grid>
                    </Container>
                  ) : (
                    <Grid container justifyContent={'left'} item xs={12}>
                      <Slide
                        direction="up"
                        in={checked}
                        container={containerRef.current}
                      >
                        {widthPage}
                      </Slide>
                    </Grid>
                  )}
                </Grid>
              </Container>
            </Box>
          )) ||
            (pageWidth == 'two' ? (
              <Box>
                {/* DESKTOP */}
                <Paper
                  elevation={0}
                  sx={{ display: { xs: 'none', md: 'flex' } }}
                >
                  <Grid container spacing={3} mb={5} mt={3}>
                    <Grid container justifyContent={'right'} item xs={6}>
                      <Box sx={{ width: '482px', marginLeft: '20px' }}>
                        <CardMedia
                          component="img"
                          image="/images/fabrics/width.webp"
                          title="curtain1"
                          height={'581'}
                          align="top"
                        ></CardMedia>
                      </Box>
                    </Grid>

                    <Grid container justifyContent={'left'} item xs={6}>
                      <Grid>
                        <Typography
                          fontSize={'36px'}
                          fontStyle={'bold'}
                          fontWeight={'400'}
                          marginBottom={'20px'}
                        >
                          Measurements: Width
                        </Typography>

                        <Divider width="100%" />
                        <Grid container>
                          <Grid item xs={6.5} justifyContent={'right'}>
                            <form>
                              <label>
                                <p>watch is :{width2}</p>
                                <p>Fullnest is :{fullNest}</p>

                                <Typography
                                  fontSize={'20px'}
                                  fontStyle={'bold'}
                                  fontWeight={'500'}
                                  marginTop="10px"
                                >
                                  Enter your curtain width in inches:
                                </Typography>
                                <ListItem>
                                    <Controller
                                      name="number"
                                      control={control}
                                      defaultValue=""
                                      {...register('width')}
                                      rules={{
                                        required: true,
                                      }}
                                      render={({ field }) => (
                                        <TextField
                                          variant="outlined"
                                          fullWidth
                                          id="width"
                                          size="small"
                                          sx={{ width: '100px' }}
                                          onChange={setWidth(watch('width'))}
                                          inputProps={[
                                            { type: 'number' },
                                            { ...register('width') },
                                          ]}
                                          {...field}
                                        ></TextField>
                                      )}
                                    ></Controller>
                                            <Typography
                                            ml={2}
                                        fontSize={'20px'}
                                        fontStyle={'bold'}
                                        fontWeight={'500'}
                                        align="center"
                                        justifyContent={'center'}
                                      >
                                        CM
                                      </Typography>
                                      </ListItem>
                                
                              </label>
                            </form>
                          </Grid>
                        </Grid>

                        <Typography fontStyle={'bold'} marginTop="10px">
                          How many of these curtains would you like?
                        </Typography>
                        <FormControl sx={{ m: 1, minWidth: 125 }} size="small">
                          <Select
                            displayEmpty
                            {...register('fullNest')}
                            onClick={() => setFullnest(watch('fullNest'))}
                            defaultValue={1}
                          >
                            <MenuItem value="จำนวน"></MenuItem>
                            <MenuItem value={1}>1 ผืน</MenuItem>
                            <MenuItem value={2}>2 ผืน</MenuItem>
                            <MenuItem value={3}>3 ผืน</MenuItem>
                          </Select>
                        </FormControl>

                        <Typography
                          fontSize={'18px'}
                          fontStyle={'bold'}
                          fontWeight={'500'}
                          marginTop="10px"
                        >
                          Material:
                        </Typography>
                        <Typography width="90%">
                          Keep in mind curtains need to be between 1.5 to 3
                          times wider than the window they cover so you get that
                          nice, wavy curtain look. This is referred to as
                          fullness. We recommend a minimum fullness of 2x. This
                          means if your window is 50” wide, the curtain width
                          you enter above should be 100” (or you can do 2
                          curtains that are each 50”).
                        </Typography>
                            
                        <Grid container item xs={5} marginTop={5}>
                          <Grid item xs={6} container justifyContent={'left'}>
                            <ContinueButton2
                              marginTop={'20px'}
                              variant="contained"
                              width="200px"
                              onClick={() => setFullshow('page1')}
                            >
                              <Typography
                                paddingLeft={2}
                                paddingRight={2}
                              >
                                ย้อนกลับ
                              </Typography>
                            </ContinueButton2>
                          </Grid>
                          <Grid item xs={6} container justifyContent={'left'}>
                            {width2 && fullNest ? (
                              <ContinueButton
                                onClick={handleSubmit(() =>
                                  sizeCalculate(
                                    changeToLenghtPage('pageLenght')
                                  )
                                )}
                                marginTop={'20px'}
                                variant="contained"
                                width="200px"
                              >
                                <Typography paddingLeft={2} paddingRight={2}>
                                  continue
                                </Typography>
                              </ContinueButton>
                            ) : (
                          
                                 <ContinueButton
                                onClick={handleSubmit(() =>
                                  sizeCalculate(
                                    changeToLenghtPage('pageLenght')
                                  )
                                )}
                                marginTop={'20px'}
                                variant="contained"
                                width="200px"
                                disabled
                              >
                                <Typography paddingLeft={2} paddingRight={2}>
                                  continue
                                </Typography>
                              </ContinueButton>
                             
                             
                            )}
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Paper>

                {/* MOBILE */}
                <Grid container justifyContent={'center'}>
                  <Paper
                    elevation={0}
                    sx={{ display: { xs: 'flex', md: 'none' } }}
                  >
                    <Grid align={'center'}>
                      <Typography
                        align="center"
                        fontSize={'36px'}
                        fontStyle={'bold'}
                        fontWeight={'400'}
                        marginBottom={'20px'}
                      >
                        Measurements: Width
                      </Typography>
                      <Divider width="90%" />
                      <Box sx={{ width: '250px', marginTop: '20px' }}>
                        <CardMedia
                          component="img"
                          image="/images/fabrics/width.webp"
                          title="curtain1"
                          height={'250'}
                          align="center"
                        ></CardMedia>
                      </Box>
                      <Typography
                        fontSize={'20px'}
                        fontStyle={'bold'}
                        fontWeight={'500'}
                        mt="50px"
                      >
                        Enter your curtain width in inches:
                      </Typography>

                      <form>
                        <input
                          {...register('width')}
                          style={{ width: '60px', height: '30px' }}
                        ></input>
                      </form>
                      <Typography fontStyle={'bold'} mt="10px">
                        How many of these curtains would you like?
                      </Typography>
                      <FormControl sx={{ m: 1, minWidth: 125 }} size="small">
                        <Select {...register('fullNest')} displayEmpty>
                          <MenuItem value="จำนวน"></MenuItem>
                          <MenuItem value={1}>1 ผืน</MenuItem>
                          <MenuItem value={2}>2 ผืน</MenuItem>
                          <MenuItem value={3}>3 ผืน</MenuItem>
                        </Select>
                      </FormControl>
                      <Typography
                        fontSize={'18px'}
                        fontStyle={'bold'}
                        fontWeight={'500'}
                        marginTop="10px"
                      >
                        Material:
                      </Typography>
                      <Typography width="90%">
                        Keep in mind curtains need to be between 1.5 to 3 times
                        wider than the window they cover so you get that nice,
                        wavy curtain look. This is referred to as fullness. We
                        recommend a minimum fullness of 2x. This means if your
                        window is 50” wide, the curtain width you enter above
                        should be 100” (or you can do 2 curtains that are each
                        50”).
                      </Typography>
                    </Grid>
                  </Paper>
                </Grid>
                <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                  <Grid container justifyContent={'center'} mb={'100px'}>
                    <Grid width="90%" mt={'20px'}>
                      <ContinueButton
                        marginTop={'20px'}
                        variant="contained"
                        sx={{ width: '100%' }}
                        onClick={handleSubmit(() =>
                          sizeCalculate(changeToLenghtPage('pageLenght'))
                        )}
                      >
                        <Typography paddingLeft={2} paddingRight={2}>
                          select & continue
                        </Typography>
                      </ContinueButton>
                      <ContinueButton2
                        marginTop={'20px'}
                        variant="contained"
                        sx={{ width: '100%' }}
                        onClick={handleSubmit(() => setFullshow('page1'))}
                      >
                        <Typography paddingLeft={2} paddingRight={2}>
                          ย้อนกลับ
                        </Typography>
                      </ContinueButton2>
                    </Grid>
                  </Grid>
                </Box>
              </Box>
            ) : fullShow !== 'page1' && pageWidth == 'three' ? (
              // Mobile
              <Box>
                <Box>
                  <Paper
                    elevation={0}
                    sx={{ display: { xs: 'flex', md: 'none' } }}
                  >
                    <Grid container mb={5} justifyContent={'center'}>
                      <Box sx={{ width: 'auto' }}>
                        <Image
                          alt={'ผ้าใบ'}
                          component="img"
                          src="/images/fabrics/width2.webp"
                          title="curtain1"
                          height={'250'}
                          width={'250px'}
                        ></Image>
                      </Box>
                      <Typography
                        fontSize={'36px'}
                        fontStyle={'bold'}
                        fontWeight={'400'}
                        mb={'20px'}
                        align="center"
                      >
                        Measurements: Width
                      </Typography>
                      <Divider width="90%" />
                      <Box sx={{ width: '90%' }} mt={3}>
                        <form>
                          <label htmlFor="fname">
                            <b>1 .</b> Enter the width of your window, <b>A:</b>{' '}
                            {''}
                          </label>
                          <input
                            type="text"
                            id="fname"
                            name="fname"
                            placeholder="10"
                            {...register('windowWidth')}
                            // ref={widthWindow}
                            style={{ width: '50px', height: '30px' }}
                          />
                          <br />
                          <br />
                        </form>
                        <form align={'center'}>
                          <label htmlFor="fname">
                            <b>2 .</b> We recommend adding a margin of 5-10” on
                            each side for proper coverage. Choose your margin,{' '}
                            <b>B:</b> {''}
                          </label>
                          <input
                            type="text"
                            id="fname"
                            name="fname"
                            placeholder="10"
                            {...register('widthMargin')}
                            style={{ width: '50px', height: '30px' }}
                          />
                          <br />
                          <br />
                        </form>
                        <Typography>
                          <b>3 .</b> We can make this as one big curtain or
                          split it into a few smaller ones. How many pieces
                          should your curtain be?
                        </Typography>
                        <Grid align={'center'}>
                          <Box sx={{ width: 150, align: 'center' }}>
                            <Slider
                              max={5}
                              value={typeof value === 'number' ? value : 1}
                              onChange={handleSliderChange}
                              aria-labelledby="input-slider"
                            />
                            <Typography
                              onChange={handleInputChange}
                              onBlur={handleBlur}
                            >
                              {value} ผืน
                            </Typography>
                          </Box>
                        </Grid>
                      </Box>
                      <CalculateButton marginTop={'20px'} variant="contained">
                        <Typography paddingLeft={10} paddingRight={10}>
                          Calculate
                        </Typography>
                        <IconButton>
                          <Icon>
                            <CalculateIcon sx={{ color: 'white' }} />
                          </Icon>
                        </IconButton>
                      </CalculateButton>
                    </Grid>
                  </Paper>
                </Box>
                <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                  <Grid container justifyContent={'center'} mb={'100px'}>
                    <Grid width="90%" mt={'20px'}>
                      <ContinueButton
                        marginTop={'20px'}
                        variant="contained"
                        sx={{ width: '100%' }}
                        onClick={handleSubmit(() =>
                          sizeCalculate(changeToLenghtPage('pageLenght'))
                        )}
                      >
                        <Typography paddingLeft={2} paddingRight={2}>
                          select & continue
                        </Typography>
                      </ContinueButton>
                      <ContinueButton2
                        marginTop={'20px'}
                        variant="contained"
                        sx={{ width: '100%' }}
                        onClick={handleSubmit(() => setFullshow('page1'))}
                      >
                        <Typography paddingLeft={2} paddingRight={2}>
                          ย้อนกลับ
                        </Typography>
                      </ContinueButton2>
                    </Grid>
                  </Grid>
                </Box>

                {/* Desktop */}
                <Paper
                  elevation={0}
                  sx={{ display: { xs: 'none', md: 'flex' } }}
                >
                  <Grid container spacing={3} mb={5} mt={3}>
                    <Grid container justifyContent={'right'} item xs={6}>
                      <Box sx={{ width: '482px', marginLeft: '20px' }}>
                        <CardMedia
                          component="img"
                          image="/images/fabrics/width.webp"
                          title="curtain1"
                          height={'581'}
                          align="top"
                        ></CardMedia>
                      </Box>
                    </Grid>

                    <Grid container justifyContent={'left'} item xs={6}>
                      <Grid>
                        <Typography
                          fontSize={'36px'}
                          fontStyle={'bold'}
                          fontWeight={'400'}
                          mb={'20px'}
                          align="left"
                        >
                          Measurements: Width
                        </Typography>
                        <Divider width="90%" />
                        <Box sx={{ width: '100%' }} mt={3}>
                          <p>window width : {widthR}</p>
                          <p>window widthMargin2 : {widthMargin2}</p>

                          <b>1 .</b> Enter the width of your window,
                              <b>A:</b> 
                          <ListItem width="100%">
                        
                                    <Controller
                                    width="100%"
                                      name="number"
                                      control={control}
                                      defaultValue=""
                                      { ...register('windowWidth') }
                                      rules={{
                                        required: true,
                                      }}
                                      render={({ field }) => (
                                        <OutlinedInput
                                        id="outlined-adornment-weight"
                                        size='small'
                                        type="number"
                                        sx={{ width: '150px' }}
                                        onChange={setWidthR(watch('windowWidth'))}
                                        endAdornment={<InputAdornment position="end">cm.</InputAdornment>}
                                        aria-describedby="outlined-weight-helper-text"
                                        inputProps={{
                                          'aria-label': 'windowWidth',
                                        }}
                                        {...field}
                                      />
                                        
                                       
                                      )}
                                    ></Controller>
                                    <br></br>
                                    
                                      </ListItem>
                                
                                      <b>2 .</b> We recommend adding a margin of 5-10”
                              on each side for proper coverage.
                                      <ListItem>
                                      Choose your
                              margin, <b>B:</b> 
                                    <Controller
                                   
                                      name="number"
                                      control={control}
                                      defaultValue=""
                                      {...register('widthMargin')}
                                      rules={{
                                        required: true,
                                      }}
                                      render={({ field }) => (
                                        <OutlinedInput
                                        id="outlined-adornment-weight"
                                        size='small'
                                        placeholder="10"
                                        type="number"
                                        sx={{ width: '150px',marginLeft:'20px' }}
                                        onChange={setWidthMargin2(watch('widthMargin'))}
                                        endAdornment={<InputAdornment position="end">cm.</InputAdornment>}
                                        aria-describedby="outlined-weight-helper-text"
                                        inputProps={{
                                          'aria-label': 'windowWidth',
                                        }}
                                        {...field}
                                      />
                                        
                                       
                                      )}
                                    ></Controller>
                                          
                                      </ListItem>
                                
                       
                   
                          <Typography>
                            <b>3 .</b> We can make this as one big curtain or
                            split it into a few smaller ones. How many pieces
                            should your curtain be?
                          </Typography>
                          <Grid container>
                            <Grid align={'left'}>
                              <Box sx={{ width: 400, align: 'left' }} mt={3}>
                                <Slider
                                  max={5}
                                  mt={'20px'}
                                  value={typeof value === 'number' ? value : 1}
                                  onChange={handleSliderChange}
                                  aria-labelledby="input-slider"
                                />
                              </Box>
                            </Grid>
                            <Grid mt={3} ml={2}>
                              <Typography
                                variant={'h6'}
                                align="center"
                                onChange={handleInputChange}
                                onBlur={handleBlur}
                              >
                                <b>จำนวน {value} ผืน</b>
                              </Typography>
                            </Grid>
                          </Grid>
                        </Box>
                        <CalculateButton marginTop={'20px'} variant="contained">
                          <Typography paddingLeft={10} paddingRight={10}>
                            Calculate
                          </Typography>
                          <IconButton>
                            <Icon>
                              <CalculateIcon sx={{ color: 'white' }} />
                            </Icon>
                          </IconButton>
                        </CalculateButton>
                        <Grid container marginTop={3}>
                          <Grid item xs={7}>
                            <ContinueButton2
                              style={{ marginRight: '10px' }}
                              mt={'20px'}
                              variant="contained"
                              width="auto"
                              onClick={() => setFullshow('page1')}
                            >
                              <Typography paddingLeft={6} paddingRight={6}>
                                ย้อนกลับ
                              </Typography>
                            </ContinueButton2>

                       
                            {widthR && widthMargin2 ? ( 
                            <ContinueButton
                              mt={'20px'}
                              variant="contained"
                              onClick={handleSubmit(() =>
                                sizeCalculate(changeToLenghtPage('pageLenght'))
                              )}
                            >
                              <Typography paddingLeft={6} paddingRight={6}>
                                continue
                              </Typography>
                            </ContinueButton> ): 
                            
                            
                            
                            
                            <ContinueButton
                              mt={'20px'}
                              variant="contained"
                              disabled
                              onClick={handleSubmit(() =>
                                sizeCalculate(changeToLenghtPage('pageLenght'))
                              )}
                            >
                              <Typography paddingLeft={6} paddingRight={6}>
                                continue
                              </Typography>
                            </ContinueButton>
                            
                            }
                          
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Paper>
              </Box>
            ) : null)}

          {/* Lenght */}
          {fullShow == 'pageLenght' && pageWidth == 'pageLenght' ? (
            <Box>
              {/* Desktop */}
              <Paper elevation={0} sx={{ display: { xs: 'none', md: 'flex' } }}>
                <Grid container justifyContent={'center'} spacing={5} mb={5}>
                  {variants.map((variant) =>
                    colorId == variant._key ? (
                      <Grid container justifyContent={'right'} item xs={6}>
                        <Box sx={{ width: '60px', margin: '1' }}>
                          <Grid mb={1}>
                            <CardMedia
                              component="img"
                              image={urlForThumbnail(variant.images[0].asset)}
                              title="curtain1"
                              height={'72'}
                              align="top"
                            ></CardMedia>
                          </Grid>
                          <CardMedia
                            component="img"
                            image={urlForThumbnail(variant.images[1].asset)}
                            title="curtain1"
                            height={'72'}
                            align="top"
                          ></CardMedia>
                        </Box>
                        <Box sx={{ width: '482px', marginLeft: '20px' }}>
                          <CardMedia
                            component="img"
                            image={urlForShow(variant.images[0].asset._ref)}
                            title="curtain1"
                            height={'581'}
                            align="top"
                          ></CardMedia>
                        </Box>
                      </Grid>
                    ) : null
                  )}

                  <Grid container justifyContent={'left'} item xs={6}>
                    <Grid>
                      <Typography width="100%" fontSize={24}>
                        {' '}
                        <b> Measurements: Length</b>{' '}
                      </Typography>
                      <Divider width="100%" />
                      <Typography fontStyle={'bold'} marginTop="10px">
                        You have two options to determine your curtain width:
                      </Typography>
                      <Grid container spacing={0.5}>
                        <Grid container item xs={5}>
                          <Box
                            sx={{
                              width: '300px',
                              marginTop: '30px',
                              border: '2px solid',
                              borderColor: ' #ffb5a0',
                              borderRadius: '5px',
                            }}
                          >
                            <CardMedia
                              onClick={() => chooseCalculatePage('four')}
                              component="img"
                              image="/images/fabrics/lenght1.webp"
                              title="curtain1"
                              height={'352px'}
                              align="top"
                            ></CardMedia>
                          </Box>

                          <Grid container spacing={2} marginTop={5}>
                            <Grid item xs={6}>
                              <ContinueButton2
                                marginTop={'20px'}
                                variant="contained"
                                width="200px"
                                // onClick={() => setContent(true)}
                                onClick={() => chooseCalculatePage('three')}
                              >
                                <Typography paddingLeft={2} paddingRight={2}>
                                  ย้อนกลับ
                                </Typography>
                              </ContinueButton2>
                            </Grid>
                            <Grid item xs={6}>
                              <ContinueButton
                                marginTop={'20px'}
                                variant="contained"
                                width="200px"
                              >
                                <Typography paddingLeft={2} paddingRight={2}>
                                  continue
                                </Typography>
                              </ContinueButton>
                            </Grid>
                          </Grid>
                        </Grid>
                        <Grid
                          container
                          justifyContent={'center'}
                          item
                          xs={2}
                          marginTop="200px"
                        >
                          <Typography
                            fontSize={'26px'}
                            fontStyle={'bold'}
                            fontWeight={'500'}
                            marginBottom={'20px'}
                          >
                            OR
                          </Typography>
                        </Grid>

                        <Grid item xs={5}>
                          <Box
                            sx={{
                              width: '225px',
                              marginTop: '30px',
                              border: '2px solid',
                              borderColor: ' #ffb5a0',
                              borderRadius: '5px',
                            }}
                          >
                            <CardMedia
                              component="img"
                              onClick={() => chooseCalculatePage('five')}
                              image="/images/fabrics/lenght2.webp"
                              title="curtain1"
                              height={'352px'}
                              align="top"
                            ></CardMedia>
                          </Box>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Paper>

              {/* Mobile */}
              <Paper elevation={0} sx={{ display: { xs: 'flex', md: 'none' } }}>
                {/* <Grid container justifyContent={'center'} spacing={5} mb={5}>
                {variants.map((variant) =>
                  colorId == variant._key ? (
                    <Grid container justifyContent={'right'} item xs={6}>
                      <Box sx={{ width: '60px', margin: '1' }}>
                        <Grid mb={1}>
                          <CardMedia
                            component="img"
                            image={urlForThumbnail(variant.images[0].asset)}
                            title="curtain1"
                            height={'72'}
                            align="top"
                          ></CardMedia>
                        </Grid>
                        <CardMedia
                          component="img"
                          image={urlForThumbnail(variant.images[1].asset)}
                          title="curtain1"
                          height={'72'}
                          align="top"
                        ></CardMedia>
                      </Box>
                      <Box sx={{ width: '482px', marginLeft: '20px' }}>
                        <CardMedia
                          component="img"
                          image={urlForShow(variant.images[0].asset._ref)}
                          title="curtain1"
                          height={'581'}
                          align="top"
                        ></CardMedia>
                      </Box>
                    </Grid>
                  ) : null
                )} */}

                <Grid container justifyContent={'center'} item xs={12}>
                  <Typography width="100%" fontSize={24}>
                    {' '}
                    <b> Measurements: Length</b>{' '}
                  </Typography>
                  <Divider width="100%" />

                  <Typography fontStyle={'bold'} marginTop="10px">
                    You have two options to determine your curtain width:
                  </Typography>
                  <Grid>
                    <Box
                      sx={{
                        width: '250px',
                        marginTop: '30px',
                        border: '2px solid',
                        borderColor: ' #ffb5a0',
                        borderRadius: '5px',
                        padding: '20px 10px 20px 10px',
                      }}
                    >
                      <CardMedia
                        onClick={() => chooseCalculatePage('four')}
                        component="img"
                        image="/images/fabrics/lenght1.webp"
                        title="curtain1"
                        height={'250px'}
                        align="top"
                      ></CardMedia>
                    </Box>
                    <Typography
                      fontSize={'26px'}
                      fontStyle={'bold'}
                      fontWeight={'500'}
                      mb={'10px'}
                      mt={'10px'}
                      align="center"
                    >
                      OR
                    </Typography>
                  </Grid>

                  <Box
                    sx={{
                      width: '250px',
                      padding: '20px 10px 20px 10px',
                      border: '2px solid',
                      borderColor: ' #ffb5a0',
                      borderRadius: '5px',
                    }}
                  >
                    <CardMedia
                      component="img"
                      onClick={() => chooseCalculatePage('five')}
                      image="/images/fabrics/lenght2.webp"
                      title="curtain1"
                      height={'250px'}
                      align="top"
                    ></CardMedia>
                  </Box>
                </Grid>
              </Paper>
              <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                <Grid
                  container
                  justifyContent="center"
                  width="100%"
                  mt={'20px'}
                  mb={'50px'}
                >
                  <Grid align={'center'} item xs={12}>
                    <ContinueButton2
                      marginTop={'20px'}
                      variant="contained"
                      sx={{ width: '90%' }}
                      onClick={() => chooseCalculatePage('three')}
                    >
                      <Typography paddingLeft={2} paddingRight={2}>
                        ย้อนกลับ
                      </Typography>
                    </ContinueButton2>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          ) : pageWidth == 'four' ? (
            <Box>
              {/* DeskTop */}
              <Paper elevation={0} sx={{ display: { xs: 'none', md: 'flex' } }}>
                <Grid container spacing={2} mb={5} mt={1}>
                  <Grid container justifyContent={'right'} item xs={6}>
                    <Image
                      component="img"
                      src="/images/fabrics/lenghtFull-1.webp"
                      alt="Picture of the author"
                      width={500}
                      height={500}
                    ></Image>
                  </Grid>

                  <Grid container justifyContent={'left'} item xs={6}>
                    <Grid>
                      <Typography
                        fontSize={'36px'}
                        fontStyle={'bold'}
                        fontWeight={'400'}
                        marginBottom={'20px'}
                      >
                        <b> Measurements: Length</b>
                      </Typography>

                      <Divider width="100%" />
                      <Grid container mt={4}>

                        <Grid
                          item
                          xs={12}
                          justifyContent={'right'}
                          width={'100%'}
                        >
                                    <ListItem width="100%">
                                    Enter your curtain length in inches: 
                        <Controller
                        width="100%"
                          name="number"
                          control={control}
                          defaultValue=""
                          {...register('lenght')}
                          rules={{
                            required: true,
                          }}
                          render={({ field }) => (
                            <OutlinedInput
                            id="outlined-adornment-weight"
                            size='small'
                            type="number"
                            sx={{ width: '150px', marginLeft: '20px'}}
                            onChange={setLenght(watch('lenght'))}
                            endAdornment={<InputAdornment position="end">cm.</InputAdornment>}
                            aria-describedby="outlined-weight-helper-text"
                            inputProps={{
                              'aria-label': 'windowWidth',
                            }}
                            {...field}
                          />
                            
                           
                          )}
                        ></Controller>
                        <br></br>
                        
                          </ListItem>
                     
                        </Grid>
                      </Grid>

                      <Grid container item xs={8} marginTop={5}>
                        <Grid container item xs={6} justifyContent={'left'}>
                          <ContinueButton2
                            marginTop={'20px'}
                            variant="contained"
                            width="200px"
                            onClick={() => changeToLenghtPage('pageLenght')}
                          >
                            <Typography paddingLeft={2} paddingRight={2}>
                              ย้อนกลับ
                            </Typography>
                          </ContinueButton2>
                        </Grid>
                         
                         {lenght2?(  <ContinueButton
                            marginTop={'20px'}
                            variant="contained"
                            width="200px"
                            onClick={handleSubmit(() =>
                              sizeCalculate(chooseCalculatePage('six'))
                            )}
                          >
                            <Typography paddingLeft={2} paddingRight={2}>
                              continue
                            </Typography>
                          </ContinueButton>):  <ContinueButton
                            marginTop={'20px'}
                            variant="contained"
                            width="200px"
                            disabled
                            onClick={handleSubmit(() =>
                              sizeCalculate(chooseCalculatePage('six'))
                            )}
                          >
                            <Typography paddingLeft={2} paddingRight={2}>
                              continue
                            </Typography>
                          </ContinueButton> }
                        
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
         
              </Paper>
              {/* Mobile */}
              <Paper elevation={0} sx={{ display: { xs: 'flex', md: 'none' } }}>
                <Grid
                  container
                  spacing={2}
                  mb={5}
                  mt={1}
                  justifyContent={'center'}
                >
                  {/* <Grid container justifyContent={'right'} item xs={6}>
                  <Image
                    component="img"
                    src="/images/fabrics/lenghtFull-1.webp"
                    alt="Picture of the author"
                    width={500}
                    height={500}
                  ></Image>
                </Grid> */}
                  <Typography
                    fontSize={'32px'}
                    fontStyle={'bold'}
                    fontWeight={'400'}
                    marginBottom={'20px'}
                  >
                    <b> Measurements: Length</b>
                  </Typography>
                  <Divider width="90%" />
                  <form style={{ marginTop: '20px' }}>
                    <label htmlFor="fname">
                      Enter your curtain length in inches: {''}
                    </label>
                    <input
                      {...register('lenght')}
                      type="text"
                      id="fname"
                      name="fname"
                      style={{ width: '50px', height: '30px' }}
                    />
                    <br />
                    <br />
                  </form>
                </Grid>
              </Paper>
              <Box
                sx={{
                  display: { xs: 'flex', md: 'none', marginBottom: '100px' },
                }}
              >
                <Grid align="center" xs>
                  <ContinueButton2
                    marginTop={'20px'}
                    variant="contained"
                    sx={{ width: '90%' }}
                    onClick={() => changeToLenghtPage('pageLenght')}
                  >
                    <Typography paddingLeft={2} paddingRight={2}>
                      ย้อนกลับ
                    </Typography>
                  </ContinueButton2>
                  <ContinueButton
                    sx={{ width: '90%' }}
                    marginTop={'20px'}
                    variant="contained"
                    onClick={handleSubmit(() =>
                      sizeCalculate(chooseCalculatePage('six'))
                    )}
                  >
                    <Typography paddingLeft={2} paddingRight={2}>
                      continue
                    </Typography>
                  </ContinueButton>
                </Grid>
              </Box>
            </Box>
          ) : fullShow !== 'page1' && pageWidth == 'five' ? (
            <Box>
              {/* Desktop */}
              <Paper elevation={0} sx={{ display: { xs: 'none', md: 'flex' } }}>
                <Grid container spacing={3} mb={5} mt={3}>
                  <Grid container justifyContent={'right'} item xs={6}>
                    <Image
                      src="/images/fabrics/lenghtFull-2.webp"
                      alt="Picture of the author"
                      width={500}
                      height={500}
                    />
                  </Grid>

                  <Grid container justifyContent={'left'} item xs={6}>
                    <Grid>
                      <Typography
                        fontSize={'36px'}
                        fontStyle={'bold'}
                        fontWeight={'400'}
                        marginBottom={'20px'}
                      >
                        Measurements: Length
                        touchFloor is = {window.windowLenght}
                      </Typography>

                      <Divider width="90%" />
                      <Grid container>
                        <Grid justifyContent={'left'} mt={1} width="90%">
                         
                        <b>1 .</b> To find the right length for your
                              curtain, first measure the distance from the top
                              of your track to the floor <b>A:</b>   
                        <ListItem width="100%">
                         <Controller
                        width="100%"
                          name="number"
                          control={control}
                          defaultValue=""
                          {...register('windowLenght')}
                          rules={{
                            required: true,
                          }}
                          render={({ field }) => (
                            <OutlinedInput
                            id="outlined-adornment-weight"
                            size='small'
                            type="number"
                            sx={{ width: '150px'}}
                            onChange={setWindowLenght2(watch('windowLenght'))}
                            endAdornment={<InputAdornment position="end">cm.</InputAdornment>}
                            aria-describedby="outlined-weight-helper-text"
                            inputProps={{
                              'aria-label': 'windowWidth',
                            }}
                            {...field}
                          />
                            
                           
                          )}
                        ></Controller>
                        <br></br>
                        
                          </ListItem>
                         
                         
                         
                         
                         
                          <b>2 .</b> We recommend getting your curtains with
                              a 1-2” “puddle”. This will disguise any variance
                              in height if your rod (or floor) is not perfectly
                              level. Enter your puddle length <b>B:</b>
                         
 
                          <ListItem width="100%">
                         <Controller
                        width="100%"
                          name="number"
                          control={control}
                          defaultValue=""
                          {...register('lenghtMargin')}
                          rules={{
                            required: true,
                          }}
                          render={({ field }) => (
                            <OutlinedInput
                            id="outlined-adornment-weight"
                            size='small'
                            type="number"
                            sx={{ width: '150px'}}
                            onChange={setLenghtMargin2(watch('lenghtMargin'))}
                            endAdornment={<InputAdornment position="end">cm.</InputAdornment>}
                            aria-describedby="outlined-weight-helper-text"
                            inputProps={{
                              'aria-label': 'windowWidth',
                            }}
                            {...field}
                          />
                            
                           
                          )}
                        ></Controller>
                        <br></br>
                        
                          </ListItem>
                          3 . If you want your curtains just touching the floor, B
                            should be 0. If you want them slightly above the
                            floor, then enter -0.5 or -1 as B.

                           
                            <ListItem width="100%">
                            
                         <Controller
                        width="100%"
                        {...register('touchFloor')}      
                          name="number"
                          control={control}
                          defaultValue=""
                                             rules={{
                            required: true,
                          }}
                          render={({ field }) => (
                           
                            <FormControl sx={{ m: 1, minWidth: 125 }} size="small">
                        <Select onClick={setTouchFloor(watch('touchFloor'))} displayEmpty>
                          <MenuItem value="จำนวน"></MenuItem>
                          <MenuItem value={0}>ติดพื้น</MenuItem>
                          <MenuItem value={0.5}>สูงจากพื้น 0.5 cm</MenuItem>
                          <MenuItem value={1}>สูงจากพื้น 1 cm</MenuItem>
                        </Select>
                      </FormControl>
                            
                           
                          )}
                        ></Controller>
                                      
                        
                          </ListItem>
                    
                        
                          <Typography>
                            <b>3 .</b> What are you planning to use to hang your
                            curtains?
                          </Typography>
                          <FormControl>
                            <RadioGroup
                              row
                              aria-labelledby="demo-row-radio-buttons-group-label"
                              name="row-radio-buttons-group"
                            >
                              <FormControlLabel
                                value="female"
                                control={<Radio />}
                                label="Rod"
                              />
                              <FormControlLabel
                                value="male"
                                control={<Radio />}
                                label="Track"
                              />
                              <FormControlLabel
                                value="other"
                                control={<Radio />}
                                label="Dont Know"
                              />
                            </RadioGroup>
                          </FormControl>
                        </Grid>
                        <Grid width="100%">
                          <CalculateButton
                            marginTop={'20px'}
                            variant="contained"
                          >
                            <Typography paddingLeft={10} paddingRight={10}>
                              Calculate
                            </Typography>
                          </CalculateButton>
                        </Grid>
                      </Grid>
                      {/* Button back & continue */}
                      <Grid container item xs={5} marginTop={5}>
                        <Grid item xs={6} container justifyContent={'left'}>
                          <ContinueButton2
                            marginTop={'20px'}
                            variant="contained"
                            width="200px"
                            onClick={() => changeToLenghtPage('pageLenght')}
                          >
                            <Typography
                              paddingLeft={2}
                              paddingRight={2}
                              // color={'#ffb5a0'}
                            >
                              ย้อนกลับ
                            </Typography>
                          </ContinueButton2>
                        </Grid>
                        <Grid item xs={6} container justifyContent={'left'}>
                        
                        {windowLenght2 &&  lenghtMargin2 ? (  
                        <ContinueButton
                            marginTop={'20px'}
                            variant="contained"
                            width="200px"
                            onClick={(() =>
                              sizeCalculate(chooseCalculatePage('six'))
                            )}
                          >
                            <Typography paddingLeft={2} paddingRight={2}>
                              continue
                            </Typography>
                          </ContinueButton>): (  <ContinueButton
                            marginTop={'20px'}
                            variant="contained"
                            width="200px"
                            disabled
                            onClick={() =>
                              sizeCalculate(chooseCalculatePage('six'))
                            }
                          >
                            <Typography paddingLeft={2} paddingRight={2}>
                              continue
                            </Typography>
                          </ContinueButton>)}  
                      
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Paper>
              {/* Mobile */}
              <Paper elevation={0} sx={{ display: { xs: 'flex', md: 'none' } }}>
                <Grid container justifyContent={'center'} mb={5} mt={3}>
                  <Image
                    src="/images/fabrics/lenghtFull-2.webp"
                    alt="Picture of the author"
                    width={250}
                    height={250}
                  />
                  <Typography
                    align="center"
                    fontSize={'32px'}
                    fontStyle={'bold'}
                    fontWeight={'400'}
                    mb={'20px'}
                    mt={'20px'}
                  >
                    Measurements: Length
                  </Typography>
                  <Divider width="90%" />
                  <form
                    style={{
                      marginTop: '10px',
                      justifyContent: 'center',
                      width: '90%',
                    }}
                  >
                    <label htmlFor="fname">
                      <b>1 .</b> To find the right length for your curtain,
                      first measure the distance from the top of your track to
                      the floor <b>A:</b> {''}
                    </label>
                    <input
                      {...register('windowLenght')}
                      type="number"
                      id="windowLenght"
                      name="windowLenght"
                      style={{ width: '50px', height: '30px' }}
                    />

                    <br />
                    <br />
                  </form>
                  <form style={{ justifyContent: 'center', width: '90%' }}>
                    <label htmlFor="fname">
                      <b>2 .</b> We recommend getting your curtains with a 1-2”
                      “puddle”. This will disguise any variance in height if
                      your rod (or floor) is not perfectly level. Enter your
                      puddle length <b>B:</b> {''}
                    </label>
                    <input
                      {...register('lenghtMargin')}
                      type="number"
                      id="lenghtMargin"
                      name="lenghtMargin"
                      placeholder="10"
                      style={{ width: '50px', height: '30px' }}
                    />
                    <br />
                    If you want your curtains just touching the floor, B should
                    be 0. If you want them slightly above the floor, then enter
                    -0.5 or -1 as B.
                    <br />
                    <br />
                  </form>
                  <Typography
                    style={{ justifyContent: 'center', width: '90%' }}
                  >
                    <b>3 .</b> What are you planning to use to hang your
                    curtains?
                  </Typography>
                  <FormControl>
                    <RadioGroup
                      row
                      aria-labelledby="demo-row-radio-buttons-group-label"
                      name="row-radio-buttons-group"
                    >
                      <FormControlLabel
                        value="female"
                        control={<Radio />}
                        label="Rod"
                      />
                      <FormControlLabel
                        value="male"
                        control={<Radio />}
                        label="Track"
                      />
                      <FormControlLabel
                        value="other"
                        control={<Radio />}
                        label="Dont Know"
                      />
                    </RadioGroup>
                  </FormControl>
                  <CalculateButton marginTop={'20px'} variant="contained">
                    <Typography paddingLeft={10} paddingRight={10}>
                      Calculate
                    </Typography>
                  </CalculateButton>
                  <Grid container justifyContent={'left'} item xs={6}>
                    <Grid></Grid>
                  </Grid>
                </Grid>
              </Paper>
              {/* Button back & continue */}
              <Box
                sx={{
                  display: { xs: 'flex', md: 'none', marginBottom: '100px' },
                }}
              >
                <Grid align="center" xs>
                  <ContinueButton2
                    marginTop={'20px'}
                    variant="contained"
                    sx={{ width: '90%' }}
                    onClick={() => changeToLenghtPage('pageLenght')}
                  >
                    <Typography paddingLeft={2} paddingRight={2}>
                      ย้อนกลับ
                    </Typography>
                  </ContinueButton2>
                  <ContinueButton
                    sx={{ width: '90%' }}
                    marginTop={'20px'}
                    variant="contained"
                    onClick={handleSubmit(() =>
                      sizeCalculate(chooseCalculatePage('six'))
                    )}
                  >
                    <Typography paddingLeft={2} paddingRight={2}>
                      continue
                    </Typography>
                  </ContinueButton>
                </Grid>
              </Box>
            </Box>
          ) : null}
          {fullShow !== 'page1' && pageWidth == 'six' ? (
            <Box>
              {/* Desktop */}
              <Paper elevation={0} sx={{ display: { xs: 'none', md: 'flex' } }}>
                <Grid container justifyContent={'center'} spacing={5} mb={5}>
                  <Grid container justifyContent={'right'} item xs={6}>
                    <Box sx={{ width: '60px', margin: '1' }}>
                      <Grid mb={1}>
                        <CardMedia
                          component="img"
                          image="/images/curtain1.jpg"
                          title="curtain1"
                          height={'72'}
                          align="top"
                        ></CardMedia>
                      </Grid>
                      <CardMedia
                        component="img"
                        image="/images/curtain1.jpg"
                        title="curtain1"
                        height={'72'}
                        align="top"
                      ></CardMedia>
                    </Box>
                    <Box sx={{ width: '482px', marginLeft: '20px' }}>
                      <CardMedia
                        component="img"
                        image="/images/curtain1.jpg"
                        title="curtain1"
                        height={'581'}
                        align="top"
                      ></CardMedia>
                    </Box>
                  </Grid>
                  <Grid container justifyContent={'left'} item xs={6}>
                    <Grid>
                      <Typography width="100%" fontSize={24}>
                        {' '}
                        <b> Liner Options</b>{' '}
                      </Typography>
                      <Divider width="100%" />
                      <Typography fontStyle={'bold'} marginTop="10px">
                        You have two options to determine your curtain width:
                      </Typography>
                      <Grid container spacing={0.5}>
                        <Grid container item xs={6}>
                          <Grid item xs={12}>
                            <SelectedItem
                              marginTop={'10px'}
                              variant="contained"
                              width={'100%'}
                              value="Unlined"
                              {...register('linearName')}
                            >
                              <Grid>
                                <Typography value="Unlined">
                                  <b>Unlined</b>
                                </Typography>
                              </Grid>
                            </SelectedItem>
                          </Grid>

                          <Typography>
                            <div>Recommended for sheer curtains.</div>
                          </Typography>

                          <SelectedItem
                            marginTop={'10px'}
                            variant="contained"
                            width={'100%'}
                          >
                            <Typography>
                              <b>Room Darkening Liner</b>
                            </Typography>
                          </SelectedItem>
                          <Typography>
                            Adds thickness and enhances privacy.
                          </Typography>
                          <SelectedItem
                            marginTop={'10px'}
                            variant="contained"
                            width={'100%'}
                          >
                            <Typography>
                              <b>100% Blackout Liner</b>
                            </Typography>
                          </SelectedItem>
                          <Typography>
                            For those whod rather sleep in a deep cave but have
                            to settle for a normal bedroom.
                          </Typography>

                          <SelectedItem
                            marginTop={'10px'}
                            variant="contained"
                            width={'100%'}
                          >
                            <Typography>
                              <b>Thermal Liner</b>
                            </Typography>
                          </SelectedItem>
                          <Typography>
                            {' '}
                            Provides heat insulation using compressed polyester
                            batting behind a privacy liner.
                          </Typography>
                          <Grid container spacing={2} marginTop={5}>
                            <Grid item xs={6}>
                              <ContinueButton2
                                marginTop={'20px'}
                                variant="contained"
                                width="200px"
                                onClick={() => changeToLenghtPage('pageLenght')}
                              >
                                <Typography paddingLeft={2} paddingRight={2}>
                                  ย้อนกลับ
                                </Typography>
                              </ContinueButton2>
                            </Grid>
                            <Grid item xs={6}>
                              <ContinueButton
                                marginTop={'20px'}
                                variant="contained"
                                width="200px"
                                // onClick={() => changeToLenghtPage('pageLenght')}
                                // onClick={handleSubmit(()=>sizeCalculate(chooseCalculatePage('seven')))}
                                onClick={() =>
                                  linearData(chooseCalculatePage('seven'))
                                }
                                // onClick={()=>addToCartHandler()}
                              >
                                <Typography paddingLeft={2} paddingRight={2}>
                                  Review Order
                                </Typography>
                              </ContinueButton>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Paper>
              {/* Mobile */}
              <Paper elevation={0} sx={{ display: { xs: 'flex', md: 'none' } }}>
                <Grid container justifyContent={'center'} spacing={5} mb={5}>
                  <Typography fontSize={24}>
                    {' '}
                    <b> Liner Options</b>{' '}
                  </Typography>
                  <CardMedia
                    component="img"
                    image="/images/curtain1.jpg"
                    title="curtain1"
                    height={'250'}
                    align="top"
                    mb={'100px'}
                  ></CardMedia>

                  <Grid align={'center'} width="70%" mt={3}>
                    {/* <Divider width="100%"/> */}
                    <Typography fontStyle={'bold'}>
                      You have two options to determine your curtain width:
                    </Typography>
                    <SelectedItem
                      variant="contained"
                      value="Unlined"
                      {...register('linearName')}
                    >
                      <Typography value="Unlined" width="100px">
                        <b>Unlined</b>
                      </Typography>
                    </SelectedItem>
                    <Typography>Recommended for sheer curtains.</Typography>

                    <SelectedItem
                      marginTop={'10px'}
                      variant="contained"
                      width={'100%'}
                    >
                      <Typography>
                        <b>Room Darkening Liner</b>
                      </Typography>
                    </SelectedItem>
                    <Typography>
                      Adds thickness and enhances privacy.
                    </Typography>
                    <SelectedItem
                      marginTop={'10px'}
                      variant="contained"
                      width={'100%'}
                    >
                      <Typography>
                        <b>100% Blackout Liner</b>
                      </Typography>
                    </SelectedItem>
                    <Typography>
                      For those whod rather sleep in a deep cave but have to
                      settle for a normal bedroom.
                    </Typography>

                    <SelectedItem
                      marginTop={'10px'}
                      variant="contained"
                      width={'100%'}
                    >
                      <Typography>
                        <b>Thermal Liner</b>
                      </Typography>
                    </SelectedItem>
                    <Typography>
                      {' '}
                      Provides heat insulation using compressed polyester
                      batting behind a privacy liner.
                    </Typography>
                  </Grid>
                </Grid>
              </Paper>
              <Box
                sx={{
                  display: { xs: 'flex', md: 'none', marginBottom: '100px' },
                }}
              >
                <Grid align="center" xs>
                  <ContinueButton2
                    marginTop={'20px'}
                    variant="contained"
                    sx={{ width: '90%' }}
                    onClick={() => changeToLenghtPage('pageLenght')}
                  >
                    <Typography paddingLeft={2} paddingRight={2}>
                      ย้อนกลับ
                    </Typography>
                  </ContinueButton2>
                  <ContinueButton
                    sx={{ width: '90%' }}
                    marginTop={'20px'}
                    variant="contained"
                    onClick={() => linearData(chooseCalculatePage('seven'))}
                  >
                    <Typography paddingLeft={2} paddingRight={2}>
                      continue
                    </Typography>
                  </ContinueButton>
                </Grid>
              </Box>
            </Box>
          ) : null}
          {fullShow !== 'page1' && pageWidth == 'seven' ? (
            <Box>
              {/* Desktop */}
              <Paper elevation={0} sx={{ display: { xs: 'none', md: 'flex' } }}>
                <Grid container justifyContent={'center'} spacing={5} mb={5}>
                  <Grid container justifyContent={'right'} item xs={6}>
                    <Box sx={{ width: '60px', margin: '1' }}>
                      <Grid mb={1}>
                        <CardMedia
                          component="img"
                          image="/images/curtain1.jpg"
                          title="curtain1"
                          height={'72'}
                          align="top"
                        ></CardMedia>
                      </Grid>
                      <CardMedia
                        component="img"
                        image="/images/curtain1.jpg"
                        title="curtain1"
                        height={'72'}
                        align="top"
                      ></CardMedia>
                    </Box>
                    <Box sx={{ width: '482px', marginLeft: '20px' }}>
                      <CardMedia
                        component="img"
                        image="/images/curtain1.jpg"
                        title="curtain1"
                        height={'581'}
                        align="top"
                      ></CardMedia>
                    </Box>
                  </Grid>
                  <Grid container justifyContent={'left'} item xs={6}>
                    <Grid>
                      <Typography width="100%" fontSize={24}>
                        {' '}
                        <b> ORDER SUMMARY</b>{' '}
                      </Typography>
                      <Divider width="100%" />

                      <Grid container spacing={0.5}>
                        <Grid container item xs={6}>
                          <Grid item xs={12} mt={3}>
                            <Typography>
                              <b>สไตล์ผ้าม่าน : </b> {style}{' '}
                            </Typography>
                          </Grid>
                          <Grid item xs={12} mt={3}>
                            <Typography>
                              <b>Fabric : </b> {fabric}{' '}
                            </Typography>
                          </Grid>
                          <Grid item xs={12} mt={3}>
                            <Typography>
                              <b>color : </b> {colorName}{' '}
                            </Typography>
                          </Grid>
                          <Grid item xs={12} mt={3}>
                            <Typography>
                              <b>อุปกรณ์เสริม : </b> {linearName}
                            </Typography>
                          </Grid>
                          <Grid item xs={12} mt={3}>
                            <Typography>
                              <b>ความกว้าง</b>{' '}
                              {width ? width : windowWidth}{' '}
                              {windowWidth ? (
                                <Typography>
                                  ระยะขอบ : {widthMargin}{' '}
                                </Typography>
                              ) : null}
                            </Typography>
                          </Grid>
                          <Grid item xs={12} mt={3}>
                            <Typography>
                              <b>Price : </b> {price}{' '}
                            </Typography>
                          </Grid>
                          <Grid item xs={12} mt={3}>
                            <Typography>
                              <b>windowLenght : </b> {windowLenght}{' '}
                            </Typography>
                          </Grid>
                          <Grid item xs={12} mt={3}>
                            <Typography>
                              <b>lenght2 : </b> {lenght}{' '}
                            </Typography>
                          </Grid>
                          <Grid item xs={12} mt={3}>
                            <Typography>
                              <b>lenghtMargin : </b> {lenghtMargin}{' '}
                            </Typography>
                          </Grid>
                          <Grid item xs={12} mt={3}>
                            <form>
                              <Typography>
                                <b>Room Name : </b>
                              </Typography>
                              <input
                                {...register('room')}
                                style={{ width: '300px', height: '30px' }}
                                placeholder={'ห้องรับแขก'}
                              ></input>
                            </form>
                          </Grid>

                          <Grid container spacing={2} marginTop={5}>
                            <Grid item xs={6}>
                              <ContinueButton2
                                marginTop={'20px'}
                                variant="contained"
                                width="200px"
                                onClick={() => chooseCalculatePage('six')}
                              >
                                <Typography paddingLeft={2} paddingRight={2}>
                                  ย้อนกลับ
                                </Typography>
                              </ContinueButton2>
                            </Grid>
                            <Grid item xs={6}>
                              <ContinueButton
                                mt={'2'}
                                variant="contained"
                                width="200px"
                                onClick={() => addToCartHandler()}
                              >
                                <Typography paddingLeft={2} paddingRight={2}>
                                  Review Order
                                </Typography>
                              </ContinueButton>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Paper>
              {/* Mobile */}
              <Paper elevation={0} sx={{ display: { xs: 'flex', md: 'none' } }}>
                <Grid container justifyContent={'center'} mb={5}>
                  <Typography
                    width="100%"
                    fontSize={24}
                    align={'center'}
                    mb={2}
                  >
                    {' '}
                    <b> ORDER SUMMARY</b>{' '}
                  </Typography>
                  <Box sx={{ width: '250px' }}>
                    <CardMedia
                      component="img"
                      image="/images/curtain1.jpg"
                      title="curtain1"
                      height={'250'}
                      align="top"
                    ></CardMedia>
                  </Box>
                  <Grid item xs={12} mt={2} align={'center'}>
                    <Typography>
                      <b>สไตล์ผ้าม่าน : </b> {style}{' '}
                    </Typography>
                  </Grid>
                  <Grid item xs={12} mt={2} align={'center'}>
                    <Typography>
                      <b>Fabric : </b> {fabric}{' '}
                    </Typography>
                  </Grid>
                  <Grid item xs={12} mt={2} align={'center'}>
                    <Typography>
                      <b>color : </b> {colorName}{' '}
                    </Typography>
                  </Grid>
                  <Grid item xs={12} mt={2} align={'center'}>
                    <Typography>
                      <b>อุปกรณ์เสริม : </b> {linearName}
                    </Typography>
                  </Grid>
                  <Grid item xs={12} mt={2} align={'center'}>
                    <Typography>
                      <b>ความกว้าง</b> {width ? width : window.windowWidth}{' '}
                      {window.windowWidth ? (
                        <Typography>ระยะขอบ : {window.widthMargin} </Typography>
                      ) : null}
                    </Typography>
                  </Grid>

                  <Grid item xs={12} mt={2} align={'center'}>
                    <Typography>
                      <b>Price : </b> {price}{' '}
                    </Typography>
                  </Grid>
                  {/* <Grid item xs={12} mt={2} align={'center'}>
                          <form>
                            <Typography>
                              <b>Room Name : </b>
                            </Typography>
                            <input
                              {...register('room')}
                              style={{ width: '300px', height: '30px' }}
                              placeholder={'ห้องรับแขก'}
                            ></input>
                          </form>
                        </Grid> */}
                </Grid>
              </Paper>
              <Box
                sx={{
                  display: { xs: 'flex', md: 'none', marginBottom: '100px' },
                }}
              >
                <Grid align="center" xs>
                  <ContinueButton2
                    marginTop={'20px'}
                    variant="contained"
                    sx={{ width: '90%' }}
                    onClick={() => chooseCalculatePage('six')}
                  >
                    <Typography paddingLeft={2} paddingRight={2}>
                      ย้อนกลับ
                    </Typography>
                  </ContinueButton2>
                  <ContinueButton
                    sx={{ width: '90%' }}
                    marginTop={'20px'}
                    variant="contained"
                    onClick={() => addToCartHandler()}
                  >
                    <Typography paddingLeft={2} paddingRight={2}>
                      Review Order
                    </Typography>
                  </ContinueButton>
                </Grid>
              </Box>
            </Box>
          ) : null}
        </>
      )}
    </Box>
  );
}

export function getServerSideProps(context) {
  return {
    props: { slug: context.params.slug },
  };
}
