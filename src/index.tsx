import * as React from "react";
import * as ReactDOM from "react-dom";

import { HelloContainer } from "./components/Hello";

export const DATEHub: React.FC = () => {
    return (
        <HelloContainer exampleString="the fellas" />
    )
}

ReactDOM.render(<DATEHub />, document.getElementById("root"));