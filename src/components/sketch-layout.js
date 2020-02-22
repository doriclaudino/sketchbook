import React, { useState } from "react";
import { StaticQuery, graphql } from "gatsby";
import { css } from "@emotion/core";
import Layout from "~components/layout";
import SEO from "~components/seo";
import Header from "~components/header";
import Icon from "~components/icon";
import Sketch from "~components/sketch";
import SketchTitle from "~components/sketch-title";
import SketchControls from "~components/sketch-controls";
import sketchTitle from "~util/sketch-title";
import Menu from "~components/menu";

export default ({ sketch, path, description }) => (
  <StaticQuery
    query={query}
    render={({ images, sketches }) => {
      const image = images.edges.find(edge =>
        edge.node.relativePath.includes(
          path.replace("/sketch/", "").replace(/\/$/, "")
        )
      );
      const sketchIndex = sketches.edges.findIndex(
        edge => edge.node.path === path
      );
      const { next, previous } = sketches.edges[sketchIndex] || {};
      const [isOpen, setIsOpen] = useState(false);

      return (
        <Layout>                  
          <SEO
            title={sketchTitle(path)}
            ogImage={image ? image.node.childImageSharp.og.src : null}
            twitterImage={image ? image.node.childImageSharp.twitter.src : null}
          />
          <Header>           
            <h1
              css={css`
                grid-area: c;
                text-align: center;
                white-space: nowrap;
              `}
            >
              <SketchTitle path={path} />{" "}
            </h1>{" "}            
            <div> 
              <Icon icon="menu" onClick={()=>setIsOpen(!isOpen)}/>
              <Icon
              to={`/#sketch-${sketchTitle(path)}`}
              label="Back to Index"
              icon="up"
              />
            </div>           
            <Icon to={next && next.path} icon="left" />
            <Icon to={previous && previous.path} icon="right" />            
          </Header>{" "}
          <main>
            <Menu isOpen={isOpen} onStateChange={({isOpen})=>setIsOpen(isOpen)}/> 
            <Sketch sketch={sketch} /> 
            <SketchControls />
            {description && (
              <p
                css={css`
                  padding: var(--spacing);
                `}
              >
                {description}{" "}
              </p>
            )}{" "}
          </main>{" "}
        </Layout>
      );
    }}
  />
);

const query = graphql`
  query {
    sketches: allSitePage(
      filter: { path: { regex: "/sketch/" } }
      sort: { fields: path, order: DESC }
    ) {
      edges {
        node {
          path
        }
        next {
          path
        }
        previous {
          path
        }
      }
    }
    images: allFile(
      filter: { relativePath: { regex: "/[0-9]{4}/" }, ext: { nin: [".js"] } }
      sort: { fields: relativePath, order: DESC }
    ) {
      edges {
        node {
          relativePath
          extension
          childImageSharp {
            twitter: resize(width: 1024) {
              src
            }
            og: resize(width: 1200, height: 630, cropFocus: CENTER) {
              src
            }
          }
        }
      }
    }
  }
`;
