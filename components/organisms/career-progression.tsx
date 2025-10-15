'use client';

import { ChevronDown, ChevronUp, ExternalLink } from 'lucide-react';
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

export function CareerProgression({ items }: CareerProgressionProps) {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  // Month name to number mapping
  const monthMap: { [key: string]: number } = {
    Jan: 0,
    Feb: 1,
    Mar: 2,
    Apr: 3,
    May: 4,
    Jun: 5,
    Jul: 6,
    Aug: 7,
    Sep: 8,
    Oct: 9,
    Nov: 10,
    Dec: 11,
  };

  // Parse date strings with month precision
  const parseDate = (dateStr: string | null) => {
    if (!dateStr) {
      // If null, use current date (October 2025)
      return { start: 2025 + 9 / 12, end: 2025 + 9 / 12, isOngoing: true };
    }

    // Parse format like "Aug 2022" or "Jan 2021"
    const match = dateStr.match(/(\w+)\s+(\d{4})/);
    if (!match) return { start: 0, end: 0, isOngoing: false };

    const month = monthMap[match[1]];
    const year = Number.parseInt(match[2]);

    // Calculate decimal year (e.g., Jun 2021 = 2021 + 5/12 = 2021.417)
    const decimalYear = year + month / 12;

    return { start: decimalYear, end: decimalYear, isOngoing: false };
  };

  // Parse date ranges and calculate positions
  const parseDateRange = (startDate: string, endDate: string | null) => {
    const start = parseDate(startDate).start;
    const end = endDate ? parseDate(endDate).end : parseDate(null).end;
    const isOngoing = endDate === null;

    return { start, end, isOngoing };
  };

  // Find the earliest and latest years
  const allDates = items.map((item) =>
    parseDateRange(item.startDate, item.endDate)
  );
  const minYear = Math.floor(Math.min(...allDates.map((d) => d.start)));
  const maxYear = Math.ceil(Math.max(...allDates.map((d) => d.end)));
  const totalYears = maxYear - minYear;

  // Calculate position and width for each item
  const getBarStyle = (startDate: string, endDate: string | null) => {
    const { start, end } = parseDateRange(startDate, endDate);
    const left = ((start - minYear) / totalYears) * 100;
    const width = ((end - start) / totalYears) * 100;

    return { left: `${left}%`, width: `${width}%` };
  };

  // Format date range for display
  const formatDateRange = (startDate: string, endDate: string | null) => {
    if (endDate === null) {
      return `${startDate} — PRESENT`;
    }
    return `${startDate} — ${endDate}`;
  };

  // Generate year markers
  const yearMarkers = [];
  for (let year = minYear; year <= maxYear; year++) {
    yearMarkers.push(year);
  }

  return (
    <div className="space-y-8">
      {/* Year axis (desktop only) */}
      <div className="hidden items-start gap-4 lg:flex">
        <div className="w-48 flex-shrink-0" />
        <div className="relative h-8 flex-1">
          <div className="bg-border absolute inset-x-0 top-1/2 h-[2px]" />
          {yearMarkers.map((year) => {
            const position = ((year - minYear) / totalYears) * 100;
            return (
              <div
                key={year}
                className="absolute top-0 -translate-x-1/2"
                style={{ left: `${position}%` }}
              >
                <div className="bg-border mx-auto h-3 w-[2px]" />
                <span className="text-muted-foreground mt-1 block text-xs whitespace-nowrap">
                  {year}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Career items */}
      <div className="space-y-6">
        {items.map((item, index) => {
          const { isOngoing } = parseDateRange(item.startDate, item.endDate);
          const isExpanded = expandedIndex === index;
          const barStyle = getBarStyle(item.startDate, item.endDate);
          const dateDisplay = formatDateRange(item.startDate, item.endDate);

          return (
            <div
              key={index}
              className="animate-fade-in-delay-1"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Mobile view: stacked layout */}
              <div className="space-y-3 lg:hidden">
                <button
                  onClick={() => setExpandedIndex(isExpanded ? null : index)}
                  className="border-border bg-card hover:border-primary/50 w-full space-y-2 rounded-lg border p-4 text-left transition-colors"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="text-foreground font-semibold">
                          {item.position}
                        </h3>
                        {isOngoing && (
                          <span className="bg-primary/10 text-primary border-primary/20 inline-flex items-center rounded-full border px-2 py-0.5 text-xs font-medium">
                            Current
                          </span>
                        )}
                      </div>
                      <p className="text-muted-foreground mt-1 text-sm">
                        {item.company}
                      </p>
                      <p className="text-muted-foreground mt-1 text-xs">
                        {dateDisplay}
                      </p>
                    </div>
                    {isExpanded ? (
                      <ChevronUp className="text-muted-foreground h-5 w-5 flex-shrink-0" />
                    ) : (
                      <ChevronDown className="text-muted-foreground h-5 w-5 flex-shrink-0" />
                    )}
                  </div>
                  {isExpanded && (
                    <div className="border-border space-y-3 border-t pt-2">
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {item.description}
                      </p>
                      {item.projectIds && item.projectIds.length > 0 && (
                        <div className="space-y-2">
                          <p className="text-muted-foreground text-xs font-semibold tracking-wider uppercase">
                            Related Projects
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {item.projectIds.map((projectId) => (
                              <Link
                                key={projectId}
                                href={`/projects/${projectId}`}
                                className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 inline-flex items-center gap-1.5 rounded-md border px-3 py-1.5 text-xs font-medium transition-colors"
                              >
                                <span>View Project</span>
                                <ExternalLink size={12} />
                              </Link>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </button>
              </div>

              {/* Desktop view: horizontal bar chart */}
              <div className="hidden lg:block">
                <div className="mb-2 flex items-start gap-4">
                  <div className="w-48 flex-shrink-0">
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="text-foreground text-sm font-semibold">
                        {item.position}
                      </h3>
                      {isOngoing && (
                        <span className="bg-primary/10 text-primary border-primary/20 inline-flex items-center rounded-full border px-2 py-0.5 text-xs font-medium">
                          Current
                        </span>
                      )}
                    </div>
                    <p className="text-muted-foreground mt-0.5 text-xs">
                      {item.company}
                    </p>
                  </div>
                  <div className="relative flex-1">
                    <button
                      onClick={() =>
                        setExpandedIndex(isExpanded ? null : index)
                      }
                      className="group absolute h-12 rounded-lg transition-all"
                      style={barStyle}
                    >
                      <div
                        className={`h-full rounded-lg border-2 transition-all ${
                          isOngoing
                            ? 'bg-primary/20 border-primary group-hover:bg-primary/30'
                            : 'bg-card border-border group-hover:border-primary/50'
                        }`}
                      >
                        <div className="flex h-full items-center justify-center px-3">
                          <span className="text-foreground text-xs font-medium whitespace-nowrap">
                            {dateDisplay}
                          </span>
                        </div>
                      </div>
                    </button>
                  </div>
                </div>
                {isExpanded && (
                  <div className="bg-card border-border animate-fade-in mt-2 ml-52 space-y-3 rounded-lg border p-4">
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {item.description}
                    </p>
                    {item.projectIds && item.projectIds.length > 0 && (
                      <div className="border-border space-y-2 border-t pt-2">
                        <p className="text-muted-foreground text-xs font-semibold tracking-wider uppercase">
                          Related Projects
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {item.projectIds.map((projectId) => (
                            <Link
                              key={projectId}
                              href={`/projects/${projectId}`}
                              className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 inline-flex items-center gap-1.5 rounded-md border px-3 py-1.5 text-xs font-medium transition-colors"
                            >
                              <span>View Project</span>
                              <ExternalLink size={12} />
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
