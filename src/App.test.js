import React from "react";
import * as rtl from "@testing-library/react";
import App from "./App";

describe("App", () => {
  let wrapper;

  afterEach(rtl.cleanup);
  beforeEach(() => {
    wrapper = rtl.render(<App />);
  });

  it("renders without crashing", async () => {
    const selector = await wrapper.findByText("Select a season");
    expect(selector).toBeInTheDocument();
    expect(selector).toBeVisible();
  });
});
