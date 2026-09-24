import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Terra Maya | Facility & Property Services",
    short_name: "Terra Maya",
    description:
      "Preservación arquitectónica integral, gestión técnica de activos de lujo y portal de telemetría 360° en Tulum y Riviera Maya.",
    start_url: "/es",
    display: "standalone",
    background_color: "#f1fcf7",
    theme_color: "#1A3C34",
    orientation: "portrait-primary",
    icons: [
      {
        src: "/logo.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
