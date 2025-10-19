import { ImageCarousel } from '@/components/organisms/image-carousel';
import { TechStackDiagram } from '@/components/organisms/tech-stack-diagram';
import { Project } from '@/lib/projects';
import { ArrowLeft, Briefcase, ExternalLink, Github } from 'lucide-react';
import Link from 'next/link';

export default async function ProjectDetailsView({
  project,
}: {
  project: Project;
}) {
  // Helper function to detect paragraph type and render appropriately
  function renderFormattedParagraph(paragraph: string, index: number) {
    // Empty string - render as line break
    if (paragraph.trim() === '') {
      return <br key={index} />;
    }

    // Heading with # markdown syntax (## Heading)
    if (paragraph.startsWith('#')) {
      const level = paragraph.match(/^#+/)?.[0].length || 1;
      const text = paragraph.replace(/^#+\s*/, '');

      if (level === 1) {
        return (
          <h2 key={index} className="mt-8 text-2xl font-bold first:mt-0">
            {renderInlineFormatting(text)}
          </h2>
        );
      } else {
        return (
          <h3 key={index} className="mt-6 text-xl font-semibold first:mt-0">
            {renderInlineFormatting(text)}
          </h3>
        );
      }
    }

    // ALL CAPS heading with colon (OVERVIEW:)
    if (/^[A-Z\s]+:/.test(paragraph)) {
      const text = paragraph.replace(':', '');
      return (
        <h3
          key={index}
          className="mt-6 text-lg font-bold tracking-wide uppercase first:mt-0"
        >
          {renderInlineFormatting(text)}
        </h3>
      );
    }

    // List item (starts with •, -, or *)
    if (/^[•\-*]\s/.test(paragraph)) {
      const text = paragraph.replace(/^[•\-*]\s*/, '');
      return (
        <li
          key={index}
          className="text-foreground/85 ml-6 text-base leading-relaxed"
        >
          {renderInlineFormatting(text)}
        </li>
      );
    }

    // Regular paragraph with inline formatting
    return (
      <p key={index} className="text-foreground/85 text-base leading-relaxed">
        {renderInlineFormatting(paragraph)}
      </p>
    );
  }

  // Helper function to render inline formatting (links and styled text)
  function renderInlineFormatting(text: string) {
    // First, split by markdown links [text](url)
    const linkPattern = /(\[.*?\]\(.*?\))/g;
    const linkParts = text.split(linkPattern);

    return linkParts.map((linkPart, linkIndex) => {
      // Check if this part is a markdown link
      const linkMatch = linkPart.match(/\[(.*?)\]\((.*?)\)/);

      if (linkMatch) {
        const [, linkText, url] = linkMatch;
        return (
          <Link
            key={linkIndex}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary font-medium hover:underline"
          >
            {linkText}
          </Link>
        );
      }

      // Process remaining text for styled text {text|className}
      const stylePattern = /(\{.*?\|.*?\})/g;
      const styleParts = linkPart.split(stylePattern);

      return styleParts.map((stylePart, styleIndex) => {
        // Check if this part is styled text
        const styleMatch = stylePart.match(/\{(.*?)\|(.*?)\}/);

        if (styleMatch) {
          const [, styledText, className] = styleMatch;
          return (
            <span key={`${linkIndex}-${styleIndex}`} className={className}>
              {styledText}
            </span>
          );
        }

        // Return plain text
        return stylePart;
      });
    });
  }

  return (
    <div className="mx-auto max-w-5xl px-4 pb-12 sm:px-6 md:pb-20 lg:px-8">
      {/* Back Button and Title */}
      <div className="animate-fade-in mb-8 space-y-4">
        <Link
          href="/projects"
          className="text-muted-foreground hover:text-primary inline-flex items-center gap-2 transition-colors"
        >
          <ArrowLeft size={20} />
          <span>{'Back to Projects'}</span>
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
          {project.githubUrl && project.liveUrl && (
            <div className="flex flex-wrap items-center gap-3">
              {/* {project.domains.map((domain) => (
              <Badge key={domain} variant="secondary" className="text-sm">
                {domain}
              </Badge>
            ))} */}
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
          )}

          {/* Achievements */}
          <div className="space-y-4">
            {project.achievements.map((paragraph, index) => (
              <p key={index} className="text-base leading-relaxed">
                {renderInlineFormatting(paragraph)}
              </p>
            ))}
          </div>

          {/* Full Description */}
          <div className="space-y-4">
            <h2 className="mt-8 text-2xl font-bold first:mt-0">
              {'What is this project about?'}
            </h2>
            {project.fullDescription.map((paragraph, index) =>
              renderFormattedParagraph(paragraph, index)
            )}
          </div>

          {/* Lessons Learned */}
          <div className="space-y-4">
            {project.lessons.map((paragraph, index) =>
              renderFormattedParagraph(paragraph, index)
            )}
          </div>

          {/* Tech Stack */}
          <div className="space-y-1">
            <h2 className="flex items-center gap-2 text-xl font-bold">
              <span>🛠️</span>
              <span>Tech Stack</span>
            </h2>
            <TechStackDiagram technologies={project.technologies} />
          </div>
        </div>
      </div>
    </div>
  );
}
