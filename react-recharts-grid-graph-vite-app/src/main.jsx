import {css} from '@emotion/css';
import styled from '@emotion/styled';
import {createRoot} from 'react-dom/client';
import {BarGraph} from './components/BarGraph';
import {AreaGraph} from './components/AreaGraph';
import {LineGraph} from './components/LineGraph';
import {PieGraph} from './components/PieGraph';
import {RadarGraph} from './components/RadarGraph';
import {ScatterGraph} from './components/ScatterGraph';

import './styles/index.scss';

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(7, 1fr);
  gap: 1rem;
  padding: 0.5rem;
  width: 100%;
  min-height: 100vh;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6, 1fr);
  }

  > div {
    width: 100%;
    height: 100%;
    padding: 1.5rem;
    border: 1px solid;
    width: 100%;
    min-height: 10rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 1200px) {
    .div1 {
      grid-area: 1 / 1 / 2 / 2 !important;
    }
    .div2 {
      grid-area: 1 / 2 / 2 / 3 !important;
    }
    .div3 {
      grid-area: 2 / 1 / 3 / 2 !important;
    }
    .div4 {
      grid-area: 2 / 2 / 3 / 3 !important;
    }
    .div5 {
      grid-area: 3 / 1 / 4 / 2 !important;
    }
    .div6 {
      grid-area: 3 / 2 / 4 / 3 !important;
    }
  }

  @media (max-width: 768px) {
    .div1 {
      grid-area: 1 / 1 / 2 / 2 !important;
    }
    .div2 {
      grid-area: 2 / 1 / 3 / 2 !important;
    }
    .div3 {
      grid-area: 3 / 1 / 4 / 2 !important;
    }
    .div4 {
      grid-area: 4 / 1 / 5 / 2 !important;
    }
    .div5 {
      grid-area: 5 / 1 / 6 / 2 !important;
    }
    .div6 {
      grid-area: 6 / 1 / 7 / 2 !important;
    }
  }

  .div1 {
    grid-area: 1 / 1 / 3 / 4;
  }
  .div2 {
    grid-area: 1 / 4 / 3 / 7;
  }
  .div3 {
    grid-area: 3 / 1 / 5 / 3;
  }
  .div4 {
    grid-area: 3 / 3 / 5 / 5;
  }
  .div5 {
    grid-area: 3 / 5 / 5 / 7;
  }
  .div6 {
    grid-area: 5 / 1 / 8 / 7;
  }
`;

const App = () => {
  return (
    <StyledGrid>
      <div className="div1">
        <BarGraph />
      </div>
      <div className="div2">
        <LineGraph />
      </div>
      <div className="div3">
        <PieGraph />
      </div>
      <div className="div4">
        <RadarGraph />
      </div>
      <div className="div5">
        <ScatterGraph />
      </div>
      <div className="div6">
        <AreaGraph />
      </div>
    </StyledGrid>
  );
};

const container = document.getElementById('root');

const root = createRoot(container);

root.render(<App />);
