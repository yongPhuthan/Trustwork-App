import React from 'react'
import { styled } from '@mui/material/styles';
import { Button, Typography } from '@mui/material'



const OrangeButton = styled(Button)({
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

  const ContinueButton = ({...props}) =>{
    <OrangeButton
    marginTop={'20px'}
    variant="contained"
    width="200px"
    onClick={()=>props.functionButton()}
  >
    <Typography paddingLeft={2} paddingRight={2}>
      {props.text}
    </Typography>
  </OrangeButton>
  }
  

export default ContinueButton