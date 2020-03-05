import * as React from "react";
import * as ReactDOM from "react-dom";

import { HelloContainer } from "./containers/Hello";

export const DATEHub: React.FC<any> = () => {
  return <HelloContainer exampleString="the fellas" />;
};

ReactDOM.render(<DATEHub />, document.getElementById("root"));
