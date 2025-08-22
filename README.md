# High Converting Landing Page Template

## Folder Structure

```
high-converting-landing-page-template/
│
├── public/
│   └── images/
│       └── Static assets like images and icons
│
├── src/
│   ├── app/
│   │   └── Next.js 15+ App Router
│   │
│   ├── components/
│   │   ├── layout/
│   │   │   └── Global layout components
│   │   │
│   │   ├── sections/
│   │   │   └── Landing page specific sections
│   │   │
│   │   └── ui/
│   │       └── UI elements for sections
│   │
│   ├── constants/
│   │   └── Global reusable constants
│   │
│   ├── hooks/
│   │   └── Custom React hooks
│   │
│   ├── models/
│   │   └── Data models, interfaces, types, and schema definitions
│   │
│   ├── routes/
│   │   └── Route utilities, custom route handlers, and navigation helpers
│   │
│   ├── styles/
│   │   └── base/
│   │       └── Global SCSS
│   │
│   └── theme/
│       └── Global config files
│
├── next.config.mjs
├── package.json
├── LICENSE.md
└── README.md
```

## Principles and Guidelines

### Performance

Page load times (both real and perceived) are a key consideration for users of all browsers and device types.

- Send fewest bytes possible down the wire
- Avoid unnecessary use of `display: none`;
- Keep CSS selectors concise (be wary of SASS nesting)
- Minimise HTTP requests
- Minimise blocking – content should be readable before client side processing
- Lazy load 'supplementary' content (especially images)

### Don't Repeat Yourself (DRY)

If you repeat anything that has already been defined in code, refactor it so that it only ever has one representation in the codebase.

If you stick to this principle, you will ensure that you will only ever need to change one implementation of a feature without worrying about needing to change any other part of the code.

### Seperation

Separate structure from presentation from behaviour to aid maintainability and understanding.

- Keep CSS (presentation), JS (behaviour) and HTML (structure) in separate files
- Avoid writing inline CSS
- Avoid writing CSS or HTML in Javascript
- Don't choose HTML elements to imply style
- Where appropriate, use CSS rather than Javascript for animations and transitions
- Try to use templates when defining markup in Javascript

### Write code to be read

Follow the principles of 'Keep It Simple, Stupid' (KISS); hard to read or obfuscated code is difficult to maintain and debug. Don't be too clever; write code to be read.

### Commenting

Don't leave commented out chunks of code in the codebase. It makes the code look unfinished, and can be confusing for other developers.

Be verbose with your comments but ensure:

- Your comments add something to the code, they don't just repeat what is there
- They are kept up to date, if you change something that has been commented, ensure you up date the comment as well
- If code needs extensive commenting, can it be refactored to make it less complex / easier to understand?
- You focus on why rather than how - unless your code is too complex, it should be self documenting

## Naming Convention

### PascalCase

PascalCase for type-related and React-specific constructs.

- React Components
- TypeScript Interfaces
- Type Definitions
- Enum Types

#### React Components Examples

```
// src/components/sections/HeroSection.tsx
export default function HeroSection() {
  return <section>Hero Content</section>;
}
```

#### TypeScript Interfaces Examples

```
// src/types/Product.ts
export interface ProductDetails {
  productId: number;
  productName: string;
  price: number;
}
```

#### Enum Examples

```
// src/types/Roles.ts
export enum UserRole {
  Admin = 'ADMIN',
  Editor = 'EDITOR',
  Viewer = 'VIEWER'
}
```

### camelCase

camelCase for most variables, functions, and file names.

- File names
- Function names
- Variable names
- Utility functions

#### File Name Examples

```
// src/utils/userAuthentication.ts
export const authenticateUser = () => { /* ... */ }

// src/hooks/useUserData.ts
export function useUserData() { /* ... */ }
```

#### Variable Name Examples

```
// Inside a component or function
const userProfile = { name: 'John Doe', age: 30 };
let isLoggedIn = false;
const productList = [];

function processData() {
  const currentUser = getUserInfo();
  const totalItems = calculateItemCount();
}
```

### kebab-case

kebab-case for CSS module and some file naming scenarios.
Utilise BEM's 'Block', 'Element', 'Modifier' methodology.

- CSS/SCSS module files

#### SCSS Examples

```
// src/styles/base/_global.scss
.page-container {
  max-width: 1200px;
  margin: 0 auto;
}
```
