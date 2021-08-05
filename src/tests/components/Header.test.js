import Header from "../../components/Header";
import React from "react";
import toJson from "enzyme-to-json";
import { shallow } from "enzyme";
import { expect } from "@jest/globals";

test('should render Header correctly', () => {
    const wrapper = shallow(<Header />)
    expect(toJson(wrapper)).toMatchSnapshot(); 
})
