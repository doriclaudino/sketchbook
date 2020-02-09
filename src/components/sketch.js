import React from "react";
import styled from "@emotion/styled";

const SketchWrapper = styled.div`
  min-height: 100px;
  min-width: 100px;
  display: flex;
  flex-flow: column;
  align-items: center;

`;

class Sketch extends React.Component {
  constructor(props) {
    super(props);
    this.sketchRef = React.createRef();
    this.canvas = null;
  }
  componentDidMount() {
    this.canvas = new p5(this.props.sketch, this.sketchRef.current);
  }
  componentDidUpdate() {
    this.canvas.remove();
    this.canvas = new p5(this.props.sketch, this.sketchRef.current);
  }
  componentWillUnmount() {
    this.canvas.remove();
  }
  render() {
    return <SketchWrapper ref={this.sketchRef} />;
  }
}

export default Sketch;
