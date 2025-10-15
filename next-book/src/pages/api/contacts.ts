import type { NextApiRequest, NextApiResponse } from "next";

export type Contact = {id: string; name: string; email: string; message: string;};

const db: Contact [] = [];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === "GET") {
        return res.status(200).json(db);
    }

    if (req.method === "POST") {
        const { name, email, message } = (req.body ?? {}) as Partial<Contact>;
        if (!name || !email || !message) {
            return res.status(400).json({ error: "name/email/message は必須です"});
        }

        const newItem: Contact = {
            id: String(Date.now()),
            name,
            email,
            message,
        };
        db.unshift(newItem);
        return res.status(201).json(newItem);
    }

    res.setHeader("Allow", ["GET", "POST"]);
  return res.status(405).end("Method Not Allowed");
}