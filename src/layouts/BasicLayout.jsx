import React from "react";
import { Link, Route, useHistory, Redirect } from "react-router-dom";
import ProLayout, { DefaultFooter } from "@ant-design/pro-layout";

import { route, flatRoutes } from "assets/page-data";

import RightContents from "components/RightContent";

const defaultFooterDom = (
  <DefaultFooter
    copyright={`${new Date().getFullYear()} Nowinvoice Co., Ltd.`}
    links={[
      {
        key: "Nowinvoice",
        title: "Nowinvoice Co.,Ltd",
        href: "https://www.nowinvoice.com",
        blankTarget: true,
      },
    ]}
  />
);

const App = ({ settings, children, ...props }) => {
  const history = useHistory();

  const checkPermission = (path, target, Exception) => {
    return target;
  };

  const menuDataRender = (menuList) =>
    menuList.map((item) => {
      const localItem = {
        ...item,
        children: item.children ? menuDataRender(item.children) : undefined,
      };

      return checkPermission(item.path, localItem, null);
    });

  if (history.location.pathname === "/") {
    return <Redirect to="/dashboard" />;
  }

  return (
    <ProLayout
      title={"Nowinvoice"}
      // onCollapse={handleMenuCollapse}
      onMenuHeaderClick={() => history.push("/")}
      menuItemRender={(menuItemProps, defaultDom) => {
        if (menuItemProps.isUrl || !menuItemProps.path) {
          return defaultDom;
        }
        return <Link to={menuItemProps.path}>{defaultDom}</Link>;
      }}
      breadcrumbRender={(routers = []) => [
        {
          path: "/",
          breadcrumbName: "Home",
        },
        ...routers,
      ]}
      itemRender={(route, params, routes, paths) => {
        const first = routes.indexOf(route) === 0;
        return first ? (
          <Link to={paths.join("/")}>{route.breadcrumbName}</Link>
        ) : (
          <span>{route.breadcrumbName}</span>
        );
      }}
      footerRender={() => defaultFooterDom}
      menuDataRender={menuDataRender}
      rightContentRender={() => <RightContents />}
      route={route}
      {...props}
      {...settings}
    >
      {flatRoutes.map(({ path, component }) => (
        <Route key={path} path={path} component={component} />
      ))}
    </ProLayout>
  );
};

export default App;
