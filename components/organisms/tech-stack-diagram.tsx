import { DOMAIN_TECH_MAP } from '@/lib/constants';
import { ImageIcon } from 'lucide-react';
import Image from 'next/image';

interface TechStackDiagramProps {
  technologies: string[];
}

export function TechStackDiagram({ technologies }: TechStackDiagramProps) {
  // Filter domains to only show those with matching technologies
  const activeDomains = DOMAIN_TECH_MAP.map((domain) => ({
    ...domain,
    technologies: domain.technologies.filter((tech) =>
      technologies.includes(tech.key)
    ),
  })).filter((domain) => domain.technologies.length > 0);

  const darkLogos = ['SWR', 'Express.js'];

  // If no matching technologies, don't render anything
  if (activeDomains.length === 0) {
    return null;
  }

  return (
    <div className="w-full space-y-0">
      {activeDomains.map((domain, domainIndex) => (
        <div key={domain.title}>
          {/* Domain Section */}
          <div className="py-6">
            {/* Domain Title */}
            <h3 className="text-muted-foreground mb-3 text-sm font-medium tracking-wider uppercase">
              {domain.title}
            </h3>

            {/* Technology Grid */}
            <div className="flex flex-row flex-wrap justify-between gap-12 md:justify-start md:gap-6">
              {domain.technologies.map((tech) => (
                <div
                  key={tech.name}
                  className="bg-card flex h-25 w-25 flex-col items-center justify-center gap-1 rounded-lg border"
                >
                  {/* Tech Icon */}
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center overflow-hidden rounded">
                    {tech.imagePath ? (
                      <Image
                        src={tech.imagePath}
                        alt={tech.name}
                        className={`h-5 w-5 rounded object-contain ${darkLogos.includes(tech.name) ? 'bg-accent-foreground' : null}`}
                      />
                    ) : (
                      <ImageIcon className="text-muted-foreground h-5 w-5" />
                    )}
                  </div>

                  {/* Tech Name */}
                  <span className="text-sm font-medium">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Thin Divider (only between sections, not after the last one) */}
          {domainIndex < activeDomains.length - 1 && (
            <div className="border-border hidden border-t md:block" />
          )}
        </div>
      ))}
    </div>
  );
}
