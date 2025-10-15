import type { NextPage } from "next";
import useSWR from "swr";
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod";
import type { Contact } from "./api/contacts";

const fetcher = (url: string) => fetch (url).then((r) => r.json());

const schema = z.object({
    name: z.string().min(1, "必須"),
    email: z.string().email("メール形式で入力"),
    message: z.string().min(1, "必須").max(200, "200文字まで"),
});
type FormData = z.infer<typeof schema>;

const ContactsPage: NextPage = () => {
    const { data, error, isLoading, mutate } = useSWR<Contact[]>("/api/contacts", fetcher);

    const {
        register,
        handleSubmit,
    reset,
    formState: { errors, isSubmitting },
    } = useForm<FormData>({ resolver: zodResolver(schema), defaultValues: {name: "", email: "", message: ""} });

    const onSubmit = async (form: FormData) => {
        await fetch("/api/contacts", {
            method: "POST",
            headers: { "Contact-Type": "application/json"},
            body: JSON.stringify(form),
        });

        reset();
        await mutate();
    };

    return (
        <main style={{ padding: 24, maxWidth: 720, margin: "0 auto"}}>
            <h1>問い合わせ (RHF + Zod + SWR)</h1>

            <form onSubmit={handleSubmit(onSubmit)} style={{ marginTop: 12, padding: 16, border: "1px solid #ddd, borderRadius: 8" }}>
                <div style={{ marginBottom: 12}}>
                    <label>名前</label><br />
                    <input {...register("name")} style={{ width: "100%", padding: 8,}} />
                    <div style={{ color: "crimson"}}>{errors.name?.message}</div>
                </div>
                <div style={{ marginBottom: 12, }}>
                    <label>メール</label><br />
                    <input {...register ("email")} style={{ width: "100%",  padding: 8 }} />
                    <div style={{ color: "crimson"}}>{errors.email?.message}</div>
                </div>
                <div style={{ marginBottom: 12 }}>
                    <label>メッセージ</label><br />
                    <textarea rows={4} {...register ("message")} style={{ width: "100%", padding: 8}} />
                    <div style={{ color: "crimson" }}>{errors.message?.message}</div>
                </div>
                <button type="submit" disabled={isSubmitting} style={{ padding: "8px 14px" }}>
          {isSubmitting ? "送信中..." : "送信"}
        </button>
            </form>

            <section style={{ marginTop: 24}}>
                <h2>受信一覧</h2>
                {isLoading && <p>読み込み中...</p>}
                {error && <p style={{ color: "crimson" }}>読み込みエラー</p>}
                <ul style={{ marginTop: 8 }}>
                    {(data ?? []).map((c) => (
                        <li key={c.id} style={{ marginBottom: 8}}>
                            <strong>{c.name}</strong> &lt;{c.email}&gt;<br />
                            <span>{c.message}</span>
                        </li>
                    ))}
                </ul>
            </section>
        </main>
    );
};

export default ContactsPage;