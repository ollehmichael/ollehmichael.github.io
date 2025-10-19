---
applyTo: 'app/**'
---

# Next.js 15 App Router Architecture Guide

## Purpose & Scope

This document provides comprehensive guidance for working with Next.js 15's App Router architecture. It covers file-based routing, Server/Client Components, navigation patterns, data fetching strategies, and performance optimizations.

**When to reference this guide:**

- Creating or modifying routes in the `app/` directory
- Implementing navigation between pages
- Deciding between Server and Client Components
- Implementing data fetching patterns
- Managing route parameters and dynamic routes
- Configuring metadata for SEO
- Implementing error handling and loading states

**Related Documentation:**

- **frontend-workflow.instructions.md** - Overall development workflow and technical standards
- **atomic-components.instructions.md** - Component architecture and Atomic Design methodology

---

## File-Based Routing Architecture

### Directory Structure

Next.js 15 uses a file-system based router where folders define routes and special files create UI:

```
app/
├── layout.tsx          # Root layout (wraps all pages)
├── page.tsx            # Home page (/)
├── not-found.tsx       # 404 page
├── global.d.ts         # Global TypeScript definitions
├── globals.css         # Global styles
├── projects/
│   ├── page.tsx        # Projects list page (/projects)
│   └── [id]/
│       └── page.tsx    # Project detail page (/projects/[id])
├── career/
│   └── page.tsx        # Career page (/career)
└── api/                # API routes (optional)
    └── route.ts        # API endpoint
```

### Special Files

| File            | Purpose                    | Required   | Can be async?                 |
| --------------- | -------------------------- | ---------- | ----------------------------- |
| `layout.tsx`    | Shared UI that wraps pages | Yes (root) | Yes                           |
| `page.tsx`      | Unique UI for a route      | Yes        | Yes                           |
| `loading.tsx`   | Loading UI with Suspense   | No         | No                            |
| `error.tsx`     | Error UI boundary          | No         | No (must be Client Component) |
| `not-found.tsx` | 404 UI                     | No         | No                            |
| `route.ts`      | API endpoint               | No         | N/A                           |
| `template.tsx`  | Re-rendered layout         | No         | No                            |
| `default.tsx`   | Parallel route fallback    | No         | No                            |

### Route Segments

```typescript
// Static route
app/projects/page.tsx → /projects

// Dynamic route (single parameter)
app/projects/[id]/page.tsx → /projects/123

// Dynamic route (multiple parameters)
app/projects/[category]/[id]/page.tsx → /projects/frontend/123

// Catch-all route
app/docs/[...slug]/page.tsx → /docs/a, /docs/a/b, /docs/a/b/c

// Optional catch-all route
app/docs/[[...slug]]/page.tsx → /docs, /docs/a, /docs/a/b
```

### Route Groups (Organization Only)

Use parentheses to organize routes without affecting URL structure:

```
app/
├── (marketing)/
│   ├── about/page.tsx      → /about
│   └── contact/page.tsx    → /contact
└── (shop)/
    ├── products/page.tsx   → /products
    └── cart/page.tsx       → /cart
```

---

## Server Components vs Client Components

### Default: Server Components

**All components in the App Router are Server Components by default** unless marked with `'use client'`.

### Server Components (Default)

**Characteristics:**

- Render on the server only
- Can be async (use `await` directly)
- Can access server-side resources (databases, file system, environment variables)
- No client-side JavaScript bundle impact
- Cannot use React hooks (useState, useEffect, etc.)
- Cannot use browser APIs
- Cannot use event handlers (onClick, onChange, etc.)

**When to use:**

- Fetching data from databases or APIs
- Accessing backend resources directly
- Keeping sensitive information server-side (API keys, secrets)
- Reducing client-side JavaScript bundle size
- Static or content-heavy pages

**Example:**

```typescript
// app/projects/page.tsx (Server Component - default)
import { projects } from '@/lib/projects';

export default async function ProjectsPage() {
  // Can fetch data directly - no loading state needed
  // This runs on the server for every request

  return (
    <div>
      <h1>Projects</h1>
      <ProjectList projects={projects} />
    </div>
  );
}
```

### Client Components

**Characteristics:**

- Marked with `'use client'` directive at the top of the file
- Can use React hooks (useState, useEffect, useContext, etc.)
- Can use browser APIs (window, document, localStorage, etc.)
- Can use event handlers (onClick, onChange, etc.)
- Pre-rendered on server (for initial HTML), then hydrated on client
- Adds JavaScript to client bundle

**When to use:**

- Interactive UI elements (forms, buttons with onClick, etc.)
- React hooks for state management
- Browser APIs (geolocation, localStorage, etc.)
- Event listeners (scroll, resize, keyboard events)
- Real-time updates (WebSockets, polling)
- Third-party libraries that rely on browser APIs

**Example:**

```typescript
// app/components/search-form.tsx (Client Component)
'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export function SearchForm() {
  const [query, setQuery] = useState('');
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push(`/search?q=${query}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search projects..."
      />
      <button type="submit">Search</button>
    </form>
  );
}
```

### Composition Patterns

**Best Practice: Push Client Components to the Leaves**

Keep as much of your component tree as Server Components, only using `'use client'` where necessary.

**❌ Anti-Pattern: Client Component wrapping everything**

```typescript
'use client';

import { useState } from 'react';
import ProjectList from './project-list'; // Also becomes client component!

export default function Page() {
  const [filter, setFilter] = useState('all');

  return (
    <div>
      <select value={filter} onChange={(e) => setFilter(e.target.value)}>
        <option>all</option>
        <option>frontend</option>
      </select>
      {/* ProjectList is now client-side even if it doesn't need to be */}
      <ProjectList filter={filter} />
    </div>
  );
}
```

**✅ Best Practice: Server Component with Client Component children**

```typescript
// app/projects/page.tsx (Server Component)
import { projects } from '@/lib/projects';
import { FilterSelect } from '@/components/filter-select'; // Client Component
import { ProjectList } from '@/components/project-list'; // Server Component

export default function ProjectsPage() {
  return (
    <div>
      <h1>Projects</h1>
      {/* Only FilterSelect needs to be client-side */}
      <FilterSelect />
      {/* ProjectList can be a Server Component */}
      <ProjectList projects={projects} />
    </div>
  );
}
```

**Passing Server Components as Props to Client Components:**

```typescript
// app/page.tsx (Server Component)
import Modal from './modal'; // Client Component
import Content from './content'; // Server Component

export default function Page() {
  return (
    <Modal>
      {/* Content stays as Server Component */}
      <Content />
    </Modal>
  );
}

// app/modal.tsx (Client Component)
'use client';

export default function Modal({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(true);

  return isOpen ? <div className="modal">{children}</div> : null;
}
```

---

## Navigation Patterns

### Link Component (Preferred)

**Use `Link` for client-side navigation with automatic prefetching:**

```typescript
import Link from 'next/link';

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link
      href={`/projects/${project.id}`}
      className="group block rounded-lg border transition-all hover:shadow-lg"
    >
      <h3>{project.title}</h3>
      <p>{project.description}</p>
    </Link>
  );
}
```

**Link Component Features:**

- Automatic prefetching when link enters viewport
- Client-side navigation (no full page reload)
- Scroll position restoration
- Optimistic UI updates
- Preserves client state during navigation

**Link Props:**

```typescript
<Link
  href="/about"           // Required: destination path
  prefetch={true}         // Default: true (prefetch on hover/viewport)
  replace={false}         // Default: false (use replace instead of push)
  scroll={true}           // Default: true (scroll to top after navigation)
  shallow={false}         // Pages Router only (not used in App Router)
>
  About
</Link>
```

### useRouter Hook (Programmatic Navigation)

**Use `useRouter` for navigation triggered by user actions (Client Components only):**

```typescript
'use client';

import { useRouter } from 'next/navigation';

export function BackButton() {
  const router = useRouter();

  return (
    <button onClick={() => router.back()}>
      Go Back
    </button>
  );
}

export function NavigateButton() {
  const router = useRouter();

  const handleNavigate = () => {
    // Programmatic navigation
    router.push('/projects');

    // Other methods:
    // router.back()      // Go back in history
    // router.forward()   // Go forward in history
    // router.refresh()   // Refresh current route (re-fetch server data)
    // router.prefetch('/about') // Manually prefetch a route
  };

  return <button onClick={handleNavigate}>View Projects</button>;
}
```

### usePathname Hook

**Access current pathname in Client Components:**

```typescript
'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';

export function Navigation() {
  const pathname = usePathname();

  return (
    <nav>
      <Link
        href="/"
        className={pathname === '/' ? 'active' : ''}
      >
        Home
      </Link>
      <Link
        href="/projects"
        className={pathname === '/projects' ? 'active' : ''}
      >
        Projects
      </Link>
      <Link
        href="/career"
        className={pathname === '/career' ? 'active' : ''}
      >
        Career
      </Link>
    </nav>
  );
}
```

### useSearchParams Hook

**Access query parameters in Client Components:**

```typescript
'use client';

import { useSearchParams } from 'next/navigation';

export function SearchResults() {
  const searchParams = useSearchParams();

  const query = searchParams.get('q');       // ?q=nextjs
  const filter = searchParams.get('filter'); // &filter=frontend

  return (
    <div>
      <p>Searching for: {query}</p>
      <p>Filter: {filter}</p>
    </div>
  );
}
```

### redirect Function (Server-Side)

**Use `redirect()` in Server Components or Server Actions:**

```typescript
import { redirect } from 'next/navigation';
import { getUser } from '@/lib/auth';

export default async function ProfilePage() {
  const user = await getUser();

  if (!user) {
    // Server-side redirect
    redirect('/login');
  }

  return <div>Welcome, {user.name}!</div>;
}
```

---

## Data Fetching Strategies

### Server Component Data Fetching (Recommended)

**Async Server Components are the preferred way to fetch data:**

```typescript
// app/projects/page.tsx
import { projects } from '@/lib/projects';

export default async function ProjectsPage() {
  // Fetch data directly in the component
  // No loading state needed - handled by loading.tsx or Suspense

  return (
    <div>
      <h1>Projects</h1>
      {projects.map(project => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
}
```

**Fetching from external APIs:**

```typescript
export default async function Page() {
  // Static data (cached by default)
  const staticData = await fetch('https://api.example.com/data', {
    cache: 'force-cache', // Default - cache indefinitely
  });

  // Dynamic data (no cache)
  const dynamicData = await fetch('https://api.example.com/data', {
    cache: 'no-store', // Fetch on every request
  });

  // Revalidated data (ISR - Incremental Static Regeneration)
  const revalidatedData = await fetch('https://api.example.com/data', {
    next: { revalidate: 60 }, // Re-fetch every 60 seconds
  });

  return <div>...</div>;
}
```

**Database queries:**

```typescript
import { db } from '@/lib/db';

export default async function Page() {
  const posts = await db.post.findMany({
    orderBy: { createdAt: 'desc' },
    take: 10,
  });

  return (
    <ul>
      {posts.map(post => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
}
```

### Parallel Data Fetching

**Fetch multiple data sources in parallel:**

```typescript
export default async function Page() {
  // ❌ Sequential (slow)
  const user = await getUser();
  const posts = await getPosts(user.id);

  // ✅ Parallel (fast)
  const [user, posts] = await Promise.all([
    getUser(),
    getPosts(),
  ]);

  return <div>...</div>;
}
```

### Sequential Data Fetching with Suspense

**When one fetch depends on another, use Suspense for streaming:**

```typescript
import { Suspense } from 'react';

export default async function Page({
  params,
}: {
  params: Promise<{ username: string }>;
}) {
  const { username } = await params;

  // Fetch artist data first
  const artist = await getArtist(username);

  return (
    <>
      <h1>{artist.name}</h1>
      {/* Stream playlists separately */}
      <Suspense fallback={<div>Loading playlists...</div>}>
        <Playlists artistID={artist.id} />
      </Suspense>
    </>
  );
}

async function Playlists({ artistID }: { artistID: string }) {
  // This fetch happens after the page starts rendering
  const playlists = await getArtistPlaylists(artistID);

  return (
    <ul>
      {playlists.map(playlist => (
        <li key={playlist.id}>{playlist.name}</li>
      ))}
    </ul>
  );
}
```

### Client Component Data Fetching

**Option 1: Using SWR (Recommended for client-side):**

```typescript
'use client';

import useSWR from 'swr';

const fetcher = (url: string) => fetch(url).then(res => res.json());

export function ProjectList() {
  const { data, error, isLoading } = useSWR('/api/projects', fetcher);

  if (error) return <div>Failed to load</div>;
  if (isLoading) return <div>Loading...</div>;

  return (
    <ul>
      {data.map((project: Project) => (
        <li key={project.id}>{project.title}</li>
      ))}
    </ul>
  );
}
```

**Option 2: Using useEffect (Traditional):**

```typescript
'use client';

import { useState, useEffect } from 'react';

export function ProjectList() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    async function fetchProjects() {
      try {
        const response = await fetch('/api/projects');
        if (!response.ok) throw new Error('Failed to fetch');
        const data = await response.json();
        setProjects(data);
      } catch (err) {
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    }

    fetchProjects();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <ul>
      {projects.map(project => (
        <li key={project.id}>{project.title}</li>
      ))}
    </ul>
  );
}
```

### Passing Data from Server to Client Components

**Pass serializable data as props:**

```typescript
// app/projects/[id]/page.tsx (Server Component)
import { LikeButton } from '@/components/like-button';
import { getProject } from '@/lib/projects';

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const project = await getProject(id);

  return (
    <div>
      <h1>{project.title}</h1>
      <p>{project.description}</p>
      {/* Pass data to Client Component */}
      <LikeButton likes={project.likes} projectId={project.id} />
    </div>
  );
}

// components/like-button.tsx (Client Component)
'use client';

import { useState } from 'react';

export function LikeButton({ likes, projectId }: { likes: number; projectId: string }) {
  const [count, setCount] = useState(likes);

  return (
    <button onClick={() => setCount(count + 1)}>
      Likes: {count}
    </button>
  );
}
```

---

## Route Parameters & Dynamic Routes

### Accessing Route Parameters in Server Components

**Route parameters are passed as a Promise:**

```typescript
// app/projects/[id]/page.tsx
import { notFound } from 'next/navigation';
import { getProjectById } from '@/lib/projects';

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  // Await params to get the values
  const { id } = await params;

  const project = await getProjectById(id);

  if (!project) {
    notFound(); // Shows not-found.tsx
  }

  return (
    <div>
      <h1>{project.title}</h1>
      <p>{project.description}</p>
    </div>
  );
}
```

### Accessing Route Parameters in Client Components

**Use React's `use` hook to unwrap the params promise:**

```typescript
'use client';

import { use } from 'react';

export default function ProjectPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  // Use React's use() hook to read the promise
  const { id } = use(params);

  return <div>Project ID: {id}</div>;
}
```

### Multiple Dynamic Segments

```typescript
// app/projects/[category]/[id]/page.tsx
export default async function Page({
  params,
}: {
  params: Promise<{ category: string; id: string }>;
}) {
  const { category, id } = await params;

  return (
    <div>
      <p>Category: {category}</p>
      <p>Project ID: {id}</p>
    </div>
  );
}
```

### Search Parameters (Query Strings)

**Access search params in Server Components:**

```typescript
// app/search/page.tsx
export default async function SearchPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const { q, filter } = await searchParams;

  return (
    <div>
      <p>Query: {q}</p>
      <p>Filter: {filter}</p>
    </div>
  );
}
```

**Access search params in Client Components:**

```typescript
'use client';

import { useSearchParams } from 'next/navigation';

export default function SearchPage() {
  const searchParams = useSearchParams();

  const query = searchParams.get('q');
  const filter = searchParams.get('filter');

  return (
    <div>
      <p>Query: {query}</p>
      <p>Filter: {filter}</p>
    </div>
  );
}
```

### Generating Static Params (Static Site Generation)

**Pre-render dynamic routes at build time:**

```typescript
// app/projects/[id]/page.tsx
import { projects } from '@/lib/projects';

export async function generateStaticParams() {
  // Return array of params objects to pre-render
  return projects.map(project => ({
    id: project.id,
  }));
}

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const project = projects.find(p => p.id === id);

  return <div>{project?.title}</div>;
}
```

---

## Metadata & SEO

### Static Metadata

**Export a `metadata` object from pages or layouts:**

```typescript
// app/projects/page.tsx
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Projects | Michael Han',
  description: 'Portfolio of software engineering projects',
  openGraph: {
    title: 'Projects | Michael Han',
    description: 'Portfolio of software engineering projects',
    images: ['/og-image.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Projects | Michael Han',
    description: 'Portfolio of software engineering projects',
    images: ['/og-image.jpg'],
  },
};

export default function ProjectsPage() {
  return <div>...</div>;
}
```

### Dynamic Metadata

**Generate metadata based on route parameters:**

```typescript
// app/projects/[id]/page.tsx
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getProjectById } from '@/lib/projects';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const project = await getProjectById(id);

  if (!project) {
    return {
      title: 'Project Not Found',
    };
  }

  return {
    title: `${project.title} | Michael Han`,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
      images: project.images.map(img => ({
        url: img,
        width: 1200,
        height: 630,
      })),
    },
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const project = await getProjectById(id);

  if (!project) {
    notFound();
  }

  return <div>{project.title}</div>;
}
```

### Metadata in Layouts

**Root layout metadata applies to all pages:**

```typescript
// app/layout.tsx
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    default: 'Michael Han | Software Engineer',
    template: '%s | Michael Han', // Page titles will use this template
  },
  description: 'Software engineer portfolio showcasing projects and experience',
  keywords: ['software engineer', 'web development', 'portfolio'],
  authors: [{ name: 'Michael Han' }],
  creator: 'Michael Han',
  metadataBase: new URL('https://ollehmichael.github.io'),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
```

---

## Error Handling & Loading States

### Error Boundaries (error.tsx)

**Catch and handle errors in route segments:**

```typescript
// app/projects/error.tsx
'use client'; // Error boundaries must be Client Components

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log error to error reporting service
    console.error('Projects error:', error);
  }, [error]);

  return (
    <div>
      <h2>Something went wrong!</h2>
      <p>{error.message}</p>
      <button onClick={() => reset()}>Try again</button>
    </div>
  );
}
```

### Not Found Pages (not-found.tsx)

**Custom 404 pages:**

```typescript
// app/projects/[id]/not-found.tsx
import Link from 'next/link';

export default function NotFound() {
  return (
    <div>
      <h2>Project Not Found</h2>
      <p>Could not find the requested project.</p>
      <Link href="/projects">Return to Projects</Link>
    </div>
  );
}
```

**Trigger not-found:**

```typescript
// app/projects/[id]/page.tsx
import { notFound } from 'next/navigation';

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const project = await getProjectById(id);

  if (!project) {
    notFound(); // Shows not-found.tsx
  }

  return <div>{project.title}</div>;
}
```

### Loading States (loading.tsx)

**Automatic loading UI with Suspense:**

```typescript
// app/projects/loading.tsx
export default function Loading() {
  return (
    <div className="animate-pulse">
      <div className="h-8 bg-gray-200 rounded w-1/4 mb-4"></div>
      <div className="h-4 bg-gray-200 rounded w-1/2 mb-2"></div>
      <div className="h-4 bg-gray-200 rounded w-1/3"></div>
    </div>
  );
}
```

**Manual Suspense boundaries:**

```typescript
// app/projects/page.tsx
import { Suspense } from 'react';
import { ProjectList } from '@/components/project-list';
import { ProjectFilters } from '@/components/project-filters';

export default function ProjectsPage() {
  return (
    <div>
      <h1>Projects</h1>

      {/* Filters load immediately */}
      <ProjectFilters />

      {/* Project list streams in */}
      <Suspense fallback={<div>Loading projects...</div>}>
        <ProjectList />
      </Suspense>
    </div>
  );
}
```

---

## Performance Best Practices

### Prefetching

**Automatic prefetching with Link:**

```typescript
import Link from 'next/link';

export function Navigation() {
  return (
    <nav>
      {/* Automatically prefetches when link enters viewport */}
      <Link href="/projects" prefetch={true}>
        Projects
      </Link>

      {/* Disable prefetching */}
      <Link href="/contact" prefetch={false}>
        Contact
      </Link>
    </nav>
  );
}
```

**Manual prefetching:**

```typescript
'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export function PrefetchButton() {
  const router = useRouter();

  useEffect(() => {
    // Prefetch route on component mount
    router.prefetch('/projects');
  }, [router]);

  return (
    <button onClick={() => router.push('/projects')}>
      View Projects
    </button>
  );
}
```

### Streaming with Suspense

**Stream components as they become ready:**

```typescript
import { Suspense } from 'react';

export default function Page() {
  return (
    <div>
      {/* Header renders immediately */}
      <header>
        <h1>Dashboard</h1>
      </header>

      {/* Content streams in as ready */}
      <Suspense fallback={<Skeleton />}>
        <UserProfile />
      </Suspense>

      <Suspense fallback={<Skeleton />}>
        <RecentActivity />
      </Suspense>

      <Suspense fallback={<Skeleton />}>
        <Analytics />
      </Suspense>
    </div>
  );
}
```

### Data Fetching Best Practices

**✅ Do:**

- Fetch data in Server Components when possible
- Use parallel data fetching with `Promise.all()`
- Use `cache: 'force-cache'` for static data
- Use `next: { revalidate: X }` for ISR
- Implement loading states with `loading.tsx` or Suspense
- Use SWR or React Query for client-side caching

**❌ Don't:**

- Fetch data in Client Components unless necessary
- Make sequential API calls when parallel is possible
- Fetch the same data in multiple components (use prop passing)
- Use `cache: 'no-store'` unless data must be fresh
- Forget to handle loading and error states

### Route Organization

**Organize routes logically:**

```
app/
├── (marketing)/          # Route group (doesn't affect URL)
│   ├── layout.tsx        # Marketing layout
│   ├── page.tsx          # Home (/)
│   ├── about/
│   │   └── page.tsx      # /about
│   └── contact/
│       └── page.tsx      # /contact
├── (app)/                # Route group (doesn't affect URL)
│   ├── layout.tsx        # App layout
│   ├── dashboard/
│   │   └── page.tsx      # /dashboard
│   └── settings/
│       └── page.tsx      # /settings
└── api/                  # API routes
    └── projects/
        └── route.ts      # /api/projects
```

---

## Common Patterns & Anti-Patterns

### ✅ Pattern: Server Component with Client Component Children

```typescript
// app/projects/page.tsx (Server Component)
import { projects } from '@/lib/projects';
import { ProjectFilter } from '@/components/project-filter'; // Client Component
import { ProjectCard } from '@/components/project-card'; // Can be Server Component

export default function ProjectsPage() {
  return (
    <div>
      <h1>Projects</h1>
      {/* Interactive filter */}
      <ProjectFilter />
      {/* Static project cards */}
      <div className="grid">
        {projects.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}
```

### ❌ Anti-Pattern: Client Component Wrapping Everything

```typescript
// ❌ This makes everything client-side unnecessarily
'use client';

import { useState } from 'react';
import { ProjectList } from '@/components/project-list'; // Now forced to be client

export default function Page() {
  const [filter, setFilter] = useState('all');

  return (
    <div>
      <select value={filter} onChange={e => setFilter(e.target.value)}>
        <option>all</option>
      </select>
      <ProjectList filter={filter} /> {/* Could have been server component */}
    </div>
  );
}
```

### ✅ Pattern: Passing Promises to Client Components

```typescript
// Server Component
export default function Page() {
  // Don't await - pass promise to client component
  const dataPromise = fetchData();

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ClientComponent data={dataPromise} />
    </Suspense>
  );
}

// Client Component
'use client';
import { use } from 'react';

export function ClientComponent({ data }: { data: Promise<Data> }) {
  const resolvedData = use(data);
  return <div>{resolvedData.title}</div>;
}
```

### ✅ Pattern: Collocating Data Fetching

```typescript
// Keep data fetching close to where it's used
async function ProjectList() {
  const projects = await getProjects();

  return (
    <ul>
      {projects.map(project => (
        <li key={project.id}>{project.title}</li>
      ))}
    </ul>
  );
}

export default function Page() {
  return (
    <div>
      <h1>Projects</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <ProjectList />
      </Suspense>
    </div>
  );
}
```

### ❌ Anti-Pattern: Prop Drilling Through Many Layers

```typescript
// ❌ Don't drill data through many layers
export default async function Page() {
  const data = await fetchData();
  return <Layout data={data} />;
}

function Layout({ data }) {
  return <Sidebar data={data} />;
}

function Sidebar({ data }) {
  return <Widget data={data} />;
}

// ✅ Do: Fetch data where it's needed
export default function Page() {
  return <Layout />;
}

function Layout() {
  return <Sidebar />;
}

async function Sidebar() {
  const data = await fetchData(); // Fetch here
  return <Widget data={data} />;
}
```

---

## Reference Examples from Next.js 15

### Example: Complete Page with Data Fetching, Metadata, and Error Handling

```typescript
// app/projects/[id]/page.tsx
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Suspense } from 'react';
import { getProjectById, getRelatedProjects } from '@/lib/projects';
import { ProjectDetailsView } from '@/components/templates/projectDetails';
import { RelatedProjects } from '@/components/organisms/related-projects';
import { BackButton } from '@/components/molecules/back-button';

// Generate metadata for SEO
export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const project = await getProjectById(id);

  if (!project) {
    return {
      title: 'Project Not Found',
    };
  }

  return {
    title: `${project.title} | Michael Han`,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
      images: project.images,
    },
  };
}

// Main page component
export default async function ProjectPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  // Fetch main project data
  const project = await getProjectById(id);

  if (!project) {
    notFound();
  }

  return (
    <div>
      <BackButton />

      {/* Main content renders immediately */}
      <ProjectDetailsView project={project} />

      {/* Related projects stream in */}
      <Suspense fallback={<div>Loading related projects...</div>}>
        <RelatedProjects projectId={id} />
      </Suspense>
    </div>
  );
}

// Pre-render all project pages at build time
export async function generateStaticParams() {
  const projects = await getAllProjects();

  return projects.map(project => ({
    id: project.id,
  }));
}
```

### Example: Layout with Client Component Navigation

```typescript
// app/layout.tsx
import type { Metadata } from 'next';
import { Navigation } from '@/components/organisms/navigation'; // Client Component
import { Footer } from '@/components/organisms/footer';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'Michael Han | Software Engineer',
    template: '%s | Michael Han',
  },
  description: 'Software engineer portfolio',
  metadataBase: new URL('https://ollehmichael.github.io'),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {/* Client component with active link highlighting */}
        <Navigation />

        <main>{children}</main>

        <Footer />
      </body>
    </html>
  );
}
```

### Example: Client Component with Server Component Children

```typescript
// app/projects/page.tsx (Server Component)
import { Suspense } from 'react';
import { ProjectGrid } from '@/components/organisms/project-grid';
import { ProjectFilters } from '@/components/molecules/project-filters'; // Client Component
import { projects } from '@/lib/projects';

export default function ProjectsPage() {
  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold">Projects</h1>
        {/* Client component for interactivity */}
        <ProjectFilters />
      </div>

      {/* Server component for static rendering */}
      <Suspense fallback={<div>Loading projects...</div>}>
        <ProjectGrid projects={projects} />
      </Suspense>
    </div>
  );
}
```

---

## Quick Reference

### File Naming Conventions

| File            | Purpose           |
| --------------- | ----------------- |
| `page.tsx`      | Route UI          |
| `layout.tsx`    | Shared UI wrapper |
| `loading.tsx`   | Loading UI        |
| `error.tsx`     | Error UI          |
| `not-found.tsx` | 404 UI            |
| `route.ts`      | API endpoint      |

### Server vs Client Component Decision Tree

```
Does it need interactivity (onClick, onChange, etc.)?
  → YES: Client Component ('use client')
  → NO: ↓

Does it need React hooks (useState, useEffect, etc.)?
  → YES: Client Component ('use client')
  → NO: ↓

Does it need browser APIs (window, localStorage, etc.)?
  → YES: Client Component ('use client')
  → NO: ↓

Can it be a Server Component?
  → YES: Server Component (default)
```

### Navigation Methods

| Method        | Use Case                | Component Type |
| ------------- | ----------------------- | -------------- |
| `<Link>`      | Declarative navigation  | Both           |
| `useRouter()` | Programmatic navigation | Client only    |
| `redirect()`  | Server-side redirects   | Server only    |

### Data Fetching Strategies

| Strategy               | When to Use            | Component Type |
| ---------------------- | ---------------------- | -------------- |
| Async Server Component | Most data fetching     | Server         |
| SWR                    | Client-side caching    | Client         |
| `useEffect` + `fetch`  | Simple client fetching | Client         |
| Server Actions         | Mutations              | Both           |

---

## Summary

### Key Principles

1. **Server Components by default** - Only use `'use client'` when necessary
2. **Push client components to leaves** - Keep as much server-rendered as possible
3. **Async Server Components for data** - Fetch data on the server when possible
4. **Use Link for navigation** - Automatic prefetching and client-side transitions
5. **Await params in Server Components** - Route parameters are promises in Next.js 15
6. **Use Suspense for streaming** - Progressive rendering for better UX
7. **Implement error boundaries** - Use error.tsx for graceful error handling
8. **Static metadata for SEO** - Export metadata objects from pages/layouts
9. **Parallel data fetching** - Use `Promise.all()` for independent requests
10. **Loading states everywhere** - Use loading.tsx or Suspense fallbacks

---

## Additional Resources

- **Next.js 15 Documentation**: https://nextjs.org/docs
- **App Router Migration Guide**: https://nextjs.org/docs/app/building-your-application/upgrading/app-router-migration
- **Server Components**: https://nextjs.org/docs/app/building-your-application/rendering/server-components
- **Data Fetching**: https://nextjs.org/docs/app/building-your-application/data-fetching
- **Routing**: https://nextjs.org/docs/app/building-your-application/routing

---

_Last Updated: October 19, 2025_
