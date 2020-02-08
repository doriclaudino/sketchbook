import React from "react";
import styled from "@emotion/styled";

const SketchControls = styled.div`
  min-height: 100px;
  min-width: 100px;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
`;

export default ({ children, ...other }) => (
  <SketchControls id="sketch-controls" {...other}>
    {" "}
    {children}{" "}
  </SketchControls>
);
