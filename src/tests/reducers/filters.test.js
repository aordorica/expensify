import { expect } from "@jest/globals";
import moment from "moment";
import filtersReducer from "../../reducers/filters";
import {
    setTextFilter,
    setEndDate,
    setStartDate,
    sortByAmount,
    sortByDate,
} from "../../actions/filters";

test("should setup the default filter values", () => {
    const state = filtersReducer(undefined, { type: "@@INIT" });
    expect(state).toEqual({
        text: "",
        sortBy: "date",
        startDate: moment().startOf("week"),
        endDate: moment().endOf("week"),
    });
});

//Could define action object to test this way or import it

test("should set sortBy to amount", () => {
    const state = filtersReducer(undefined, {
        type: "SORT_BY",
        sortBy: "amount",
    });
    expect(state.sortBy).toBe("amount");
});

test("should set sortBy to date", () => {
    const currentSate = {
        text: '', 
        startDate: undefined,
        endDate: undefined,
        sortBy: 'amount'
    };
    const state = filtersReducer(currentSate, sortByDate())
    expect(state.sortBy).toBe('date')
});

test('should set the text filter object', () => {
    const currentSate = {
        text: 'test case',
        startDate: undefined,
        endDate: undefined,
        sortBy: ''
    }

    const state = filtersReducer(currentSate, setTextFilter)
    expect(state.text).toBe(currentSate.text)
})

test('should set startDate filter', () => {
    const state = filtersReducer(undefined, setStartDate(moment(0)))
    expect(state.startDate).toEqual(moment(0))
})

test('should set endDate filter', () => {
    const state = filtersReducer(undefined, setEndDate(moment(0)))
    expect(state.endDate).toEqual(moment(0))
})