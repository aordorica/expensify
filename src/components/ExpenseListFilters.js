import React from 'react';
import { setTextFilter, sortByAmount, sortByDate } from '../actions/filters';
import { connect } from 'react-redux'

const ExpenseListFilters = (props) => (
    <div>
        <input type="text" value={props.filters.text} onChange={(e) => {
            props.dispatch(setTextFilter(e.target.value))
        }}/>
        <select value={props.filters.sortBy} onChange={(e) => {
            e.target.value == "amount"
                ? props.dispatch(sortByAmount())
                : props.dispatch(sortByDate());
        }}>
            <option value="amount">Amount</option>
            <option value="date">Date</option>
        </select>
    </div>
)

const mapStateToProps = (state) => {
    return {
        filters: state.filters
    }
}

export default connect(mapStateToProps)(ExpenseListFilters);