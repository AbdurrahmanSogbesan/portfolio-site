import * as React from "react";
import Button from "../components/Button/Button";
import Header from "../components/Header/Header";
import { container } from "./index.module.css";

function IndexPage() {
  return (
    <div className={container}>
      <Header />
      <Button text="Reach out" />
    </div>
  );
}

export default IndexPage;
