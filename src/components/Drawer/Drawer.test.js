import React from "react";
import { render } from "@testing-library/react";
import { shallow } from "enzyme";
import Drawer from "../Drawer";

it("renders without crashing", () => {
  const div = document.createElement("div");
  render(<Drawer />, div);
});
