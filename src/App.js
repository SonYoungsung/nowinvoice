import React, { Suspense, lazy } from "react";
import { Route } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import { ConfigProvider } from "@ant-design/pro-provider";
import { Spin } from "antd";

import { history } from "./store";
import { koKRIntl } from "./assets/intl";

import "ant-design-pro/dist/ant-design-pro.css";

const MainPage = lazy(() => import("./pages/MainPage"));

const App = () => {
  return (
    <ConnectedRouter history={history}>
      <ConfigProvider value={{ intl: koKRIntl }}>
        <Suspense fallback={<Spin>Loading...</Spin>}>
          <Route path="/" component={MainPage} />
        </Suspense>
      </ConfigProvider>
    </ConnectedRouter>
  );
};

export default App;
