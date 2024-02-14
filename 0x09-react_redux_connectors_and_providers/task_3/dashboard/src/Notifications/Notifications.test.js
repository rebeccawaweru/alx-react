import React from "react";
import { shallow } from "enzyme";
import Notifications from './Notifications';
import NotificationItem from "./NotificationItem";
describe('<Notifications/>', ()=> {
    //ensure it renders without crashing
    it('renders without crashing', ()=> {
        shallow(<Notifications/>)
    });

    it('renders the NotificationItem', () =>{
        const wrapper = shallow(<Notifications displayDrawer={true}/>)
        expect(wrapper.find(NotificationItem)).toHaveLength(3)
        // const firstNotification = wrapper.find(NotificationItem).first();
        // expect(firstNotification.find('li').html).toContain("New course available"); // Update the expected HTML content
    })
    // it('renders three list items', ()=>{
    //     const wrapper = shallow(<Notifications/>);
    //     expect(wrapper.find('li')).toHaveLength(3);
    // })

    it('renders text', ()=>{
        const wrapper = shallow(<Notifications displayDrawer={false}/>);
        expect(wrapper.text()).toContain('Here is the list of notifications')
    });
    it('verify that clicking on the menu item calls handleDisplayDrawer', ()=>{
        const handleDisplayDrawer = jest.fn();
        const handleHideDrawer = jest.fn();

        const wrapper = shallow(<Notifications handleDisplayDrawer={handleDisplayDrawer} handleHideDrawer={handleHideDrawer}/>);
        wrapper.find("div").at(0).simulate("click");
        expect(handleDisplayDrawer).toHaveBeenCalled();
        expect(handleHideDrawer).not.toHaveBeenCalled()

        jest.restoreAllMocks();
    });

    it('verify that clicking on the button calls handleHideDrawer', ()=>{
        const handleDisplayDrawer = jest.fn();
        const handleHideDrawer = jest.fn();

        const wrapper = shallow(<Notifications displayDrawer handleDisplayDrawer={handleDisplayDrawer} handleHideDrawer={handleHideDrawer}/>);
        wrapper.find("button").at(0).simulate("click");
        expect(handleDisplayDrawer).not.toHaveBeenCalled();
        expect(handleHideDrawer).toHaveBeenCalled()

        jest.restoreAllMocks();
    });
})