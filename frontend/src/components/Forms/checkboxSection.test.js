import React from "react";
import { shallow } from "enzyme";
import FormLabel from "@material-ui/core/FormLabel";
import FormControlLabel from "@material-ui/core/FormControlLabel";

import Checkboxes from "./checkboxSection";

let onClickTest = 1;

const props = {
  sectionHeader: "Section Header",
  checkboxes: [
    {
      status: false,
      label: "label 1"
    },
    {
      status: true,
      label: "label 2"
    }
  ],
  onSelect: () => (onClickTest = 2)
};

describe("<Checkboxes />", () => {
  it("renders correct props", () => {
    const wrapper = shallow(
      <Checkboxes sectionHeader={props.sectionHeader} checkboxes={props.checkboxes} onSelect={props.onSelect} />
    );

    expect(wrapper.find(FormLabel).text()).toEqual("Section Header");

    expect(wrapper.find(FormControlLabel).length).toEqual(2);

    expect(
      wrapper
        .find(FormControlLabel)
        .first()
        .props().label
    ).toEqual("label 1");

    expect(
      wrapper
        .find(FormControlLabel)
        .at(1)
        .props().label
    ).toEqual("label 2");
  });

  it("increments variable on callback", () => {
    const wrapper = shallow(
      <Checkboxes sectionHeader={props.sectionHeader} checkboxes={props.checkboxes} onSelect={props.onSelect} />
    );

    wrapper
      .find(FormControlLabel)
      .first()
      .simulate("click");
    expect(onClickTest).toEqual(2);
  });

  it("sets correct state on nested <CheckBox />", () => {
    const wrapper = shallow(
      <Checkboxes sectionHeader={props.sectionHeader} checkboxes={props.checkboxes} onSelect={props.onSelect} />
    );
    expect(
      wrapper
        .find(FormControlLabel)
        .first()
        .props().control.props.disabled
    ).toEqual(false);

    expect(
      wrapper
        .find(FormControlLabel)
        .at(1)
        .props().control.props.disabled
    ).toEqual(true);
  });
});
