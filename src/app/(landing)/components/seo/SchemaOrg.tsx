import Script from "next/script";
import React from "react";

export default function SchemaOrg({
  data,
}: {
  data: Record<string, unknown> | Record<string, unknown>[];
}) {
  return (
    <Script
      id={Array.isArray(data) ? "ld+json-multi" : "ld+json"}
      type="application/ld+json"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
