import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { contentPages } from "@/content/pages";
import { ContentPage } from "@/components/site/ContentPage";

const pages = contentPages.filter((page) => page.section === "treatment");


export function generateStaticParams() {
  return pages.map((page) => ({ slug: page.route.replace("/treatment/", "") }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const page = pages.find((item) => item.route === `/treatment/${slug}`);

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

export default async function TreatmentContentPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = pages.find((item) => item.route === `/treatment/${slug}`);

  if (!page) notFound();

  return <ContentPage page={page} />;
}
