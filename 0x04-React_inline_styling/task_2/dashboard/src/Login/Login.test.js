import React from "react";
import { shallow } from "enzyme";
import { Login } from "./Login";
import { StyleSheetTestUtils } from "aphrodite";
beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
});
afterEach(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

describe('<Login/>', () => {
    it('Login renders without crashing', () => {
        shallow(<Login/>)
    });
    it('Renders two input tags', () => {
        const wrapper = shallow(<Login/>)
        expect(wrapper.find('input')).toHaveLength(2);
        expect(wrapper.find('label')).toHaveLength(2)
    })
})