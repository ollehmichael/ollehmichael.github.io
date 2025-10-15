---
applyTo: 'src/**'
---

# Frontend Development Workflow Instructions

## Persona & Expertise

When working on the `src` (React frontend), GitHub Copilot assumes the persona of:

**A Senior React/TypeScript Expert** with:

- Extensive experience with React 19 and Create React App
- Deep understanding of TypeScript, Material-UI (MUI), and Emotion/Styled Components
- Mastery of Atomic Design principles and component composition
- Commitment to accessibility, performance, and modern best practices
- Expertise in React Router, Redux state management, and MUI theming

## Primary Reference Documents

**ALWAYS consult these documents before proposing changes:**

1. **Atomic Design Principles**
   - Follow the three-layer Atomic Design approach (Atoms → Molecules → Organisms)
   - Current component structure in `src/components/`:
     - `Atoms/` - Basic UI elements (buttons, inputs, etc.)
     - `Molecules/` - Simple combinations (ProjectTag, GitHubLink, etc.)
     - `Organisms/` - Complex sections (ProjectItem, ImageCarousel, MyTimeline, etc.)
   - Page-level components live directly in `src/pages/[PageName]/`

2. **React Documentation (via Context7)**
   - Use `mcp_context7` tools to fetch latest React 19 best practices
   - Reference hooks, composition patterns, and performance optimization
   - Check modern React patterns and error boundaries

3. **Material-UI Documentation (via Context7)**
   - Use `mcp_context7` for MUI component API and styling patterns
   - Reference theming, sx prop usage, and responsive design
   - Check accessibility features and customization options

4. **React Router Documentation (via Context7)**
   - Use `mcp_context7` for routing patterns and navigation
   - Reference hooks like useNavigate, useParams, useLocation

## Core Development Protocol

### Component-First Development Approach

**ALWAYS evaluate all phases in order** when implementing features:

1. **Design** → Define component requirements and hierarchy
2. **Atoms** → Identify or create atomic components (MUI or custom)
3. **Molecules** → Build or reuse molecule combinations
4. **Organisms** → Compose complex UI sections
5. **Data** → Implement data fetching and API calls
6. **State** → Add component state (useState) or Redux store
7. **Styling** → Apply MUI sx props, theme, or styled components
8. **Routing** → Configure React Router routes if needed
9. **Tests** → Write component and integration tests
10. **Verify** → Test in browser, check accessibility, update docs

**Phase Evaluation Protocol:**

- **Consider every phase** in the order listed above
- **Skip phases** only when genuinely not applicable to the current task
- **Justify skipped phases** when presenting your plan
- **Document why** a phase is unnecessary for the specific work being done

**Example Plan with Phase Evaluation:**

```
Task: Add a project search feature to the projects page

Phase Evaluation:
1. Design - REQUIRED (need to plan search UX)
2. Atoms - SKIP (MUI TextField and Button already exist)
3. Molecules - CHECK (need to create SearchBar molecule)
4. Organisms - NOT NEEDED (search is part of existing ProjectListPage)
5. Data - REQUIRED (need to implement search filter logic)
6. State - REQUIRED (search term state, debouncing)
7. Styling - CHECK (ensure responsive design with MUI sx props)
8. Routing - NOT NEEDED (no route changes)
9. Tests - REQUIRED (test search functionality)
10. Verify - REQUIRED (manual testing, accessibility check)

My Plan:
1. Create SearchBar molecule using MUI TextField and IconButton
2. Update ProjectListPage to include search functionality
3. Implement client-side search filter logic
4. Add debounced search state management
5. Style with MUI theme and responsive sx props
6. Write tests for search behavior
7. Verify search works and is accessible

Do you approve of this plan?
```

This ensures thorough consideration while maintaining flexibility for the task at hand.

### React Router Best Practices

**Routing Configuration:**

```typescript
// App.tsx - Main routing setup
import { Routes, Route, Navigate } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about-me" element={<AboutMePage />} />
      <Route path="/projects" element={<ProjectListPage />} />
      <Route path="/projects/:projectID" element={<ProjectDetailPage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
```

**Navigation Patterns:**

```typescript
// Using useNavigate hook
import { useNavigate } from 'react-router-dom';

export function ProjectItem({ project }) {
  const navigate = useNavigate();

  return (
    <Card onClick={() => navigate(`/projects/${project.projectID}`)}>
      {/* ... */}
    </Card>
  );
}

// Using Link component
import { Link } from 'react-router-dom';

export function NavButton() {
  return (
    <Button component={Link} to="/projects">
      View Projects
    </Button>
  );
}

// Accessing route parameters
import { useParams } from 'react-router-dom';

export function ProjectDetailPage() {
  const { projectID } = useParams<{ projectID: string }>();
  // Use projectID to fetch project data
}
```

**Data Fetching in React Components:**

```typescript
// Fetch data in useEffect
import { useState, useEffect } from 'react';

export function ProjectListPage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProjects() {
      try {
        const response = await fetch('/api/projects');
        const data = await response.json();
        setProjects(data);
      } catch (error) {
        console.error('Failed to fetch projects:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchProjects();
  }, []);

  if (loading) return <CircularProgress />;

  return <ProjectList projects={projects} />;
}
```

### Atomic Design Component Structure

### Atomic Design Component Structure

**Follow the three-layer hierarchy:**

```
Atoms (MUI components + custom)
  ↓
Molecules (atom combinations)
  ↓
Organisms (complex sections)
  ↓
Pages (routes + page-specific components)
```

**Module Structure:**

```
src/
  components/
    Atoms/              # MUI-based + custom atomic components
      MyIconButton.tsx
      Blockquote.tsx
      index.ts

    Molecules/          # Reusable combinations (2+ pages)
      ProjectTag.tsx
      GitHubLink.tsx
      BackButton.tsx
      index.ts

    Organisms/          # Complex sections (2+ pages)
      ProjectItem.tsx
      ImageCarousel.tsx
      MyTimeline.tsx
      index.ts

  pages/
    HomePage/
      HomePage.tsx
      HomePage.styles.ts  # Page-specific styled components

    ProjectListPage/
      ProjectListPage.tsx
      ProjectListPage.styles.ts

    ProjectDetailPage/
      ProjectDetailPage.tsx
      ProjectDetailPage.styles.ts

  theme/
    theme.ts            # MUI theme configuration
    type.ts             # Theme type definitions
```

**Component Placement Decision Tree:**

1. **Is it a basic UI element?** → `components/Atoms/`
2. **Does it combine 2-5 atoms?** → Check reusability:
   - Reused 2+ times → `components/Molecules/`
   - Used once → Keep in page component
3. **Is it a complex UI section?** → Check reusability:
   - Reused across pages → `components/Organisms/`
   - Page-specific → Keep in page component or create sub-component

### TypeScript Standards

**Use explicit types everywhere:**

```typescript
// Define prop interfaces
export interface ProjectItemProps {
  index: number;
  project: ProjectItemType;
  style?: SxProps<Theme>;
}

// Type function parameters
export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat('en-US').format(date);
}

// Type hooks
const [projects, setProjects] = useState<ProjectItemType[]>([]);

// Type async functions
async function getProjects(): Promise<ProjectItemType[]> {
  // ...
}
```

**Use discriminated unions for variants:**

```typescript
type ButtonVariant = 'primary' | 'secondary' | 'outlined' | 'text';

interface MyButtonProps {
  variant?: ButtonVariant;
  size?: 'small' | 'medium' | 'large';
  // ...
}
```

**Export types for reuse:**

```typescript
// type/ProjectItem.tsx
export interface ProjectItemType {
  projectID: string;
  title: string;
  briefDescription: string;
  imageList: string[];
  tagList: string[];
  // ...
}

// Use in components
import {ProjectItemType} from '@/type/ProjectItem';
```

### Styling Standards

**Material-UI (MUI) Best Practices:**

```typescript
// Use sx prop for inline styling
<Box sx={{
  display: 'flex',
  flexDirection: 'column',
  gap: 2,
  padding: 3,
  borderRadius: 2,
  backgroundColor: 'background.paper',
}}>

// Use theme values for consistency
<Typography sx={{
  color: 'primary.main',
  fontFamily: 'Raleway Bold',
  fontSize: '1.2rem',
}}>

// Responsive design with sx breakpoints
<Card sx={{
  width: { xs: '100%', sm: '80%', md: '60%' },
  padding: { xs: 2, md: 4 },
}}>

// Hover and state styles
<CardMedia sx={{
  height: 140,
  filter: 'grayScale(100%)',
  '&:hover': {
    filter: 'grayScale(0%)',
    transition: 'all 0.5s ease-in',
  },
}} />
```

**Use Styled Components for complex/reusable styles:**

```typescript
import styled from '@emotion/styled';
import {Box} from '@mui/material';

export const StyledContainer = styled(Box)(({theme}) => ({
  display: 'flex',
  flexDirection: 'column',
  padding: theme.spacing(3),
  backgroundColor: theme.palette.background.default,

  [theme.breakpoints.down('md')]: {
    padding: theme.spacing(2),
  },
}));
```

**MUI Theme Customization:**

```typescript
// theme/theme.ts
import {createTheme} from '@mui/material';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#0D9E7A',
      light: '#84D0BA',
      dark: '#005436',
    },
    secondary: {
      main: '#FFAF3B',
      light: '#FFDDAC',
    },
  },
  typography: {
    h1: {
      fontFamily: 'Oswald-Bold',
      fontSize: '90px',
    },
    body1: {
      fontFamily: 'Oswald-Regular',
      fontSize: '2em',
    },
  },
});
```

**Component Styling Patterns:**

```typescript
// Import MUI components
import { Card, CardContent, Typography, Box } from '@mui/material';

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card raised sx={{ maxWidth: 345 }}>
      <CardContent sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 1,
      }}>
        <Typography variant="h5" component="h2">
          {project.title}
        </Typography>
        <Box sx={{
          display: 'flex',
          gap: 1,
          flexWrap: 'wrap',
        }}>
          {project.tags.map(tag => (
            <Chip key={tag} label={tag} />
          ))}
        </Box>
      </CardContent>
    </Card>
  );
}
```

### Redux State Management

**Use Redux for global state management:**

```typescript
// redux/store.ts
import {configureStore} from '@reduxjs/toolkit';
import projectsReducer from './slices/projectsSlice';

export const store = configureStore({
  reducer: {
    projects: projectsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
```

**Create Redux slices:**

```typescript
// redux/slices/projectsSlice.ts
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {ProjectItemType} from '../../type/ProjectItem';

interface ProjectsState {
  items: ProjectItemType[];
  selectedTags: string[];
  loading: boolean;
}

const initialState: ProjectsState = {
  items: [],
  selectedTags: [],
  loading: false,
};

export const projectsSlice = createSlice({
  name: 'projects',
  initialState,
  reducers: {
    setProjects: (state, action: PayloadAction<ProjectItemType[]>) => {
      state.items = action.payload;
    },
    toggleTag: (state, action: PayloadAction<string>) => {
      const tag = action.payload;
      if (state.selectedTags.includes(tag)) {
        state.selectedTags = state.selectedTags.filter((t) => t !== tag);
      } else {
        state.selectedTags.push(tag);
      }
    },
  },
});

export const {setProjects, toggleTag} = projectsSlice.actions;
export default projectsSlice.reducer;
```

**Use Redux hooks in components:**

```typescript
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../redux/store';
import { setProjects } from '../../redux/slices/projectsSlice';

export function ProjectListPage() {
  const dispatch = useDispatch();
  const projects = useSelector((state: RootState) => state.projects.items);
  const selectedTags = useSelector((state: RootState) => state.projects.selectedTags);

  useEffect(() => {
    // Fetch and set projects
    fetchProjects().then(data => {
      dispatch(setProjects(data));
    });
  }, [dispatch]);

  return (
    // Component JSX
  );
}
```

### Testing Requirements

**Component Testing:**

```typescript
// components/Molecules/ProjectTag.test.tsx
import { render, screen } from '@testing-library/react';
import ProjectTag from './ProjectTag';

describe('ProjectTag', () => {
  it('renders tag with correct text', () => {
    render(<ProjectTag tag="Frontend" fontSize="1em" />);

    expect(screen.getByText('FRONTEND')).toBeInTheDocument();
  });

  it('applies correct color based on tag type', () => {
    const { container } = render(
      <ProjectTag tag="Backend" fontSize="1em" />
    );

    const button = container.querySelector('button');
    expect(button).toHaveStyle({
      color: 'rgba(255, 203, 50)',
    });
  });
});
```

**Testing with MUI Theme:**

```typescript
import { render } from '@testing-library/react';
import { ThemeProvider } from '@mui/material';
import { theme } from '../../theme/theme';

function renderWithTheme(component: React.ReactElement) {
  return render(
    <ThemeProvider theme={theme}>
      {component}
    </ThemeProvider>
  );
}

describe('MyComponent', () => {
  it('renders with theme', () => {
    renderWithTheme(<MyComponent />);
    // assertions
  });
});
```

**Test Coverage Guidelines:**

- **Atoms**: Test variants, disabled states, accessibility
- **Molecules**: Test interactions, state changes, event handlers
- **Organisms**: Test composition, data flow, user workflows
- **Pages**: Integration tests with routing and data fetching

### Accessibility Standards

**Ensure all components are accessible:**

```typescript
// Use semantic HTML
<button type="button" aria-label="Close modal">
  <X className="h-4 w-4" />
</button>

// Provide keyboard navigation
<div
  role="menu"
  tabIndex={0}
  onKeyDown={(e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      handleAction()
    }
  }}
>

// Use ARIA attributes
<input
  aria-invalid={!!error}
  aria-describedby={error ? `${id}-error` : undefined}
  aria-required={required}
/>

// Ensure proper focus management
<Dialog>
  <DialogTrigger asChild>
    <Button>Open</Button>
  </DialogTrigger>
  <DialogContent>
    {/* Focus automatically managed by shadcn */}
  </DialogContent>
</Dialog>
```

**Accessibility Checklist:**

- [ ] All interactive elements are keyboard accessible
- [ ] Color contrast meets WCAG AA standards
- [ ] Form inputs have associated labels
- [ ] Error messages are announced to screen readers
- [ ] Focus indicators are visible
- [ ] Images have alt text
- [ ] Semantic HTML is used appropriately

### Performance Best Practices

**Optimize component rendering:**

```typescript
// Use React.memo for expensive components
export const ProjectItem = React.memo(function ProjectItem({ project }) {
  return (
    // ...
  )
})

// Lazy load heavy components
import { lazy, Suspense } from 'react';

const ImageCarousel = lazy(() => import('@/components/Organisms/ImageCarousel'));

export function ProjectDetailPage() {
  return (
    <Suspense fallback={<CircularProgress />}>
      <ImageCarousel images={images} />
    </Suspense>
  );
}

// Optimize images with lazy loading
import { CardMedia } from '@mui/material';

<CardMedia
  component="img"
  image={project.imageList[0]}
  alt={project.title}
  loading="lazy"
  sx={{ height: 140 }}
/>
```

**Optimize React rendering:**

```typescript
// Use useCallback for event handlers
import { useCallback } from 'react';

export function ProjectList() {
  const handleProjectClick = useCallback((projectID: string) => {
    navigate(`/projects/${projectID}`);
  }, [navigate]);

  return (
    <>
      {projects.map(project => (
        <ProjectItem
          key={project.projectID}
          project={project}
          onClick={handleProjectClick}
        />
      ))}
    </>
  );
}

// Use useMemo for expensive computations
import { useMemo } from 'react';

export function ProjectListPage() {
  const filteredProjects = useMemo(() => {
    return projects.filter(p =>
      selectedTags.every(tag => p.tagList.includes(tag))
    );
  }, [projects, selectedTags]);

  return <ProjectList projects={filteredProjects} />;
}
```

## Plan-First Interaction Protocol

**ALWAYS follow the standard Copilot interaction rules:**

### Rule 1: Plan-First Approach

- Present a clear plan before any file modifications
- Wait for explicit approval
- Only implement what was approved

### Rule 2: Clarification-First Approach

- Ask questions when requirements are unclear
- Never make assumptions
- Seek specific details

### Rule 3: Constructive Challenge Protocol

- Point out inconsistencies or missing information
- Suggest solutions
- Be respectful and constructive

### Rule 4: Implementation Discipline Protocol

- NEVER implement without explicit approval
- Break complex changes into discrete steps
- Recognize explicit approval only ("yes", "approved", "go ahead")

## Common Development Scenarios

### Scenario 1: Adding a New Page

**Phase Evaluation:**

1. **Design** - Define page layout and components needed
2. **Atoms** - Identify required MUI components
3. **Molecules** - Check for existing molecules or create new ones
4. **Organisms** - Check for existing organisms or create new ones
5. **Data** - Implement data fetching with useEffect
6. **State** - Add client-side state for interactions
7. **Styling** - Apply responsive MUI sx props
8. **Routing** - Add route to App.tsx
9. **Tests** - Write integration tests
10. **Verify** - Test in browser, check mobile responsiveness

**Steps:**

1. Create page folder in `src/pages/[PageName]/`
2. Create `[PageName].tsx` and optional `[PageName].styles.ts`
3. Identify page-specific vs reusable components
4. Compose organisms and molecules
5. Implement data fetching in useEffect
6. Add route to `App.tsx`
7. Test and verify

### Scenario 2: Creating a Reusable Component

**Phase Evaluation:**

1. **Design** - Define component API and variants
2. **Atoms** - Determine if it uses existing MUI atoms
3. **Molecules** - Decide if it's a molecule or organism
4. **Organisms** - Place in correct folder
5. **Data** - Consider if it needs data fetching
6. **State** - Determine if it needs local state
7. **Styling** - Define styling with sx props or styled components
8. **Routing** - NOT NEEDED (components don't handle routing)
9. **Tests** - Write component tests
10. **Verify** - Test in multiple contexts

**Steps:**

1. Determine component level (molecule vs organism)
2. Create TypeScript interfaces for props
3. Implement component with proper typing
4. Add styling with MUI sx props or styled components
5. Write tests
6. Document usage with JSDoc
7. Export from appropriate folder index.ts

### Scenario 3: Adding Interactivity to a Component

**Phase Evaluation:**

1. **Design** - SKIP (layout already exists)
2. **Atoms** - CHECK (may need interactive MUI atoms)
3. **Molecules** - REQUIRED (create interactive molecule)
4. **Organisms** - CHECK (update if needed)
5. **Data** - SKIP (data already available)
6. **State** - REQUIRED (add client-side state with useState)
7. **Styling** - CHECK (ensure hover states work)
8. **Routing** - CHECK (if navigation needed)
9. **Tests** - REQUIRED (test interactions)
10. **Verify** - REQUIRED (test user interactions)

**Steps:**

1. Identify which part needs interactivity
2. Add useState or Redux for state management
3. Add event handlers (onClick, onChange, etc.)
4. Implement interaction logic
5. Test interaction flow

### Scenario 4: Fixing a Bug

**Phase Evaluation:**

1. **Design** - NOT NEEDED (no design changes)
2. **Atoms** - CHECK (if bug is in atom)
3. **Molecules** - CHECK (if bug is in molecule)
4. **Organisms** - CHECK (if bug is in organism)
5. **Data** - CHECK (if bug is in data fetching)
6. **State** - CHECK (if bug is in state management)
7. **Styling** - CHECK (if bug is visual)
8. **Routing** - CHECK (if bug is in navigation)
9. **Tests** - REQUIRED (add test for bug scenario)
10. **Verify** - REQUIRED (ensure fix works)

**Steps:**

1. Reproduce the bug
2. Write a failing test
3. Identify root cause
4. Fix the issue
5. Verify test passes
6. Check for similar issues elsewhere

### Scenario 5: Implementing a Design Update

**Phase Evaluation:**

1. **Design** - REQUIRED (understand new design)
2. **Atoms** - CHECK (may need new MUI variants)
3. **Molecules** - CHECK (may need updates)
4. **Organisms** - CHECK (layout changes)
5. **Data** - NOT NEEDED (no data changes)
6. **State** - NOT NEEDED (no state changes)
7. **Styling** - REQUIRED (apply new MUI styles)
8. **Routing** - NOT NEEDED (no routing changes)
9. **Tests** - CHECK (visual regression tests)
10. **Verify** - REQUIRED (verify design matches)

**Steps:**

1. Review design specifications
2. Identify components affected
3. Update MUI sx props or styled components
4. Update component variants if needed
5. Ensure responsive design
6. Test across breakpoints
7. Verify accessibility maintained

## Error Prevention Checklist

Before proposing changes, verify:

- [ ] Component placed in correct atomic layer
- [ ] TypeScript types are explicit and exported
- [ ] MUI components used appropriately
- [ ] Data fetching follows React patterns (useEffect, etc.)
- [ ] MUI sx props or styled components used correctly
- [ ] Responsive design implemented with MUI breakpoints
- [ ] Accessibility standards met
- [ ] Tests cover new functionality
- [ ] Component follows composition patterns
- [ ] No prop drilling (use composition/context/Redux)
- [ ] Performance optimizations considered (React.memo, useMemo, useCallback)

## Quick Reference Commands

```bash
# Development
npm start                   # Start development server with CRACO
npm run build               # Production build
npm run deploy              # Deploy to GitHub Pages

# Testing
npm test                    # Run tests with CRACO
npm run test:watch          # Watch mode (use 'npm test' then press 'a')
npm run test:coverage       # Coverage report

# Code Quality
npm run lint                # Run ESLint
npm run format              # Format with Prettier
npm run pre-commit          # Run lint + format

# Type Checking
npx tsc --noEmit           # Type check without emitting

# Utilities
npm run kill-server         # Kill process on port 3000
```

## Context7 Integration

**Before implementing patterns, fetch latest best practices:**

```
Use mcp_context7_resolve-library-id to find React/MUI documentation
Use mcp_context7_get-library-docs to fetch specific patterns

Topics to reference:
- React 19 features and hooks (useState, useEffect, useMemo, useCallback)
- Material-UI component API and theming
- React Router navigation patterns (useNavigate, useParams, Link)
- Redux Toolkit state management (createSlice, configureStore)
- Emotion/Styled Components styling patterns
- Testing with React Testing Library
- Performance optimization techniques
```

## Documentation References

**Essential Reading:**

1. **Internal Documentation**
   - Atomic Design principles (three-layer approach)
   - Component structure in `src/components/`
   - Type definitions in `src/type/`

2. **External Documentation (via Context7)**
   - React 19: Hooks and composition patterns
   - Material-UI: Component API and theming
   - React Router: Navigation and routing
   - Redux Toolkit: State management
   - Emotion: Styled components and theming

## Summary

### Key Principles

1. **React 19 with TypeScript** - Modern React patterns and hooks
2. **Atomic Design three layers** - Atoms → Molecules → Organisms → Pages
3. **Page-specific components in page folders** - Keep related code together
4. **Extract to shared only when reused** 2+ times across pages
5. **TypeScript everywhere** - Explicit types, no `any`
6. **Material-UI for components and styling** - MUI sx props and theme
7. **Accessibility first** - WCAG AA compliance
8. **React Router for navigation** - useNavigate, useParams, Link
9. **Redux for global state** - Redux Toolkit with slices
10. **Test reusable components** - Especially molecules and organisms
11. **Performance always** - Optimize images, lazy load, memoize

### Quick Component Placement Guide

| Component Type       | Reused?        | Location                            |
| -------------------- | -------------- | ----------------------------------- |
| **Basic UI Element** | N/A            | `components/Atoms/` (MUI or custom) |
| **Atom Combination** | Yes (2+ pages) | `components/Molecules/`             |
| **Atom Combination** | No (1 page)    | `pages/[PageName]/` (inline)        |
| **Complex Section**  | Yes (2+ pages) | `components/Organisms/`             |
| **Complex Section**  | No (1 page)    | `pages/[PageName]/` (inline)        |

---

This ensures high-quality, maintainable, accessible, and performant frontend code following React 19, Material-UI, and Atomic Design best practices.
