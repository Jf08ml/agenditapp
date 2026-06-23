"use client";

import { type ReactNode, type AnchorHTMLAttributes } from "react";
import { getWhatsappHref } from "../constants";

function trackWhatsAppClick(source: string) {
  if (
    typeof window !== "undefined" &&
    (window as unknown as { gtag?: (...a: unknown[]) => void }).gtag
  ) {
    (window as unknown as { gtag: (...a: unknown[]) => void }).gtag(
      "event",
      "demo_whatsapp_click",
      { event_category: "cta", event_label: source }
    );
  }
}

interface DemoCtaButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode;
  className?: string;
  source?: string;
}

export function DemoCtaButton({
  children,
  className,
  source = "cta",
  onClick,
  ...rest
}: DemoCtaButtonProps) {
  return (
    <a
      href={getWhatsappHref()}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      onClick={(e) => {
        trackWhatsAppClick(source);
        onClick?.(e);
      }}
      {...rest}
    >
      {children}
    </a>
  );
}
