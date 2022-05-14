import React, { useContext, useEffect, useState, useRef } from 'react';
import { useForm, Controller, set } from 'react-hook-form';
import NextLink from 'next/link';
import Form from '../components/Form';
import { getError } from '../utils/error';
import { useSnackbar } from 'notistack';
import axios from 'axios';
import { Store } from '../utils/Store';
import { useRouter } from 'next/router';
import jsCookie from 'js-cookie';
import { signIn, signOut, useSession, getSession } from 'next-auth/react';
import {
  Button,
  Link,
  List,
  ListItem,
  TextField,
  Typography,
} from '@mui/material';

export default function LoginScreen() {
  const { state, dispatch } = useContext(Store);
  const { data: session, status } = useSession();
  const loading = status === 'loading';
  const [isLoading, setIsLoading] = useState(false);
  const { userInfo } = state;
  const [loginUser, setLoginUser] = useState('NO');
  const router = useRouter();
  const { redirect } = router.query;
  const [isLogin, setIsLogin] = useState(true);
  const [nameAuth, setNameAuth] = useState('');
  const [emailAuth, setEmailAuth] = useState('');
  const tokenWithWriteAccess = process.env.SANITY_AUTH_TOKEN;

  const { enqueueSnackbar } = useSnackbar();
  // @refresh reset

  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors },
  } = useForm();

  const checkUserInfo = () => {
    if (userInfo) {
      router.push({
        pathname: '/shipping',
      });
    }
    if (!userInfo) {
      router.reload();
    }
  };


  const submitHandler = async ({ name, email }) => {
    if (name && email !== null) {
      
        const { data } = await axios.post('/api/users/register', {
          name,
          email,
          password: 'userAuth',
          headers: {
            Authorization: `Bearer ${tokenWithWriteAccess}`,
          },
        });

       try {
        dispatch({ type: 'USER_LOGIN', payload: data });
        jsCookie.set('userInfo', JSON.stringify(data));
        setIsLoading(true);
        checkUserInfo();
      } catch (error) {
        enqueueSnackbar(getError(), { variant: 'error' });
    }
  }
    else {
     return null
    }
  };

  useEffect(() => {
    
    if (status === 'authenticated')
  setLoginUser(session.user.name),
  setNameAuth(session.user.name),
  setEmailAuth(session.user.email),
  submitHandler({ name: nameAuth, email: emailAuth })
   
 
   

  }, [emailAuth, nameAuth, loginUser, status, router,]);

  function switchAuthModeHandler() {
    setIsLogin((prevState) => !prevState);
  }

  async function submitHandler2(event) {
    event.preventDefault();


  }

  return (
    <>
      <Form onSubmit={submitHandler}>
        <Typography component="h1" variant="h1">
          Login {loginUser}
        </Typography>

        <List>
          <ListItem>
            <Controller
              name="email"
              control={control}
              defaultValue=""
              rules={{
                required: true,
                pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
              }}
              render={({ field }) => (
                <TextField
                  variant="outlined"
                  fullWidth
                  id="email"
                  label="Email"
                  inputProps={{ type: 'email' }}
                  error={Boolean(errors.email)}
                  helperText={
                    errors.email
                      ? errors.email.type === 'pattern'
                        ? 'Email is not valid'
                        : 'Email is required'
                      : ''
                  }
                  {...field}
                ></TextField>
              )}
            ></Controller>
          </ListItem>
          <ListItem>
            <Controller
              name="password"
              control={control}
              defaultValue=""
              rules={{
                required: true,
                minLength: 6,
              }}
              render={({ field }) => (
                <TextField
                  variant="outlined"
                  fullWidth
                  id="password"
                  label="Password"
                  inputProps={{ type: 'password' }}
                  error={Boolean(errors.password)}
                  helperText={
                    errors.password
                      ? errors.password.type === 'minLength'
                        ? 'Password length is more than 5'
                        : 'Password is required'
                      : ''
                  }
                  {...field}
                ></TextField>
              )}
            ></Controller>
          </ListItem>
          <ListItem>
            <Button variant="contained" type="submit" fullWidth color="primary">
              Login
            </Button>
          </ListItem>
          <ListItem>
            Do not have an account?{' '}
            <NextLink href={`/register?redirect=${redirect || '/'}`} passHref>
              <Link>Register</Link>
            </NextLink>
          </ListItem>
        </List>
        <Button onClick={() => signIn('google')}>Google</Button>
        <Button onClick={() => signIn('facebook')}>Facebook</Button>
        <Button onClick={() => signIn('line')}>Line</Button>
      </Form>
    </>
  );
}
