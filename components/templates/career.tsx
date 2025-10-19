'use client';

import CareerProgression from '@/components/organisms/career-timeline';
import { CareerTimeline } from '@/lib/careerTimeline';
import { useEffect, useState } from 'react';

export default function CareerView() {
  const [experience, setExperience] = useState({
    years: 0,
    months: 0,
    days: 0,
  });

  useEffect(() => {
    const calculateExperience = () => {
      const startDate = new Date('2020-06-01');
      const now = new Date();

      let years = now.getFullYear() - startDate.getFullYear();
      let months = now.getMonth() - startDate.getMonth();
      let days = now.getDate() - startDate.getDate();

      // Adjust for negative days
      if (days < 0) {
        months--;
        const prevMonth = new Date(now.getFullYear(), now.getMonth(), 0);
        days += prevMonth.getDate();
      }

      // Adjust for negative months
      if (months < 0) {
        years--;
        months += 12;
      }

      setExperience({ years, months, days });
    };

    calculateExperience();

    // Update daily at midnight
    const now = new Date();
    const tomorrow = new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate() + 1
    );
    const timeUntilMidnight = tomorrow.getTime() - now.getTime();

    const midnightTimeout = setTimeout(() => {
      calculateExperience();
      // Then update every 24 hours
      const dailyInterval = setInterval(
        calculateExperience,
        24 * 60 * 60 * 1000
      );
      return () => clearInterval(dailyInterval);
    }, timeUntilMidnight);

    return () => clearTimeout(midnightTimeout);
  }, []);

  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24 lg:px-8">
      <div className="space-y-12 md:space-y-16">
        {/* Header */}
        <div className="animate-fade-in space-y-4">
          <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl">
            {"Mike's "}
            <span className="text-primary">{'Journey'}</span>
          </h1>
          <h1 className="text-muted-foreground text-lg md:text-xl">
            <span className="text-foreground font-bold">
              {`${experience.years}${experience.years === 1 ? 'year' : 'years'}
              ${experience.months}${experience.months === 1 ? 'month' : 'months'}
              ${experience.days}${experience.days === 1 ? 'day' : 'days'}`}
            </span>
            {' and '}
            <span className="text-foreground font-bold">{'counting...'}</span>
          </h1>
          <p className="text-muted-foreground max-w-3xl text-lg md:text-xl">
            {
              'A timeline of my professional experience, from military service to where I am now.'
            }
          </p>
        </div>

        {/* Career Progression */}
        <div className="animate-fade-in-delay-1">
          <CareerProgression items={CareerTimeline} />
        </div>
      </div>
    </section>
  );
}
