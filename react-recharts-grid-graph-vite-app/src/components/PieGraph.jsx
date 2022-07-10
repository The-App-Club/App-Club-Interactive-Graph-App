import * as d3 from 'd3';
import {css} from '@emotion/css';
import {useState} from 'react';
import {
  PieChart,
  Cell,
  Pie,
  Legend,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const data = [
  {name: 'Group A', value: 400},
  {name: 'Group B', value: 300},
  {name: 'Group C', value: 300},
  {name: 'Group D', value: 200},
  {name: 'Group E', value: 278},
  {name: 'Group F', value: 189},
];

const COLORS = d3.schemeTableau10;
const PieGraph = () => {
  const [resized, setResized] = useState(new Date());

  const handleResize = (e) => {
    setResized(new Date());
  };

  useState(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <ResponsiveContainer
      className={css`
        max-width: 500px;
        @media (max-width: 1200px) {
          max-width: 400px;
        }
        @media (max-width: 800px) {
          max-width: 350px;
        }
        @media (max-width: 768px) {
          max-height: 300px;
        }

        max-height: 300px;
        width: 100%;
        height: 100%;
        margin: 30px 0 0 10px;
      `}
    >
      <PieChart width={'100%'} height={'100%'}>
        <Pie
          dataKey="value"
          isAnimationActive={false}
          data={data}
          cx="50%"
          cy="50%"
          outerRadius={120}
          fill="#8884d8"
          label
        >
          {data.map((entry, index) => {
            return (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            );
          })}
        </Pie>
        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
  );
};

export {PieGraph};
