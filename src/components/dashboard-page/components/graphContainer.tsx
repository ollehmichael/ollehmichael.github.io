import React, { FC } from "react";
import { red } from "../../../assets/colors";

type GraphContainerProps = {
  title: string;
};

const GraphContainer: FC<GraphContainerProps> = (props) => {
  const { title, children } = props;
  return (
    <div
      style={{
        width: "100%",
        height: 400,
        maxHeight: 400,
        padding: "1em",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        boxShadow: "10px 10px 8px #888888",
      }}
    >
      <div
        style={{
          backgroundColor: red,
          borderRadius: "1.2em",
          color: "#fff",
          padding: "0.5em",
          display: "block",
          fontWeight: "bold",
          fontSize: 12,
        }}
      >
        {title}
      </div>
      {children}
    </div>
  );
};

export default GraphContainer;
