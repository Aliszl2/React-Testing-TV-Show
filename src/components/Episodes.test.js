import React from "react";
import Episodes from "./Episodes";
import * as rtl from "@testing-library/react";

describe("Display component", () => {
  let wrapper;
  afterEach(rtl.cleanup);

  beforeEach(() => {
    const episodes = [];
    wrapper = rtl.render(<Episodes episodes={episodes} />);
  });

  it.skip("renders without crashing", async () => {
    const episodeDiv = await wrapper.queryByText("Season");

    expect(episodeDiv).toBeInTheDocument();
    expect(episodeDiv).toBeVisible();
  });
});
