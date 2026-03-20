---
page: cart
---
Refine the Cart state to integrate backend features using the Blanca Padel design system.

**DESIGN SYSTEM (REQUIRED):**
- Platforms: Desktop Web
- Theme: Minimal, High-Contrast
- Colors:
  - Pristine White (#FFFFFF) for main content background
  - Subtle Beige Surface (#F7F6F2) for the cart summary section
  - Dark Cyan Accent (#00646B) for links/logos
  - Golden Yellow (#F8D247) for CTA arrow circles
- Typography: Inter font, bold headers with -0.02em letter-spacing
- Components: Pill-shaped buttons with embedded yellow arrow circle. 1px solid stroke instead of shadows.

**Page Structure:**
1. **Header:** Clean navigation (Global).
2. **Hero/Title:** Clean "Your Cart" title.
3. **Cart Items List:** Individual items showing image, title, price, and a quantity selector.
4. **Order Summary Side Panel:** Uses Subtle Beige. Item totals, shipping details, and a primary "Checkout" button.
5. **Empty State:** Retain the empty state with a button to browse collections if the cart is cleared.

**Functional Goal:** Prepare this view to link directly to the Node.js backend generated previously or simulate global state using React Context to push orders into PostgreSQL.
