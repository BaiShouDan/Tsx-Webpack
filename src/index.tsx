import * as React from "react";
import * as ReactDOM from "react-dom";
import "./style.css";

import { Hello } from "./components/Hello";

ReactDOM.render(
    <Hello compiler="TypeScript" framework="React" />,
    document.getElementsByTagName('body')[0]
);