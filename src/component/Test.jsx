import React, { useState } from 'react'
import { Area, AreaChart, Bar, CartesianGrid, Legend, ResponsiveContainer,
    BarChart, Tooltip, XAxis,
    ReferenceLine, YAxis,  LegendPayload  } from 'recharts'
const Test = () => {
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
    x: -450,
    y: -450,
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
            students: 3200,
            age:45,
            number:1090,
            id:676,
            stNumber:377
        },
        {
            name: "CSS",
            fee: 6000,
            students: 2700,
            age:40,
            number:1300,
            id:46,
            stNumber:58
        },

        {
            name: "JAVA",
            fee: 3500,
            students: 5000,
            age:32,
            number:100,
            id:45,
            stNumber:23

        },
        {
            name: "REACT",
            fee: 7000,
            students: 3900,
            age:18,
            number:1000,
            id:456,
            stNumber:78
        },
        {
            name: "NEXT",
            fee: 8000,
            students: 9200,
            age:10,
            number:1000,
            id:456,
            stNumber:78
        }
    ]
   
  return (
    <div><h1>Area</h1>
{/* <ResponsiveContainer> */}
<AreaChart width={500} height={300} data={Detail} >
<CartesianGrid/>
<XAxis dataKey="name" stroke='red'/>
<YAxis width="auto"  stroke='blue'/>
<Tooltip/>
<Legend/>
<Area  dataKey="fee" type="monotone" stroke='red' fill='yellow'/>

</AreaChart>
<h1>stacked area </h1>

<AreaChart width={500} height={300} data={Detail} >
<CartesianGrid/>
<XAxis dataKey="name" stroke='red'/>
<YAxis width="auto"  stroke='blue'/>
<Tooltip/>
<Legend/>
<Area dataKey="fee" type="monotone" stroke='red' fill='yellow'/>
<Area dataKey="students" type="monotone" stroke='red' fill='green'/>

</AreaChart>
 
 <h1>bar chart</h1>
 <BarChart width={500} height={300} data={Detail} >
<CartesianGrid/>
<XAxis dataKey="name" stroke='red'/>
<YAxis width="auto"  stroke='blue'/>
<Tooltip/>
<Legend/>
<Bar  dataKey="fee" type="monotone" stroke='red' fill='yellow'/>

</BarChart>
<h1>nagtive bar</h1>
<BarChart width={500} height={300} data={data} >
<CartesianGrid/>
<XAxis dataKey="x" stroke='red'/>
<YAxis width="auto"  stroke='blue'/>
<Tooltip/>
      <ReferenceLine y={0} stroke="#000" />
<Legend/>
<Bar  dataKey="y" type="monotone" stroke='red' fill='yellow'/>
<Bar  dataKey="x" type="monotone" stroke='red' fill='green'/>
</BarChart>
            {/* </ResponsiveContainer> */}



    </div>
  )
}

export default Test