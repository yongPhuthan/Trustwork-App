import React, { useContext, useEffect, useRef, useState } from 'react';
import Iframe from 'react-iframe'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Image from 'next/image';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

import {
  Chip,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Paper,
  Typography,
  Container,
  Box,
  IconButton,
  Button,
} from '@mui/material';
import { styled } from '@mui/material/styles';

const theme = createTheme({
  components: {
    MuiIcon: {
      styleOverrides: {
        root: {
          // Match 24px = 3 * 2 + 1.125 * 16
          boxSizing: 'content-box',
          padding: 3,
          fontSize: '1.125rem',
        },
      },
    },
  },
});

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
const BankAccount = () => {
  const [copySuccess, setCopySuccess] = useState('');

  // your function to copy here

  const copyToClipBoard = async (copyMe) => {
    try {
      await navigator.clipboard.writeText(copyMe);
      setCopySuccess('Copied!');
    } catch (err) {
      setCopySuccess('Failed to copy!');
    }
  };

  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
  }, [setLoading]);

  return (
    <>
      <Grid container justifyContent="center" mt={5}>
        <Grid item md={12} xs={6}>
          <Paper>
            {loading ? (
              <Grid>
                <Grid container justifyContent="center">
                  <Grid item align={'center'} >
                    <Typography variant="h5">ช่องทางการชำระเงิน</Typography>
                    <Typography variant="h5" mt={3} mb={2}>
                      <b>ชื่อบัญชี นายภูฐาน คันธบุษบง</b>
                    </Typography>
                  </Grid>
                </Grid>
                <TableContainer component={Container} item md={6} mt={2}>
                  <Table>
                    <TableBody>
                      <TableRow>
                        <TableCell align="right">
                          <Image
                            src="/images/kbank.webp"
                            alt="Picture of the author"
                            width="75"
                            height="75"
                          />
                        </TableCell>
                        <TableCell>
                          <Typography variant="h5" alignContent={'left'}>
                            ธนาคารกสิกรไทย(ออมทรัพย์)
                          </Typography>
                          <Typography variant="h5">768-221-4591</Typography>
                        </TableCell>
                        <TableCell>
                        <ThemeProvider theme={theme}>
                        <Chip icon={<ContentCopyIcon fontSize="large"/>} label="copy" size='large'  onClick={() => copyToClipBoard('768-221-4591')}/>

                       
                          </ThemeProvider>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell align="right">
                          <Image
                            src="/images/scbbank.webp"
                            alt="Picture of the author"
                            width="75"
                            height="75"
                          />
                        </TableCell>
                        <TableCell>
                          <Typography variant="h5" alignContent={'left'}>
                            ธนาคารไทยพาณิชย์(ออมทรัพย์)
                          </Typography>
                          <Typography variant="h5">768-221-4591</Typography>
                        </TableCell>
                        <TableCell>
                        <ThemeProvider theme={theme}>
                        <Chip icon={<ContentCopyIcon fontSize="large"/>} label="copy"   onClick={() => copyToClipBoard('768-221-4591')}/>

                       
                          </ThemeProvider>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell align="right">
                          <Image
                            src="/images/govbank.webp"
                            alt="Picture of the author"
                            width="75"
                            height="75"
                          />
                        </TableCell>
                        <TableCell>
                          <Typography variant="h5" alignContent={'left'}>
                            ธนาคารออมสิน(ออมทรัพย์)
                          </Typography>
                          <Typography variant="h5">768-221-4591</Typography>
                        </TableCell>
                        <TableCell>
                        <ThemeProvider theme={theme}>
                        <Chip icon={<ContentCopyIcon fontSize="large"/>} label="copy"   onClick={() => copyToClipBoard('768-221-4591')}/>

                       
                          </ThemeProvider>
                          
                        </TableCell>
                      </TableRow>

                          
                    </TableBody>
                    
                  </Table>
                </TableContainer>
             
            <Grid container justifyContent="center" mt={5} mb={10} paddingBottom={5}>
              <Grid>
              <Typography align={'center'}> 
                          ชำระเงินแล้ว?
                        </Typography>
                        <ContinueButton
                        margintop={'20px'}
                        variant="contained"
                        width="100%"
                        
          
                      >
                        <Typography paddingLeft={5} paddingRight={5} variant="h5"> 
                          แจ้งโอนเงินที่นี่
                        </Typography>
              </ContinueButton>
              </Grid>
            
           

              </Grid>
              </Grid>
            ) : null}
          </Paper>
        </Grid>
      </Grid>
    </>
  );
};

export default BankAccount;
