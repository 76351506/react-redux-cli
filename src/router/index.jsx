import React from "react";
import RouterConfig from "@/router/routes";
import { Route, Switch, Redirect } from "react-router-dom";

function RouterView(props) {
  const routes = props.routes ? props.routes : RouterConfig;
  return (
    <Switch>
      {routes.length &&
        routes.map(router => {
          return router.redirect ? (
            <Redirect
              to={router.redirect}
              from={router.path}
              key={router.name}
              exact
            />
          ) : (
            <Route
              path={router.path}
              key={router.name}
              render={routerConfig => {
                const RouterComponent = router.component;
                return (
                  <RouterComponent
                    {...routerConfig}
                    routes={router.children}
                  ></RouterComponent>
                );
              }}
            ></Route>
          );
        })}
    </Switch>
  );
}

export default RouterView;
