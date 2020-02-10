import React from "react";
import styled from "@emotion/styled";

const SketchWrapper = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
`;

class Sketch extends React.Component {
  constructor(props) {
    super(props);
    this.sketchRef = React.createRef();
    this.canvas = null;
    this.getSettings = null;
  }
  componentDidMount() {
    this.canvas = new p5(this.props.sketch, this.sketchRef.current);
    this.getSettings = this.canvas.getSettings;
  }
  componentDidUpdate() {
    this.removeSettings();
    this.canvas.remove();
    this.canvas = new p5(this.props.sketch, this.sketchRef.current);
  }
  componentWillUnmount() {
    this.removeSettings();
    this.canvas.remove();
  }

  removeSettings = () => {
    let settings = this.getSettings && this.getSettings();
    settings && settings.destroy();
  };

  render() {
    return <SketchWrapper ref={this.sketchRef} />;
  }
}

export default Sketch;
