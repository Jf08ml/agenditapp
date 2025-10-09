import React from "react";

export default function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block text-xs uppercase tracking-wider text-sky-300 bg-sky-900/30 px-2 py-1 rounded-md border border-sky-700/40">
      {children}
    </span>
  );
}
