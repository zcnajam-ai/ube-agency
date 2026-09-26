import { readFile } from "node:fs/promises";
import { join } from "node:path";
import sharp from "sharp";
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

  const imagePath = join(process.cwd(), "public", project.heroImage.replace(/^\\//, ""));
  const imageData = await readFile(imagePath);
  // Satori (used by next/og) does not reliably decode WebP data URIs. Convert
  // the existing optimized project image to PNG for the generated social card.
  const pngData = await sharp(imageData).png().toBuffer();
  const imageSrc = `data:image/png;base64,${pngData.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          padding: 54,
          background: "#161616",
          color: "#FAF7F6",
          alignItems: "flex-end",
          justifyContent: "space-between",
        }}
      >
        <img
          src={imageSrc}
          alt=""
          width={420}
          height={520}
          style={{ objectFit: "cover", borderRadius: 28, border: "4px solid #9F8BE7" }}
        />
        <div style={{ display: "flex", flexDirection: "column", width: 620, gap: 20 }}>
          <div style={{ color: "#9F8BE7", fontSize: 22, letterSpacing: 4, fontWeight: 700 }}>
            UNIFIED BRANDING EXPERTS · CASE STUDY
          </div>
          <div style={{ fontSize: 54, lineHeight: 1.08, fontWeight: 700 }}>{project.client}</div>
          <div style={{ color: "#D5D0CE", fontSize: 26, lineHeight: 1.25 }}>{project.category}</div>
          <div style={{ color: "#D5D0CE", fontSize: 19 }}>{project.industry}</div>
        </div>
      </div>
    ),
    size,
  );
}
