import React from "react";
import { useInterestPageHooks } from "./interest-page-hooks";

const InterestPage = () => {
  useInterestPageHooks();
  return <div></div>;
};

const Box = () => {
  return <div style={{ width: "100%", height: "100%" }}> </div>;
};

export default InterestPage;
