import { useEffect, useState } from "react";

type item = { id: number; title: string };

export default function FetchPractice() {
    const [data, setData] = useState<item[]>([]);
    const [loding, setLoding] = useState(true);
    const [error, setError] = useState<string|null>(null);

    useEffect(() => {
        const ac = new AbortController();
        (async () => {
            try {
                setLoding(true);
                const res = await fetch("/news.json", { signal: ac.signal });
                if (!res.ok) throw new Error(`HTTP ${res.status}`);
                setData(await res.json());
            }  catch  (e: any) {
                if (e.name !== "AbortError") setError(e.message ?? "取得失敗");
            } finally {
                setLoding(false);
            }
        })();
        return () => ac.abort();
    }, []);

    if (loding) return <p>読み込み中...</p>;
    if (error) return <p role="alert">エラー: {error}</p>;
    return (
        <div style={{padding:20, border:"1px solid #ccc", marginTop:20}}>
      <h2>Fetch </h2>
      <ul>{data.map(i => <li key={i.id}>{i.title}</li>)}</ul>
    </div>
  );
}