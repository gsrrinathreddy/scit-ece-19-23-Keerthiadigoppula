import Card1 from '../../components/Card1';
import { Grid } from '@mui/material';
import Card2 from '../../components/Card2';
import Card3 from '../../components/Card3';
import Card4 from '../../components/Card4';
import Card5 from '../../components/Card5';
import {useState,useEffect} from 'react';
import axios from 'axios';


export default function Skills(){
const [loader,setLoader] = useState(true);
    const [skills,setSkills] = useState(null);

    const connectToServer = async  () => axios.get('http://localhost:8000/Skills')
                                            .then(res=>{
                                        
                                                console.log(res.data);
                                                setSkills(res.data);
                                                setLoader(false)
                                            }).catch(err=>console.log(err))
useEffect(()=>{
   connectToServer();
},[])


  return(
    <>
      <Grid container sx={{ p: 3 }} spacing={4}>
        <Grid item xs={4}>
      <Card1/>
      </Grid>
      <Grid item xs={4}>
      <Card2/>
      </Grid>
      <Grid item xs={4}>
      <Card3/>
      </Grid>
      <Grid item xs={4}>
      <Card4/>
      </Grid>
      <Grid item xs={4}>
      <Card5/>
      </Grid>
      </Grid>
    </>
  )
}