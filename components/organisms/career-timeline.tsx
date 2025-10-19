'use client';

import { CareerItem } from '@/lib/careerTimeline';
import { Projects } from '@/lib/projects';
import { Building2, Calendar, ChevronDown, ExternalLink } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

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
        <div className="absolute top-7 bottom-0 left-0 border-l-2" />

        {items.map(
          (
            {
              company,
              companyLink,
              highlightLinks,
              logo,
              position,
              description,
              startDate,
              endDate,
              projectIds,
            },
            index
          ) => {
            const isExpanded = expandedItems.has(index);
            const truncatedDescription = description.slice(0, 90) + '...';

            return (
              <div key={index} className="relative mb-12 pl-8 last:mb-0">
                {/* Timeline dot */}
                <div className="border-primary bg-background absolute top-7 left-px h-3 w-3 -translate-x-1/2 rounded-full border-2" />

                {/* Content - Clickable Card */}
                <div
                  onClick={() => toggleItem(index)}
                  className="hover:border-primary/20 hover:bg-accent/30 -ml-4 cursor-pointer space-y-3 rounded-lg border border-transparent p-4 transition-all duration-200"
                >
                  <div className="flex items-center gap-2.5">
                    <div
                      className={`${logo ? 'bg-accent-foreground' : 'bg-accent'} flex h-9 w-9 shrink-0 items-center justify-center rounded-full`}
                    >
                      {logo ? (
                        <Image
                          src={logo}
                          alt={`${company} logo`}
                          className="text-muted h-8 w-8 object-contain"
                        />
                      ) : (
                        <Building2 className="text-muted h-5 w-5" />
                      )}
                    </div>
                    <span className="text-base font-medium">{company}</span>
                    {companyLink && (
                      <Link
                        href={companyLink}
                        onClick={(e) => e.stopPropagation()}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-primary h-5 w-5 text-base"
                      >
                        <ExternalLink size={16} />
                      </Link>
                    )}
                    <ChevronDown
                      className={`ml-auto h-5 w-5 transition-transform duration-200 ${
                        isExpanded ? 'rotate-180' : ''
                      }`}
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">{position}</h3>
                    <div className="mt-2 flex items-center gap-2 text-sm">
                      <Calendar className="h-4 w-4" />
                      <span>
                        <span>{`${startDate} - `}</span>
                        {endDate ? (
                          <span>{endDate}</span>
                        ) : (
                          <span className="text-primary">{'PRESENT'}</span>
                        )}
                      </span>
                    </div>
                  </div>
                  <div className="overflow-hidden">
                    <p className="text-muted-foreground text-sm text-pretty transition-all duration-700 ease-in-out sm:text-base">
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
                            className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 inline-flex items-center gap-1.5 rounded-md border px-3 py-1.5 text-xs font-medium transition-colors"
                          >
                            <span>
                              {' '}
                              {
                                Projects.find(
                                  (project) => project.id === projectId
                                )?.title
                              }
                            </span>
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
