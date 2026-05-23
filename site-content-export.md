# 64thSquare Advisory — Site Content Export

> **Generated:** May 23, 2026  
> **URL:** https://64thsquare.com  
> **Tagline:** Strategy. Security. Execution.  
> **Business:** Fractional CIO/CISO & Technology Transformation Advisory

---

## Table of Contents

1. [Site Overview & Tech Stack](#1-site-overview--tech-stack)
2. [Brand Identity & Design System](#2-brand-identity--design-system)
3. [Navigation Structure](#3-navigation-structure)
4. [Home Page (/)](#4-home-page-)
5. [Services Page (/services)](#5-services-page-services)
6. [About Page (/about)](#6-about-page-about)
7. [Insights Page (/insights)](#7-insights-page-insights)
8. [Contact Page (/contact)](#8-contact-page-contact)
9. [Shared Components](#9-shared-components)
10. [UI Component Library](#10-ui-component-library)
11. [Configuration & Metadata](#11-configuration--metadata)

---

## 1. Site Overview & Tech Stack

| Property | Value |
|---|---|
| **Framework** | Next.js 16.2.6 |
| **Language** | TypeScript (strict mode) |
| **Styling** | Tailwind CSS v4 + `tw-animate-css` + shadcn/ui (Radix-Nova style) |
| **Icons** | Lucide React |
| **Fonts** | Geist Sans (variable), Geist Mono (variable) |
| **Package Manager** | npm |
| **Linting** | ESLint with `eslint-config-next` |
| **Deployment** | Vercel-ready (Next.js config) |

### Key Dependencies

- `next` 16.2.6
- `react` 19.2.4 / `react-dom` 19.2.4
- `class-variance-authority` ^0.7.1
- `clsx` ^2.1.1 + `tailwind-merge` ^3.6.0
- `lucide-react` ^1.14.0
- `radix-ui` ^1.4.3
- `shadcn` ^4.7.0
- `tailwindcss` v4

---

## 2. Brand Identity & Design System

### Color Palette

| Token | Hex | Usage |
|---|---|---|
| `--color-navy` | `#003D5C` | Primary brand color, dark backgrounds, headings |
| `--color-teal` | `#20B2AA` | Secondary brand color, accents, CTAs |
| `--color-aqua` | `#00A8CC` | Tertiary accent |
| `--color-bright-aqua` | `#00CED1` | Bright accent |
| `--color-soft-aqua` | `#7FDBCA` | Soft accent |
| `--color-slate` | `#5B8FA3` | Body text, muted elements |
| `--color-blue-gray` | `#8B9DA8` | Supporting text |
| `--color-ivory` | `#F7F4EE` | Page backgrounds, light sections |
| `--color-charcoal` | `#1D252C` | Dark text, foreground |

### Typography

- **Font Stack:** Geist Sans (body), Geist Mono (monospace)
- **Headings:** Bold, tight tracking, navy color
- **Eyebrow labels:** 10-12px, uppercase, wide tracking (`0.12em`–`0.18em`), teal or gold
- **Body:** 14-16px, relaxed leading, slate/muted-foreground

### Design Patterns

- **Section backgrounds:** Alternating between `bg-ivory`, `bg-white`, `bg-background`, `bg-muted/30`
- **Cards:** Rounded-xl (`12px`), border `border-border/40`, subtle shadow, hover shadow-md
- **Accent lines:** Top accent bar on service cards (teal/aqua), left accent dots (teal/gold circles)
- **CTAs:** Teal buttons on dark navy backgrounds, outline buttons on light backgrounds
- **Dark sections:** Navy backgrounds with white/ivory text, white/50 borders

---

## 3. Navigation Structure

### Header Navigation Links

| Label | Path |
|---|---|
| Services | `/services` |
| About | `/about` |
| Insights | `/insights` |
| Contact | `/contact` |

### Header Behavior

- **Sticky** header with `backdrop-blur` and `bg-ivory/95`
- **Desktop:** Horizontal nav links + "Schedule a conversation" CTA button
- **Mobile:** Hamburger menu toggle → full-width dropdown with nav links + CTA
- **Active state:** Current page link highlighted in navy vs. slate
- **Logo:** SVG (`/64thsquare-logo.svg`), 220px mobile / 320px desktop

### Footer

- Simple centered footer on navy background
- Copyright: `© [year] 64thSquare LLC. All rights reserved.`
- Email link: `contact@64thsquare.com`

---

## 4. Home Page (/)

### 4.1 Hero Section

- **Background:** Ivory with subtle teal radial glow
- **Eyebrow:** "Technology Advisory" (teal, uppercase)
- **Headline:** "Strategy. Security. **Execution.**" (teal emphasis on "Execution")
- **Subheadline:** "64thSquare provides fractional CIO, CISO, and technology transformation advisory services for organizations that need experienced technology leadership without adding permanent executive headcount."
- **Supporting line:** "Fractional CIO/CISO · Program Recovery · Cybersecurity · AI-Enabled Transformation"
- **CTAs:**
  - Primary: "Schedule a conversation" (mailto link)
  - Secondary: "View services" (link to `/services`)
- **Visual:** Hero graphic image (`/hero-square-graphic.png`) — abstract technology advisory network graphic (desktop only)

### 4.2 Credibility Strip

- **Text:** "Led by Vikrant 'Vik' Gadgil — former CIO/CISO and senior technology advisor with 30+ years across enterprise transformation, cybersecurity, ERP, governance, AI, and complex program execution."
- **Credential chips:** CISSP, CISM, PMP, ITIL Foundation, CIO / CISO Experience

### 4.3 "What We Do" Section

- **Eyebrow:** "What we do"
- **Title:** "Clarity, structure, and execution discipline"
- **Description:** "64thSquare helps organizations bring clarity, structure, and execution discipline to complex technology work. We bridge the gap between strategy and delivery — providing the senior judgment, practical experience, and focused leadership that technology initiatives require."

### 4.4 Services Grid (6 Cards)

| # | Service | Description |
|---|---|---|
| 1 | Fractional CIO Advisory | Senior CIO-level technology leadership on a flexible, part-time basis. |
| 2 | Fractional CISO Advisory | Cybersecurity leadership and risk management guidance. |
| 3 | Technology Transformation | End-to-end transformation planning and execution support. |
| 4 | Program Recovery & Execution | Restoring momentum to troubled technology programs. |
| 5 | Cybersecurity & Compliance | Risk assessment, compliance readiness, and security program development. |
| 6 | AI-Enabled Transformation | Practical advisory for identifying and implementing AI-enabled use cases. |

### 4.5 "Where We Help" Section

- **Eyebrow:** "When to engage"
- **Title:** "Situations where 64thSquare helps"
- **Description:** "Organizations engage 64thSquare when they need experienced judgment, rapid assessment, or hands-on leadership for critical technology work."
- **Visual:** Advisory wheel diagram (`/advisory-wheel.png`) — hub-and-spoke concept

**Situations listed:**
1. You need senior technology leadership but not a permanent executive hire.
2. A critical program is late, unclear, or losing executive confidence.
3. Cybersecurity risk is visible, but priorities and ownership are unclear.
4. Cloud, infrastructure, or application modernization needs stronger direction.
5. A technology operating model needs restructuring for scale.
6. Compliance, audit, or governance readiness demands experienced oversight.
7. An acquisition or divestiture requires technology due diligence.
8. The board or investors need an independent technology assessment.

### 4.6 Founder Section

- **Eyebrow:** "Founder"
- **Title:** "Led by Vikrant 'Vik' Gadgil"
- **Bio (3 paragraphs):**
  - 30+ years experience across CIO, CISO, enterprise transformation, cybersecurity, ERP, cloud, analytics, and program governance roles.
  - Has led technology organizations in regulated utilities, manufacturing, logistics, eCommerce, healthcare, and consulting environments.
  - Holds CISSP, CISM, PMP, and ITIL Foundation certifications, with an MBA from IIM Calcutta and Electrical Engineering from NIT Nagpur.
- **Credential highlights card:**
  - 30+ years in senior technology leadership
  - CIO and CISO experience
  - CISSP · CISM · PMP · ITIL Foundation
  - SAP, cybersecurity, AI governance, cloud, analytics, and enterprise transformation
  - Board, executive, and program-level advisory

### 4.7 "Why 64thSquare" Section

- **Eyebrow:** "Why 64thSquare"
- **Title:** "Senior operator experience applied to advisory work"
- **Description:** "64thSquare brings senior operator experience to advisory work. The approach is practical, direct, and outcome-oriented. The focus is not on producing large strategy decks. The focus is helping leaders make decisions, align teams, reduce risk, and move important work forward."

**Experience pillars (5 cards):**
1. Senior technology leadership across complex enterprise environments
2. Cybersecurity, infrastructure, cloud, and transformation leadership
3. Experience with regulated and operationally intensive businesses
4. Large program recovery and execution discipline
5. Practical operator experience, not just advisory theory

### 4.8 Final CTA

- **Headline:** "Need senior technology leadership for a project, transition, recovery effort, or advisory role?"
- **Subtext:** "Schedule a confidential conversation to discuss how 64thSquare can help your organization."
- **Button:** "Schedule a conversation" (mailto link, teal on navy)

---

## 5. Services Page (/services)

### Header

- **Background:** Navy
- **Eyebrow:** "Services"
- **Title:** "Advisory and leadership for critical technology work"
- **Description:** "Engagement models designed for organizations that need experienced technology direction — without adding permanent executive headcount."

### Service Detail Sections (6 services, alternating backgrounds)

Each service has: **What it is**, **Where it helps**, and **Example outcomes**.

#### 5.1 Fractional CIO Advisory

- **What:** Senior CIO-level technology leadership on a flexible, part-time or interim basis. Direction, governance, team leadership, strategic planning without full-time overhead.
- **Where:** Organizations that have outgrown basic IT support but aren't ready for a full-time CIO. Companies navigating growth, transition, or leadership gaps. Boards and investors needing independent assessment.
- **Outcomes:**
  - Clear technology strategy aligned to business objectives
  - Improved IT governance and decision-making discipline
  - Stronger vendor and technology portfolio management
  - Executive-ready communication and board reporting

#### 5.2 Fractional CISO Advisory

- **What:** Cybersecurity leadership and risk management guidance. Build, improve, or validate security programs with a practical, business-aware approach.
- **Where:** Organizations without dedicated security leadership. Companies responding to audit findings, compliance requirements, or security incidents. Firms preparing for regulatory examination or customer security reviews.
- **Outcomes:**
  - Risk-prioritized security program aligned to business tolerance
  - Improved security maturity without tool sprawl
  - Compliance readiness for relevant frameworks and regulations
  - Clear incident response and governance structures

#### 5.3 Technology Transformation

- **What:** End-to-end transformation planning and execution support — from current state assessment through roadmaps and delivery guidance.
- **Where:** Organizations undertaking significant technology change — cloud migration, ERP modernization, digital platform builds, or operating model redesign.
- **Outcomes:**
  - Realistic, sequenced transformation roadmap
  - Governance structures that maintain momentum
  - Organizational change management integrated with delivery
  - Measurable business outcomes at each stage

#### 5.4 Program Recovery & Execution

- **What:** Rapid assessment and intervention for technology programs that are off track. Diagnose root causes, stabilize, establish delivery discipline.
- **Where:** Programs experiencing schedule overruns, budget pressure, scope creep, or team dysfunction. Organizations needing independent program health assessment.
- **Outcomes:**
  - Honest assessment of program status and recovery options
  - Stabilized delivery with clear accountability
  - Restored stakeholder and team confidence
  - Disciplined execution through to completion

#### 5.5 Cybersecurity & Compliance

- **What:** Risk assessment, compliance readiness, and security program development. Understand exposure, prioritize remediation, build sustainable practices.
- **Where:** Companies preparing for SOC 2, ISO 27001, PCI DSS, or regulatory examination. Organizations with audit findings or security gaps.
- **Outcomes:**
  - Clear understanding of risk exposure and priorities
  - Practical remediation plans that respect operational constraints
  - Compliance documentation and evidence readiness
  - Sustainable security operations integrated with existing teams

#### 5.6 AI-Enabled Transformation

- **What:** Practical advisory for identifying and implementing AI-enabled use cases that improve productivity, decision-making, risk management, and business execution.
- **Where:** Organizations exploring AI for operations, customer experience, or competitive position. Companies needing practical AI adoption guidance.
- **Outcomes:**
  - Identified high-impact AI use cases aligned to business priorities
  - Practical roadmap for AI adoption and capability building
  - Improved productivity and decision-making through AI-enabled tools
  - Risk-managed approach to AI implementation and governance

---

## 6. About Page (/about)

### Header

- **Background:** Navy
- **Eyebrow:** "About"
- **Title:** "A boutique advisory practice built on senior operating experience"
- **Description:** "64thSquare LLC is led by a senior technology executive and advisor with experience across IT leadership, cybersecurity, infrastructure, cloud, enterprise systems, and large-scale transformation."

### Philosophy (3 paragraphs)

1. "64thSquare was founded on a straightforward premise: organizations facing complex technology decisions deserve access to senior, experienced leadership — without the overhead of a permanent executive hire."
2. "We work with leadership teams, boards, and investors who need practical, direct technology guidance. Our engagements range from fractional CIO and CISO roles to targeted advisory on transformation, cybersecurity, cloud strategy, and program recovery."
3. "The work is grounded in real operating experience — not advisory theory. We have led the organizations, managed the budgets, built the teams, and delivered the programs. That experience shapes every recommendation we make."

### Approach (4 pillars)

| Pillar | Description |
|---|---|
| **Operator experience** | Decades of senior technology leadership across complex enterprise environments. We have held the roles we advise on. |
| **Practical delivery** | Focus on outcomes, not documents. Strategy is valuable only when it leads to action. |
| **Executive communication** | Bridging technology and business leadership. Translating complex decisions into clear choices for executives, boards, and stakeholders. |
| **Independent judgment** | No product affiliations, no vendor bias, no agenda beyond helping clients succeed. Honest, direct assessments — even when difficult. |

---

## 7. Insights Page (/insights)

### Header

- **Background:** Navy
- **Eyebrow:** "Insights"
- **Title:** "Perspectives on technology leadership and advisory"
- **Description:** "Practical thinking on the topics that matter to senior technology leaders — fractional leadership, program execution, cybersecurity, and transformation."

### Articles (all "Coming soon")

| Title | Summary |
|---|---|
| **When a Fractional CIO or CISO Makes Sense** | Not every organization needs a full-time technology executive. We explore the signals that indicate a fractional leadership model may be the right fit — and how to structure the engagement for maximum impact. |
| **Recovering Troubled Technology Programs** | Technology programs go off track for predictable reasons. This article examines the common patterns behind program distress and the disciplined approach needed to restore momentum and confidence. |
| **Cybersecurity Maturity Without Tool Sprawl** | Building security maturity does not require buying every new tool. We discuss a practical, risk-based approach to improving security posture that respects operational reality and budget discipline. |

---

## 8. Contact Page (/contact)

### Header

- **Background:** Navy
- **Eyebrow:** "Contact"
- **Title:** "Start the conversation"
- **Description:** "Whether you need interim technology leadership, advisory support for a specific initiative, or an independent perspective on a complex challenge — we would welcome the opportunity to discuss how we might help."

### Contact Details

- **Primary CTA:** "Send an email inquiry" button (mailto link)
- **Email:** `contact@64thsquare.com`

### Areas of Inquiry (6 items)

1. Fractional CIO or CISO advisory engagements
2. Technology transformation and strategy
3. Cybersecurity and compliance advisory
4. Program recovery and execution support
5. Cloud and infrastructure strategy
6. Board and investor technology assessments

---

## 9. Shared Components

### 9.1 Header (`header.tsx`)

- **Type:** Client component (`"use client"`)
- **Features:** Sticky, backdrop blur, responsive nav, mobile hamburger menu, active route highlighting
- **CTA:** "Schedule a conversation" button → `mailto:contact@64thsquare.com?subject=64thSquare%20Consulting%20Inquiry`

### 9.2 Footer (`footer.tsx`)

- **Type:** Server component
- **Content:** Copyright + email link on navy background

### 9.3 Credibility Strip (`credibility-strip.tsx`)

- **Type:** Server component
- **Content:** Founder intro + credential chips (CISSP, CISM, PMP, ITIL Foundation, CIO/CISO Experience)

### 9.4 CTA Section (`cta-section.tsx`)

- **Type:** Server component
- **Props:** `variant?: "dark" | "light"` (default: "dark")
- **Dark variant:** Navy background, white text, teal CTA button
- **Light variant:** Teal-tinted border/background, navy text
- **Content:** "Need senior technology leadership..." headline + "Schedule a conversation" button

### 9.5 Section Heading (`section-heading.tsx`)

- **Type:** Server component
- **Props:** `eyebrow?`, `title` (required), `description?`, `className?`, `align?: "center" | "left"`
- **Structure:** Optional eyebrow label → H2 title → Optional description paragraph

### 9.6 Service Card (`service-card.tsx`)

- **Type:** Server component
- **Props:** `title`, `description`, `index`
- **Features:** Top accent line (teal/aqua alternating), numbered geometric marker, hover effects

### 9.7 Hub and Spoke (`hub-and-spoke.tsx`)

- **Type:** Client component (`"use client"`)
- **Desktop:** SVG-based hub-and-spoke diagram with 8 spoke labels radiating from center
- **Mobile/Tablet:** Simplified 2-column grid list of spoke labels
- **Spoke labels:** Senior leadership gap, Program recovery, Cybersecurity clarity, Cloud modernization, Operating model redesign, Compliance readiness, M&A diligence, Independent assessment

### 9.8 Square Grid Visual (`square-grid-visual.tsx`)

- **Type:** Client component (`"use client"`)
- **Description:** 8×8 grid of small squares (64 total), some highlighted in teal/navy to form a pattern
- **Purpose:** Decorative visual element referencing the "64thSquare" name

---

## 10. UI Component Library

### 10.1 Button (`button.tsx`)

- **Variants:** default, outline, secondary, ghost, destructive, link
- **Sizes:** default, xs, sm, lg, icon, icon-xs, icon-sm, icon-lg
- **Features:** Slot-based `asChild` support, focus-visible rings, active press effect, disabled state

### 10.2 Badge (`badge.tsx`)

- **Variants:** default, secondary, destructive, outline, ghost, link
- **Features:** Slot-based `asChild` support, focus-visible rings

### 10.3 Card (`card.tsx`)

- **Sub-components:** Card, CardHeader, CardTitle, CardDescription, CardAction, CardContent, CardFooter
- **Size prop:** `"default"` or `"sm"`
- **Features:** Container queries (`@container`), ring border, rounded corners

### 10.4 Separator (`separator.tsx`)

- **Type:** Client component (uses Radix UI Separator primitive)
- **Orientation:** horizontal (default) or vertical
- **Features:** Decorative by default

---

## 11. Configuration & Metadata

### Site Metadata

```json
{
  "title": "64thSquare — Strategy. Security. Execution.",
  "description": "64thSquare provides fractional CIO, CISO, and technology transformation advisory services for organizations that need senior technology leadership without adding permanent executive headcount."
}
```

### Global CSS Theme

- **Framework:** Tailwind CSS v4 with `@theme inline` directive
- **Custom colors:** navy, teal, aqua, bright-aqua, soft-aqua, slate, blue-gray, ivory, charcoal
- **Border radius scale:** sm (0.3rem) through 4xl (1.3rem)
- **Dark mode support:** Full `.dark` class-based theme override
- **Imports:** `tailwindcss`, `tw-animate-css`, `shadcn/tailwind.css`

### Path Aliases

- `@/*` → `./src/*`
- `@/components/*` → `./src/components/*`
- `@/lib/*` → `./src/lib/*`
- `@/components/ui/*` → `./src/components/ui/*`

### Public Assets

| File | Description |
|---|---|
| `/64thsquare-logo.svg` | Site logo (header) |
| `/hero-square-graphic.png` | Hero section visual |
| `/advisory-wheel.png` | "Where We Help" section visual |
| `/logo.png` | Logo (fallback) |
| `/logo.svg` | Logo (SVG) |

---

## Summary

64thSquare Advisory is a boutique technology advisory firm led by Vikrant "Vik" Gadgil. The site presents a professional, clean brand focused on **fractional CIO/CISO services**, **technology transformation**, **program recovery**, **cybersecurity & compliance**, and **AI-enabled transformation**. The design uses a navy/teal/ivory color palette with a warm, trustworthy aesthetic. Content emphasizes **senior operator experience**, **practical delivery**, and **independent judgment** — positioning the firm as a credible alternative to both large consultancies and permanent executive hires.

The site is built with Next.js 16, Tailwind CSS v4, and shadcn/ui (Radix-Nova style), with 5 pages (Home, Services, About, Insights, Contact) and a shared component library. The Insights page has 3 article placeholders marked "Coming soon."
