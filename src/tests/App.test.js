import React from "react";
import { shallow } from "enzyme";
import App from "../App";
import { ThemeProvider } from "@mui/material/styles";
import HeaderTabs from "../components/headerTabs/HeaderTabs";
import { theme } from "../styles/App.style";

let wrapper;

describe("App", () => {
  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it("should render the Page", () => {
    expect(wrapper).toBeTruthy();
  });

  it("should render the Main Page Titles", () => {
    const expectedMainTitle = "المبرمج العربي";
    const expectedSecondaryTitle = "The Arabic Programmer description will be here";
    expect(wrapper.find("#mainTitle").text()).toEqual(expectedMainTitle);
    expect(wrapper.find("#secondaryTitle").text()).toEqual(expectedSecondaryTitle);
  });

  it("should render the component", () => {
    expect(wrapper.find(HeaderTabs)).toBeTruthy();
    expect(wrapper.find(HeaderTabs)).toHaveLength(1);
  });

  it("should render the contents with correct style theme", () => {
    expect(wrapper.find(ThemeProvider)).toBeTruthy();
    expect(wrapper.find(ThemeProvider).prop("theme")).toEqual(theme);
  });

});
