import React from 'react'
import {shallow} from 'enzyme'
import Header  from './Header'

describe('<Header/>', () => {
    it('Header component renders without crashing', () => {
      shallow(<Header/>)
    })
    it('Header component renders the img and h1 tag', () => {
        const wrapper = shallow(<Header/>)
        expect(wrapper.find('img', 'h1').children())
        // expect(wrapper.contains(<img/>))
        // expect(wrapper.contains(<h1></h1>))
    })
    
})