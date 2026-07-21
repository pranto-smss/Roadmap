# Roadmap to Web Dev

A route, not a checklist. Sixteen builds between here and hireable.

Every stop on this route is a real, working thing — not a drill. Each one earns its place because it either teaches something you'll use in *every* project after it, or it's the exact story you'll tell in an interview six months from now.

| Builds | Legs | Pace |
|:------:|:----:|:----:|
| 16 | 5 | ~9 weeks |

> **Rules of the road:**
> - **Commit honestly.** Three to four real commits per build beats one "final upload."
> - **Deploy everything.** Every frontend repo gets a live link. A code dump is not a portfolio piece.
> - **README first.** Write what the thing does and why before you write a line of code.
> - **Don't rush the easy ones.** The early builds exist to build muscle memory.

---

## Leg 1 — Structure & Surface

*HTML and CSS, together. Never ship unstyled markup. In four builds you go from a personal page to a layout skeleton you'll reuse for the rest of your life.*

| # | Build | What it is | You'll practice | Repo | Done? |
|:-:|:------|:-----------|:----------------|:-----|:-----:|
| 01 | **Basecamp** | Multi-page personal site (home, about, projects, contact) | Semantic HTML5, Flexbox, CSS Grid, media queries, forms & validation, relative linking, alt text | [Repo](https://github.com/pranto-smss/Basecamp) | |
| 02 | **Storefront Window** | Pricing / landing page with hero, tiers, FAQ | `<details>` FAQ, 3-tier pricing cards, `:hover` and transitions, responsive nav | [Repo](https://github.com/pranto-smss/Storefront-Window) | |
| 03 | **Control Tower** | Dashboard shell — sidebar, sticky header, scrolling content | CSS Grid template areas, `position: sticky`, CSS custom properties, `data-attribute` theming, light/dark toggle | [Repo](https://github.com/pranto-smss/Control-Tower) | |
| 04 | **The Contact Sheet** | Photo gallery + lightbox, responsive grid | CSS Grid responsive gallery, `aspect-ratio` & `object-fit`, `querySelectorAll`, event delegation, class-toggling modal | [Repo](https://github.com/pranto-smss/The-Contact-Sheet) | |

---

## Leg 2 — Behavior

*Vanilla JavaScript. No framework as a crutch yet. If you can manage state and talk to an API by hand, React will feel like relief, not magic.*

| # | Build | What it is | You'll practice | Repo | Done? |
|:-:|:------|:-----------|:----------------|:-----|:-----:|
| 05 | **Loose Ends** | To-do app that persists across reloads | Array methods, `localStorage`, DOM creation, single-source-of-truth state pattern | [Repo](https://github.com/pranto-smss/Loose-Ends) | |
| 06 | **Any Weather** | Public API search app with loading/error states | `fetch`, `async/await` + `try/catch`, template literals, loading/error/success UI states | [Repo](https://github.com/pranto-smss/Any-Weather) | |
| 07 | **Twenty Questions** | Quiz / multi-step form with a results screen | Array of objects, current-step state variable, hand-rolled conditional rendering, regex validation, score calculation | [Repo](https://github.com/pranto-smss/Twenty-Questions) | |
| 08 | **Moving Parts** | Drag-and-drop kanban board, persisted to localStorage | HTML5 Drag and Drop API, nested state updates, CSS drag feedback | [Repo](https://github.com/pranto-smss/Moving-Parts) | |

---

## Leg 3 — One Framework, Deep

*React. Pick React and stay on it through all four builds. Depth in one framework reads better than shallow tourism through three.*

| # | Build | What it is | You'll practice | Repo | Done? |
|:-:|:------|:-----------|:----------------|:-----|:-----:|
| 09 | **Spare Parts** | Reusable component kit with variants | JSX, function components, props & defaults, conditional rendering, component composition | [Repo](https://github.com/pranto-smss/Spare-Parts) | |
| 10 | **Any Weather, Again** | #06 rebuilt with React Router | `useState`, `useEffect` + dependency arrays, React Router, lifting state up | [Repo](https://github.com/pranto-smss/Any-Weather-Again) | |
| 11 | **Shared Custody** | Cart icon + theme toggle, global state | Context API, `useContext`, avoiding prop drilling, persisting to localStorage | [Repo](https://github.com/pranto-smss/Shared-Custody) | |
| 12 | **The Big Board** | Dashboard with charts, reuses Control Tower layout | Charting library (Recharts or Chart.js), `useMemo` for derived data, responsive chart containers | [Repo](https://github.com/pranto-smss/The-Big-Board) | |

---

## Leg 4 — The Other Side

*Backend (Node + Express). No throwaway "hello world" API — every build here is real and persists something, so nothing goes to waste.*

| # | Build | What it is | You'll practice | Repo | Done? |
|:-:|:------|:-----------|:----------------|:-----|:-----:|
| 13 | **Plain Records** | CRUD API with a real database | Express routing, REST conventions, ORM/driver (Prisma or Mongoose), schema design, env variables, Postman/curl testing | [Repo](https://github.com/pranto-smss/Plain-Records) | |
| 14 | **Front Door** | Auth API — signup, login, protected routes | `bcrypt` password hashing, JWT creation & verification, Express middleware, token storage tradeoffs | [Repo](https://github.com/pranto-smss/Front-Door) | |
| 15 | **Party Line** | WebSocket chat backend | WebSockets / Socket.io, event-based communication (`emit`/`on`), rooms, connection/disconnection handling | [Repo](https://github.com/pranto-smss/Party-Line) | |

---

## Leg 5 — Everything, Wired Together

*Fullstack. Two builds. The first proves you can connect what you've already made. The second is the one you actually lead with.*

| # | Build | What it is | You'll practice | Repo | Done? |
|:-:|:------|:-----------|:----------------|:-----|:-----:|
| 16a | **Under One Roof** | Real fullstack app — frontend + backend + auth + database | CORS, env config, connecting frontend to your own API, attaching auth tokens, deploying frontend + backend separately | [Repo](https://github.com/pranto-smss/Under-One-Roof) | |
| 16b | **The Flagship** | Capstone — take 16a further. Tests, CI, logging, polished README | Jest or Vitest, GitHub Actions CI, structured logging, README writing (problem, solution, screenshots, live link) | [Repo](https://github.com/pranto-smss/The-Flagship) | |

---

*16 builds · 5 legs · est. pace: 1 build every 3–6 days*
