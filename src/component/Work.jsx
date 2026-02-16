import React, { useState } from 'react'
import { Area, AreaChart, Bar, CartesianGrid, Legend, ResponsiveContainer,
    BarChart, Tooltip, XAxis,
    ReferenceLine, YAxis,  LegendPayload ,Label,LabelList } from 'recharts'
    
const Work = () => {
    
        const dat = [
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
const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink', 'black'];

// #region Sample data
const data = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];
const renderCustomizedLabel = (props: LabelProps) => {
  const { x, y, width, value } = props;

  if (x == null || y == null || width == null) {
    return null;
  }
  const radius = 10;

  return (
    <g>
      <circle cx={Number(x) + Number(width) / 2} cy={Number(y) - radius} r={radius} fill="#8884d8" />
      <text
        x={Number(x) + Number(width) / 2}
        y={Number(y) - radius}
        fill="#fff"
        textAnchor="middle"
        dominantBaseline="middle"
      >
        {String(value).split(' ')[1]}
      </text>
    </g>
  );
};


// #endregion
const getPath = (x: number, y: number, width: number, height: number) => {
  return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
  Z`;
};

const TriangleBar = (props: BarShapeProps) => {
  const { x, y, width, height, index } = props;

  const fill = colors[index % colors.length];

  return <path d={getPath(Number(x), Number(y), Number(width), Number(height))} stroke="none" fill={fill} />;
};

const CustomColorLabel = (props: LabelProps) => {
  const fill = colors[(props.index ?? 0) % colors.length];
  return <Label {...props} fill={fill} />;
};

 const Detail = [
        {
            name: "HTML",
            fee: 5000,
            students: 3200,
            age:45,
        },
        {
            name: "CSS",
            fee: 6000,
            students: 2700,
            age:40,
        },

        {
            name: "JAVA",
            fee: 3500,
            students: 5000,
            age:32,

        },
        {
            name: "REACT",
            fee: 7000,
            students: 3900,
            age:18,
        },
        {
            name: "NEXT",
            fee: 8000,
            students: 9200,
            age:10,
        }
    ]
      
  return (
    <div>

<h1>ghugh</h1>

    <BarChart
     width={600}
     height={300}
      responsive
      data={data}
      margin={{
        top: 20,
        right: 0,
        left: 0,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <Tooltip cursor={{ fillOpacity: 0.5 }} />
      <XAxis dataKey="name" />
      <YAxis width="auto" />
      <Bar dataKey="uv" fill="#8884d8" shape={TriangleBar}>
        <LabelList content={CustomColorLabel} position="top" />
      </Bar>
      {/* <RechartsDevtools /> */}
    </BarChart>

    <BarChart
      style={{ width: '100%', maxWidth: '700px', maxHeight: '70vh', aspectRatio: 1.618 }}
      responsive
      data={data}
      margin={{
        top: 25,
        right: 0,
        left: 0,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis width="auto" />
      <Tooltip />
      <Legend />
      <Bar dataKey="pv" fill="#8884d8" minPointSize={5}>
        <LabelList dataKey="name" content={renderCustomizedLabel} />
      </Bar>
      <Bar dataKey="uv" fill="#82ca9d" minPointSize={10} />
      {/* <RechartsDevtools /> */}
    </BarChart>
    </div>
  )
}

export default Work