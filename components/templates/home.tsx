import { SocialLinks } from '@/components/molecules/social-links';
import Link from 'next/link';
import TextTransformer from '../molecules/text-transformer';

export default function Homepage() {
  const nameList = ['MICHAEL HAN', 'BYONG CHEOL HAN', '한병철', '韩秉澈'];

  return (
    <main className="min-h-screen">
      <section className="relative px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="max-w-4xl w-full mx-auto">
          {/* Name */}
          <TextTransformer texts={nameList} />

          <div className="space-y-8 animate-fade-in-delay-1 max-w-3xl mx-auto">
            <div className="space-y-6 text-base md:text-lg leading-relaxed text-muted-foreground">
              <p>
                I'm a man of many identities - a{' '}
                <span className="text-foreground font-medium">developer</span>,
                a{' '}
                <span className="text-foreground font-medium">
                  jazz musician
                </span>
                , a{' '}
                <span className="text-foreground font-medium">gym addict</span>,
                a{' '}
                <span className="text-foreground font-medium">
                  former drill sergeant
                </span>
                , and a{' '}
                <span className="text-foreground font-medium">
                  dreamer with a "Let's get shit done" attitude
                </span>
                .
              </p>

              <p>
                I'm a truly passionate software engineer experienced in{' '}
                <span>Frontend</span>, Mobile Dev, Backend, Data Transformation,
                DevSecOps, Blockchain, and Agile Methodologies. My work ethic
                revolves around upholding{' '}
                <span className="text-foreground font-medium">
                  best practices
                </span>{' '}
                and{' '}
                <span className="text-foreground font-medium">
                  methodologies
                </span>{' '}
                to drive the best possible outcomes.
              </p>
            </div>

            <blockquote className="border-l-4 border-primary pl-6 py-4">
              <p className="text-lg md:text-xl font-medium text-foreground leading-relaxed">
                If you're aligned on the{' '}
                <span className="text-destructive font-bold">why</span>, nothing
                can stop your team.
              </p>
            </blockquote>

            <div className="space-y-6 text-base md:text-lg leading-relaxed text-muted-foreground">
              <p>
                I thrive on delivering exceptional products that stand out for
                their quality and innovation, all while fostering a
                collaborative and enjoyable team environment.
              </p>
              <p>
                Through a blend of expertise and a passion for excellence, I
                strive to make every project a success story, combining
                technical prowess with a positive team dynamic.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 pt-4">
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/projects"
                  className="inline-flex items-center justify-center px-8 py-3 text-base font-medium rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
                >
                  View Projects
                </Link>
                <Link
                  href="/career"
                  className="inline-flex items-center justify-center px-8 py-3 text-base font-medium rounded-md border border-primary text-primary hover:bg-primary/10 transition-colors"
                >
                  View Career Journey
                </Link>
              </div>
            </div>
            <SocialLinks />
          </div>
        </div>
      </section>
    </main>
  );
}
