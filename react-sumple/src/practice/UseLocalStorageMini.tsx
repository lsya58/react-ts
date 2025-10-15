// src/practice/UseLocalStorageMini.tsx
import { useLocalStorage } from "../hooks/useLocalStorage";
export default function UseLocalStorageMini() {
  const [name, setName, { remove }] = useLocalStorage<string>("demo:name", "");
  return (
    <div style={{ padding: 12, border: "1px solid #ddd", marginTop: 12 }}>
      <h3>useLocalStorage mini</h3>
      <input value={name} onChange={e=>setName(e.target.value)} placeholder="お名前" />
      <button onClick={remove} style={{ marginLeft: 8 }}>クリア</button>
      <p style={{ marginTop: 8 }}>こんにちは、{name || "（未入力）"} さん</p>
    </div>
  );
}

