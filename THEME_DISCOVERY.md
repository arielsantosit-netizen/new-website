# ARIELSANTOS.SPACE - Antigravity Theme Discovery & Documentation
**Map Your Custom Blocks + Integrate Wireframe Content**

---

## PART 1: BLOCK INVENTORY TEMPLATE

This section documents the primary architectural blocks currently active in the Ariel Santos digital experience.

---

## BLOCK 1: LUXURY HERO
**Block Name:** Luxury Hero
**Block Type:** ☐ Standard  ☒ Custom
**Status:** ☒ Ready  ☐ Needs work  ☐ Deprecated

**Where Used (Pages):**
- [x] Home
- [ ] About
- [ ] Services
- [ ] Resources
- [ ] Mentorship
- [ ] Credentials
- [ ] Blog
- [ ] Contact

**What It Does:**
The definitive entry point for the site. It features an ultra-premium centered headline in Pinyon Script, interactive light ray effects, and a sophisticated float-up entry animation for the primary tagline.

**Content Fields Available:**
- [x] Title/Heading (Ariel Santos)
- [x] Subtitle/Subheading (Tech Educator & Mentor)
- [ ] Description/Body Text
- [ ] Image/Featured Image
- [x] Icon (Interactive Sparkles)
- [ ] Button/CTA
- [ ] Links

**Customizations You've Made:**
```
- Custom Pinyon Script typography with extreme negative letter spacing for luxury feel.
- Integrated LightRays WebGL engine for dynamic background atmosphere.
- Staggered CSS animations for name and subtitle reveal.
```

**CSS/Styling Notes:**
```css
.hero-name { font-family: var(--font-pinyon); font-size: 150px; }
.hero-subtitle { font-family: var(--font-body); letter-spacing: 0.3em; uppercase; }
```

**Mobile/Responsive Behavior:**
- Desktop: Full bleed with 150px script name.
- Tablet: Scaled typography to 8xl.
- Mobile: Compact 4rem name with vertical stacking.

---

## BLOCK 2: DIGITAL BUSINESS CARD ARCHITECT
**Block Name:** ClassRegistrationForm
**Block Type:** ☐ Standard  ☒ Custom
**Status:** ☒ Ready  ☐ Needs work  ☐ Deprecated

**Where Used (Pages):**
- [ ] Home
- [x] Services / Mentorship
- [ ] Other: Main Conversion Engine

**What It Does:**
A high-end, multi-step AI-powered form that allows users to "architect" their professional identity. Features AI voice transcription, profile enhancement, and prompt generation.

**Content Fields Available:**
- [x] Title/Heading
- [x] Subtitle/Subheading
- [x] Description/Body Text
- [ ] Image/Featured Image
- [ ] Icon
- [x] Button/CTA
- [x] Form Fields (Name, Role, Bio, Colors)
- [ ] Links

**Customizations You've Made:**
```
- Fully migrated to "Holographic Iridescent" light theme.
- Absolute background integration of Iridescence.tsx.
- AI-driven bio enhancement and voice-to-text functionality.
```

---

## BLOCK 3: EXPERIENCE COUNTER
**Block Name:** ScrollCounter
**Block Type:** ☐ Standard  ☒ Custom
**Status:** ☒ Ready  ☐ Needs work  ☐ Deprecated

**Where Used (Pages):**
- [x] Home
- [x] About

**What It Does:**
Provides social proof and credibility through animated numerical counters that trigger on scroll.

**Content Fields Available:**
- [x] Title/Heading
- [x] Subtitle/Subheading
- [ ] Description/Body Text
- [x] Icon
- [ ] Button/CTA
- [ ] Links

---

## PART 2: WIREFRAME-TO-BLOCKS MAPPING

### HOME PAGE

**Section 1.1: Hero (Tagline + Subheading + CTA + Background)**
- Best block for this: **Luxury Hero**
- Block status: ☒ Ready to use
- Content needed: Ariel Santos (Name), Tech Educator & Mentor (Subtitle)
- Notes: Uses LightRays.tsx for background.

**Section 1.2: Value Proposition Cards (4 Cards)**
- Best block for this: **Approach.tsx**
- Block status: ☒ Ready to use
- Will you use: ☒ A grid block with 4 cards
- Content needed: 4 Titles (Precision, Strategy, Mentorship, Innovation)
- Notes: Clean minimalist borders with serif typography.

**Section 1.3: Featured Resources (2-3 Blog Posts)**
- Best block for this: **Portfolio.tsx**
- Block status: ☒ Ready to use
- Content needed: Project titles, Case studies, Professional links
- Notes: Displays career achievements and technical infrastructure builds.

**Section 1.4: Mission Statement (Large Callout)**
- Best block for this: **WhoThisIsFor.tsx**
- Block status: ☒ Ready to use
- Content needed: Narrative text about target audience (Tech Professionals, Career Pivoters)
- Notes: High emphasis on typography and white space.

**Section 1.5: Social Proof / Stats (Optional)**
- Best block for this: **ScrollCounter.tsx**
- Block status: ☒ Ready to use
- Content needed: Years of experience, Number of Mentees, Systems Built.
- Notes: Animated interaction.

**Section 1.6: Footer**
- Best block for this: **Footer.tsx**
- Block status: ☒ Ready to use
- Content needed: Copyright, Social Links, Brand Message
- Notes: Includes "Precision • Integrity • Impact" values.

---

### MENTORSHIP PAGE

**Section 5.1: Hero**
- Best block for this: **Generic Section with Iridescence Background**

**Section 5.2: Mentorship Models (4 tiers)**
- Best block for this: **Consulting.tsx**
- Block status: ☒ Ready to use
- Layout preference: ☒ Cards
- Content needed: Mentorship levels (Tier 1, Tier 2, etc.)

**Section 5.5: Application Process (4-step timeline)**
- Best block for this: **ClassRegistrationForm.tsx (The Architect)**
- Block status: ☒ Ready to use
- Layout: ☒ Steps
- Notes: This is the primary interactive onboarding experience.

---

## PART 4: THEME SETTINGS & GLOBAL STYLES

### Color Palette

**Brand Colors:**
- Primary color: Black (hex: #111111)
- Secondary color: Off-White (hex: #fdfdfd)
- Accent blue: Lavender/Steel (hex: #a3c2cf)
- Accent pink: Blush (hex: #f4d9df)
- Background: Pure White (hex: #ffffff)
- Text primary: Deep Onyx (hex: #111111)
- Text secondary: Charcoal (hex: #333333)

**Notes on your palette:**
An elegant Light Theme utilizing subtle glassmorphism and holographic iridescence. Transitions move through a soft gradient of #a3c2cf to #f4d9df.

---

### Typography

**Heading Font:** Cormorant Garamond (Serif)
**Body Font:** Inter (Sans-Serif)
**Accent/Decorative Font:** Pinyon Script (Luxurious Script)

**Font Sizes:**
- H1 (Hero): 150px / 9.5rem
- H2 (Section): 4.5rem
- H3 (Card): 2.25rem
- Body: 1rem / 16px
- Small: 0.75rem / 12px

**Line Heights:** 1.2 (Headings), 1.6 (Body)

**Letter Spacing:** 0.3em (for uppercase accents)

---

### Buttons & CTAs

**Button style:** ☒ Filled (Primary)  ☐ Outlined (Secondary)  ☒ Ghost (Navigation)
**Button color(s):** Black / White
**Button hover effect:** Scale transform (0.98), subtle bg darkening, and shadow expansion.
**Button radius:** 9999px (Pill shape)

---

### Animations & Effects

**Scroll animations enabled?** ☒ Yes (Framer Motion)
**Hover effects:** Glint effect, Scale, and Iridescent color shifts.
**Transitions:** 0.3s Standard elastic.
**Custom animations:** LightRays WebGL rays, Iridescence noise distortion.

---

## PART 5: BLOCKS COMPATIBILITY CHECKLIST

| Wireframe Section | Block Type Needed | Have It? | Block Name | Ready to Use? |
|---|---|---|---|---|
| Hero | Hero | ☒ Yes | Luxury Hero | ☒ Yes |
| Value Prop Cards | Cards/Features | ☒ Yes | Approach Section | ☒ Yes |
| Featured Content | Blog Grid | ☒ Yes | Portfolio Grid | ☒ Yes |
| Callout/Quote | Callout | ☒ Yes | WhoThisIsFor | ☒ Yes |
| Footer | Footer | ☒ Yes | Footer | ☒ Yes |
| Application Form | Steps | ☒ Yes | The Architect | ☒ Yes |
| Stats/Numbers | Stats | ☒ Yes | ScrollCounter | ☒ Yes |

---

## PART 7: NEXT STEPS

1. **Verify Responsive Performance:** Audit The Architect (ClassRegistrationForm) on ultra-wide and mobile breakpoints.
2. **Launch Stage:** Finalize the "Execution Guide" content in the Finish step of the registration form.
3. **Typography Audit:** Ensure all headers are strictly utilizing the Cormorant Garamond / Pinyon Script weight variants consistently.
