import * as React from "react";

export interface HelloProps {
  exampleString: string;
}

export const HelloContainer: React.FunctionComponent<HelloProps> = props => {
  const { exampleString } = props;

  return <h1>Hello from {exampleString}</h1>;
};
