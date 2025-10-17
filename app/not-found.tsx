import { ArrowLeft, SearchX } from 'lucide-react';
import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="min-h-screen pt-20">
      <div className="flex min-h-[60vh] flex-col items-center justify-center px-4">
        <div className="animate-fade-in text-center">
          {/* Icon */}
          <div className="mb-6 flex justify-center">
            <div className="bg-muted/50 rounded-full p-6">
              <SearchX className="text-muted-foreground h-16 w-16" />
            </div>
          </div>

          {/* Title */}
          <h1 className="mb-4 text-4xl font-bold sm:text-5xl">
            Page Not Found
          </h1>

          {/* Description */}
          <p className="text-muted-foreground mb-8 max-w-md text-lg">
            The page you're looking for doesn't exist or may have been removed.
          </p>

          {/* Back Button */}
          <Link
            href="/"
            className="bg-primary text-primary-foreground hover:bg-primary/90 inline-flex items-center gap-2 rounded-lg px-6 py-3 font-medium transition-colors"
          >
            <ArrowLeft size={20} />
            <span>Back to Home</span>
          </Link>
        </div>
      </div>
    </main>
  );
}
