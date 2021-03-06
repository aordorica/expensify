//SET_TEXT_FILTER
export const setTextFilter = (text = "") => ({
    type: "SET_TEXT_FILTER",
    text,
});

//SORT_BY_DATE
export const sortByDate = () => ({
    type: "SORT_BY",
    sortBy: "date",
});

//SORT_BY_AMOUNT
export const sortByAmount = () => ({
    type: "SORT_BY",
    sortBy: "amount",
});

//SET_START_DATE
export const setStartDate = (date) => ({
    type: "SET_START_DATE",
    startDate: date,
});

//SET_END_DATE
export const setEndDate = (date) => ({
    type: "SET_END_DATE",
    endDate: date,
});
