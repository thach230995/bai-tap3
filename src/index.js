import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// Nếu bạn không sử dụng Redux, hãy xóa hoặc comment phần dưới đây
// import store from './redux/store';
// import { Provider } from 'react-redux';

// Nếu không sử dụng Redux, bạn chỉ cần phần này
ReactDOM.render(
  <App />,
  document.getElementById('root')
);

// Nếu sử dụng Redux, hãy sử dụng đoạn mã dưới đây
// ReactDOM.render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
//   document.getElementById('root')
// );
