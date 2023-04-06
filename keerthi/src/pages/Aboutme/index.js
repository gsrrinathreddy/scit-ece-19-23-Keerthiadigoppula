import { Typography } from '@mui/material';
import {useState,useEffect} from 'react';
import axios from 'axios';

export default function Aboutme(){
const [loader,setLoader] = useState(true);
    const [aboutme,setAboutme] = useState(null);

    const connectToServer = async  () => axios.get('http://localhost:8000/Aboutme')
                                            .then(res=>{
                                        
                                                console.log(res.data);
                                                setAboutme(res.data);
                                                setLoader(false)
                                            }).catch(err=>console.log(err))
useEffect(()=>{
   connectToServer();
},[])

    return(
        <>
<Typography>Name: KEERTHI ADIGOPPULA</Typography>
<Typography>Father Name: JANARDHAN ADIGOPPULA</Typography>
<Typography>Mother Name: SHARADA ADIGOPPULA</Typography>
<Typography>Email: keerthiadigoppula90@gmail.com</Typography>
<Typography>Phone No.: 6305716001</Typography>
        </>
        )
    }