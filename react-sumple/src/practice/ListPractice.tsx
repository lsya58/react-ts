import { useState } from "react";

export default function ListPractice() {
    const [items, setItems] = useState<string[]>([]);
    const [text, setText] = useState("");

    const addItem = () => {
        if (!text.trim()) return;
        setItems([...items,text]);
        setText("");
    };

    const removeItem = (index: number) => {
        setItems(items.filter((_, i) => i !== index));
    };
return (
    <div style={{ padding: 20, border: "1px solid #ccc", marginTop: 20 }}>
        <h2>リスト</h2>
        <input
            value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="項目を入力"
      />
      <button onClick={addItem} style={{marginLeft: 8 }}>
        追加
      </button>

      <ul style={{marginTop: 10 }}>
         {items.map((item, i) => (
          <li key={i}>
            {item}{" "}
            <button onClick={() => removeItem(i)} style={{ marginLeft: 8 }}>
              削除
            </button>
          </li>
        ))}
      </ul>
    </div>
);        
}