import React from 'react'
import { Grid, Typography, Divider,Box, CardMedia} from '@mui/material'
import ContinueButton from '../button/ContinueButton'

const WidthCalculator = ({...props}) => {
  return (
    <Grid >
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
            onClick={props.CardFunction1}
            component="img"
            image="/images/fabrics/calculate2.webp"
            title="curtain1"
            height={'352px'}
            align="top"
          ></CardMedia>
        </Box>

        <Grid container spacing={2} marginTop={5}>
          <Grid item xs={6}>


     <ContinueButton props={{function:props.functionButton, text: 'ย้อนกลับ'}} />
          </Grid>
          <Grid item xs={6}>
        <ContinueButton props={{text:'continue'}}/>
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
            onClick={props.CardFunction2}
            image="/images/fabrics/calculate1.webp"
            title="curtain1"
            height={'352px'}
            align="top"
          ></CardMedia>
        </Box>
      </Grid>
    </Grid>
  </Grid>
  )
}

export default WidthCalculator