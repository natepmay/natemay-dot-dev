---
title: "Going Public with Synthase Studio"
description: "I'm building an app for music learning tools."
date: "04/11/2025"
tags: ["synthase-studio"]
---

After a heretofore-lifetime of making and studying music and working as a composer and improviser, and very much despite the training I received in some of the world’s top conservatories, my professional opinion is that _music is just vibes_. As in, there are no objective rules about what makes music good. If music resonates with someone, it is good for that person. Multiply that by 8 billion and you have a universal aesthetics of music.

As a music theory educator, this has reframed everything. The curriculum for Western music theory in an academic setting is frighteningly optimized for an assumed musical experience that’s almost never talked about. And it makes sense: experience and intuition do not fit well into multiple choice questions, but discrimination of concepts does. Is this an _accented neighbor_ or an _escape tone_? A _period_ or a _sentence_? A _perfect_ or _imperfect_ _authentic cadence_? I’ve seen too many passionate and talented students get bogged down with these questions and start to doubt the things that actually matter about themselves as musicians.

I’ve been attempting to solve this through the curriculum we’ve been developing in my music school [Synthase](https://synthase.cc), and one of the ways we get there is by using an alternative set of tools for learning—ones that are focused on developing an intuition for the high-octane concepts, like chords and scales, that can form the basis for understanding one’s _own_ experience with music.

I’m finally in a place where I can bring these learning tools together under a single platform, Synthase Studio. I envision this as a home for the web-based music learning tools I’ve developed and will develop.

---

From a technical perspective, what that will look like is a parent app that hosts several child apps. Among the child apps will be [Chordle](https://www.natemay.dev/projects/chordle) and one other that’s in private beta right now. The parent app will authenticate users, allow them to update their preferences, provide global navigation, and provide a set of tools to the child apps—audio controls, an onscreen keyboard, access to MIDI devices, a synthesizer—in the form of a kind of SDK.

I see this process unfolding in phases:

**Phase One:** Create the basic infrastructure of the parent app.

- **Framework**: React/Next.js
- **Styling**: ShadCN and Tailwind.
- **Database:** Postgres with Drizzle ORM
- **Authentication**: Better-Auth
- **Forms:** React-Hook-Form with Zod validation
- **Emails:** Mailjet
- **CI/CD:**
  1. **Testing:** Vitest (unit) and Playwright (E2E)
  2. **Deployment:** Vercel & Neon

**Phase Two:** Integrate existing child apps as `<iframe>`s. Handle any communication between parent and child apps via `window.postMessage()`

**Phase Three:** Build out the rest of the parent app’s feature set (audio, piano, synth) and provide SDK access.

**Phase Four:** Build new child apps and port the existing ones out of the `<iframe>`s and into a native context.

---

As of today I’ve open-sourced [this codebase](https://github.com/synthase-music/synthase-studio). I’m currently finishing up Phase One so there’s no useful functionality yet, but that’s coming soon. I’ll be happy to hear feedback throughout this process, both on the code/architecture and on the product itself. I’ll be posting updates on this blog (here’s the [RSS feed](https://www.natemay.dev/rss.xml)) and on [Bluesky](https://bsky.app/profile/natemay.dev).

Thanks for following along!
