"use client";

import dynamic from "next/dynamic";

const ProjectModal = dynamic(() => import("./ProjectModal"), {
  ssr: false,
});

export default function ClientProjectModal() {
  return <ProjectModal />;
}