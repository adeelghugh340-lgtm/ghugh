import React, { useState } from 'react'
import ChildOne from './ChildOne'
import ChildFour from './ChildFour'
import ChildThree from './ChildThree'
import ChildTwo from './ChildTwo'
import Childfive from './childfive'
// rafce 
const LearnProps = () => {
    const [hellow,setHellow]=useState("");
    const [border,setBorder]=useState('4px solid red')
  return (
    <div>
        LearnProps Parents<br></br>
      Type Text:<input type='text' onChange={(e)=>setHellow(e.target.value)}></input>
      <h1 style={{border:border}}>{hellow}</h1>
      {<ChildOne abc={hellow} border={border}/>}
      {<ChildTwo xyz={hellow} border={border}/>}
       {/* {<ChildFour xyz={hellow}/>}
      {< ChildThree rrr={hellow}/>} 
      {< ChildTwo gg={hellow}/>}
      {<Childfive kk={hellow}/>}  */}
    </div>
  )
}

export default LearnProps