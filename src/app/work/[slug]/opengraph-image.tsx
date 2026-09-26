import { ImageResponse } from "next/og";
import { notFound } from "next/navigation";
import { getProjectBySlug } from "@/data/projects";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

type RouteProps = { params: Promise<{ slug: string }> };

export async function generateImageMetadata({ params }: RouteProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return [];

  return [
    {
      id: project.slug,
      alt: `${project.client} ${project.category} case study`,
      size,
      contentType,
    },
  ];
}

export default async function ProjectOpenGraphImage({ params }: RouteProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          padding: 64,
          background: "#161616",
          color: "#FAF7F6",
          alignItems: "stretch",
          justifyContent: "space-between",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            display: "flex",
            position: "absolute",
            width: 390,
            height: 390,
            right: -90,
            top: -120,
            borderRadius: 195,
            border: `3px solid ${project.accentColor}`,
            opacity: 0.5,
          }}
        />
        <div
          style={{
            display: "flex",
            position: "absolute",
            width: 250,
            height: 250,
            right: 30,
            top: 50,
            borderRadius: 125,
            background: project.accentColor,
            opacity: 0.12,
          }}
        />
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", width: "100%" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 16,
              color: project.accentColor,
              fontSize: 22,
              letterSpacing: 4,
              fontWeight: 700,
            }}
          >
            <div
              style={{
                display: "flex",
                width: 14,
                height: 14,
                borderRadius: 7,
                background: project.accentColor,
              }}
            />
            UNIFIED BRANDING EXPERTS · CASE STUDY
          </div>
          <div style={{ display: "flex", flexDirection: "column", maxWidth: 940, gap: 18 }}>
            <div style={{ fontSize: 62, lineHeight: 1.08, fontWeight: 700 }}>{project.client}</div>
            <div style={{ color: "#D5D0CE", fontSize: 30, lineHeight: 1.2 }}>{project.category}</div>
            <div style={{ color: "#D5D0CE", fontSize: 21 }}>{project.industry}</div>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              color: "#D5D0CE",
              fontSize: 18,
              letterSpacing: 2,
              textTransform: "uppercase",
            }}
          >
            Project scope · ${project.services.join(" · ")}
          </div>
        </div>
      </div>
    ),
    size,
  );
}
