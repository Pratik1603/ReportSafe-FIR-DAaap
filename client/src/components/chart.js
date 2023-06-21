
import {
  AreaChart,
  Area,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  YAxis,
} from "recharts";


const data = [
  { name: "January", Total: 1200 },
  { name: "February", Total: 2100 },
  { name: "March", Total: 800 },
  { name: "April", Total: 1600 },
  { name: "May", Total: 900 },
  { name: "June", Total: 1700 },
];

const Chart = ({ aspect, title }) => {
  return (
    <div className="chart h-full ">
      <div className="text-center font-bold text-[#22317c] mt-2 mb-8 md:mb-[-5%]">{title}</div>
      <ResponsiveContainer width="95%" aspect={aspect} >

        <AreaChart
          className="mx-auto"
          data={data}
          margin={{  left: 32 ,bottom:30}}
        >
          <defs>
            <linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#96bbd9" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#22317c" stopOpacity={0.1} />
            </linearGradient>
          </defs>
          <XAxis dataKey="name" stroke="black" />
          
          <CartesianGrid strokeDasharray="3 3" className="chartGrid" />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="Total"
            stroke="#22317c"
            fillOpacity={10}
            fill="url(#total)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
