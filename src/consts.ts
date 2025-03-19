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
    "I’m a musician and coder working mostly in the Typescript/React ecosystem to build full-stack applications for the web.",
};

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION: "Thoughts.",
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
    NAME: "bluesky",
    HREF: "https://bsky.app/profile/did:plc:5vmkw5e5if7sespehv5sp7tl",
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
