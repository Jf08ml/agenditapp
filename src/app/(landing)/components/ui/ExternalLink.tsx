import React from "react";

type Props = {
  href: string;
  children: React.ReactNode;
  className?: string;
  title?: string;
};

export default function ExternalLink({
  href,
  children,
  className = "",
  title,
}: Props) {
  const isAnchor = href.startsWith("#");
  if (isAnchor) {
    return (
      <a href={href} className={className} title={title}>
        {children}
      </a>
    );
  }
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      title={title}
    >
      {children}
    </a>
  );
}
