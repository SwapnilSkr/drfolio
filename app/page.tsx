"use client";

import React from "react";
import Hero from "@/components/ui/hero-section";
import { usePathname } from "next/navigation";
import Navbar from "@/components/ui/navbar";
import { Expertise } from "@/components/ui/tabsComponent";
import { Service } from "@/components/ui/Service";
import { Chambers } from "@/components/ui/Chambers";
import { Research } from "@/components/ui/Research";
import { Contact } from "@/components/ui/Contact";
import { Footer } from "@/components/ui/Footer";

export default async function App() {
  const pathname = usePathname();
  const hideNavbarRoutes = ["/dashboard"];
  return (
    <div>
      {!hideNavbarRoutes.includes(pathname) && <Navbar />}
      <Hero />
      <Expertise />
      <Service />
      <Chambers />
      <Research />
      <Contact />
      <Footer />
    </div>
  );
}
