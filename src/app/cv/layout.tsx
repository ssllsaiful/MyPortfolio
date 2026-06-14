import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resume of Md. Saiful Islam",
  description: "Md. Saiful Islam - DevOps Engineer CV",
};

export default function CVLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
