import Child from "./Child";

export default function ParentPractice() {
    return (
        <div style={{ padding: 20, border: "1px solid #ccc", marginTop: 20}}>
            <h2>親子コンポーネント</h2>
            <Child name="ゆしゃ" />
            <Child name="AI先生" />
        </div>
    )
}