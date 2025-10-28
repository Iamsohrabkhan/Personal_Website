import { ReactLenis } from "lenis/react";
const Template = ({ children }) => {
  return (
    <>
      <ReactLenis root />
      <main>{children}</main>
    </>
  );
};
export default Template;
