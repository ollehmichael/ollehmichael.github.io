import ProjectDetailsView from '@/components/templates/projectDetails';
import { Projects } from '@/lib/projects';
import { notFound } from 'next/navigation';

// Generate static params for all project pages at build time
export async function generateStaticParams() {
  return Projects.map((project) => ({
    id: project.id,
  }));
}

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const project = Projects.find((proj) => proj.id === id);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen pt-20">
      <ProjectDetailsView project={project} />
    </main>
  );
}
