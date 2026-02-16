import React from 'react'
import { Bar, BarChart, CartesianGrid, Legend, Line, LineChart,
  AxisInterval,ReferenceLine, ResponsiveContainer, Tooltip, XAxis,
   YAxis, 
   Brush,
   AreaChart,
   Area} from 'recharts'

const Charts = () => {
    const ghugh=[
        {
name:"adeel",
score:450,
prise:670,


    },
      {
name:"sada",
score:5000,
prise:7000,


    },
      {
name:"ali",
score:4800,
prise:6900,


    },
      {
name:"raza",
score:4700,
prise:8000,


    },
      {
name:"numan",
score:3567,
prise:5670,


    },
]
 
   const data=[
    {
      x:-50,
      y:-50
    },
    {
      x:0,
      y:0
    },
    {
      x:50,
      y:50
    },
    {
      x:100,
      y:100
    },
    {
      x:150,
      y:150
    },
    {
      x:200,
      y:200
    },
    {
      x:250,
      y:250
    },
    {
      x:300,
      y:300
    },
    {
      x:350,
      y:350
    },
    {
      x:400,
      y:400
    },
    {
      x:450,
      y:450
    },
    {
      x:500,
      y:500
    },
   ]
  
  return (
    <div>
  {/* {chart('preserveStartEnd')} */}
        <ResponsiveContainer width="600" aspect={2}>
            {/* < LineChart data={ghugh} >
                <CartesianGrid/>
               
               <XAxis dataKey="name" interval={'preserveEnd'} stroke='red'/>
               <YAxis/> */}
               {/* 1) types  */}
                {/* monotone,liner,step,stepbefore,stepafter,basis,basisopen,basisclosed,natural */}
                {/* 2) dotstyling */}
               
               {/* <Line dataKey="score" stroke='red' type='natural' activeDot={{r:10}}/>
               <Line dataKey="prise" stroke='blue' type='basis'  /> */}
                {/* 3) contant styling */}
               {/* <Tooltip contentStyle={{backgroundColor:"green",border:"2px solid blue", color:"white"}} /> */}

               {/* <Legend/> */}
                {/* <RechartsDevtools /> */}
            {/* </LineChart> */}
            
 {/* test start har */}

<h1>navigation and referance</h1>
       
     <LineChart height={500} width={300} data={data}>
      <CartesianGrid />
      <XAxis dataKey={"x"} type='number'/>
      <YAxis type='y'/>
      <Tooltip/>
      <Legend/>
      <ReferenceLine x={0} stroke='red'/>
       <ReferenceLine y={0} stroke='blue'/>
<Line dataKey={"y"} stroke='black'/>
     </LineChart>

     <h1>Hilight</h1>
     <LineChart width={300} height={500} data={data} >
      <CartesianGrid/>
      <XAxis dataKey={"x"} stroke='blue'/>
      <YAxis dataKey={"y"} stroke='yallow'/>
      <Tooltip/>
      <Legend/>
      <Line dataKey={"y"} stroke='red' dot={{r:6}}/>
      <Brush dataKey={"x"} height={30}/>
     </LineChart>

<h1>biaxial</h1>

      <LineChart width={300} height={500} data={ghugh}
     
      >
      <CartesianGrid/>
      <XAxis dataKey={"name"} stroke='blue' />
      
        
      <Tooltip/>
      <Legend/>
      <Line dataKey={"score"} stroke='red' type="monotone" />
      <Line dataKey={"prise"} stroke='red' type="monotone" />
     </LineChart>


<h1>active dot</h1>
 <LineChart width={300} height={500} data={ghugh}
 
 >
      <CartesianGrid/>
      <XAxis dataKey={"name"} stroke='blue'/>
      
        
      <Tooltip/>
      <Legend/>
      <Line dataKey={"score"} stroke='red' type="monotone"   dot={{ r: 6, stroke: "black", strokeWidth: 2 }}
            activeDot={{ r: 10 }}/>
      {/* <Line dataKey={"prise"} stroke='red' type="monotone" /> */}
     </LineChart>
     


        </ResponsiveContainer>





    </div>
  )
}

export default Charts