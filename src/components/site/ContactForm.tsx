"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowUpRight, CheckCircle2, Loader2, Send } from "lucide-react";
import { contactSchema, type ContactFormValues } from "@/lib/contact-schema";
import { practice } from "@/content/site";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const subjects = [
  "General question",
  "Request an appointment",
  "New patient",
  "Insurance & billing",
  "Treatment question",
  "Records or X-rays",
  "Something else",
];

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">(
    "idle",
  );

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "General question",
      message: "",
      company: "",
    },
  });

  async function onSubmit(values: ContactFormValues) {
    setStatus("sending");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!response.ok) throw new Error("Request failed");
      reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-3xl border border-fern/20 bg-white/60 p-8 text-center shadow-soft sm:p-12">
        <span className="mx-auto grid size-14 place-items-center rounded-full bg-fern/10 text-fern">
          <CheckCircle2 className="size-7" aria-hidden />
        </span>
        <h3 className="mt-5 font-display text-2xl text-spruce">
          Your message is on its way.
        </h3>
        <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-stone">
          Thank you for reaching out. Our front office team will follow up during
          regular business hours. If this is urgent, please call{" "}
          <a href={practice.phoneHref} className="link">
            {practice.phone}
          </a>
          .
        </p>
        <Button
          type="button"
          variant="outline"
          size="md"
          className="mt-6"
          onClick={() => setStatus("idle")}
        >
          Send another message
          <ArrowUpRight className="size-3.5" aria-hidden />
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="rounded-3xl border border-spruce/10 bg-white/55 p-6 shadow-soft backdrop-blur-sm sm:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <Field
          id="name"
          label="Full name"
          error={errors.name?.message}
          required
        >
          <Input
            id="name"
            autoComplete="name"
            placeholder="Your name"
            aria-invalid={Boolean(errors.name)}
            {...register("name")}
          />
        </Field>

        <Field id="email" label="Email" error={errors.email?.message} required>
          <Input
            id="email"
            type="email"
            autoComplete="email"
            placeholder="you@example.com"
            aria-invalid={Boolean(errors.email)}
            {...register("email")}
          />
        </Field>

        <Field id="phone" label="Phone" error={errors.phone?.message}>
          <Input
            id="phone"
            type="tel"
            autoComplete="tel"
            placeholder="(701) 555-0100"
            aria-invalid={Boolean(errors.phone)}
            {...register("phone")}
          />
        </Field>

        <Field
          id="subject"
          label="Subject"
          error={errors.subject?.message}
          required
        >
          <select
            id="subject"
            aria-invalid={Boolean(errors.subject)}
            className="h-12 w-full cursor-pointer rounded-xl border border-spruce/15 bg-white/70 px-4 text-sm text-ink shadow-sm outline-none transition-all focus:border-fern/60 focus:bg-white focus:ring-4 focus:ring-fern/10"
            {...register("subject")}
          >
            {subjects.map((subject) => (
              <option key={subject} value={subject}>
                {subject}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <div className="mt-5">
        <Field
          id="message"
          label="How can we help?"
          error={errors.message?.message}
          required
        >
          <Textarea
            id="message"
            placeholder="Tell us a little about what you need. Please do not include sensitive medical details."
            aria-invalid={Boolean(errors.message)}
            {...register("message")}
          />
        </Field>
      </div>

      <div className="hidden" aria-hidden>
        <label htmlFor="company">Company</label>
        <input id="company" tabIndex={-1} autoComplete="off" {...register("company")} />
      </div>

      <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-xs text-[0.7rem] leading-relaxed text-stone/80">
          Please do not use this form for a dental emergency. Call{" "}
          <a href={practice.phoneHref} className="link">
            {practice.phone}
          </a>{" "}
          so we can help right away.
        </p>
        <Button
          type="submit"
          size="lg"
          disabled={status === "sending"}
          className="w-full shrink-0 sm:w-auto"
        >
          {status === "sending" ? (
            <>
              Sending
              <Loader2 className="size-4 animate-spin" aria-hidden />
            </>
          ) : (
            <>
              Send message
              <Send className="size-4" aria-hidden />
            </>
          )}
        </Button>
      </div>

      {status === "error" ? (
        <p
          role="alert"
          className="mt-4 rounded-xl border border-copper/20 bg-copper/[0.07] px-4 py-3 text-[0.8rem] text-copper"
        >
          We could not send your message. Please try again, or call us at{" "}
          {practice.phone}.
        </p>
      ) : null}
    </form>
  );
}

function Field({
  id,
  label,
  error,
  required,
  children,
}: {
  id: string;
  label: string;
  error?: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div>
      <Label htmlFor={id} className="mb-2 flex items-center gap-1">
        {label}
        {required ? (
          <span className="text-copper" aria-hidden>
            *
          </span>
        ) : null}
      </Label>
      {children}
      {error ? (
        <p className="mt-1.5 text-[0.72rem] text-copper" role="alert">
          {error}
        </p>
      ) : null}
    </div>
  );
}
