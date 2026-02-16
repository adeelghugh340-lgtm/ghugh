import React, { useState } from 'react'
import { FaDiceOne,FaDiceTwo,FaDiceThree,FaDiceFour,FaDiceFive,FaDiceSix } from "react-icons/fa";

const sides=[
 <FaDiceOne />,
  <FaDiceTwo />,
   <FaDiceThree/>,
   <FaDiceFour/>,
    <FaDiceFive />,
     <FaDiceSix />,
];

const ChildOne = () => {
 const[die1,setDie1]=useState(sides[0]);
 const[die2,setDie2]=useState(sides[0]);
 const [isRolling,setIsRolling]=useState(false);
 const roll = ()=>{
setIsRolling(true);
setTimeout(() =>{
setIsRolling(false);
setDie1(sides[Math.floor(Math.random() * sides.length) ]);
setDie2(sides[Math.floor(Math.random() * sides.length) ]);

},1000);
 };
  // const {border,abc}=props;
  // const{border,abc}=props;
  const dieClassname = `die ${isRolling ?  'die-shaking' : ''}`;
    return (
    <div>
      <div className="dice-container">
        <h2>Dice Rolling</h2>
        <div className="dice">
          <div className={dieClassname}>{die1}</div>
          <div className={dieClassname}>{die2}</div>
        </div>
        <button disabled={isRolling} onClick={roll}>{isRolling ? 'Rolling' : 'Roll Dice!'}</button>
      </div>




        {/* <h1 style={{border:border}}>props is this {abc}</h1> */}
        {/* <h1>{props.abc}</h1> */}
    </div>
  )
}

export default ChildOne