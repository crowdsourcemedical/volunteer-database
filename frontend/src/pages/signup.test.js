import React from 'react'
import { shallow } from 'enzyme'
import SignupPage from './signup'

test('component renders with the correct elements', () => {
  const wrapper = shallow(<SignupPage />)
  expect(wrapper.find('h2')).toHaveText('Sign up')
  expect(wrapper.findWhere((n) => !n.type() && n.text() === 'New volunteer')).toHaveLength(1)
  expect(wrapper.findWhere((n) => !n.type() && n.text() === 'New project')).toHaveLength(1)
})
