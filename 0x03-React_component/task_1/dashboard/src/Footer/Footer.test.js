import React from "react";
import { Footer } from "./Footer";
import { shallow } from "enzyme";

describe('<Footer/>', () => {
    it('Footer renders without crashing', () => {
        shallow(<Footer/>)
    });
    it('Renders the text Copyright', () => {
        const wrapper = shallow(<Footer/>)
        expect(wrapper.text()).toContain('Copyright')
    })
})