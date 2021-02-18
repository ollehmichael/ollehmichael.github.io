import React from "react";
import { Row, Col } from "antd";
import { useProjectPageHooks } from "./project-page-hooks";

const ProjectPage = () => {
  useProjectPageHooks();
  return (
    <div>
      <Row
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gridTemplateRows: "1fr",
        }}
      ></Row>
      <Row
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 2fr",
          gridTemplateRows: "1fr",
        }}
      ></Row>
    </div>
  );
};

export default ProjectPage;
