import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json'
import Header from './Header'

const props = {
    mobileMenuHandler: jest.fn(),
    mobileMenu: false,
    children: '<div>Hello, world!</div>'
}

const headerWithProps = props => shallow(<Header {...props} />)

describe('Header', () => {
    const component = headerWithProps(props)
    it('renders correctly', () => {
        const wrapper = shallow(<Header />);
        expect(toJson(wrapper)).toMatchSnapshot();
    });

    it("render props Header", () => {
        const wrapper = component.find(".header");
        expect(wrapper).toHaveLength(1);
    });
});