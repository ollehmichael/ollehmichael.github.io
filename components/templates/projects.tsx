'use client';

import { FilterChip } from '@/components/atoms/filter-chip';
import { ProjectCard } from '@/components/molecules/project-card';
import { PROJECT_DOMAINS, PROJECT_TECHNOLOGIES } from '@/lib/constants';
import { Projects } from '@/lib/projects';
import { useMemo, useState } from 'react';

export default function ProjectsView() {
  const [activeDomains, setActiveDomains] = useState<string[]>([]);
  const [activeTechnologies, setActiveTechnologies] = useState<string[]>([]);

  const toggleDomain = (domain: string) => {
    setActiveDomains((prev) =>
      prev.includes(domain)
        ? prev.filter((d) => d !== domain)
        : [...prev, domain]
    );
  };

  const toggleTechnology = (tech: string) => {
    setActiveTechnologies((prev) =>
      prev.includes(tech) ? prev.filter((t) => t !== tech) : [...prev, tech]
    );
  };

  const filteredProjects = useMemo(() => {
    return Projects.filter((project) => {
      const domainMatch =
        activeDomains.length === 0 ||
        activeDomains.some((d) => project.domains.includes(d));
      const techMatch =
        activeTechnologies.length === 0 ||
        activeTechnologies.some((t) => project.technologies.includes(t));
      return domainMatch && techMatch;
    });
  }, [activeDomains, activeTechnologies]);

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 md:py-20 lg:px-8">
      {/* Title */}
      <h1 className="animate-fade-in mb-12 text-4xl font-bold sm:text-5xl md:text-6xl">
        My <span className="text-primary">Projects</span>
      </h1>

      {/* Filters */}
      <div className="animate-fade-in-delay-1 mb-12 space-y-6">
        {/* Domain Filters */}
        <div className="space-y-3">
          <h2 className="text-muted-foreground text-sm font-semibold tracking-wider uppercase">
            Filter by Domain
          </h2>
          <div className="flex flex-wrap gap-2">
            {PROJECT_DOMAINS.map((domain) => (
              <FilterChip
                key={domain}
                label={domain}
                isActive={activeDomains.includes(domain)}
                onClick={() => toggleDomain(domain)}
              />
            ))}
          </div>
        </div>

        {/* Technology Filters */}
        <div className="space-y-3">
          <h2 className="text-muted-foreground text-sm font-semibold tracking-wider uppercase">
            Filter by Technology
          </h2>
          <div className="flex flex-wrap gap-2">
            {PROJECT_TECHNOLOGIES.map((tech) => (
              <FilterChip
                key={tech}
                label={tech}
                isActive={activeTechnologies.includes(tech)}
                onClick={() => toggleTechnology(tech)}
              />
            ))}
          </div>
        </div>

        {/* Active filters count */}
        {(activeDomains.length > 0 || activeTechnologies.length > 0) && (
          <div className="text-muted-foreground flex items-center gap-4 text-sm">
            <span>
              Showing {filteredProjects.length} of {Projects.length} projects
            </span>
            <button
              onClick={() => {
                setActiveDomains([]);
                setActiveTechnologies([]);
              }}
              className="text-primary hover:text-primary/80 transition-colors"
            >
              Clear all filters
            </button>
          </div>
        )}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
        {filteredProjects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>

      {/* No results message */}
      {filteredProjects.length === 0 && (
        <div className="py-12 text-center">
          <p className="text-muted-foreground text-lg">
            No projects match your filters. Try adjusting your selection.
          </p>
        </div>
      )}
    </div>
  );
}
