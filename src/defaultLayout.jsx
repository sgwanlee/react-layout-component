import React from "react";
import { Route } from "react-router-dom";

const DefaultLayout = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props => (
        <div className="default" style={{ background: "yellow" }}>
          <Component {...props} />
        </div>
      )}
    />
  );
};

export default DefaultLayout;
