import { useState } from "react";

export default function HelloPrctice() {
    const [count, setCount] = useState(0);

    return (
        <div style={{padding: "20px", border: "1px solid #ccc", }}>
            <h2>Hello, Practice!</h2>
            <p>クリック回数: {count}</p>
            <button onClick={() => setCount(count + 1)}>+1</button>
        </div>
    );

}