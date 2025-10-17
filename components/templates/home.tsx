import { SocialLinks } from '@/components/molecules/social-links';
import Link from 'next/link';
import TextTransformer from '../molecules/text-transformer';

export default function HomeView() {
  const nameList = ['MICHAEL HAN', 'BYONG CHEOL HAN', '한병철', '韩秉澈'];

  return (
    <main className="min-h-screen">
      <section className="relative px-4 py-12 sm:px-6 md:py-20 lg:px-8">
        <div className="mx-auto w-full max-w-4xl">
          {/* Name */}
          <TextTransformer texts={nameList} />

          <div className="animate-fade-in-delay-1 mx-auto max-w-3xl space-y-8">
            <div className="text-muted-foreground space-y-6 text-base leading-relaxed md:text-lg">
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

            <blockquote className="border-primary border-l-4 py-4 pl-6">
              <p className="text-foreground text-lg leading-relaxed font-medium md:text-xl">
                If you're aligned on the{' '}
                <span className="text-destructive font-bold">why</span>, nothing
                can stop your team.
              </p>
            </blockquote>

            <div className="text-muted-foreground space-y-6 text-base leading-relaxed md:text-lg">
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

            <div className="flex flex-col items-start gap-6 pt-4 sm:flex-row sm:items-center">
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/projects"
                  className="bg-primary text-primary-foreground hover:bg-primary/90 inline-flex items-center justify-center rounded-md px-8 py-3 text-base font-medium transition-colors"
                >
                  View Projects
                </Link>
                <Link
                  href="/career"
                  className="border-primary text-primary hover:bg-primary/10 inline-flex items-center justify-center rounded-md border px-8 py-3 text-base font-medium transition-colors"
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
