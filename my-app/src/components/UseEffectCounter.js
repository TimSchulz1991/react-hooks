import React, { useState, useEffect } from "react";

function UseEffectCounter() {
    const [count, setCount] = useState(0)
    // useEffect takes a function as argument, runs after every render of component
    useEffect(() => {
        document.title = count;
    }, [count])
    return <div>
        <button onClick={
            () => setCount(count => count+1)
        }>
            Increment {count}
        </button>
    </div>;
}

export default UseEffectCounter;
