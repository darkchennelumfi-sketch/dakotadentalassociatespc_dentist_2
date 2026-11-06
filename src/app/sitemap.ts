import type { MetadataRoute } from "next";
import { contentPages } from "@/content/pages";

const staticRoutes = [
  "/",
  "/office",
  "/office/meet-the-team",
  "/office/office-video-tour",
  "/office/map-directions",
  "/office/practice-events",
  "/office/specials-promotions",
  "/patients",
  "/patients/faq",
  "/patients/before-after-photos",
  "/patients/patient-testimonials",
  "/treatment",
  "/miscellaneous",
  "/miscellaneous/glossary",
  "/miscellaneous/related-links",
  "/contact-us",
  "/technology",
  "/emergency-care",
  "/new-patients",
];

const contentRoutes = contentPages.map((page) => page.route);

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = Array.from(new Set([...staticRoutes, ...contentRoutes]));

  const lastModified = new Date();

  return routes.map((route) => ({
    url: `https://www.dakotadentalnd.com${route === "/" ? "" : route}`,
    lastModified,
    changeFrequency: route === "/" ? "weekly" : "monthly",
    priority: route === "/" ? 1 : route.split("/").length > 2 ? 0.6 : 0.8,
  }));
}
