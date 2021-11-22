import ReactDOM from 'react-dom';
import { createOvermind } from 'overmind';
import { Provider } from 'overmind-react';
import { config } from 'state';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const overmind = createOvermind(config);

const appWithOvermind = () => (
  <Provider value={overmind}>
    <App />
  </Provider>
);

ReactDOM.render(appWithOvermind(), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
