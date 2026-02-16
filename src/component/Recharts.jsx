import React from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend , ResponsiveContainer, ReferenceLine, } from 'recharts';
import { Brush } from 'recharts';
const Recharts = () => {
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

  return (
    <div>
                    
                   
        
        
        
        <h2>1 Negative Values With Reference Lines</h2>

        <LineChart width={500} height={300} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="x" type="number" />
          <YAxis type="y" />
            <Tooltip />
              <Legend />
          <ReferenceLine x={0} stroke="red" />
          <ReferenceLine y={0} stroke="blue" />
          <Line dataKey="y" stroke="black" />
        </LineChart>


        <h2>2 Highlight And Zoom </h2>

        <LineChart width={500} height={300} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="x" />
          <YAxis />
            <Tooltip />
              <Legend />
          <Line dataKey="y" stroke="blue" dot={{ r: 6 }} />
          <Brush dataKey="x" height={30} />
        </LineChart>


        <h2>3 Customized Dot  
        </h2>

        <LineChart width={500} height={300} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="x" />
          <YAxis />
            <Tooltip />
              <Legend />
          <Line
            dataKey="y"
            stroke="green"
            dot={{ r: 6, stroke: "black", strokeWidth: 2 }}
            activeDot={{ r: 10 }}
          />
        </LineChart>


        <h2> Biaxial</h2>
            <LineChart
              style={{ width: '100%', maxWidth: '700px', maxHeight: '70vh', aspectRatio: 1.618 }}
              responsive
              data={Detail}
              margin={{
                top: 15,
                right: 0,
                left: 0,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis yAxisId="left" width="auto" />
              <YAxis yAxisId="right" orientation="right" width="auto" />
              <Tooltip />
              <Legend />
              <Line yAxisId="left" type="monotone" dataKey="fee" stroke="#8884d8" activeDot={{ r: 8 }} />
              <Line yAxisId="right" type="monotone" dataKey="students" stroke="#82ca9d" />
            </LineChart>
        
    </div>
  )
}

export default Recharts