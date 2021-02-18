export type PageMeta = {
  title: string;
  path: string;
};

export const Home: PageMeta = {
  title: "Home",
  path: "/main",
};

export const AboutMe: PageMeta = {
  title: "AboutMe",
  path: "/about-mike",
};

export const Projects: PageMeta = {
  title: "Projects",
  path: "/projects",
};

export const Interests: PageMeta = {
  title: "Interests",
  path: "/what-is-mike-interested-in",
};

export const Contact: PageMeta = {
  title: "Contact",
  path: "/pls",
};

export const AllValues = [Home, AboutMe, Projects, Interests, Contact];

// export function fromPath(path?: string): PageMeta {
//   const meta = AllValues.filter(
//     (value) => value.path === path || path?.startsWith(value.path + "/")
//   );
//   if (meta.length === 0) return Home;
//   return meta[0];
// }
// export function fromTitle(title?: string): PageMeta {
//   const meta = AllValues.filter((value) => value.title === title);
//   if (meta.length === 0) return Home;
//   return meta[0];
// }

// export const serverUrl = "http://192.168.1.215:3000/";
// export const serverUrl = "http://192.168.68.106:8000/";
export const serverUrl = "https://ollehmichael.github.io/";
