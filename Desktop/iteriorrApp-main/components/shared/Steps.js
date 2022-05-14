import React from 'react';
import { useContext } from 'react';
import { Grid, Box, Step, Stepper, StepLabel } from '@mui/material';
import { useSelector, } from 'react-redux';
import { Store } from '../../utils/Store';

const Steps = ({props}) => {
  const { state, dispatch } = useContext(Store);

  const steps = [

    props.step1? 'สไตล์ '+ props.step1:'สไตล์ ',
    props.step2? 'ชนิดผ้า '+ props.step2:'ชนิดผ้า ',
    props.step3? 'สี'+ props.step3:'สี',
    props.step4? 'ไซส์'+ props.step4:'ไซส์',
    props.step5? 'Panels'+ props.step5:'Panels',
    props.step6? 'Linear'+ props.step5:'Linear',
  ];

  return (
    <Grid container justifyContent={'center'}>
      <Box
        sx={{ width: '90%' }}
        mt={5}
        paddingTop="20px"
        paddingBottom={'50px'}
      >
        <Stepper activeStep={props.active} alternativeLabel>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
      </Box>
    </Grid>
  );
};

export default Steps;
