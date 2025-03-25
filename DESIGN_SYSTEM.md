# Nestor AI Design System

This document outlines the design system implemented for Nestor AI, including design tokens, components, and usage guidelines.

## Overview

The Nestor AI design system provides a consistent set of visual elements, components, and patterns to ensure a cohesive user experience across the application. The design system includes:

1. **Design Tokens**: Foundational variables for colors, typography, spacing, etc.
2. **Core Components**: Reusable UI components with consistent styling and behavior
3. **Usage Guidelines**: Best practices for implementing the design system

## Design Tokens

Design tokens are the visual design atoms of the design system. They're stored as CSS variables in `src/styles/tokens.css`.

### Colors

- **Primary**: Blue-based palette for primary actions and emphasis
- **Secondary**: Green-based palette for secondary actions
- **Accent**: Orange-based palette for highlights and accents
- **Neutral**: Grayscale palette for text, backgrounds, and borders

### Typography

- **Font Family**: Inter as the primary font family
- **Font Sizes**: Range from xs (12px) to 5xl (48px)
- **Font Weights**: normal (400), medium (500), semibold (600), bold (700)
- **Line Heights**: tight (1.25), normal (1.5), relaxed (1.75)

### Spacing

Consistent spacing scale from 1 (4px) to 24 (96px)

### Borders

Border radius options from sm (4px) to full (rounded)

### Shadows

Shadow options from sm to xl for different elevation levels

## Components

The design system includes the following core components:

### Text

A versatile text component that handles all typography needs:

```tsx
<Text variant="h1">Heading 1</Text>
<Text variant="body">Regular text</Text>
<Text variant="caption" color="secondary">Caption text</Text>
```

### Button

Buttons for user interactions:

```tsx
<Button variant="primary">Primary Button</Button>
<Button variant="secondary" size="sm">Small Secondary Button</Button>
<Button variant="outline" leftIcon={<Icon />}>Button with Icon</Button>
```

### Card

Container for grouping related content:

```tsx
<Card variant="default">Default Card</Card>
<Card variant="outlined">Outlined Card</Card>
<Card variant="elevated">Elevated Card</Card>
```

### Badge

Small status indicators:

```tsx
<Badge variant="primary">New</Badge>
<Badge variant="success" rounded>Success</Badge>
```

### Input

Form input elements:

```tsx
<Input label="Name" placeholder="Enter your name" />
<Input 
  label="Email" 
  type="email" 
  helperText="We'll never share your email" 
  leftIcon={<MailIcon />} 
/>
```

### Grid

Layout component for creating grid-based designs:

```tsx
<Grid columns={2} columnsMd={3} columnsLg={4} gap="md">
  <Item />
  <Item />
  <Item />
</Grid>
```

### Container

Wrapper component for consistent content width:

```tsx
<Container size="lg">
  <Content />
</Container>
```

## Implementation

### Adding the Design System to a Project

1. Import the design tokens and base styles in your main CSS file:
   ```css
   @import './styles/tokens.css';
   @import './styles/base.css';
   ```

2. Import and use components from the UI library:
   ```tsx
   import { Button, Card, Text } from '../components/ui';
   ```

### Extending the Design System

When creating new components:

1. Use existing design tokens for consistency
2. Follow the established patterns for props and variants
3. Ensure accessibility is considered from the start
4. Document the component in this guide

## Accessibility Guidelines

- Use semantic HTML elements
- Ensure sufficient color contrast
- Provide text alternatives for non-text content
- Support keyboard navigation
- Use ARIA attributes appropriately

## Design System Demo

A live demo of all components is available at `/design-system` in the application.

## Future Enhancements

- Dark mode support
- Animation and transition standards
- Form validation patterns
- Additional specialized components
- Component testing guidelines
