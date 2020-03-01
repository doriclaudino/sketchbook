import { MenuProvider } from "./src/components/menu-provider";

export const wrapRootElement = ({ element }) => (
  <MenuProvider>{element}</MenuProvider>
);