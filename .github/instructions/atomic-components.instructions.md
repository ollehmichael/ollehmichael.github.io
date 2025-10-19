---
applyTo: 'components/**'
---

# Atomic Design Component Architecture

## Overview

This project follows **Atomic Design methodology** created by Brad Frost, a design system approach that breaks user interfaces into hierarchical building blocks. Atomic Design is **not a linear process**, but rather a **mental model** that helps us think of our user interfaces as both a cohesive whole and a collection of parts at the same time.

## The Five Stages of Atomic Design

Atomic design consists of five distinct stages working together to create interface design systems in a deliberate and hierarchical manner:

```
Atoms → Molecules → Organisms → Templates → Pages
```

### 1. Atoms

**Definition**: UI elements that can't be broken down any further without ceasing to be functional.

**Characteristics**:

- Basic HTML elements (labels, inputs, buttons, headings, etc.)
- Foundational building blocks of all user interfaces
- Each has its own unique properties (dimensions, font sizes, colors)
- Only really come to life with application (don't exist in a vacuum)

**In This Project**:

- Located in `components/atoms/` and `components/ui/` (shadcn/ui)
- Examples:
  - `filter-chip.tsx` - Interactive filter tags
  - `logo.tsx` - Brand logo component
  - `social-icon.tsx` - Social media icons
  - shadcn/ui components: `badge.tsx`, `button.tsx`, `card.tsx`, `input.tsx`, etc.

**Key Principle**: Atoms demonstrate all your base styles at a glance and serve as a helpful reference as you develop and maintain your design system.

---

### 2. Molecules

**Definition**: Relatively simple groups of UI elements functioning together as a unit.

**Characteristics**:

- Combinations of 2-5 atoms bonded together
- Take on distinct new properties when combined
- Simple, portable, reusable components
- Follow the **Single Responsibility Principle** - "do one thing and do it well"
- Make testing easier, encourage reusability, promote consistency

**Example from Brad Frost**:
A search form molecule = label atom + input atom + button atom

- When combined, these abstract atoms suddenly have purpose
- The label defines the input
- Clicking the button submits the form
- Result: a simple, portable, reusable component

**In This Project**:

- Located in `components/molecules/`
- **Reusability Rule**: Must be used in 2+ pages/contexts to justify molecule status
- Examples:
  - `nav-menu.tsx` - Navigation menu combining links and buttons
  - `project-card.tsx` - Card displaying project info (image + title + badges + description)
  - `social-links.tsx` - Group of social media icon links
  - `text-transformer.tsx` - Animated text display component

**Key Principle**: Creating simple components helps adhere to the Single Responsibility Principle. Burdening a single pattern with too much complexity makes software unwieldy.

---

### 3. Organisms

**Definition**: Relatively complex UI components composed of groups of molecules and/or atoms and/or other organisms that form distinct sections of an interface.

**Characteristics**:

- Form standalone sections of an interface
- Can consist of similar or different molecule types
- Provide important sense of context
- Serve as distinct patterns that can be used again and again
- More elaborate than molecules

**Example from Brad Frost**:
A header organism = logo atom + primary navigation molecule + search form molecule

- Forms a standalone section even though it contains several smaller pieces
- Each piece has its own unique properties and functionality

**In This Project**:

- Located in `components/organisms/`
- **Reusability Rule**: Must be used across 2+ pages to justify organism status
- Examples:
  - `career-timeline.tsx` - Timeline displaying career progression
  - `footer.tsx` - Site footer with links and information
  - `navigation.tsx` - Main site navigation bar
  - `image-carousel.tsx` - Image slider with controls
  - `tech-stack-diagram.tsx` - Technology stack visualization

**Key Principle**: Building up from molecules to organisms provides designers and developers with an important sense of context. Organisms demonstrate smaller components in action.

---

### 4. Templates

**Definition**: Page-level objects that place components into a layout and articulate the design's underlying content structure.

**Characteristics**:

- Provide context for relatively abstract molecules and organisms
- Focus on **content structure**, not final content (skeleton)
- Define properties like image sizes and character lengths
- Account for dynamic nature of content
- Provide needed guardrails for types of content

**Key Quote from Mark Boulton**:

> "You can create good experiences without knowing the content. What you can't do is create good experiences without knowing your content structure. What is your content made from, not what your content is."

**In This Project**:

- Located in `components/templates/`
- Each template corresponds to a page type
- Examples:
  - `home.tsx` - Homepage layout structure
  - `projects.tsx` - Projects listing page layout
  - `projectDetails.tsx` - Individual project detail page layout
  - `career.tsx` - Career timeline page layout

**Key Principle**: Templates focus on the page's underlying content structure rather than the page's final content. This helps create systems that account for dynamic content.

---

### 5. Pages

**Definition**: Specific instances of templates that show what a UI looks like with real representative content in place.

**Characteristics**:

- Most concrete stage of atomic design
- What users actually see and interact with
- Where stakeholders sign off
- Essential for **testing the effectiveness of the design system**
- Articulate **variations in templates**

**Content Variations to Test** (from Brad Frost):

- A user has 1 item vs. 10 items in their cart
- Empty states for first-time users
- One headline is 40 characters, another is 340 characters
- Admin users see additional buttons vs. regular users
- Grid with 3 items vs. 100 items

**In This Project**:

- Located in `app/` directory (Next.js App Router)
- Examples:
  - `app/page.tsx` - Home page (/)
  - `app/projects/page.tsx` - Projects listing (/projects)
  - `app/projects/[id]/page.tsx` - Project detail (/projects/[id])
  - `app/career/page.tsx` - Career page (/career)
  - `app/not-found.tsx` - 404 page

**Key Principle**: Pages provide a place to test the design system with real content and articulate variations. Creating pages that account for variations helps create more resilient design systems.

---

## Core Atomic Design Principles

### 1. Not a Linear Process

**Important**: Atomic design is NOT "Step 1: atoms, Step 2: molecules, Step 3: organisms..."

Instead, think of the stages as a **mental model** that allows us to:

- Concurrently create final UIs and their underlying design systems
- Traverse between abstract and concrete
- Zoom in on detailed components and zoom out to see the whole

### 2. The Part and The Whole

From Frank Chimero's _The Shape of Design_:

> "The painter, when at a distance from the easel, can assess and analyze the whole of the work from this vantage. He scrutinizes and listens, chooses the next stroke to make, then approaches the canvas to do it. Then, he steps back again to see what he's done in relation to the whole."

**Application**:

- When crafting a component → like the painter at the canvas (detailed strokes)
- When viewing in layout context → like the painter stepping back (assessing composition)
- The parts influence the whole, and the whole influences the parts

### 3. Single Responsibility Principle

Each component should **do one thing and do it well**.

**Benefits**:

- Makes testing easier
- Encourages reusability
- Promotes consistency throughout the interface
- Prevents software from becoming unwieldy

### 4. Clean Separation Between Structure and Content

From Mark Boulton:

> "Content needs to be structured and structuring alters your content, designing alters content. It's not 'content then design', or 'content or design'. It's 'content and design'."

**Application**:

- Templates define content structure (skeleton)
- Pages pour real content into that structure
- The content we pour influences the characteristics of underlying patterns
- If content breaks a pattern, address the issue at the atomic level

---

## Project Structure

```
components/
  atoms/              # Basic UI elements (shadcn/ui + custom)
    filter-chip.tsx
    logo.tsx
    social-icon.tsx

  molecules/          # Simple combinations (2+ pages)
    nav-menu.tsx
    project-card.tsx
    social-links.tsx
    text-transformer.tsx

  organisms/          # Complex sections (2+ pages)
    career-timeline.tsx
    footer.tsx
    navigation.tsx
    image-carousel.tsx
    tech-stack-diagram.tsx

  templates/          # Page-level layouts
    home.tsx
    projects.tsx
    projectDetails.tsx
    career.tsx

  ui/                 # shadcn/ui components
    badge.tsx
    button.tsx
    card.tsx
    input.tsx
    # ... etc

app/                  # Next.js App Router pages
  page.tsx            # Home page (/)
  layout.tsx          # Root layout
  not-found.tsx       # 404 page

  projects/
    page.tsx          # Projects page (/projects)
    [id]/
      page.tsx        # Project detail (/projects/[id])

  career/
    page.tsx          # Career page (/career)

lib/                  # Data, utilities, constants
  projects.ts         # Project data and types
  careerTimeline.ts   # Career data
  constants.ts        # App constants
  utils.ts            # Utility functions (cn, etc.)
```

---

## Component Placement Decision Tree

When creating a new component, follow this decision tree:

### Step 1: Is it a basic UI element?

**YES** → Place in `components/atoms/` or use existing shadcn/ui component from `components/ui/`

**Examples**:

- Button, Input, Badge, Card → Use shadcn/ui from `components/ui/`
- Custom filter chip, logo, icon → Create in `components/atoms/`

---

### Step 2: Does it combine 2-5 atoms?

**YES** → Check reusability:

**Used 2+ times across different pages/contexts?**

- YES → Create in `components/molecules/`
- NO → Keep inline in template or page

**Examples**:

- **Molecule**: Search bar (label + input + button) used in header and search page → `components/molecules/search-bar.tsx`
- **Inline**: Custom form only used on contact page → Keep in contact page component

---

### Step 3: Is it a complex UI section?

**YES** → Check reusability:

**Used across 2+ pages?**

- YES → Create in `components/organisms/`
- NO → Keep in template

**Examples**:

- **Organism**: Navigation header used on all pages → `components/organisms/navigation.tsx`
- **Template-specific**: Special banner only on homepage → Keep in `components/templates/home.tsx`

---

### Step 4: Is it a page-level layout?

**YES** → Create in `components/templates/`

**Purpose**: Define content structure and layout for a page type

**Examples**:

- Homepage layout → `components/templates/home.tsx`
- Project detail layout → `components/templates/projectDetails.tsx`

---

### Step 5: Is it a route/page?

**YES** → Create in `app/[route]/page.tsx`

**Purpose**: Actual page with real content that users see

**Examples**:

- Homepage → `app/page.tsx`
- Project detail → `app/projects/[id]/page.tsx`

---

## Quick Reference Table

| Component Type       | Reused?        | Location                                         | Example                             |
| -------------------- | -------------- | ------------------------------------------------ | ----------------------------------- |
| **Basic UI Element** | N/A            | `components/atoms/` or `components/ui/` (shadcn) | filter-chip, logo, button, badge    |
| **Atom Combination** | Yes (2+ pages) | `components/molecules/`                          | project-card, nav-menu              |
| **Atom Combination** | No (1 page)    | Keep in template or inline in page               | Custom form in contact page         |
| **Complex Section**  | Yes (2+ pages) | `components/organisms/`                          | navigation, footer, carousel        |
| **Complex Section**  | No (1 page)    | Keep in template                                 | Homepage hero section               |
| **Page Layout**      | N/A            | `components/templates/`                          | home, projects, projectDetails      |
| **Route/Page**       | N/A            | `app/[route]/page.tsx`                           | app/page.tsx, app/projects/page.tsx |

---

## Best Practices

### 1. Reusability Threshold

**Rule**: A component must be used in **2 or more contexts** to justify extraction to molecules/ or organisms/.

**Why**:

- Prevents premature abstraction
- Keeps codebase lean and maintainable
- Follows YAGNI (You Aren't Gonna Need It) principle

**If used only once**: Keep it inline or in the template where it's used.

---

### 2. Single Responsibility

**Each component should do one thing and do it well.**

✅ **Good Example**:

```typescript
// components/molecules/search-bar.tsx
// Does ONE thing: provides search input functionality
export function SearchBar({ onSearch }: SearchBarProps) {
  return (
    <form onSubmit={handleSubmit}>
      <Label htmlFor="search">Search</Label>
      <Input id="search" type="search" />
      <Button type="submit">Search</Button>
    </form>
  );
}
```

❌ **Bad Example**:

```typescript
// components/molecules/search-bar.tsx
// Does TOO MANY things: search, filters, sorting, pagination
export function SearchBar({ onSearch, filters, onSort, pagination }: Props) {
  // Too much complexity in one component!
}
```

---

### 3. Content-Aware Design

**Design systems must account for dynamic content.**

**Test with variations**:

- Empty states (0 items)
- Minimal content (1 item, short text)
- Normal content (5-10 items, medium text)
- Maximum content (100+ items, very long text)
- Edge cases (special characters, emoji, RTL languages)

**Example**:

```typescript
// Test project card with:
// - Short title (10 chars)
// - Long title (100+ chars)
// - No image
// - 1 technology badge
// - 20 technology badges
```

---

### 4. Composition Over Prop Drilling

**Prefer composition patterns over passing props through multiple levels.**

✅ **Good - Composition**:

```typescript
// components/organisms/navigation.tsx
export function Navigation() {
  return (
    <nav>
      <Logo />
      <NavMenu />
      <UserProfile />
    </nav>
  );
}
```

❌ **Bad - Prop Drilling**:

```typescript
// Passing user data through multiple levels
<Navigation user={user} />
  <NavMenu user={user} />
    <UserProfile user={user} />
```

**Better - Context**:

```typescript
// Use React Context for shared state across components
<UserProvider value={user}>
  <Navigation />
</UserProvider>
```

---

### 5. TypeScript Everywhere

**All components must have explicit TypeScript interfaces.**

```typescript
// Define props interface
export interface ProjectCardProps {
  index: number;
  project: Project;
}

// Use in component
export function ProjectCard({ index, project }: ProjectCardProps) {
  // ...
}
```

**Export types for reuse**:

```typescript
// lib/projects.ts
export interface Project {
  id: string;
  title: string;
  description: string;
  images: string[];
  domains: string[];
  technologies: string[];
}

// Use in components
import { Project } from '@/lib/projects';
```

---

### 6. Naming Conventions

**Use clear, descriptive names that indicate purpose and hierarchy.**

**Atoms**: Describe what it IS

- `filter-chip.tsx`, `logo.tsx`, `social-icon.tsx`

**Molecules**: Describe what it DOES or CONTAINS

- `nav-menu.tsx`, `project-card.tsx`, `social-links.tsx`

**Organisms**: Describe the SECTION it represents

- `navigation.tsx`, `footer.tsx`, `career-timeline.tsx`

**Templates**: Describe the PAGE TYPE

- `home.tsx`, `projects.tsx`, `projectDetails.tsx`

---

## Component Development Workflow

When creating or modifying components, follow this workflow:

### 1. Identify the Atomic Level

Ask yourself:

- Is this an atom, molecule, organism, template, or page?
- Does it combine existing components?
- Is it reusable across multiple contexts?

### 2. Check for Existing Components

Before creating new:

- Can I use an existing shadcn/ui component?
- Can I compose existing molecules/organisms?
- Can I extend an existing component with variants?

### 3. Design for Reusability

If creating a new molecule or organism:

- Make it configurable through props
- Don't hard-code content or data
- Support variants for different use cases
- Make it composable with other components

### 4. Test with Content Variations

Before finalizing:

- Test with minimal content
- Test with maximum content
- Test edge cases
- Verify responsive behavior

### 5. Document Usage

Add JSDoc comments:

```typescript
/**
 * ProjectCard displays a preview of a project with image, title, and technologies.
 *
 * Used in: Projects page, Home page featured section
 *
 * @param index - Card index for stagger animation
 * @param project - Project data object
 */
export function ProjectCard({ index, project }: ProjectCardProps) {
  // ...
}
```

---

## Common Patterns in This Project

### Pattern 1: Molecule with Variants

```typescript
// components/molecules/project-card.tsx
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';

export function ProjectCard({ project, variant = 'default' }: ProjectCardProps) {
  return (
    <Card className={cn(
      "hover:shadow-lg transition-shadow",
      variant === 'compact' && "h-48",
      variant === 'default' && "h-96"
    )}>
      <CardContent>
        {/* Combines atoms: Image, Badge, Button */}
      </CardContent>
    </Card>
  );
}
```

### Pattern 2: Organism Composing Molecules

```typescript
// components/organisms/navigation.tsx
import { NavMenu } from '@/components/molecules/nav-menu';
import { Logo } from '@/components/atoms/logo';

export function Navigation() {
  return (
    <header className="sticky top-0">
      <Logo />
      <NavMenu />
    </header>
  );
}
```

### Pattern 3: Template Using Organisms

```typescript
// components/templates/home.tsx
import { Navigation } from '@/components/organisms/navigation';
import { Footer } from '@/components/organisms/footer';

export default function HomeView() {
  return (
    <main>
      {/* Page-specific content structure */}
      <section>{/* Hero */}</section>
      <section>{/* Projects preview */}</section>
      <section>{/* About */}</section>
    </main>
  );
}
```

### Pattern 4: Page Using Template

```typescript
// app/page.tsx
import HomeView from '@/components/templates/home';

export default function Page() {
  return <HomeView />;
}
```

---

## Advantages of This Approach

### 1. Traverse Between Abstract and Concrete

Quickly shift between:

- **Abstract**: Individual atoms and molecules in isolation
- **Concrete**: Complete pages with real content

Like a painter stepping back from the canvas to see the whole, then approaching for detail work.

### 2. Enforces Consistency

Reusing the same atoms and molecules across pages ensures:

- Visual consistency
- Behavioral consistency
- Easier maintenance
- Faster development

### 3. Easier Testing

Smaller, focused components are easier to:

- Unit test
- Integration test
- Debug
- Refactor

### 4. Better Collaboration

Clear hierarchy helps teams:

- Communicate more effectively
- Understand component relationships
- Know where to add new features
- Avoid duplicate work

### 5. Scalable Architecture

As the project grows:

- New pages can reuse existing templates
- New features can compose existing organisms
- Design system remains organized
- Technical debt is minimized

---

## Summary

**Atomic Design** is a methodology for creating design systems by breaking interfaces into:

1. **Atoms** - Basic building blocks (buttons, inputs, labels)
2. **Molecules** - Simple combinations doing one thing well
3. **Organisms** - Complex sections forming distinct UI areas
4. **Templates** - Page layouts defining content structure
5. **Pages** - Final UI with real content and variations

**Key Principles**:

- ✅ Not a linear process - it's a mental model
- ✅ Single responsibility for each component
- ✅ Reusability threshold: 2+ uses to justify extraction
- ✅ Design for dynamic content and edge cases
- ✅ Traverse between parts and whole
- ✅ Clean separation: structure (templates) vs content (pages)

**This approach ensures**: High-quality, maintainable, scalable, and consistent component architecture.

---

_Based on Brad Frost's Atomic Design methodology: https://atomicdesign.bradfrost.com/_
