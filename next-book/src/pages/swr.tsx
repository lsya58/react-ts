// src/pages/swr.tsx
import useSWR from "swr";
import type { NextPage } from "next";

const fetcher = (url: string) => fetch(url).then((r) => r.json());

type Post = { id: number; title: string };

const SWRPage: NextPage = () => {
  const { data, error, isLoading } = useSWR<Post[]>(
    "https://jsonplaceholder.typicode.com/posts?_limit=5",
    fetcher
  );

  if (isLoading) return <main style={{ padding: 24 }}>⏳ 読み込み中...</main>;
  if (error)     return <main style={{ padding: 24, color: "red" }}>エラーが発生しました</main>;

  return (
    <main style={{ padding: 24 }}>
      <h1>SWR</h1>
      <ul>{data?.map((p) => <li key={p.id}>{p.title}</li>)}</ul>
    </main>
  );
};

export default SWRPage;
