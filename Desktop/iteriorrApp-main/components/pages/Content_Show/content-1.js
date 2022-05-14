import React from 'react'
import ContinueButton from '../../button/ContinueButton'
import { Grid, Divider, Typography, Avatar,Stack } from '@mui/material';
import { urlForThumbnail } from '../../../utils/image';
import Link from 'next/link';


const Content_1 = ({...props}) => {
    const key = props.key
    const colorId = props.colorId
    const variangImg = props.variangImg
    const colorName = props.colorName
    const img1 = props.img1
    const img2 = props.img2
    const img3 = props.img3
    const img4 = props.img4
    const img5 = props.img5

    const price = props.price
    const title = props.title
    const href = props.href
    
  return (
    <Grid>
    <Typography
      fontSize={'40px'}
      fontStyle={'bold'}
      fontWeight={'500'}
      marginbottom={'20px'}
    >
      {title}
    </Typography>
    <Divider width="100%" />

    {
      key == colorId ? (
        <Grid key={key}>
          <Typography
            fontSize={'18px'}
            fontStyle={'bold'}
            fontWeight={'500'}
            margintop="10px"
            key={key}
          >
            <b>Color :</b> {colorName}{' '}
          </Typography>
          <Typography
            // {...register('price')}
            fontSize={'18px'}
            fontStyle={'bold'}
            fontWeight={'500'}
            marginTop="10px"
            value={price}
          >
            ราคาเริ่มต้น : {price} บาท{' '}
          </Typography>
        </Grid>
      ) : null
    }

    <Typography fontStyle={'bold'} marginTop="10px">
      {img1}
    </Typography>
    <Typography
      fontSize={'18px'}
      fontStyle={'bold'}
      fontWeight={'500'}
      marginTop="10px"
    >
      {img2}
    </Typography>
    <Typography width="90%">
      {img3}
    </Typography>
    <Typography
      fontSize={'18px'}
      fontStyle={'bold'}
      fontWeight={'500'}
      marginTop="10px"
    >
      {img4}
    </Typography>
    <Typography width="90%">
      {img5}
    </Typography>

    <Typography margintop="10px">
      Select a color to continue designing your curtain or
      order up to 5 free swatches.
    </Typography>
    {/* avatar Items */}
    <Stack mt={2} direction="row" spacing={1}>
(
        <Link
          key={key}
          href={href}
          passHref
        >
          <Avatar
            // onClick={props.function1({key: key,
            //     name:colorName,
            //     price: price,})}
            alt="Remy Sharp"
            src={urlForThumbnail(
              variangImg
            )}
            sx={{ width: 25, height: 25 }}
          />
        </Link>
      )
    </Stack>
    {/* end Avatar items */}

    <ContinueButton
      margintop={'20px'}
      variant="contained"
      // onClick={() => setContent(false)}
      // onClick={() => handleSlide(false)}
      // onClick ={()=>colorData(variant.color)}
      // onClick={props.function2}
    >
      <Typography paddingLeft={3} paddingight={3}>
        select & continue
      </Typography>
    </ContinueButton>
  </Grid>
  )
}

export default Content_1