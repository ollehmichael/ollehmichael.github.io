import { Badge } from '@/components/ui/badge';
import { DOMAIN_TECH_MAP } from '@/lib/constants';
import { Project } from '@/lib/projects';
import { cn } from '@/lib/utils';
import { Briefcase, ImageIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

interface ProjectCardProps {
  index: number;
  project: Project;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const {
    id,
    title,
    fullDescription,
    images,
    domains,
    technologies,
    careerExperience,
  } = project;
  // Truncate description to ~150 characters
  const firstFullDescription =
    fullDescription && fullDescription.length > 0
      ? fullDescription[0]
      : 'Mike is currently updating the description...';
  const truncatedDescription =
    firstFullDescription.length > 80
      ? `${firstFullDescription.substring(0, 80)}...`
      : firstFullDescription;

  return (
    <Link
      href={`/projects/${id}`}
      className={cn(
        'group bg-card border-border hover:border-primary hover:shadow-primary/10 block overflow-hidden rounded-lg border transition-all duration-300 hover:shadow-lg',
        `animate-fade-in-delay-${Math.min(index + 1, 5)}`
      )}
    >
      {/* Image */}
      <div className="bg-muted flex aspect-video flex-col items-center justify-center overflow-hidden">
        {images[0] ? (
          <Image
            src={images[0]}
            alt={title}
            className="h-full w-full object-contain opacity-75 group-hover:opacity-100 group-hover:grayscale-0 xl:grayscale-100"
          />
        ) : (
          <>
            <ImageIcon className="text-muted-foreground h-1/4 w-1/4 object-contain" />
            <span className="text-muted-foreground translate-y-1/2 text-sm font-semibold">
              No image available
            </span>
          </>
        )}
      </div>

      {/* Content */}
      <div className="space-y-4 p-6">
        <div className="space-y-2">
          <h3 className="text-foreground group-hover:text-primary text-xl font-bold transition-colors">
            {title}
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            {truncatedDescription}
          </p>
        </div>

        {careerExperience && (
          <div className="text-muted-foreground flex items-center gap-1.5 text-xs">
            <Briefcase size={12} className="flex-shrink-0" />
            <span className="line-clamp-1">{careerExperience}</span>
          </div>
        )}

        {/* Tags */}
        <div className="flex flex-wrap gap-1">
          {domains.slice(0, 2).map((domain) => (
            <Badge key={domain} variant="secondary" className="text-xs">
              {domain}
            </Badge>
          ))}
          {technologies.slice(0, 2).map((tech) => {
            const domain =
              DOMAIN_TECH_MAP.flatMap((domain) => domain.technologies).find(
                (t) => t.key === tech
              )?.name ?? tech;
            return (
              <Badge key={tech} variant="outline" className="text-xs">
                {domain}
              </Badge>
            );
          })}
          {domains.length + technologies.length > 4 && (
            <Badge key="more" variant="secondary" className="text-xs">
              {`+ ${domains.length + technologies.length - 4} more`}
            </Badge>
          )}
        </div>
      </div>
    </Link>
  );
}
