import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/core";
import Icon from "~components/icon";
import Link from "~components/link";

const P = styled.p`
  padding-bottom: var(--spacing);
`;

const Footer = styled.footer`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: 0 auto;
  padding: var(--spacing);
  max-width: 660px;
  opacity: 0;
  pointer-events: none;
  background: var(--black);
  text-align: left;
  z-index: -1;
  &:target {
    opacity: 1;
    pointer-events: all;
    z-index: 1;
  }
`;

export default () => (
  <Footer id="about">
    <div
      css={css`
        display: flex;
        justify-content: space-between;
        padding-bottom: var(--spacing);
      `}
    >
      <h2> About </h2>{" "}
      <Icon href="#main" label="Return to Sketchbook" icon="close" />
    </div>{" "}
    <P>
      This site presents my hobby using p5js. The code is all available on{" "}
      <Link href="https://github.com/arlodesign/sketchbook/"> GitHub </Link>.{" "}
    </P>{" "}
    <P>
      You can find me on{" "}
      <Link href="https://www.linkedin.com/in/doriclaudino/"> linkedin </Link>{" "}
      and{" "}
      <Link href="https://www.instagram.com/doriclaudino/"> Instagram </Link>.
    </P>{" "}
    <P>
      This is a fork from{" "}
      <Link href="https://sketchbook.arlo.me/"> Arlo sketchbook</Link> you can
      as well check his arts using p5.js on{" "}
      <Link href="https://www.instagram.com/arlodesign/"> Instagram </Link>.
    </P>{" "}
  </Footer>
);
