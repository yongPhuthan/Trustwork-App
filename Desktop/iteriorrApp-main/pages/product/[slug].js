import React from 'react';
import { styled } from '@mui/material/styles';
import axios from 'axios';
import { useSnackbar } from 'notistack';
import { useEffect, useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as stateAction from '../../src/action/app.action';
import Link from 'next/link';
import WidthCalculator from '../../components/shared/WidthCalculator';
import Image from 'next/image'

import { useForm } from "react-hook-form";
import {
  Grid,
  RadioGroup,
  Radio,
  Box,
  Slide,
  Slider,
  Typography,
  Paper,
  CardMedia,
  Button,
  Divider,
  Stack,
  Avatar,
  FormControl,
  InputLabel,
  FormControlLabel,
  Switch,
  MenuItem,
  Select,
  CircularProgress,
  Alert,
} from '@mui/material';
import client from '../../utils/client';
import Steps from '../../components/shared/Steps';
import { urlForThumbnail, urlForShow } from '../../utils/image';

const ContinueButton = styled(Button)({
  //   boxShadow: 'none',
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

export default function CalculatorScreen(props) {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const dispatch = useDispatch();
  const [checked, setChecked] = React.useState(false);
  const containerRef = React.useRef(null);
  const [value, setValue] = useState(1);
  const [content, setContent] = useState(true);
  const [age, setAge] = useState('');
  const [pageWidth, setPageWidth] = useState('');
  const [fullShow, setFullshow] = useState('page1');
  const [style, setStyle] = useState('');
  const [fabric, setFabric] = useState('');
  const [colorId, setColorId] = useState('');
  const [colorName, setColorName] = useState('');
  const [price, setPrice] = useState('');
  const [roomName, setRoomName] = useState('');

  const [size, setSize] = useState({});
  const [width, setWidth] = useState('');
  const [lenght, setLenght] = useState('');
  const [window, setWindow] = useState({
    windowWidth: '',
    widthMargin: '',
    windowLenght: '',
    lenghtMargin: '', 
  });
  const [linearOptions, setLinearOptions] = useState({name:'',value:''})
  const [cart, setCart] = useState({cartItems: ''})

  const lName = useRef()

  const [fullNess, setFullnest] = useState('');

  const appReducer = useSelector(({ appReducer }) => appReducer.style);
  const sizeReducer = useSelector(({ appReducer }) => appReducer.size);
  const fabricReducer = useSelector(({ appReducer }) => appReducer.fabric);
  const colorReducer = useSelector(({ appReducer }) => appReducer.colorId);
  const colorNameReducer = useSelector(({ appReducer }) => appReducer.colorName);
  const widthReducer = useSelector(({ appReducer }) => appReducer.width);
  const lenghtReducer = useSelector(({ appReducer }) => appReducer.lenght);
  const roomReducer = useSelector(({ appReducer }) => appReducer.room);
  const fullNestReducer = useSelector(({ appReducer }) => appReducer.fullNest);
  const windowWidthReducer = useSelector(({ appReducer }) => appReducer.windowWidth);
  const windowLenghtReducer = useSelector(({ appReducer }) => appReducer.windowLenght);
  const widthMarginReducer = useSelector(({ appReducer }) => appReducer.widthMargin);
  const lenghtMarginReducer = useSelector(({ appReducer }) => appReducer.lenghtMargin);
  const linearOptionsReducer = useSelector(({ appReducer }) => appReducer.linearName);
 const linearOptionsValueReducer = useSelector(({ appReducer }) => appReducer.linearValue);
 const priceReducer = useSelector(({ appReducer }) => appReducer.price);
//  const {state: { cart },dispatch,} = useContext(Store);
 const cartReducer = useSelector(({ appReducer }) => appReducer.cart);
 const  enqueueSnackbar  = useSnackbar;


  const handleSlide = (value) => {
    setChecked((prev) => !prev);
    setContent(value);
  };

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const chooseCalculatePage = (page1) => {
    setFullshow(false);
    setPageWidth(page1);
    const page = page1;
    console.log('page is -->' + fullShow + page);
  };
  const changeToLenghtPage = (page1) => {
    setFullshow(page1);
    setPageWidth(page1);
    const page = page1;
    console.log(page);
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


  const { slug } = props;

  const [state, setState] = useState({
    product: null,
    products: [],
    loading: true,
    error: '',
  });
  const [variants, setVariants] = useState([]);

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
  setRoomName(roomReducer)
  setPrice(priceReducer);
  setStyle(appReducer);
  setFabric(fabricReducer);
  setColorId(colorReducer);
  setColorName(colorNameReducer);
  setSize(sizeReducer);
  setWidth(widthReducer)
  setLenght(lenghtReducer);
  setWindow({...window, 
    windowWidth: windowWidthReducer,
    widthMargin : widthMarginReducer,
    windowLenght: windowLenghtReducer,
    lenghtMargin: lenghtMarginReducer,
  }
    )
    setLinearOptions({...linearOptions, name : linearOptionsReducer, value: linearOptionsValueReducer})
    setCart({...cart, cartItems:cartReducer})
  },[cartReducer,roomReducer,colorNameReducer, widthMarginReducer, linearOptionsReducer, fabricReducer, colorReducer, widthReducer, lenghtReducer, windowWidthReducer, windowLenghtReducer, lenghtMarginReducer, linearOptionsValueReducer, slug, priceReducer]);
  

  const changeColor = ({...color}) => {
    dispatch(stateAction.colorId(color.key));
    dispatch(stateAction.colorName(color.name));
    dispatch(stateAction.price(color.price));

    setColorId(colorReducer);
  };

  const sizeCalculate = (redirect) =>{
    dispatch(stateAction.width(watch("width")));
    // dispatch(stateAction.colorName(watch("colorName")));
    dispatch(stateAction.fullNest(watch("fullNest")));
    dispatch(stateAction.lenght(watch("lenght")));
    dispatch(stateAction.windowWidth(watch("windowWidth")));
    dispatch(stateAction.widthMargin(watch("widthMargin")));
    dispatch(stateAction.windowLenght(watch("windowLenght")));
    dispatch(stateAction.lenghtMargin(watch("lenghtMargin")));
    // dispatch(stateAction.linearName(watch("linearName")));
    dispatch(stateAction.linearName(lName));
    dispatch(stateAction.linearValue(watch("linearValue")));
    dispatch(stateAction.room(watch("room")));

    redirect
  }

  const linearData = (redirect) =>{
    dispatch(stateAction.linearName(watch("linearName")));

    (watch("linearName") ==  'Unlined' ? ( 
      dispatch(stateAction.linearValue(50))): 
      dispatch(stateAction.linearValue(2)));
      redirect
  }

  const widthPage = (
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

          <Grid container spacing={2} marginTop={5}>
            <Grid item xs={6}>
              <ContinueButton2
                marginTop={'20px'}
                variant="contained"
                width="200px"
                onClick={() => handleSlide(true)}
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
        <Grid container justifyContent={'center'} item xs={2} marginTop="200px">
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
    </Grid>
    // <WidthCalculator props={()=>chooseCalculatePage('two')} />
          
  );

  return (
    <Box>
      <Steps props={{ step1: style, step2: fabric, step3: colorName,active: 2 }} />
      {loading ? (
        <CircularProgress />
      ) : error ? (
        <Alert variant="error">{error}</Alert>
      ) : (
        <>
          {(fullShow == 'page1' && (
            <Paper elevation={0}>
              <Grid container spacing={3} mb={5}>
                {!colorId ? (
                  <Grid container justifyContent={'right'} item xs={6}>
                    <Box sx={{ width: '60px', margin: '1' }}>
                      <Grid mb={1}>
                        <CardMedia
                          component="img"
                          image={urlForThumbnail(
                            state.products[0].defaultFabricVariant[0].images[0]
                              .asset
                          )}
                          title="curtain1"
                          height={'72'}
                          align="top"
                        ></CardMedia>
                      </Grid>
                      <CardMedia
                        component="img"
                        image={urlForThumbnail(
                          state.products[0].defaultFabricVariant[0].images[1]
                            .asset
                        )}
                        title="curtain1"
                        height={'72'}
                        align="top"
                      ></CardMedia>
                    </Box>
                    <Box sx={{ width: '482px', marginLeft: '20px' }}>
                      <CardMedia
                        component="img"
                        image={urlForShow(
                          state.products[0].defaultFabricVariant[0].images[0]
                            .asset
                        )}
                        title="curtain1"
                        height={'581'}
                        align="top"
                      ></CardMedia>
                    </Box>
                  </Grid>
                ) : (
                  variants.map((variant) =>
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
                )
                )}

                {content ? (
                  <Grid container justifyContent={'left'} item xs={6}>
                    <Grid>
                      <Typography
                        fontSize={'40px'}
                        fontStyle={'bold'}
                        fontWeight={'500'}
                        marginBottom={'20px'}
                      >
                        {state.product.title}
                      </Typography>
                      <Divider width="100%" />

                      {variants.map((variant) =>
                        variant._key == colorId ? (
                          <Grid key={variant._key}  >
                            <Typography
                              fontSize={'18px'}
                              fontStyle={'bold'}
                              fontWeight={'500'}
                              marginTop="10px"
                              key={variant._key}
                      
                            >
                              <b>Color :</b> {variant.color}{' '}
                            </Typography>
                            <Typography {...register("price")}
                              fontSize={'18px'}
                              fontStyle={'bold'}
                              fontWeight={'500'}
                              marginTop="10px"
                              value = {variant.price}
                            >
                              <b>ราคาเริ่มต้น :</b> {variant.price} บาท{' '}
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

                      <Typography marginTop="10px">
                        Select a color to continue designing your curtain or
                        order up to 5 free swatches.
                      </Typography>
                      {/* avatar Items */}
                      <Stack marginTop={0.5} direction="row" spacing={1}>
                        {variants.map((variant) => (
                          <Link
                            key={variant._key}
                            href={`/product/${state.product.slug.current}?variant=${variant._key}`}
                            passHref
                          >
                            <Avatar
                              onClick={() => changeColor({key:variant._key, name: variant.color, price:variant.price})}
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
                        marginTop={'20px'}
                        variant="contained"
                        // onClick={() => setContent(false)}
                        // onClick={() => handleSlide(false)}
                        // onClick ={()=>colorData(variant.color)}
                        onClick={handleSubmit(()=>sizeCalculate(handleSlide(false)))}

                      >
                        <Typography paddingLeft={3} paddingRight={3}>
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
            </Paper>
          )) ||
            (pageWidth == 'two' ? (
              <Paper elevation={0}>
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
                          <Typography
                            fontSize={'20px'}
                            fontStyle={'bold'}
                            fontWeight={'500'}
                            marginTop="10px"
                          >
                            Enter your curtain width in inches:
                          </Typography>
                        </Grid>
                        <Grid item xs={2} mt={1.5}>
                          <form>
                            <input {...register("width")}
                              style={{ width: '60px', height: '30px' }}
                              
                            ></input>
                          </form>
                        </Grid>
                      </Grid>

                      <Typography fontStyle={'bold'} marginTop="10px">
                        How many of these curtains would you like?
                      </Typography>
                      <FormControl sx={{ m: 1, minWidth: 125 ,}} size="small"  >
                        <Select
                        {...register("fullNest")}

                          displayEmpty
                          
                        >
                          <MenuItem value="จำนวน">
                            
                          </MenuItem>
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

                      <Grid container item xs={5} marginTop={5}>
                        <Grid item xs={6} container justifyContent={'left'}>
                          <ContinueButton2
                            marginTop={'20px'}
                            variant="contained"
                            width="200px"
                            onClick={handleSubmit(() => setFullshow('page1'))}
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
                          <ContinueButton
                            onClick={handleSubmit(()=>sizeCalculate(changeToLenghtPage('pageLenght')))}
                            
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
                  </Grid>
                </Grid>
              </Paper>
            ) : fullShow !== 'page1' && pageWidth == 'three' ? (
              <Paper elevation={0}>
                <Grid container spacing={3} mb={5} mt={3}>
                  <Grid container justifyContent={'right'} item xs={6}>
                    <Box sx={{ marginLeft: '20px', width: '580px' }}>
                      <CardMedia
                        component="img"
                        image="/images/fabrics/width2.webp"
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

                      <Divider width="90%" />
                      <Grid container>
                        <Grid justifyContent={'left'} mt={1} width="90%">
                          < form>
                            <label htmlFor="fname">
                              <b>1 .</b> Enter the width of your window,{' '}
                              <b>A:</b> {''}
                            </label>
                            <input
                              type="text"
                              id="fname"
                              name="fname"
                              placeholder="10"
                              {...register("windowWidth")}
                              // ref={widthWindow}
                              style={{ width: '50px', height: '30px' }}
                            />
                            <br />
                            <br />
                        
                          </form>
                          

                          <form>
                            <label htmlFor="fname">
                              <b>2 .</b> We recommend adding a margin of 5-10”
                              on each side for proper coverage. Choose your
                              margin, <b>B:</b> {''}
                            </label>
                            <input
                              type="text"
                              id="fname"
                              name="fname"
                              placeholder="10"
                              {...register("widthMargin")}
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
                          <Box sx={{ width: 150 }}>
                            <Grid container spacing={2} alignItems="center">
                              <Grid item xs>
                                <Slider
                                  max={5}
                                  value={typeof value === 'number' ? value : 1}
                                  onChange={handleSliderChange}
                                  aria-labelledby="input-slider"
                                />
                              </Grid>
                              <Grid item>
                                <Typography
                                  onChange={handleInputChange}
                                  onBlur={handleBlur}
                                >
                                  {value} ผืน
                                </Typography>
                              </Grid>
                            </Grid>
                          </Box>
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
                            onClick={() => setFullshow('page1')}
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
                          <ContinueButton
                            marginTop={'20px'}
                            variant="contained"
                            width="200px"
                    
                            onClick={handleSubmit(()=>sizeCalculate(changeToLenghtPage('pageLenght')))}
                          >
                            <Typography paddingLeft={2} paddingRight={2}>
                              continue
                            </Typography>
                          </ContinueButton>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Paper>
            ) : null)}

          {/* Lenght */}
          {fullShow == 'pageLenght' && pageWidth == 'pageLenght' ? (    
            <Paper elevation={0}>
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
                      </Grid>): null)}
                      

            
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
          ) : pageWidth == 'four' ? (
            <Paper elevation={0}>
              <Grid container spacing={2} mb={5} mt={1}>
                <Grid container justifyContent={'right'} item xs={6}>
                  <Image
                  component="img"
                    src="/images/fabrics/lenghtFull-1.webp"
                    alt="Picture of the author"
                    width={500}
                    height={500}
                    >
                  </Image>
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
                        <form>
                          <label htmlFor="fname">
                            Enter your curtain length in inches: {''}
                          </label>
                          <input
                           {...register("lenght")}
                            type="text"
                            id="fname"
                            name="fname"
                            style={{ width: '50px', height: '30px' }}
                          />
                          <br />
                          <br />
                        </form>
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
                          <Typography
                            paddingLeft={2}
                            paddingRight={2}
                          >
                            ย้อนกลับ
                          </Typography>
                        </ContinueButton2>
                      </Grid>
                      <Grid container item xs={6} justifyContent={'left'}>
                        <ContinueButton
                          marginTop={'20px'}
                          variant="contained"
                          width="200px"
                          onClick={handleSubmit(()=>sizeCalculate(chooseCalculatePage('six')))}
                        >
                          <Typography paddingLeft={2} paddingRight={2}>
                            continue
                          </Typography>
                        </ContinueButton>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Paper>
          ) : fullShow !== 'page1' && pageWidth == 'five' ? (
            <Paper elevation={0}>
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
                    </Typography>

                    <Divider width="90%" />
                    <Grid container>
                      <Grid justifyContent={'left'} mt={1} width="90%">
                        <form>
                          <label htmlFor="fname">
                            <b>1 .</b> To find the right length for your
                            curtain, first measure the distance from the top of
                            your track to the floor <b>A:</b> {''}
                          </label>
                          <input
                          {...register("windowLenght")}
                            type="number"
                            id="windowLenght"
                            name="windowLenght"
                            style={{ width: '50px', height: '30px' }}
                          />

                          <br />
                          <br />
                        </form>
                        <form>
                          <label htmlFor="fname">
                            <b>2 .</b> We recommend getting your curtains with a
                            1-2” “puddle”. This will disguise any variance in
                            height if your rod (or floor) is not perfectly
                            level. Enter your puddle length <b>B:</b> {''}
                          </label>
                          <input
                           {...register("lenghtMargin")}
                            type="number"
                            id="lenghtMargin"
                            name="lenghtMargin"
                            placeholder="10"
                            style={{ width: '50px', height: '30px' }}
                          />
                          <br />
                          If you want your curtains just touching the floor, B
                          should be 0. If you want them slightly above the
                          floor, then enter -0.5 or -1 as B.
                          <br />
                          <br />
                        </form>
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
                        <CalculateButton marginTop={'20px'} variant="contained">
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
                        <ContinueButton
                          marginTop={'20px'}
                          variant="contained"
                          width="200px"
                          onClick={handleSubmit(()=>sizeCalculate(chooseCalculatePage('six')))}
                  
                        >
                          <Typography paddingLeft={2} paddingRight={2}>
                            continue
                          </Typography>
                        </ContinueButton>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Paper>
          ) : null}
          {fullShow !== 'page1' && pageWidth == 'six' ? (
            <Paper elevation={0}>
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
                            value = 'Unlined'
                      
                            {...register("linearName")}
                          >
                            <Grid  >
                            <Typography value='Unlined' >
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
                              // onClick = {()=>linearData(chooseCalculatePage('seven'))}
                              onClick={()=>addToCartHandler()}
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
          ) : null}
          {fullShow !== 'page1' && pageWidth == 'seven' ? (
            <Paper elevation={0}>
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
                          <Typography><b>สไตล์ผ้าม่าน : </b> {style} </Typography>
        
                        </Grid>
                        <Grid item xs={12} mt={3}>
                          <Typography><b>Fabric : </b> {fabric} </Typography>
        
                        </Grid>
                        <Grid item xs={12} mt={3}>
                          <Typography><b>color : </b> {colorName} </Typography>
        
                        </Grid>
                        <Grid item xs={12} mt={3}>
                          <Typography><b>ความกว้าง</b> {width?(width):
                          ((window.windowWidth ))} {window.windowWidth ? (<Typography>ระยะขอบ :  {window.widthMargin} </Typography>): (null) }
                          </Typography>
        
                        </Grid>
                        <Grid item xs={12} mt={3}>
                          <Typography><b>Price : </b> {price} </Typography>
        
                        </Grid>
                        <Grid item xs={12} mt={3}>
                        <form>
                        <Typography><b>Room Name : </b></Typography>
                            <input {...register("room")}
                              style={{ width: '300px', height: '30px' }}
                              placeholder={roomName}
                              
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
                              marginTop={'20px'}
                              variant="contained"
                              width="200px"
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
          ) : null}
        </>
      )}
    </Box>
  );
}
export function getServerSideProps(data) {
  return {
    props: { slug: data.params.slug },
  };
}
