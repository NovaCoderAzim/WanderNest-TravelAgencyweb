---
name: Vibrant Voyager
colors:
  surface: '#fff8f3'
  surface-dim: '#e2d9ce'
  surface-bright: '#fff8f3'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#fcf2e7'
  surface-container: '#f6ece1'
  surface-container-high: '#f1e7dc'
  surface-container-highest: '#ebe1d6'
  on-surface: '#1f1b14'
  on-surface-variant: '#3e494a'
  inverse-surface: '#353028'
  inverse-on-surface: '#f9efe4'
  outline: '#6f797a'
  outline-variant: '#bec8ca'
  surface-tint: '#006972'
  primary: '#00535b'
  on-primary: '#ffffff'
  primary-container: '#006d77'
  on-primary-container: '#9becf7'
  inverse-primary: '#82d3de'
  secondary: '#8e4e14'
  on-secondary: '#ffffff'
  secondary-container: '#ffab69'
  on-secondary-container: '#783d01'
  tertiary: '#882a12'
  on-tertiary: '#ffffff'
  tertiary-container: '#a84127'
  on-tertiary-container: '#ffd6cc'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#9ff0fb'
  primary-fixed-dim: '#82d3de'
  on-primary-fixed: '#001f23'
  on-primary-fixed-variant: '#004f56'
  secondary-fixed: '#ffdcc4'
  secondary-fixed-dim: '#ffb780'
  on-secondary-fixed: '#2f1400'
  on-secondary-fixed-variant: '#6f3800'
  tertiary-fixed: '#ffdad2'
  tertiary-fixed-dim: '#ffb4a2'
  on-tertiary-fixed: '#3c0700'
  on-tertiary-fixed-variant: '#83260e'
  background: '#fff8f3'
  on-background: '#1f1b14'
  surface-variant: '#ebe1d6'
typography:
  display-lg:
    fontFamily: Playfair Display
    fontSize: 56px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 40px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.3'
  headline-sm:
    fontFamily: Playfair Display
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.4'
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: 0.01em
  label-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '700'
    lineHeight: '1'
    letterSpacing: 0.05em
rounded:
  sm: 0.5rem
  DEFAULT: 1rem
  md: 1.5rem
  lg: 2rem
  xl: 3rem
  full: 9999px
spacing:
  base: 8px
  xs: 4px
  sm: 12px
  md: 24px
  lg: 48px
  xl: 80px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 64px
---

## Brand & Style

The design system is built on a foundation of "Warm Modernism"—a blend of sophisticated editorial typography and soft, organic UI elements. It targets modern travelers seeking a balance between professional reliability and the joyful spontaneity of exploration. 

The aesthetic leverages **Minimalism** for clarity and **Glassmorphism** for depth, using translucent layers to suggest the airy, light-filled environments of travel. The emotional response is one of optimistic discovery: the UI feels as inviting as a boutique hotel and as dependable as a seasoned guide. High-quality whitespace is paired with vibrant color blocks to create an energetic rhythm that prevents the interface from feeling static or corporate.

## Colors

The palette is inspired by natural landscapes—deep oceans, sunset horizons, and sandy shores. 

- **Primary (Deep Teal):** Used for primary actions, navigation headers, and authoritative text to instill trust.
- **Secondary (Sunset Orange):** Applied to highlights, active states, and secondary call-to-actions to provide warmth.
- **Accent (Coral):** Reserved for high-impact moments, notifications, and promotional banners.
- **Surface Tones:** The Warm Cream background acts as a soft canvas, while Sky Blue and Soft Mint are used for subtle container backgrounds and low-priority chips to maintain a "fresh" feel.
- **Neutral:** Warm Beige is used for borders and disabled states, ensuring even the "empty" parts of the UI feel intentional and soft.

## Typography

This system uses a "Serif-Display, Sans-Utility" pairing. **Playfair Display** provides an editorial, premium feel for headings, evoking the quality of a travel magazine. **Plus Jakarta Sans** handles the functional heavy lifting, ensuring high legibility for itineraries, pricing, and booking details.

- **Headings:** Use tighter letter-spacing for large display text to maintain visual impact.
- **Body:** Use the 1.6 line-height to ensure comfort during long-form reading of destination guides.
- **Captions/Labels:** Always use Plus Jakarta Sans Bold or ExtraBold at smaller sizes to ensure they remain legible against colorful backgrounds.

## Layout & Spacing

The layout follows a **Fluid Grid** model with generous internal padding to create an "airy" feel. 

- **Desktop:** 12-column grid with a 1200px max-width container. 
- **Tablet:** 8-column grid with 24px side margins.
- **Mobile:** 4-column grid with 16px side margins.

Horizontal sections should alternate between the Warm Cream background and full-bleed Support colors (Sky Blue or Soft Mint) to visually separate content blocks. Use the `xl` (80px) spacing unit for vertical padding between major sections to prevent visual clutter.

## Elevation & Depth

Hierarchy is achieved through **Tonal Layering** and **Ambient Shadows**. 

1. **Base:** Warm Cream (#FFFDF5).
2. **Elevated Card:** White surface with a very soft, diffused shadow (15% opacity of Deep Teal) to give the impression of elements floating slightly above the page.
3. **Overlays/Modals:** Use a Backdrop Blur (20px) with a semi-transparent White (80% opacity) fill to maintain context of the underlying travel imagery.
4. **Interactive Elements:** On hover, buttons and cards should increase their shadow spread slightly, simulating a "lift" effect.

## Shapes

The shape language is defined by high-radius curves, conveying a friendly and safe atmosphere. 

- **Containers & Cards:** Use `rounded-xl` (24px) to soften the perimeter of the UI.
- **Buttons:** Fully pill-shaped for a modern, tactile feel.
- **Images:** Always apply a minimum of 20px corner radius. Avoid sharp 90-degree angles across the entire system.

## Components

- **Buttons:** Primary buttons use the Deep Teal background with White text. Secondary buttons use Sunset Orange. All buttons are pill-shaped with 16px horizontal and 12px vertical padding. Use a subtle inner-glow on hover for a tactile "squishy" look.
- **Cards:** White backgrounds with 24px rounded corners. Include a 1px stroke in Warm Beige (#F5EBE0) to define edges on the Cream background.
- **Input Fields:** 16px rounded corners (Soft), using a White fill and Warm Beige border. On focus, the border transitions to Deep Teal with a soft outer glow.
- **Chips/Tags:** Use the Support colors (Sky Blue/Soft Mint) with Deep Teal text. High-radius (pill) shapes only.
- **Search Bar:** A prominent, oversized pill-shaped input with a Sunset Orange "Search" button anchored to the right side.
- **Progress Indicators:** Use a thick, rounded bar in Soft Mint, with the active progress in Deep Teal.