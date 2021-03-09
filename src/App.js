import React from 'react';
import { IconStyle } from './assets/iconfont/iconfont';
import { Provider } from 'react-redux'
import { GlobalStyle } from './style';
import {renderRoutes} from "react-router-config"; //读取路由配置，转换为Route标签
import routes from "./routes/index";
import { HashRouter } from 'react-router-dom';
import store from './store/index'

function App() {
  return (
    <Provider store = {store}>
      <HashRouter>
        <GlobalStyle></GlobalStyle>
        <IconStyle></IconStyle>
        { renderRoutes (routes) }
      </HashRouter>
    </Provider>
  );
}

export default App;
