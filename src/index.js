import React from 'react';
import ReactDOM from 'react-dom/client';
import { createStore } from 'redux';
import './index.css';
import App from './component/App';
import rootReducer from './reducers';





const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
// console.log(store);
// console.log(store.getState());

// store.dispatch({
//   type:"ADD_MOVIES",
//   movies:[{name:"superman"}]
// })
// console.log(store.getState(),"after state");

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App store={store}/>
  </React.StrictMode>
);


