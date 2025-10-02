import { ReactLenis } from "lenis/react";
const Template = ({ children }) => {
  return (
    <>
      <ReactLenis root />;<div>{children}</div>;
    </>
  );
};
export default Template;
