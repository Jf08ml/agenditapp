"use client";

import { type ReactNode, type AnchorHTMLAttributes } from "react";
import { WHATSAPP_HREF } from "../constants";

function trackWhatsAppClick() {
  if (
    typeof window !== "undefined" &&
    (window as unknown as { gtag?: (...a: unknown[]) => void }).gtag
  ) {
    (window as unknown as { gtag: (...a: unknown[]) => void }).gtag(
      "event",
      "demo_whatsapp_click",
      { event_category: "cta" }
    );
  }
}

interface DemoCtaButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode;
  className?: string;
}

export function DemoCtaButton({
  children,
  className,
  onClick,
  ...rest
}: DemoCtaButtonProps) {
  return (
    <a
      href={WHATSAPP_HREF}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      onClick={(e) => {
        trackWhatsAppClick();
        onClick?.(e);
      }}
      {...rest}
    >
      {children}
    </a>
  );
}
