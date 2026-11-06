import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { contentPages } from "@/content/pages";
import { ContentPage } from "@/components/site/ContentPage";

// FAQ, testimonials and the smile gallery have their own custom layouts.
const customRoutes = new Set([
  "/patients/faq",
  "/patients/patient-testimonials",
  "/patients/before-after-photos",
]);

const pages = contentPages.filter(
  (page) => page.section === "patients" && !customRoutes.has(page.route),
);


export function generateStaticParams() {
  return pages.map((page) => ({ slug: page.route.replace("/patients/", "") }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const page = pages.find((item) => item.route === `/patients/${slug}`);

  if (!page) return {};

  return {
    title: page.title,
    description: page.description,
    alternates: { canonical: page.route },
    openGraph: {
      title: `${page.title} | Dakota Dental Associates`,
      description: page.description,
      url: page.route,
      type: "article",
      images: page.heroImage ? [{ url: page.heroImage }] : undefined,
    },
  };
}

export default async function PatientContentPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = pages.find((item) => item.route === `/patients/${slug}`);

  if (!page) notFound();

  return <ContentPage page={page} />;
}
