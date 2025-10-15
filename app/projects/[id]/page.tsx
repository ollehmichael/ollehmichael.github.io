import { ImageCarousel } from '@/components/organisms/image-carousel';
import { TechStackDiagram } from '@/components/organisms/tech-stack-diagram';
import { Badge } from '@/components/ui/badge';
import { Projects } from '@/lib/projects';
import { ArrowLeft, Briefcase, ExternalLink, Github } from 'lucide-react';
import Link from 'next/link';
import { notFound } from 'next/navigation';

// Generate static params for all project pages at build time
export async function generateStaticParams() {
  return Projects.map((project) => ({
    id: project.id,
  }));
}

// Project data with detailed information
const projectsData: Record<
  string,
  {
    title: string;
    domains: string[];
    technologies: string[];
    images: string[];
    githubUrl?: string;
    liveUrl?: string;
    fullDescription: string[];
    techStack: { name: string; icon: string }[];
    careerExperience?: string;
  }
> = {
  'ecommerce-platform': {
    title: 'E-Commerce Platform',
    domains: ['Web', 'Data'],
    technologies: ['React', 'TypeScript', 'Node.js', 'PostgreSQL'],
    images: [
      '/modern-ecommerce-dashboard.png',
      '/ecommerce-product-page.png',
      '/ecommerce-checkout-flow.png',
    ],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
    fullDescription: [
      'A comprehensive full-stack e-commerce platform designed to handle high-traffic retail operations with real-time inventory management, secure payment processing, and an intuitive admin dashboard.',
      'The platform features a modern, responsive design that provides an exceptional shopping experience across all devices. Built with performance in mind, it utilizes server-side rendering and optimized database queries to ensure fast page loads even under heavy traffic.',
      'Key features include advanced product search with filters, user authentication and profiles, shopping cart with persistent sessions, multiple payment gateway integrations, order tracking, and comprehensive analytics for business insights.',
      'The admin dashboard provides real-time insights into sales, inventory levels, and customer behavior, enabling data-driven decision making. The system also includes automated email notifications, inventory alerts, and customer support ticketing.',
    ],
    techStack: [
      { name: 'React', icon: '⚛️' },
      { name: 'TypeScript', icon: '📘' },
      { name: 'Node.js', icon: '🟢' },
      { name: 'PostgreSQL', icon: '🐘' },
      { name: 'Redis', icon: '🔴' },
      { name: 'Stripe', icon: '💳' },
    ],
    careerExperience: 'Senior Software Engineer at Tech Innovations Inc.',
  },
  'mobile-fitness-app': {
    title: 'Fitness Tracking App',
    domains: ['Mobile'],
    technologies: ['React Native', 'TypeScript', 'Node.js'],
    images: [
      '/fitness-tracking-app.png',
      '/fitness-workout-tracking.jpg',
      '/fitness-nutrition-dashboard.jpg',
    ],
    githubUrl: 'https://github.com',
    fullDescription: [
      'A cross-platform mobile application that helps users track their fitness journey, monitor workouts, log nutrition, and achieve their health goals through personalized recommendations and social features.',
      'The app features real-time synchronization across devices, allowing users to seamlessly switch between their phone, tablet, and web browser. It includes a comprehensive exercise library with video demonstrations, custom workout builder, and progress tracking with detailed analytics.',
      'Social features enable users to connect with friends, share achievements, and participate in challenges. The app also integrates with popular wearables and health platforms to provide a unified view of all fitness data.',
      'Machine learning algorithms analyze user behavior and progress to provide personalized workout recommendations and nutrition suggestions, helping users stay motivated and achieve their goals faster.',
    ],
    techStack: [
      { name: 'React Native', icon: '📱' },
      { name: 'TypeScript', icon: '📘' },
      { name: 'Node.js', icon: '🟢' },
      { name: 'MongoDB', icon: '🍃' },
      { name: 'GraphQL', icon: '◼️' },
    ],
    careerExperience: 'Frontend Developer at Creative Web Agency',
  },
  'defi-protocol': {
    title: 'DeFi Lending Protocol',
    domains: ['Blockchain', 'Web'],
    technologies: ['Solidity', 'React', 'TypeScript'],
    images: [
      '/blockchain-defi-cryptocurrency-interface.jpg',
      '/blockchain-smart-contract-dashboard.jpg',
      '/cryptocurrency-lending-interface.jpg',
    ],
    githubUrl: 'https://github.com',
    fullDescription: [
      'A decentralized finance protocol that enables peer-to-peer lending and borrowing of digital assets without intermediaries. Built on Ethereum, the protocol uses smart contracts to automate loan origination, collateral management, and interest calculations.',
      'The protocol features automated market-making algorithms that dynamically adjust interest rates based on supply and demand, ensuring optimal capital efficiency. All smart contracts have been thoroughly audited by leading security firms to ensure the safety of user funds.',
      'Users can supply assets to earn interest or borrow against their collateral with competitive rates. The protocol supports multiple cryptocurrencies and stablecoins, with real-time liquidation mechanisms to maintain system solvency.',
      'The web interface provides an intuitive dashboard for managing positions, monitoring market conditions, and analyzing historical performance. Advanced users can interact directly with smart contracts for maximum flexibility.',
    ],
    techStack: [
      { name: 'Solidity', icon: '⬢' },
      { name: 'React', icon: '⚛️' },
      { name: 'TypeScript', icon: '📘' },
      { name: 'Ethers.js', icon: '🔗' },
      { name: 'Hardhat', icon: '⚒️' },
    ],
    careerExperience: 'Junior Developer at StartUp Ventures',
  },
  'data-analytics-dashboard': {
    title: 'Analytics Dashboard',
    domains: ['Data', 'Web'],
    technologies: ['React', 'Python', 'PostgreSQL', 'TypeScript'],
    images: [
      '/data-analytics-dashboard-charts-graphs.jpg',
      '/data-visualization-charts.png',
      '/analytics-reporting-dashboard.jpg',
    ],
    githubUrl: 'https://github.com',
    fullDescription: [
      'A real-time data analytics platform that processes and visualizes millions of data points with sub-second query performance. Designed for enterprise use, it provides interactive dashboards, custom reporting, and advanced data exploration capabilities.',
      'The platform features a powerful query engine built on PostgreSQL with custom optimizations for analytical workloads. It supports complex aggregations, time-series analysis, and predictive modeling, all accessible through an intuitive visual interface.',
      'Users can create custom dashboards with drag-and-drop widgets, set up automated reports, and configure alerts for key metrics. The system includes role-based access control, audit logging, and data export capabilities for compliance requirements.',
      'Built with scalability in mind, the platform can handle growing data volumes through horizontal scaling and intelligent caching strategies. It integrates with popular data sources and supports real-time streaming data ingestion.',
    ],
    techStack: [
      { name: 'React', icon: '⚛️' },
      { name: 'Python', icon: '🐍' },
      { name: 'PostgreSQL', icon: '🐘' },
      { name: 'TypeScript', icon: '📘' },
      { name: 'D3.js', icon: '📊' },
      { name: 'Apache Kafka', icon: '🔄' },
    ],
    careerExperience: 'Full Stack Developer at Digital Solutions Co.',
  },
  'ai-content-generator': {
    title: 'AI Content Generator',
    domains: ['AI/ML', 'Web'],
    technologies: ['Python', 'React', 'TypeScript', 'Next.js'],
    images: [
      '/ai-artificial-intelligence-content-creation.jpg',
      '/ai-content-writing-interface.png',
      '/ai-image-generation-dashboard.jpg',
    ],
    githubUrl: 'https://github.com',
    fullDescription: [
      'An AI-powered content generation platform that helps marketing teams create high-quality copy, images, and social media posts using state-of-the-art machine learning models. The platform combines multiple AI models to provide comprehensive content creation capabilities.',
      'The text generation engine uses advanced language models fine-tuned for marketing content, capable of producing blog posts, product descriptions, email campaigns, and social media content that matches your brand voice and style.',
      'Image generation features allow users to create custom visuals from text descriptions, edit existing images, and generate variations. The platform includes a built-in editor for refining AI-generated content and maintaining brand consistency.',
      'Team collaboration features enable multiple users to work together, share templates, and maintain a content library. The platform also provides analytics on content performance and A/B testing capabilities to optimize engagement.',
    ],
    techStack: [
      { name: 'Python', icon: '🐍' },
      { name: 'React', icon: '⚛️' },
      { name: 'TypeScript', icon: '📘' },
      { name: 'Next.js', icon: '▲' },
      { name: 'OpenAI', icon: '🤖' },
      { name: 'TensorFlow', icon: '🧠' },
    ],
    careerExperience: 'Senior Software Engineer at Tech Innovations Inc.',
  },
  'devops-automation': {
    title: 'DevOps Automation Suite',
    domains: ['DevSecOps'],
    technologies: ['Python', 'Node.js', 'TypeScript'],
    images: [
      '/devops-automation-pipeline-dashboard.jpg',
      '/ci-cd-pipeline-visualization.jpg',
      '/infrastructure-monitoring-dashboard.jpg',
    ],
    githubUrl: 'https://github.com',
    fullDescription: [
      'A comprehensive CI/CD pipeline automation suite that streamlines software delivery across multiple cloud providers. The platform implements infrastructure as code, automated testing, security scanning, and deployment orchestration in a unified workflow.',
      'The system supports complex deployment strategies including blue-green deployments, canary releases, and rolling updates with automatic rollback capabilities. It integrates with popular version control systems and provides detailed deployment history and audit trails.',
      'Security is built into every stage of the pipeline with automated vulnerability scanning, dependency checking, and compliance validation. The platform includes policy enforcement to ensure all deployments meet organizational standards.',
      'Real-time monitoring and alerting provide visibility into pipeline performance, deployment success rates, and infrastructure health. The dashboard offers customizable views for different team roles, from developers to operations managers.',
    ],
    techStack: [
      { name: 'Python', icon: '🐍' },
      { name: 'Node.js', icon: '🟢' },
      { name: 'TypeScript', icon: '📘' },
      { name: 'Docker', icon: '🐳' },
      { name: 'Kubernetes', icon: '☸️' },
      { name: 'Terraform', icon: '🏗️' },
    ],
    careerExperience: 'Full Stack Developer at Digital Solutions Co.',
  },
};

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const project = Projects.find((proj) => proj.id === id);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen pt-20">
      <div className="mx-auto max-w-5xl px-4 pb-12 sm:px-6 md:pb-20 lg:px-8">
        {/* Back Button and Title */}
        <div className="animate-fade-in mb-8 space-y-4">
          <Link
            href="/projects"
            className="text-muted-foreground hover:text-primary inline-flex items-center gap-2 transition-colors"
          >
            <ArrowLeft size={20} />
            <span>Back to Projects</span>
          </Link>
          <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl">
            {project.title}
          </h1>

          {project.careerExperience && (
            <div className="bg-primary/10 text-primary border-primary/20 inline-flex items-center gap-2 rounded-md border px-3 py-1.5 text-sm">
              <Briefcase size={14} />
              <span>{project.careerExperience}</span>
            </div>
          )}
        </div>

        {/* Vertical Layout */}
        <div className="space-y-8">
          {/* Image Carousel */}
          {project.images.length > 0 && (
            <div className="animate-fade-in-delay-1">
              <ImageCarousel images={project.images} alt={project.title} />
            </div>
          )}

          {/* Project Details */}
          <div className="animate-fade-in-delay-2 space-y-8">
            {/* Category Badges and Links */}
            <div className="flex flex-wrap items-center gap-3">
              {project.domains.map((domain) => (
                <Badge key={domain} variant="secondary" className="text-sm">
                  {domain}
                </Badge>
              ))}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary p-2 transition-colors"
                  aria-label="View on GitHub"
                >
                  <Github size={20} />
                </a>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary p-2 transition-colors"
                  aria-label="View live site"
                >
                  <ExternalLink size={20} />
                </a>
              )}
            </div>

            {/* Full Description */}
            <div className="space-y-4">
              {project.fullDescription.map((paragraph, index) => (
                <p
                  key={index}
                  className="text-muted-foreground text-base leading-relaxed"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Tech Stack */}
            <div className="space-y-1">
              <h2 className="flex items-center gap-2 text-xl font-bold">
                <span>🛠️</span>
                <span>Tech Stack</span>
              </h2>
              <TechStackDiagram technologies={project.technologies} />
              {/* Old Tech Stack Implementation - Commented Out */}
              {/* <div className="flex flex-wrap gap-3">
                {project.technologies.map((tech) => (
                  <div
                    key={tech}
                    className="bg-card border-border hover:border-primary flex items-center gap-2 rounded-lg border px-4 py-2 transition-colors"
                  >
                    <span className="text-sm font-medium">{tech}</span>
                  </div>
                ))}
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
