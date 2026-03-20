# Design System: Blanca Padel
**Project ID:** 6361254761406381039

## 1. Visual Theme & Atmosphere
The Blanca Padel aesthetic is defined by "Premium Intentionality." It relies on extremely high-contrast dichotomy between its marketing and utilitarian surfaces. The atmosphere is stark, minimalist, and ultra-modern—esschewing fluff for sheer performance. 

The mood shifts deliberately depending on context: The homepage features a "Pitch Black" immersion that feels intense, luxurious, and highly focused on the matte textures of the racquets. Conversely, transactional/utilitarian areas (such as the cart) transition into an "Airy Off-White" aesthetic that is incredibly clean, legible, and bright, ensuring effortless user navigation.

## 2. Color Palette & Roles
* **Pitch Black (#000000 / #090909):** The primary void. Used as the dramatic background for hero elements and marketing pages to make products pop.
* **Matte Carbon Dark (#111111 - #151515):** Used for elevated cards and section delineations within the dark theme to create subtle spatial separation without employing shadows.
* **Pristine White (#FFFFFF):** The absolute primary background for light-mode transactional pages (like the cart). Provides maximum readability.
* **Subtle Beige Surface (#F7F6F2):** A gently desaturated off-white utilized for summary cards (like checkout overviews) to cleanly separate functional groups from the harsh white background.
* **Dark Cyan Accent (#00646B):** The brand's signature accent. Used selectively in Light Mode for active states, link hovers, and logos to anchor the brand identity peacefully against the white layout.
* **Golden Yellow Callback (#F8D247):** The aggressive Call-to-Action (CTA) color. Used almost exclusively for graphical arrows inside buttons and notification badges (like cart counts) to instantly attract the user's eye and drive conversion.
* **Muted Gray Text (#666666 / #888888):** Utilized for all secondary descriptions, subheadlines, and functional notes to establish a clear typographic hierarchy.

## 3. Typography Rules
* **Font Family:** **Inter** (Sans-Serif). Chosen for its technical, highly geometric, and relentlessly legible nature.
* **Headers:** Displayed in Heavy or Semi-bold (`600` - `700`) with uniquely tight negative letter-spacing (`letter-spacing: -0.02em`) to give titles a compact, impactful, and authoritative punch.
* **Navigation / Utilities:** Displayed in a highly legible `13px` - `14px` size, often set in `Medium` weight.
* **Body Copy:** Displayed at `14px` with a generous line-height (`1.5` or `1.6`) to provide comfortable reading during deep product dives.

## 4. Component Stylings
* **Buttons (Primary CTAs):** Pill-shaped (fully rounded `999px` corners). Typically feature a solid background (White in dark-mode) paired with an embedded Golden Yellow `#F8D247` circular module framing a high-contrast directional arrow icon. On hover, opacity shifts slightly.
* **Cards / Containers:** Corners employ the `ROUND_EIGHT` standard (`border-radius: 8px` / `12px` depending on scale). These components completely avoid heavy drop-shadows. Instead, they rely strictly on a 1px ultra-thin solid stroke (`#E5E5E5` in Light mode, `rgba(255,255,255,0.05)` in Dark mode) to define their geometry.
* **Icons:** Line-based, minimalist SVG strokes (typically 1.5px or 2px weight) without fill colors.

## 5. Layout Principles
* **Grid Alignment:** Highly structured dual-axis grids. Product showcases utilize symmetrical cards with generous interior padding (e.g., `40px`).
* **White Space (Negative Space):** Extravagant use of negative space. Standard section padding is massive (`80px` - `120px` vertically), breathing an air of luxury into the layout.
* **Vertical Rhythm:** Components stack cleanly with distinct gaps. For instance, in the cart, the "Overview" block explicitly separates itself via a structured two-column ratio (roughly 66% cart items / 33% summary) rather than cramming elements together.
