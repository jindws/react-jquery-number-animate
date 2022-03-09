import assert from "assert";

import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import Rnum from "../src";
describe("Rnum Test", () => {
  let node;

  beforeEach(() => {
    node = document.createElement("div");
  });

  afterEach(() => {
    unmountComponentAtNode(node);
  });

  it("TEST START", () => {
    render(<Rnum start={12345} />, node, () => {
      assert.equal(node.innerText, "12345");
    });
  });
});
