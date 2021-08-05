import moment from "moment";
import { 
    setStartDate, 
    sortByAmount, 
    sortByDate, 
    setTextFilter,
    setEndDate
} from "../../actions/filters";

test('should generate setStartDate action object', () => {
    const action = setStartDate(moment(0))

    expect(action).toEqual({
        type: 'SET_START_DATE',
        startDate: moment(0)
    })
})

test('should generate setEndDate action object', () => {
    const action = setEndDate(moment(0))
    expect(action).toEqual({
        type: 'SET_END_DATE',
        endDate: moment(0)
    })
})


test('should generate setTextFilter action object with provided values', () => {
    const text = 'coffee'
    const action = setTextFilter(text)
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text
    })
})

test('should generate setTextFilter action object with default values', () => {
    const action = setTextFilter()
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: ''
    })
})

test('should generate sortByDate action object', () => {
    expect(sortByDate()).toEqual({ type: "SORT_BY", sortBy: "date" });
})

test('should generate sortByAmount action object', () => {
    expect(sortByAmount()).toEqual({ type: 'SORT_BY', sortBy: 'amount'})
})


