import { useState } from "react";

export default function FormPractice() {
    const [name, setName] = useState ("");
    const [message, setMessage] = useState ("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert("こんにちは、${name}さん！\nメッセージ: ${message}");
    };

return (
    <div style={{padding: 20, border: "1px solid #ccc", marginTop: 20}}>
        <h2>フォーム</h2>
        <form onSubmit={handleSubmit}>
         <div>
            <label>
                名前:
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
              style={{ marginLeft: 8 }}
            />
            </label>
         </div>
    <div style={{marginTop: 10}}>
        <label>
            メッセージ:
            <textarea
             value={message}
             onChange={(e) => setMessage(e.target.value)}
              rows={3}
              style={{ marginLeft: 8 }}
            />
        </label>
        </div>

        <button type="submit" style={{ marginTop: 10 }}>
          送信
        </button>    
        </form>
    </div>
);    
}