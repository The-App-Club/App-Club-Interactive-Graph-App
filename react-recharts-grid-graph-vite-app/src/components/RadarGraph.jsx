import * as d3 from 'd3';
import {css} from '@emotion/css';
import {useState} from 'react';
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from 'recharts';

const data = [
  {
    subject: 'Math',
    A: 120,
    B: 110,
    fullMark: 150,
  },
  {
    subject: 'Chinese',
    A: 98,
    B: 130,
    fullMark: 150,
  },
  {
    subject: 'English',
    A: 86,
    B: 130,
    fullMark: 150,
  },
  {
    subject: 'Geography',
    A: 99,
    B: 100,
    fullMark: 150,
  },
  {
    subject: 'Physics',
    A: 85,
    B: 90,
    fullMark: 150,
  },
  {
    subject: 'History',
    A: 65,
    B: 85,
    fullMark: 150,
  },
];

const COLORS = d3.schemeTableau10;
const RadarGraph = () => {
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
      <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
        <PolarGrid />
        <PolarAngleAxis dataKey="subject" />
        <PolarRadiusAxis />
        <Radar
          name="Mike"
          dataKey="A"
          stroke="#8884d8"
          fill="#8884d8"
          fillOpacity={0.6}
        />
      </RadarChart>
    </ResponsiveContainer>
  );
};

export {RadarGraph};
