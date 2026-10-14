import { database } from "./database";

export type ContactMessage = { id: string; date: string; name: string; email: string; subject: string; message: string };

export async function saveMessage(message: ContactMessage) {
  await database().query(
    "INSERT INTO portfolio_messages (id, created_at, name, email, subject, message) VALUES ($1, $2, $3, $4, $5, $6)",
    [message.id, message.date, message.name, message.email, message.subject, message.message],
  );
}

export async function getMessages(): Promise<ContactMessage[]> {
  const result = await database().query<{ id: string; created_at: Date; name: string; email: string; subject: string; message: string }>("SELECT id, created_at, name, email, subject, message FROM portfolio_messages ORDER BY created_at DESC, id");
  return result.rows.map(({ created_at, ...message }) => ({ ...message, date: created_at.toISOString() }));
}
