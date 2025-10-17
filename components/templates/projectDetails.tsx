import { ImageCarousel } from '@/components/organisms/image-carousel';
import { TechStackDiagram } from '@/components/organisms/tech-stack-diagram';
import { Badge } from '@/components/ui/badge';
import { Project } from '@/lib/projects';
import { ArrowLeft, Briefcase, ExternalLink, Github } from 'lucide-react';
import Link from 'next/link';

export default async function ProjectDetailsView({
  project,
}: {
  project: Project;
}) {
  return (
    <div className="mx-auto max-w-5xl px-4 pb-12 sm:px-6 md:pb-20 lg:px-8">
      {/* Back Button and Title */}
      <div className="animate-fade-in mb-8 space-y-4">
        <Link
          href="/projects"
          className="text-muted-foreground hover:text-primary inline-flex items-center gap-2 transition-colors"
        >
          <ArrowLeft size={20} />
          <span>Back to Projects</span>
        </Link>
        <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl">
          {project.title}
        </h1>

        {project.careerExperience && (
          <div className="bg-primary/10 text-primary border-primary/20 inline-flex items-center gap-2 rounded-md border px-3 py-1.5 text-sm">
            <Briefcase size={14} />
            <span>{project.careerExperience}</span>
          </div>
        )}
      </div>

      {/* Vertical Layout */}
      <div className="space-y-8">
        {/* Image Carousel */}
        {project.images.length > 0 && (
          <div className="animate-fade-in-delay-1">
            <ImageCarousel images={project.images} alt={project.title} />
          </div>
        )}

        {/* Project Details */}
        <div className="animate-fade-in-delay-2 space-y-8">
          {/* Category Badges and Links */}
          <div className="flex flex-wrap items-center gap-3">
            {project.domains.map((domain) => (
              <Badge key={domain} variant="secondary" className="text-sm">
                {domain}
              </Badge>
            ))}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary p-2 transition-colors"
                aria-label="View on GitHub"
              >
                <Github size={20} />
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary p-2 transition-colors"
                aria-label="View live site"
              >
                <ExternalLink size={20} />
              </a>
            )}
          </div>

          {/* Full Description */}
          <div className="space-y-4">
            {project.fullDescription.map((paragraph, index) => (
              <p
                key={index}
                className="text-muted-foreground text-base leading-relaxed"
              >
                {paragraph}
              </p>
            ))}
          </div>

          {/* Tech Stack */}
          <div className="space-y-1">
            <h2 className="flex items-center gap-2 text-xl font-bold">
              <span>🛠️</span>
              <span>Tech Stack</span>
            </h2>
            <TechStackDiagram technologies={project.technologies} />
            {/* Old Tech Stack Implementation - Commented Out */}
            {/* <div className="flex flex-wrap gap-3">
                {project.technologies.map((tech) => (
                  <div
                    key={tech}
                    className="bg-card border-border hover:border-primary flex items-center gap-2 rounded-lg border px-4 py-2 transition-colors"
                  >
                    <span className="text-sm font-medium">{tech}</span>
                  </div>
                ))}
              </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
