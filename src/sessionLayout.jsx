import React from "react";
import { Route } from "react-router-dom";

const SessionLayout = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props => (
        <div style={{ background: "red" }}>
          <Component {...props} />
        </div>
      )}
    />
  );
};

export default SessionLayout;
