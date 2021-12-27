import React from "react";
import { shallow } from "enzyme";
import HeaderTabs from "../../components/headerTabs/HeaderTabs";
import TapPanels from "../../components/headerTabs/TapPanels";
import LinuxTab from "../../components/linux/LinuxTab";
import JavascriptTab from "../../components/javascript/JavascriptTab";

describe("HeaderTabs", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<HeaderTabs />);
  });

  it("should render the Page", () => {
    expect(wrapper).toBeTruthy();
  });

  it("should render number of TapPanels", () => {
    expect(wrapper.find(TapPanels)).toBeTruthy();
    expect(wrapper.find(TapPanels)).toHaveLength(2);
  });

  it("should render Linux label", () => {
    expect(wrapper.find("label#Linux")).toBeTruthy();
  });

  it("should render LinuxTab component in the first tab", () => {
    expect(wrapper.find(LinuxTab)).toBeTruthy();
    expect(wrapper.find(TapPanels).first().props()).toHaveProperty("index", 0);
    expect(wrapper.find(TapPanels).first().childAt(0).type()).toEqual(LinuxTab);
  });

  it("should render LinuxTab component as the default selected tab with value = 0", () => {
    expect(wrapper.find(TapPanels).first().props()).toHaveProperty("value", 0);
  });

  it("should render Java script label", () => {
    expect(wrapper.find("label#Java script")).toBeTruthy();
  });

  it("should render JavascriptTab component in second tab", () => {
    expect(wrapper.find(JavascriptTab)).toBeTruthy();
    expect(wrapper.find(TapPanels).at(1).props()).toHaveProperty("index", 1);
    expect(wrapper.find(TapPanels).at(1).childAt(0).type()).toEqual(JavascriptTab);
  });

  // it("should render the selected component after click on the tab", () => {

  //   wrapper.find("#javascriptTab").simulate('click');

  //   expect(wrapper.find(TapPanels).at(1).props()).toHaveProperty("value", 1);
  // });
});
