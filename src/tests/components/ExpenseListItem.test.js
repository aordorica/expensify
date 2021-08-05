import React from 'react';
import ExpenseListItem from '../../components/ExpenseListItem';
import { shallow } from 'enzyme';
import expenses from '../fixtures/expenses';
import { expect } from '@jest/globals';

test('should render ExpenseListItem with the correct test data', () => {
    const expense = expenses[0]
    const wrapper = shallow(<ExpenseListItem expense={...expense} key={expense.id} />)
    expect(wrapper).toMatchSnapshot();
})
