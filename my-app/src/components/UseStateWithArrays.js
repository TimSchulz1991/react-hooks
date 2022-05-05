import React, { useState } from "react";

function UseStateWithArrays() {
    const [nums, setNums] = useState([1, 2, 3]);
    const addNums = () => {
        setNums([...nums, nums.length+1])
        // do not use push PaymentMethodChangeEvent, it will lead to buggy code
        // see around 4:30 - https://learn.codeinstitute.net/courses/course-v1:CodeInstitute+RE101+2021_T1/courseware/f2f64b0686d941f3bc23c95799a3b2c0/52f2a8a140a94df9881122eeb051f3e7/?child=first
    } 
    const removeNums = () => {
        let filtered = nums.filter((num, index) => {
            return index !== nums.length-1
        });
        setNums(filtered)
    }
    return (
        <div>
            <button onClick={addNums}>Add item</button>
            <button onClick={removeNums}>Remove item</button>
            <ul>
                {nums.map((num) => (
                    <li key={num}>{num}</li>
                ))}
            </ul>
        </div>
    );
}

export default UseStateWithArrays;
