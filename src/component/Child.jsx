import React, { createContext, useContext } from 'react'
// import Ghu from '../contex/Contexttt'
import { Area, AreaChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
const Child = () => {
    // const itOk=useContext(Ghu);
    const data = [
  {
    x: -50,
    y: -50,
  },
  {
    x: 0,
    y: 0,
  },
  {
    x: 50,
    y: 50,
  },
  {
    x: 100,
    y: 100,
  },
  {
    x: 150,
    y: 150,
  },
  {
    x: 200,
    y: 200,
  },
  {
    x: 250,
    y: 250,
  },
  {
    x: 350,
    y: 350,
  },
  {
    x: 400,
    y: 400,
  },
  {
    x: 450,
    y: 450,
  },
  {
    x: 500,
    y: 500,
  },
];
 const Detail = [
        {
            name: "HTML",
            fee: 5000,
            students: 3200
        },
        {
            name: "CSS",
            fee: 6000,
            students: 2700
        },

        {
            name: "JAVA",
            fee: 3500,
            students: 5000
        },
        {
            name: "REACT",
            fee: 7000,
            students: 3900
        },
        {
            name: "NEXT",
            fee: 8000,
            students: 9200
        }
    ]
  return (
    <div>
      <h1>ghgu</h1>
        
            {/* {itOk.name} */}
            <ResponsiveContainer>
<AreaChart width={300} height={500} data={data} >
<CartesianGrid/>
<XAxis dataKey={"data"} stroke='red'/>
{/* <YAxis dataKey={"y"} stroke='blue'/> */}
<Tooltip/>
<Legend/>
<Area dataKey={"fee"} stroke='yellow'/>
</AreaChart>

 

            </ResponsiveContainer>
            
            
            
    </div>
  )
}

export default Child