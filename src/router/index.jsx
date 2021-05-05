import React from "react";
import RouterConfig from "@/router/routes";

function RouterView(props) {
  const routes = props.routes ? props.routes : RouterConfig;
  return <div>this is router view</div>;
}

export default RouterView;
