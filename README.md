# Managing multi-brand Design Token System for SaaS applications

This repository contains our design token system that supports multiple brands and platforms across
a single SaaS application. This system allows us to maintain consistent branding while accommodating
platform-specific requirements.

## System Overview

Our design token system supports:

- Multiple brands
  - Default (`_default`)
  - ClearCompany (`cco`)
  - BloominBrands International (`bbi_default`)
  - Bonefish Grill (`bbi-bonefish`)
  - Carraba's Italian Grill (`bbi-carrabas`)
  - Fleming’s Prime Steakhouse & Wine Bar (`bbi-flemings`)
  - Outback Steakhouse (`bbi-outback`)
- Multiple platforms (Web, iOS, Android)
- Shared global tokens across all products

## Project Structure

```
tokens/
├── brands/          # Brand-specific tokens (colors, logos, etc.)
├── platforms/       # Platform-specific tokens (fonts, etc.)
└── globals/         # Shared tokens across all brands/platforms
```

## Getting Started

1. Install dependencies:

```bash
npm install
```

2. Build tokens:

```bash
npm run build
```

The build process will generate platform-specific files in the `build/` directory, organized by
brand.

## How It Works

The build system uses Style Dictionary to generate tokens for each brand/platform combination. Key
features:

- Brand-specific values (e.g., primary colors, logos)
- Platform-specific values (e.g., system fonts)
- Global shared values (e.g., spacing, typography scale)

## Example Token Usage

Brand Colors:

```json
{
  "color": {
    "brand": {
      "primary": { "value": "#0066CC" },
      "secondary": { "value": "#FF4D4D" }
    }
  }
}
```

Platform-Specific Fonts:

```json
{
  "font": {
    "family": {
      "base": { "value": "{font.platform.system.value}" }
    }
  }
}
```

## Build Output

The system generates appropriate format files for each platform:

- Web: SCSS variables and JSON Tokens accorting to the
  [Design Tokens Community Group](https://design-tokens.github.io/community-group/format/) format
  module.
- iOS: Swift constants
- Android: XML resources

### Adding a New Brand

1. Create a new folder in `tokens/brands/[brand-name]`
2. Add brand-specific token files (colors.json, etc.)
3. Update `build.js` to include the new brand name

### Adding a New Platform

1. Create a new folder in `tokens/platforms/[platform-name]`
2. Add platform-specific configurations in `build.js`
3. Define appropriate Style Dictionary formats and transforms

### Need Help?

Contact the Design Systems team for assistance or questions about implementing design tokens in your
application.
