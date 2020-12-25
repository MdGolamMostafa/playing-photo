import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { store } from './redux/store/store';

ReactDOM.render(
<Provider store={store}>
      <App/>
</Provider>
  ,
  document.getElementById('root')
);
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
  
//   ,
//   document.getElementById('root')npm install react-bootstrap bootstrap

// );

reportWebVitals();
