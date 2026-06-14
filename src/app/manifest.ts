import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Md. Saiful Islam | DevOps Engineer Portfolio",
    short_name: "Saiful DevOps",
    description: "Sleek portfolio showcasing cloud integrations, container management, and IaC pipelines.",
    start_url: "/",
    display: "standalone",
    background_color: "#0B1120",
    theme_color: "#3B82F6",
  };
}
