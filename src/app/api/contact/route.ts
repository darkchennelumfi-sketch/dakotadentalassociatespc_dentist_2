import { NextResponse } from "next/server";
import { contactSchema } from "@/lib/contact-schema";

export async function POST(request: Request) {
  let payload: unknown;

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, error: "Please send a valid JSON request." },
      { status: 400 },
    );
  }

  const parsed = contactSchema.safeParse(payload);

  if (!parsed.success) {
    return NextResponse.json(
      {
        ok: false,
        error: "Please check the form and try again.",
        fields: parsed.error.flatten().fieldErrors,
      },
      { status: 422 },
    );
  }

  if (parsed.data.company) {
    // Honeypot filled: silently accept without processing.
    return NextResponse.json({ ok: true });
  }

  // This project has no mail provider configured. In production, forward the
  // message to the practice inbox here (for example with a transactional email
  // API or an internal ticketing endpoint).
  console.info("[contact] New website enquiry", {
    subject: parsed.data.subject,
    receivedAt: new Date().toISOString(),
  });

  return NextResponse.json({ ok: true });
}
