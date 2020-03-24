import React from "react";
import { shallow } from "enzyme";
import { CardContent, CardHeader } from "@material-ui/core";
import { Typography, Grid, Chip } from "@material-ui/core";

import UserSmallCard from "./UserSmallCard";

const props = {
  skills: ["Skill 1", "Skill 2"],
  name: "Harry",
  status: "Working",
  description: "I think therefore I am"
};

describe("<UserSmallCard />", () => {
  it("renders correct props", () => {
    const wrapper = shallow(<UserSmallCard user={props} />);

    expect(wrapper.find(CardHeader).props().title).toEqual("Harry");
    expect(wrapper.find(CardHeader).props().subheader).toEqual("Working");
    expect(
      wrapper
        .find(Typography)
        .first()
        .text()
    ).toEqual("I think therefore I am");

    expect(
      wrapper
        .find(CardContent)
        .find(Grid)
        .find(Chip).length
    ).toEqual(2);

    expect(
      wrapper
        .find(CardContent)
        .find(Grid)
        .find(Chip)
        .first()
        .props().label
    ).toEqual("Skill 1");

    expect(
      wrapper
        .find(CardContent)
        .find(Grid)
        .find(Chip)
        .at(1)
        .props().label
    ).toEqual("Skill 2");
  });
});
