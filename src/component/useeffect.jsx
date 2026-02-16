import React, { useState } from 'react'
import ChildOne from './ChildOne';
import ChildTwo from './ChildTwo';
import ChildThree from './ChildThree';
import ChildFour from './ChildFour';
import Childfive from './childfive';
const Useeffect = () => {
  const [color,setColor]=useState("");
  // const [border,setBorder]=useState("6px solid red")
//  
  return (
    <div>useeffect

<input type='text' onChange={(e)=>setColor(e.target.value)}></input>
<h1 >{color}</h1>
{< ChildOne abc={color}  />}
{< ChildTwo s={color} />}
{< ChildThree b={color} />}
{< ChildFour h={color} />}
{< Childfive e={color} />}
    </div>
  )
}

export default Useeffect
