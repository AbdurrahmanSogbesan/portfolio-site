import * as React from "react";
import Header from "../components/Header/Header";
import { container } from "./index.module.css";

function IndexPage() {
  return (
    <div className={container}>
      <Header />
    </div>
  );
}

export default IndexPage;
