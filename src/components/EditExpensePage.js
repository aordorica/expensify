import React from "react";

const EditExpensePage = (props) => {
    console.log(props);
    return <div>This is my Edit Expense Page: {props.match.params.id}</div>;
}

export default EditExpensePage;