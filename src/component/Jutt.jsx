import { colors } from '@mui/material';
import React from 'react'
import { PieChart, Pie, Label , Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, RadialBarChart, RadialBar, Legend, Tooltip } from 'recharts';
// import { RechartsDevtools } from '@recharts/devtools';

// #region Sample data

const Jutt = () => {
  
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
  const data = [
  { name: 'Group A', value: 400, fill: '#0088FE' },
  { name: 'Group B', value: 300, fill: '#00C49F' },
  { name: 'Group C', value: 300, fill: '#FFBB28' },
  { name: 'Group D', value: 200, fill: '#FF8042' },
];

// #endregion
const MyPie = () => (
  <Pie data={data} dataKey="value" nameKey="name" outerRadius="80%" innerRadius="60%" isAnimationActive={false} />
);
const style = {
  top: '50%',
  right: 0,
  transform: 'red',
  lineHeight: '24px',
  colors:"red"

};
  return (
    <div>
      <h1>pie chart in flexbox</h1>
       <PieChart responsive width={600}
       height={300}
       
       >
        <MyPie />
        <Label position="center" fill="#666">
          Flex: 1 1 200px
        </Label>
       
      </PieChart>

     <h1>Radar chart</h1>
  <RadarChart
    width={600}
    height={300}
      responsive
      outerRadius="80%"
      data={Detail}
      margin={{
        top: 20,
        left: 20,
        right: 20,
        bottom: 20,
      }}
    >
      <PolarGrid />
      <PolarAngleAxis dataKey="name" />
      <PolarRadiusAxis />
      <Radar name="Mike" dataKey="fee" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
      
      <Radar name="Lily" dataKey="B" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6} />
      {/* <RechartsDevtools /> */}
    </RadarChart>




     <RadialBarChart
      style={{ width: '100%', maxWidth: '700px', maxHeight: '80vh', aspectRatio: 1.618 }}
      responsive
      cx="30%"
      barSize={14}
      data={Detail}
    >
      <RadialBar label={{ position: 'insideStart', fill: '#cc3030' }} background dataKey="fee" />
      <Legend iconSize={10} layout="vertical" verticalAlign="middle" wrapperStyle={style} />
      <Tooltip />
      {/* <RechartsDevtools /> */}
    </RadialBarChart>
    </div>
  )
}

export default Jutt