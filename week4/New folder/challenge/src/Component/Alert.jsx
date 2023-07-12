import React from "react";

const Counter = () => {
    const [counter, setCounter] = React.useState(0);
    const handleIncrement = () => {
        setCounter(counter + 1);
    }

    return (
        <>
            <p>Number: </p>
            <button onClick={handleIncrement}>Counter</button>
        </>
    )
}