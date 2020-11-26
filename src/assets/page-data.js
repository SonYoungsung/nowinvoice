import React from "react";
import * as ICO from "@ant-design/icons";

import DashboardPage from "pages/dashboard";
import BoardPage from "pages/board";

// export interface MenuDataItem {
//   authority?: string[] | string;
//   children?: MenuDataItem[];
//   hideChildrenInMenu?: boolean;
//   hideInMenu?: boolean;
//   icon?: React.ReactNode;
//   locale?: string | false;
//   name?: string;
//   key?: string;
//   path?: string;
//   [key: string]: any;
//   parentKeys?: string[];
// }

export const route = {
  routes: [
    {
      path: "/dashboard",
      name: "대시보드",
      icon: <ICO.DashboardOutlined />,
      component: DashboardPage,
    },
    {
      path: "/board",
      name: "게시판",
      icon: <ICO.SettingOutlined />,
      component: BoardPage,
    },
  ],
};

const makeFlatRoute = (routes) => {
  return routes.reduce((acc, { path, component, name, icon, routes }) => {
    const childrenRoutes = routes ? makeFlatRoute(routes) : [];
    if (!component) {
      return [...acc, ...childrenRoutes];
    }
    return [...acc, ...childrenRoutes, { path, component, name, icon }];
  }, []);
};

export const flatRoutes = makeFlatRoute(route.routes);
