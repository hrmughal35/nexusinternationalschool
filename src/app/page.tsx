import type { Metadata } from "next";

import { HomePage } from "@/components/sections/home-page";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: `${siteConfig.name} | Where Future Leaders Begin`,
  description:
    "Discover a premium international school experience blending world-class academics, innovation, character, and beautifully designed campus life.",
};

export default function Home() {
  return <HomePage />;
}
