import React from "react";
import { shallow } from "enzyme";
import Grid from "@material-ui/core/Grid";

const props = {
  image: "/assets/image/test/1",
  children: <span>Test child</span>,
  primaryButton: {
    text: "do something important!",
    link: "/link/to/something/important"
  },
  secondaryButton: {
    text: "not as important",
    link: "/link/to/not-important"
  }
};
import { Hero } from "./Hero";
import { Button } from "@material-ui/core";

describe("<Hero />", () => {
  it("renders correct props", () => {
    const wrapper = shallow(
      <Hero
        image={props.image}
        children={props.children}
        primaryButton={props.primaryButton}
        secondaryButton={props.secondaryButton}
      />
    );
    console.log(wrapper.find("div").get(0).props.style.backgroundImage);
    expect(wrapper.find("div").get(0).props.style.backgroundImage).toBe('url("/assets/image/test/1")');

    expect(
      wrapper
        .find("span")
        .first()
        .text()
    ).toEqual("Test child");

    expect(
      wrapper
        .find(Grid)
        .find(Button)
        .first()
        .text()
    ).toEqual("do something important!");

    expect(
      wrapper
        .find(Grid)
        .find(Button)
        .first()
        .props().to
    ).toEqual("/link/to/something/important");

    expect(
      wrapper
        .find(Grid)
        .find(Button)
        .at(1)
        .text()
    ).toEqual("not as important");

    expect(
      wrapper
        .find(Grid)
        .find(Button)
        .at(1)
        .props().to
    ).toEqual("/link/to/not-important");
  });
});
