import React, { useCallback, useRef, useState } from 'react'
import Webcam from 'react-webcam';
import Button from '@mui/material/Button';
import { AiOutlineCheckCircle } from "react-icons/ai";
import { AiOutlineCloseCircle } from "react-icons/ai";

const LearnWebCam = () => {
    const WebCamRef=useRef(null);
    const [imgSrc,setImgSrc]=useState(null);
    const Capture=useCallback(()=>{
const abc=WebCamRef.current.getScreenshot();
setImgSrc(abc);

    },[WebCamRef])
    const ReTake = () =>{
        setImgSrc(null);
    }
  return (
    <div>
        <h2>LearnWebCam</h2>
            
        {imgSrc?(<img src={imgSrc} alt='Webcam' />):(<Webcam   
        ref={WebCamRef} className='ghugh' />)}
<div className="kk">
{imgSrc?(<Button variant="contained" color="success" onClick={ReTake}>
        <AiOutlineCloseCircle  className='g'/>

      </Button>):
( <Button variant="contained" color="success" onClick={Capture}>
        <AiOutlineCheckCircle className='g' />
      </Button> )}
    

</div>
     
         





    </div>
  )
}

export default LearnWebCam