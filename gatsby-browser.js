import "./src/styles/global.css";
import p5 from "p5";
import { MenuProvider } from "./src/components/menu-provider";

export const wrapRootElement = ({ element }) => (
  <MenuProvider>{element}</MenuProvider>
);

global.p5 = p5;
