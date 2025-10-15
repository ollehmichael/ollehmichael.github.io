'use client';

import { Building2, Calendar, ChevronDown, ExternalLink } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

interface CareerItem {
  startDate: string;
  endDate: string | null;
  position: string;
  company: string;
  description: string;
  projectIds?: string[];
}

interface CareerProgressionProps {
  items: CareerItem[];
}

export default function CareerProgression({ items }: CareerProgressionProps) {
  const [expandedItems, setExpandedItems] = useState<Set<number>>(new Set());

  const toggleItem = (index: number) => {
    setExpandedItems((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(index)) {
        newSet.delete(index);
      } else {
        newSet.add(index);
      }
      return newSet;
    });
  };

  return (
    <div className="mx-auto">
      <div className="relative ml-3">
        {/* Timeline line */}
        <div className="absolute left-0 top-7 bottom-0 border-l-2" />

        {items.map(
          (
            { company, position, description, startDate, endDate, projectIds },
            index
          ) => {
            const isExpanded = expandedItems.has(index);
            const truncatedDescription = description.slice(0, 90) + '...';

            return (
              <div key={index} className="relative pl-8 mb-12 last:mb-0">
                {/* Timeline dot */}
                <div className="absolute h-3 w-3 -translate-x-1/2 left-px top-7 rounded-full border-2 border-primary bg-background" />

                {/* Content - Clickable Card */}
                <div
                  onClick={() => toggleItem(index)}
                  className="space-y-3 cursor-pointer rounded-lg p-4 -ml-4 border border-transparent hover:border-primary/20 hover:bg-accent/30 transition-all duration-200"
                >
                  <div className="flex items-center gap-2.5">
                    <div className="shrink-0 h-9 w-9 bg-accent rounded-full flex items-center justify-center">
                      <Building2 className="h-5 w-5 text-muted" />
                    </div>
                    <span className="text-base font-medium">{company}</span>
                    <ChevronDown
                      className={`ml-auto h-5 w-5 transition-transform duration-200 ${
                        isExpanded ? 'rotate-180' : ''
                      }`}
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">{position}</h3>
                    <div className="flex items-center gap-2 mt-2 text-sm">
                      <Calendar className="h-4 w-4" />
                      <span>{`${startDate} - ${endDate || 'PRESENT'}`}</span>
                    </div>
                  </div>
                  <div className="overflow-hidden">
                    <p className="text-sm sm:text-base text-muted-foreground text-pretty transition-all duration-700 ease-in-out">
                      {isExpanded ? description : truncatedDescription}
                    </p>
                  </div>
                  <div
                    className={`overflow-hidden transition-all duration-500 ease-in-out ${
                      isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="flex flex-wrap gap-2">
                      {projectIds &&
                        projectIds.length > 0 &&
                        projectIds.map((projectId) => (
                          <Link
                            key={projectId}
                            href={`/projects/${projectId}`}
                            onClick={(e) => e.stopPropagation()}
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium bg-primary/10 text-primary border border-primary/20 rounded-md hover:bg-primary/20 transition-colors"
                          >
                            <span> {projectId.replace(/-/g, ' ')}</span>
                            <ExternalLink size={12} />
                          </Link>
                        ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          }
        )}
      </div>
    </div>
  );
}
