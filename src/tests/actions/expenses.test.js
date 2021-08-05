import { expect } from "@jest/globals";
import { addExpense, editExpense, removeExpense } from "../../actions/expenses";

test('should setup removeExpense action object', () => {
    const action = removeExpense({ id: '1233445' });
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '1233445'
    })

})

test('should generate the updated expense object', () => {
    const action = editExpense('1234', {description: 'cookies', amount: 123, createdAt: 1});
    expect(action).toEqual({
        type: "EDIT_EXPENSE",
        id: "1234",
        update: {
            description: "cookies",
            amount: 123,
            createdAt: 1,
        },
    });
})

test('should setup addExopense action object with provided values', () => {
    const expenseData = {
        description: "Cookies",
        amount: 123,
        createdAt: 1,
        note: "Cokies expense note",
    };
    const action = addExpense(expenseData)
    expect(action).toEqual({
        type: "ADD_EXPENSE",
        expense: {
            ...expenseData,
            id: expect.any(String)
        },
    });
})

test('should setup addExpense action object with the default values', () => {
    const expenseData = {
        description: '',
        note: '',
        amount: 0,
        createdAt: 0,
    }

    const action = addExpense(expenseData)
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id: expect.any(String)
        }
    })
})



