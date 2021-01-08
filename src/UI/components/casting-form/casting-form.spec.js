import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json'
import CastingForm from './casting-form'
import { act } from 'react-dom/test-utils'


describe('CastingForm', () => {
    const component = shallow(<CastingForm />)
    it('renders correctly', () => {
        const wrapper = shallow(<CastingForm />);
        expect(toJson(wrapper)).toMatchSnapshot();
    });

    it("render props Header", () => {
        const wrapper = component.find(".casting_form-wrapper");
        expect(wrapper).toHaveLength(1);
    });
});

