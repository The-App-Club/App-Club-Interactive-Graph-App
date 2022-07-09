import {css} from '@emotion/css';
import {createRoot} from 'react-dom/client';
import {Graph} from './components/Graph';
import './styles/index.scss';

const App = () => {
  return (
    <div
      className={css`
        display: grid;
        place-items: center;
        width: 100%;
        min-height: 100vh;
      `}
    >
      <div
        className={css`
          max-width: 40rem;
          width: 100%;
          min-height: 30rem;
        `}
      >
        <Graph />
      </div>
    </div>
  );
};

const container = document.getElementById('root');

const root = createRoot(container);

root.render(<App />);
