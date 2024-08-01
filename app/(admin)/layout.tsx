"use client";

import { Hamburger } from "@/components/ui/hamburger";
import Sidebar from "@/components/ui/Sidebar";
import React from "react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex justify-center">
      <div className="xs:hidden lg:block">
        <Sidebar />
      </div>
      <div className="lg:hidden">
        <Hamburger />
      </div>
      <div className="flex flex-col w-full max-w-7xl">{children}</div>
    </div>
  );
}
