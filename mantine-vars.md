# Mantine CSS Variables Documentation

Mantine provides a robust system of CSS variables that allow for theme customization and dynamic styling. These variables cover colors, typography, spacing, breakpoints, shadows, borders, and more. Below is a structured reference to Mantine's CSS variables, categorized for easy usage.

---

## **1. Colors**
Mantine defines color variables for primary and secondary themes, text, background, and various UI states.

### **Primary Colors**
```css
--mantine-color-primary: #228be6;
--mantine-color-primary-light: #4dabf7;
--mantine-color-primary-dark: #1c7ed6;
```

### **Secondary Colors**
```css
--mantine-color-secondary: #15aabf;
--mantine-color-secondary-light: #3bc9db;
--mantine-color-secondary-dark: #1098ad;
```

### **Text and Background**
```css
--mantine-color-text: #212529;
--mantine-color-text-light: #495057;
--mantine-color-text-dark: #0b0c0d;
--mantine-color-background: #f8f9fa;
--mantine-color-background-dark: #343a40;
```

### **State Colors**
```css
--mantine-color-success: #40c057;
--mantine-color-warning: #f59f00;
--mantine-color-error: #fa5252;
--mantine-color-info: #228be6;
```

---

## **2. Typography**
Mantine uses CSS variables to manage font family, sizes, and weights.

### **Font Family**
```css
--mantine-font-family: 'Inter', sans-serif;
--mantine-font-family-monospace: 'Fira Code', monospace;
```

### **Font Sizes**
```css
--mantine-font-size-xs: 12px;
--mantine-font-size-sm: 14px;
--mantine-font-size-md: 16px;
--mantine-font-size-lg: 18px;
--mantine-font-size-xl: 20px;
--mantine-font-size-xxl: 24px;
```

### **Font Weights**
```css
--mantine-font-weight-light: 300;
--mantine-font-weight-regular: 400;
--mantine-font-weight-medium: 500;
--mantine-font-weight-bold: 700;
```

---

## **3. Spacing and Layout**
Spacing variables define padding and margin values used across components.

### **Spacing Variables**
```css
--mantine-spacing-xs: 4px;
--mantine-spacing-sm: 8px;
--mantine-spacing-md: 16px;
--mantine-spacing-lg: 24px;
--mantine-spacing-xl: 32px;
--mantine-spacing-xxl: 40px;
```

### **Container Widths**
```css
--mantine-container-xs: 540px;
--mantine-container-sm: 720px;
--mantine-container-md: 960px;
--mantine-container-lg: 1140px;
--mantine-container-xl: 1320px;
```

---

## **4. Breakpoints**
Breakpoints define responsive design thresholds.

```css
--mantine-breakpoint-xs: 480px;
--mantine-breakpoint-sm: 768px;
--mantine-breakpoint-md: 1024px;
--mantine-breakpoint-lg: 1280px;
--mantine-breakpoint-xl: 1440px;
```

---

## **5. Borders and Shadows**
Mantine provides consistent variables for borders and shadow effects.

### **Border Radius**
```css
--mantine-radius-xs: 2px;
--mantine-radius-sm: 4px;
--mantine-radius-md: 8px;
--mantine-radius-lg: 12px;
--mantine-radius-xl: 16px;
```

### **Box Shadows**
```css
--mantine-shadow-xs: 0 1px 3px rgba(0, 0, 0, 0.1);
--mantine-shadow-sm: 0 2px 6px rgba(0, 0, 0, 0.15);
--mantine-shadow-md: 0 4px 10px rgba(0, 0, 0, 0.2);
--mantine-shadow-lg: 0 6px 14px rgba(0, 0, 0, 0.25);
--mantine-shadow-xl: 0 8px 18px rgba(0, 0, 0, 0.3);
```

---

## **6. Z-Index Values**
Mantine defines standard z-index values for layers.

```css
--mantine-zindex-dropdown: 1000;
--mantine-zindex-modal: 1300;
--mantine-zindex-tooltip: 1500;
--mantine-zindex-overlay: 1700;
```

---

## **7. Transitions and Animations**
Define global animation properties.

```css
--mantine-transition-fast: 100ms ease-in-out;
--mantine-transition-normal: 200ms ease-in-out;
--mantine-transition-slow: 300ms ease-in-out;
```

---

## **Usage Example**
You can use Mantine's CSS variables in your stylesheets as follows:

```css
.button {
  background-color: var(--mantine-color-primary);
  color: var(--mantine-color-text);
  font-size: var(--mantine-font-size-md);
  border-radius: var(--mantine-radius-md);
  padding: var(--mantine-spacing-md);
  transition: var(--mantine-transition-normal);
}
```

This allows for consistent styling across components and easy theme customization.

---

## **Conclusion**
Mantine CSS variables provide a powerful and flexible way to manage styling, ensuring consistency and ease of customization. By leveraging these variables, developers can create highly maintainable and responsive UI components.
