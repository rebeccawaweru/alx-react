import React from "react";
import { shallow } from "enzyme";
import Notifications from './Notifications';

describe('<Notifications/>', ()=> {
    //ensure it renders without crashing
    it('renders without crashing', ()=> {
        shallow(<Notifications/>)
    });

    it('renders three list items', ()=>{
        const wrapper = shallow(<Notifications/>);
        expect(wrapper.find('li')).toHaveLength(3);
    })

    it('renders text', ()=>{
        const wrapper = shallow(<Notifications/>);
        expect(wrapper.text()).toContain('Here is the list of notifications')
    })
})