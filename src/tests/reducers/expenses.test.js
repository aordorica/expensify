import expensesReducer from "../../reducers/expenses";
import { expect } from "@jest/globals";
import expenses from "../fixtures/expenses";

test("should setup default values", () => {
    const state = expensesReducer(undefined, { type: "@@INIT" });
    expect(state).toEqual([]);
});

test("should remove expense by id", () => {
    const action = {
        type: "REMOVE_EXPENSE",
        id: expenses[1].id,
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[0], expenses[2]]);
});

test("should not remove expense if the id is not found", () => {
    const action = {
        type: "REMOVE_EXPENSE",
        id: "-1",
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});

test("should add new expense object", () => {
    const expense = {
        id: "4",
        description: "lunch",
        note: "",
        amount: 112500,
        createdAt: 0,
    };

    const action = {
        type: "ADD_EXPENSE",
        expense,
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([...expenses, expense]);
});

test("should edit the expense object", () => {
    const amount = 200000;
    const action = {
        type: "EDIT_EXPENSE",
        id: expenses[1].id,
        update: { 
            amount
        },
    };

    const state = expensesReducer(expenses, action)
    expect(state[1].amount).toBe(amount)
});

test('should not edit an expense if no expense is found', () => {
    const amount = 2
    const action = {
        type: 'EDIT_EXPENSE',
        id: '4',
        update: {
            amount
        }
    }

    const state = expensesReducer(expenses, action)
    expect(state).toEqual(expenses)
})

