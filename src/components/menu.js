import React from "react";
import { slide as Menu } from 'react-burger-menu';

export default (props) => {
    const styles = {
      bmBurgerButton: {
        position: 'fixed',
      },
      bmBurgerBars: {
        background: '#373a47',
      },
      bmBurgerBarsHover: {
        background: '#a90000',
      },
      bmCrossButton: {
        height: '24px',
        width: '24px',
      },
      bmCross: {
        background: '#bdc3c7',
      },
      bmMenuWrap: {
        position: 'fixed',
        height: '100%',
        left: '0px',
        top: '0px',
      },
      bmMenu: {
        background: '#373a47',
        padding: '2.5em 1.5em 0',
        fontSize: '1.15em',
      },
      bmMorphShape: {
        fill: '#373a47',
      },
      bmItemList: {
        color: '#b8b7ad',
        padding: '0.8em',
      },
      bmItem: {
        display: 'inline-block',
      },
      bmOverlay: {
        background: 'rgba(0, 0, 0, 0.3)',
      },
    };
    return <Menu styles={styles} id="menu" {...props}/>;
  };