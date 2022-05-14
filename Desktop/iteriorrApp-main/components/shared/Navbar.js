import * as React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import * as stateAction from '../../src/action/app.action';

import {
  Grid,
  Badge,
  CssBaseline,
  IconButton,
  Button,
  Typography,
  Toolbar,
  Box,
  AppBar,
  Menu,
  MenuItem,
  Stack,
  Avatar,
  
} from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import NextLink from 'next/link';
import Link from 'next/link';
import { useEffect, useState, useContext } from 'react';
import { Store } from '../../utils/Store';
import { useRouter } from 'next/router';
import jsCookie from 'js-cookie';
// import { useSession ,signOut} from "next-auth/react"
import {  signOut, useSession } from 'next-auth/react';


const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#ffffff',
    },
  },
});


export default function Navbar() {
  // const [session, loading] = useSession();

  const router = useRouter();
  const { state, dispatch } = useContext(Store);
  const [lCart, setLcart] = useState('');
  const [userImg, setUserImg] = useState('');
  const [user, setUser] = useState('');
  const { cart, userInfo } = state;
  const pages = ['ตัวอย่างผ้า', 'สินค้า', 'ติดต่อเรา', 'เกี่ยวกับเรา'];
  const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];
  const { data: session, status } = useSession();
  const loading = status === 'loading';
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const [anchorEl, setAnchorEl] = useState(null);

  const loginClickHandler = (e) => {
    setAnchorEl(e.currentTarget);

  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  
  

  // function ElevationScroll(props) {
  //   const { children,  } = props;
    
  //   // Note that you normally won't need to set the window ref as useScrollTrigger
  //   // will default to window.
  //   // This is only being set here because the demo is in an iframe.
  //   const trigger = useScrollTrigger({
  //     disableHysteresis: true,
      
  //     threshold: 0,
      
  //   });


  
  //   return React.cloneElement(children, {
  //     elevation: trigger ? 2 : 0,

  //   });
  // }

  const handleCloseNavMenu = () => {
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  function logoutHandler() {
    dispatch(stateAction.userInfoClear(jsCookie.remove('userInfo')));
    signOut();
  }

  useEffect(() => {
    const data = cart.cartItems;
    setLcart(data);
    if (status === 'authenticated') {
      setUser(userInfo);
      setUserImg(session.user.image);
    }
  }, [cart.cartItems, userInfo, status]);


  const loginMenuCloseHandler = (e, redirect) => {
    setAnchorEl(null);
  };

  const logoutClickHandler = () => {
    setAnchorEl(null);
    dispatch({ type: 'USER_LOGOUT' });
    jsCookie.remove('userInfo');
    jsCookie.remove('cartItems');
    router.push('/');
  };

  return (
    <>
      <ThemeProvider theme={lightTheme}>
        <CssBaseline />
        <Box
        underlay="none"
        >
          <AppBar position="fixed" color="primary" sx={ {paddingLeft: '80px', }} elevation={0} >
            <Toolbar>

              <Grid>
                <Box sx={{  xs: 'none', md: 'flex' }}>
                  <MenuItem>
                  <NextLink href={'/'} passHref >
                  <Link >
                    <Typography
                      variant="h4"
                      noWrap
                      component="div"
                      sx={{
                        display: {
                          xs: 'none',
                         
                          md: 'flex',
                        },
                      }}
                    >
                      <b>iteriorr</b>
                    </Typography>
                  </Link>
                  </NextLink>
             
                  </MenuItem>
                
                </Box>
              </Grid>

              <Box sx={{ flexGrow: 1, xs: 'flex', md: 'none' }} ml={'25px'}>
                <Grid container>
                  <Link href="/" passHref>
                    <Typography
                      variant="h5"
                      noWrap
                      component="div"
                      sx={{ mr: 6, display: { xs: 'flex', md: 'none' } }}
                    >
                      <b>iteriorr</b>
                    </Typography>
                  </Link>
                </Grid>
              </Box>

              <Box
                sx={{
                  flexGrow: 1,
                  display: { xs: 'none', md: 'flex', lg: 'flex' },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))}
              </Box>

              <Box
                sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' } }}
                paddingRight={'80px'}
              >
                <MenuItem style={{ paddingRight: '0px' }}>
                  <NextLink href="/cart" passHref>
                    <Link>
                      <Typography component="span">
                        {lCart.length > 0 ? (
                          <IconButton>
                            <Badge
                              color="secondary"
                              badgeContent={lCart.length}
                            >
                              <ShoppingCartIcon />
                            </Badge>
                          </IconButton>
                        ) : (
                          <IconButton>
                            <ShoppingCartIcon />
                          </IconButton>
                        )}
                      </Typography>
                    </Link>
                  </NextLink>
                </MenuItem>

                <Grid>
                  {
                    session && (
                      <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                        <Button
                          aria-controls="simple-menu"
                          aria-haspopup="true"
                          id="MuiMenu-paper"
                          onClick={loginClickHandler}
                        >
                          {/* <IconButton>
                            <AccountCircleIcon />
                          </IconButton> */}
                          <Stack>
                            <Avatar
                              alt="userLogin"
                              src={userImg}
                              sx={{ width: 32, height: 32, marginTop: '3px' }}
                            />
                          </Stack>
                        </Button>
                        <Menu
                          id="simple-menu"
                          anchorEl={anchorEl}
                          
                          keepMounted
                          open={Boolean(anchorEl)}
                          onClose={loginMenuCloseHandler}
                        >
                          <MenuItem
                            onClick={(e) =>
                              loginMenuCloseHandler(e, '/profile')
                            }
                          >
                            Profile
                          </MenuItem>
                          <MenuItem
                            onClick={(e) =>
                              loginMenuCloseHandler(e, '/order-history')
                            }
                          >
                            Order History
                          </MenuItem>
                          <MenuItem onClick={signOut}>Logout</MenuItem>
                        </Menu>
                      </Box>
                    )
   
                  }
                </Grid>
              </Box>
              <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                <Grid container justifyContent="right">
                  <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                    <MenuItem style={{ paddingRight: '0px' }}>
                      <NextLink href="/cart" passHref>
                        <Link>
                          <Typography component="span">
                            {lCart.length > 0 ? (
                              <IconButton>
                                <Badge
                                  color="secondary"
                                  badgeContent={lCart.length}
                                >
                                  <ShoppingCartIcon />
                                </Badge>
                              </IconButton>
                            ) : (
                              <IconButton>
                                <ShoppingCartIcon />
                              </IconButton>
                            )}
                          </Typography>
                        </Link>
                      </NextLink>
                    </MenuItem>
                  </Box>

                  {session && (
                    <div id="simplemenu" className='simplemenu'>
                    <Box
                      sx={{ flexGrow: 0, display: { xs: 'flex', md: 'none' } }}
                    >
                      <Button
                        aria-controls="simplemenu"
                        aria-haspopup="true"
                        id="simplemenu"
               
                        onClick={()=>setAnchorEl(EventTarget)}
                      >
                        <Stack>
                          <Avatar
                            alt="Cindy Baker"
                            src={userImg}
                            sx={{ width: 32, height: 32, marginTop: '1px' }}
                          />
                        </Stack>
                      </Button>

                      <Menu
                        id="simple-menu"
                        anchorEl={anchorEl}
                        keepMounted
                        open={Boolean(anchorEl)}
                        onClose={loginMenuCloseHandler}
                        
                      >
                        <MenuItem
                          onClick={(e) => loginMenuCloseHandler(e, '/profile')}
                        >
                          Profile
                        </MenuItem>
                        <MenuItem
                          onClick={(e) =>
                            loginMenuCloseHandler(e, '/order-history')
                          }
                        >
                          Order History
                        </MenuItem>
                        <MenuItem onClick={logoutHandler}>Logout</MenuItem>
                      </Menu>
                    </Box>
                    </div>
                  )}
                  

                  <Box
                    sx={{ flexGrow: 0, display: { xs: 'flex', md: 'none' } }}
                  >
                    <IconButton
                      size="large"
                      aria-label="account of current user"
                      aria-controls="menu-appbar"
                      aria-haspopup="true"
                      onClick={handleOpenNavMenu}
                      color="inherit"
                    >
                      <MenuIcon />
                    </IconButton>
                    <Menu
                      id="menu-appbar"
                      anchorEl={anchorElNav}
                      anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                      }}
                      keepMounted
                      transformOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                      }}
                      open={Boolean(anchorElNav)}
                      onClose={handleCloseNavMenu}
                      sx={{
                        display: { xs: 'block', md: 'none' },
                      }}
                    >
                      {pages.map((page) => (
                        <MenuItem key={page} onClick={handleCloseNavMenu}>
                          <Typography textAlign="center">{page}</Typography>
                        </MenuItem>
                      ))}
                    </Menu>
                  </Box>

                </Grid>
                
              </Box>

            </Toolbar>

          </AppBar>
        </Box>
      </ThemeProvider>
    </>
  );
}
