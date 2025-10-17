// Type declarations for CSS and other asset imports in Next.js

// CSS files
declare module '*.css' {
  const content: any;
  export default content;
}

// CSS modules
declare module '*.module.css' {
  const classes: { [key: string]: string };
  export default classes;
}
