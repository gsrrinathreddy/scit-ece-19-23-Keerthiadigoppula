import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import {useState,useEffect} from 'react';
import axios from 'axios';
import { Typography } from '@mui/material';

export default function Hobbies(){
const [loader,setLoader] = useState(true);
    const [Hobbies,setHobbies] = useState(null);

    const connectToServer = async  () => axios.get('http://localhost:8000/Hobbies')
                                            .then(res=>{
                                        
                                                console.log(res.data);
                                                setHobbies(res.data);
                                                setLoader(false)
                                            }).catch(err=>console.log(err))
useEffect(()=>{
   connectToServer();
},[])

  return (
    <ImageList sx={{ width: 500, height: 450 }}>
      <ImageListItem key="Subheader" cols={2}>
        <ListSubheader component="div">December</ListSubheader>
      </ImageListItem>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={`${item.img}?w=248&fit=crop&auto=format`}
            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
          <ImageListItemBar
            title={item.title}
            subtitle={item.author}
            actionIcon={
              <IconButton
                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                aria-label={`info about ${item.title}`}
              >
                <InfoIcon />
              </IconButton>
            }
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQv_ziQy2acrbFPlIbDb35cj4eV47PIv1ybTA&usqp=CAU',
    title: 'Drawing',
    
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: 'https://www.thespruce.com/thmb/tat-JOo9qQjAYSPIKMBfSf_LHnw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-165831199-56d751df3df78cfb37da972c.jpg',
    title: 'Gardening',
    
  },
  {
    img: 'https://www.narayanahealth.org/blog/wp-content/uploads/2022/10/WhatsApp-Image-2022-10-09-at-8.40.47-PM.jpeg',
    title: 'Listening Music',
    
  },
  {
    img: 'https://www.incimages.com/uploaded_files/image/1920x1080/getty_655998316_2000149920009280219_363765.jpg',
    title: 'Reading Books',
    
    cols: 2,
  },
 
];