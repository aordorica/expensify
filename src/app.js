import "react-dates/initialize";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import AppRouter from "./routers/AppRouter";
import "./styles/styles.scss";
import "normalize.css/normalize.css";
import configureStore from "./store/configureStore";
import { addExpense, editExpense, removeExpense } from "./actions/expenses";

const store = configureStore();

store.dispatch(
    addExpense({ description: "Cat Food", amount: 186000, createdAt: 1 })
);
store.dispatch(
    addExpense({ description: "gas bill", amount: 5000, createdAt: 5 })
);
store.dispatch(
    addExpense({ description: "water bill", amount: 255, createdAt: -2 })
);

// console.log(store.getState());
const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById("app"));
