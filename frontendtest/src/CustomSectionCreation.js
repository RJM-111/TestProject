import React from "react";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const images = [
  {
    url: '/static/images/buttons/breakfast.jfif',
    title: 'Breakfast',
    width: '40%',
  },
  {
    url: '/static/images/buttons/burgers.jfif',
    title: 'Burgers',
    width: '30%',
  },
  {
    url: '/static/images/buttons/camera.jfif',
    title: 'Camera',
    width: '30%',
  },
  {
    url: '/static/images/buttons/turmeric.jfif',
    title: 'turmeric',
    width: '40%',
  },
  {
    url: '/static/images/buttons/vegetables.jfif',
    title: 'vegetables',
    width: '30%',
  },
  {
    url: '/static/images/buttons/pinksalt.jfif',
    title: 'pinksalt',
    width: '30%',
  },
];

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: (theme.vars ?? theme).palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
}));

export default function CustomSectionCreation(){
    return (
        <div>
        <Box sx={{ flexGrow: 1 }} mt={2} mb={2} ml={2} mr={2}>
        {/* <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>  */}
        {/* {Array.from(Array(21)).map((_, index) => (
            <Grid key={index} size={{xs:2, sm:4, md:4}}>
                <Item>{index+1}</Item>
        </Grid> */}
        
        {/* ))}  */}

        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
         {images.map((image) => (
            <Grid key={image.title} size={{xs:2, sm:4, md:4}}>
                <Item><img src={image.url} alt={image.title} width="100%" height="100%"/></Item>
        </Grid>
        ))}
        </Grid>
        {/* {images.map((image) => (
            <ImageButton
          focusRipple
          key={image.title}
          style={{
            width: image.width,
          }}
        >
          <ImageSrc style={{ backgroundImage: `url(${image.url})` }} />
          <ImageBackdrop className="MuiImageBackdrop-root" />
          <Image>
            <Typography
              component="span"
              variant="subtitle1"
              color="inherit"
              sx={(theme) => ({
                position: 'relative',
                p: 4,
                pt: 2,
                pb: `calc(${theme.spacing(1)} + 6px)`,
              })}
            >
              {image.title}
              <ImageMarked className="MuiImageMarked-root" />
            </Typography>
          </Image>
        </ImageButton>
      ))} */}
           
        </Box>
        
   </div>
    )   }