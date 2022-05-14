import { Container, Grid, Box, Link, Typography } from '@mui/material';
import React from 'react';

const Footer = () => {
  return (
    <footer>
      <Box
       sx={{ display: { xs: 'none', md: 'flex' } }}
        px={{ xs: 3, sm: 10 }}
        py={{ xs: 5, sm: 10 }}
        bgcolor="#1b1f23"
        color={'dimgray'}
      >
        <Container maxWidth="lg">
          <Grid container spacing={5}>
            <Grid item xs={12} sm={4}>
              <Box mb={3} fontSize="18px">
                ไอทีเรียร์ดีไซน์
              </Box>
              <Box mb={1}>
                <Typography variant="text">
                  7/44 หมู่2 ต.อ้อมใหญ่ อ.สามพราน จ.นครปฐม
                </Typography>
              </Box>
              <Box>
                <Typography variant="text">
                  All rights reserved iteriorr design, 2018-2022{' '}
                </Typography>
              </Box>
            </Grid>

            <Grid item xs={12} sm={4}>
              <Box mb={3} fontSize="18px">
                Company info
              </Box>
              <Box mb={1}>
                <Link href="/aboutus" color="inherit" underline="none">
                  About us
                </Link>
              </Box>
              <Box mb={1}>
                <Link href="/return" color="inherit" underline="none">
                  Return Policy
                </Link>
              </Box>
              <Box mb={1}>
                <Link href="/return" color="inherit" underline="none">
                  Terms
                </Link>
              </Box>
            </Grid>

            <Grid item xs={12} sm={4}>
              <Box mb={3} fontSize="18px">
                Shop
              </Box>
              <Box mb={1}>
                <Link href="/aboutus" color="inherit" underline="none">
                  ตัวอย่างผ้า
                </Link>
              </Box>
              <Box mb={1}>
                <Link href="/return" color="inherit" underline="none">
                  ผ้าม่าน
                </Link>
              </Box>
              <Box mb={1}>
                <Link href="/return" color="inherit" underline="none">
                  มู่ลี่
                </Link>
              </Box>
            </Grid>
          </Grid>
          <Box textAlign="center" pt={{ xs: 5, sm: 10 }} pb={{ xs: 1 }}>
            <Typography>
              All rights reserved iteriorr design, 2018-2022{' '}
            </Typography>
          </Box>
        </Container>
      </Box>
      <Box
       sx={{ display: { xs: 'flex', md: 'none' } }}
        px={{ xs: 5, sm: 10 }}
        py={{ xs: 5, sm: 10 }}
        bgcolor="#1b1f23"
        color={'dimgray'}
      >
        <Container maxWidth="lg">
          <Grid container spacing={5}>
            <Grid item xs={12} sm={4} align={'center'}>
              <Box mb={3} fontSize="26px">
<b>iTeriorr </b>             </Box>
              <Box mb={1}>
                <Typography variant="text">
                  7/44 หมู่2 ต.อ้อมใหญ่ อ.สามพราน จ.นครปฐม
                </Typography>
              </Box>
          
            </Grid>

            <Grid item xs={6} sm={4} align={'center'}>
              <Box mb={3} fontSize="16px">
                <b>Company info</b>
              </Box>
              <Box mb={1}>
                <Link href="/aboutus" color="inherit" underline="none">
                  About us
                </Link>
              </Box>
              <Box mb={1}>
                <Link href="/return" color="inherit" underline="none">
                  Return Policy
                </Link>
              </Box>
              <Box mb={1}>
                <Link href="/return" color="inherit" underline="none">
                  Terms
                </Link>
              </Box>
            </Grid>

            <Grid item xs={6} sm={4} align={'center'}>
              <Box mb={3} fontSize="16px">
             <b>Shop</b>   
              </Box>
              <Box mb={1}>
                <Link href="/aboutus" color="inherit" underline="none">
                  ตัวอย่างผ้า
                </Link>
              </Box>
              <Box mb={1}>
                <Link href="/return" color="inherit" underline="none">
                  ผ้าม่าน
                </Link>
              </Box>
              <Box mb={1}>
                <Link href="/return" color="inherit" underline="none">
                  มู่ลี่
                </Link>
              </Box>
            </Grid>
            
          </Grid>
      
        </Container>

      </Box>
      <Grid>
      <Box  textAlign="center" pt={{ xs: 1, sm: 10 }} 
      pb={{ xs: 1 }} 
      sx={{backgroundColor:'black'}}>
            <Typography fontSize="10px" color={'dimgray'} >
              All rights reserved iteriorr design, 2018-2022{' '}
            </Typography>
          </Box>
          </Grid>
    </footer>
    
  );
};

export default Footer;
