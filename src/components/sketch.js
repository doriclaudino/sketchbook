import React from "react";
import styled from "@emotion/styled";
import "p5.createloop";

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
    try {
      let elements = document.querySelectorAll("div#null.qs_main");
      elements.forEach(e => e.parentElement.removeChild(e));
      this.getSettings && this.getSettings().destroy();
    } catch (error) {
      console.log(`sketch doens't define settings`);
    }
  };

  render() {
    return <SketchWrapper ref={this.sketchRef} />;
  }
}

export default Sketch;
