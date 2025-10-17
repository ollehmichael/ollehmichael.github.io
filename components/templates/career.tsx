import CareerProgression from '@/components/organisms/career-timeline';
import { CareerTimeline } from '@/lib/careerTimeline';

export default function CareerView() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24 lg:px-8">
      <div className="space-y-12 md:space-y-16">
        {/* Header */}
        <div className="animate-fade-in space-y-4">
          <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl">
            Career <span className="text-primary">Journey</span>
          </h1>
          <p className="text-muted-foreground max-w-3xl text-lg md:text-xl">
            A timeline of my professional experience, from military service to
            software engineering leadership.
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
