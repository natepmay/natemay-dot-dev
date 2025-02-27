import type { Site, Metadata, Socials } from "@types";

export const SITE: Site = {
  NAME: "Nate May",
  EMAIL: "natemay.dev@proton.me",
  NUM_POSTS_ON_HOMEPAGE: 3,
  NUM_WORKS_ON_HOMEPAGE: 2,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
};

export const HOME: Metadata = {
  TITLE: "Nate May",
  DESCRIPTION:
    "I’m a product engineer, working mostly in the Typescript/React ecosystem to build full-stack applications for the web.",
};

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION: "Some sharings of my thoughts.",
};

export const WORK: Metadata = {
  TITLE: "Work",
  DESCRIPTION: "My resume.",
};

export const PROJECTS: Metadata = {
  TITLE: "Projects",
  DESCRIPTION:
    "A collection of my projects, with links to repositories and demos.",
};

export const SOCIALS: Socials = [
  {
    NAME: "bluesky (personal)",
    HREF: "https://bsky.app/profile/natemay.bsky.social",
  },
  {
    NAME: "github",
    HREF: "https://github.com/natepmay",
  },
  {
    NAME: "linkedin",
    HREF: "https://www.linkedin.com/in/nate-may/",
  },
];
